import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your login logic here

    // If login is successful, navigate to the dashboard
    navigate('/');
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
          <div className="col-lg-6 col-md-12 col-sm-12 mx-auto align-self-center">
            <div className="login-form">
              <form action="https://w3crm.dexignzone.com/xhtml/index.html">
                <h5>Please Connect with the Super admin to reset password</h5>
              <label className="mb-1 text-dark">Click to go back and try again</label>
              <div className="text-center mb-4">
                <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>Back to Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
