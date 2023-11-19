import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosHandle/authHandle';

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const [msg, setMsg] = useState(null);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  console.log("showPassword",showPassword)
  const handleLogin = () => {
    try {
      const { email, password } = credentials;

      const data = {
        email,
        password,
      };

      axiosInstance.post('/account/token/', data)
        .then((response) => {
          const { access, refresh } = response.data;
          localStorage.setItem('access_token', access);
          localStorage.setItem('refresh_token', refresh);
          setMsg('Login Successful. Redirecting to Dashboard');
          navigate('/dashboard');
        })
        .catch((error) => {
          console.log(error)
          setError('Login failed. Please check your credentials.');
        });
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="authincation">
      <div>
        <div className="row h-100">
          {/* Remove the parent container */}
          <div className="col-xl-6 col-lg-6 p-0">
            <div
              className="login-image"
              style={{
                backgroundImage: 'url("/login.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'white',
                height: '100%',
                position: 'relative',
              }}
            >
              <img
                src="/bansal_logo.png"
                alt="Bansal Logo"
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  width: '100px',
                  height: 'auto',
                }}
              />
              <h1 style={{ color: 'white' }}>Bansal TMT Sariya Loyalty Management</h1>
              <h4 style={{ color: 'white' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mx-auto align-self-center">
            <div className="login-form">
              <form action="https://w3crm.dexignzone.com/xhtml/index.html">
                <div className="mb-4">
                  <label className="mb-1 text-dark">Log in</label>
                  {error && <p className="text-danger">{error}</p>}
                  {msg && <p className="text-primary">{error}</p>}
                  <input
                    type="text"
                    className="form-control form-control"
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    placeholder="Unique id"
                  />
                </div>
                <div className="mb-4 position-relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="dz-password"
                    className="form-control"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    placeholder="Password"
                  />
                  <span onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}>
                  {showPassword ? (
                   <i class="fa fa-eye" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-eye-slash" />
                  )}
                </span>
                </div>
                <div className="form-row d-flex justify-content-between mt-4 mb-2">
                  {/* Other form elements if needed */}
                </div>
                <div className="text-center mb-4">
                  <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
                    Log In
                  </button>
                </div>
                <div className="mb-4">
                  <a href="/forgotpassword" className="btn-link text-primary" style={{ marginLeft: '280px' }}>
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;