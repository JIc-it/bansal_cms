
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutRequest } from '../axiosHandle/authHandle';
import { loginRequest, verifyAccessToken, refreshAccessToken } from '../axiosHandle/authHandle';


const CreaateUser = () => {
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const [msg, setMsg] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        document.getElementById('loginForm').autocomplete = 'off';
        const checkTokens = async () => {
            const existingAccessToken = localStorage.getItem('access_token');
            const existingRefreshToken = localStorage.getItem('refresh_token');

            if (existingAccessToken && existingRefreshToken) {
                const isAccessTokenValid = await verifyAccessToken();

                if (isAccessTokenValid) {
                    navigate('/user-dashboard');
                } else {
                    try {
                        const newAccessToken = await refreshAccessToken();

                        if (newAccessToken) {
                            localStorage.setItem('access_token', newAccessToken);
                            navigate('/user-dashboard');
                        }
                    } catch (refreshError) {
                        const refresh = localStorage.getItem('refresh_token');
                        if (refresh) {
                            const data = { refresh };
                            logoutRequest(data);
                        }
                        localStorage.removeItem('access_token');
                        localStorage.removeItem('refresh_token');
                        console.error('Error refreshing access token:', refreshError);
                    }
                }
            }
        };

        checkTokens();
    }, [navigate]);

    const handleLogin = async () => {
        try {
            const { email, password } = credentials;

            if (email.length > 50) {
                setError('Email must be at most 50 characters.');
                return;
            }

            // Validate password length
            if (password.length > 20) {
                setError('Password must be at most 20 characters.');
                return;
            }

            const data = {
                email,
                password,
            };

            const { access, refresh, role } = await loginRequest(data);

            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            localStorage.setItem('role', role);

            setMsg('Login Successful. Redirecting to user-dashboard');
            navigate('/user-dashboard');
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        }
    };
    return (
        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', position: 'relative', top: '70px' }}>
            <div class="login-containerr">
                <img className='loginLogo' src='/assets/images/bansal_logo.png' />
                <p className='banTxt' >Bansal TMT Sariya
                    Loyalty Management</p>
                {/* <form class="login-formm"> */}
                <form id='loginForm' action="https://w3crm.dexignzone.com/xhtml/index.html" autoComplete="off">
                    <h2>Login</h2>
                    <div class="form-groupp">
                        <label for="username">Username:</label>
                        {/* <input type="text" id="username" name="username" required /> */}
                        <input
                            type="text"
                            className="form-control form-control"
                            value={credentials.email}
                            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            placeholder="Unique id"
                            maxLength={50}
                        />
                    </div>
                    <div class="form-groupp">
                        <label for="password">Password:</label>
                        {/* <input type="password" id="password" name="password" required /> */}
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="dz-password"
                            className="form-control"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            placeholder="Password"
                            maxLength={20}
                        />
                    </div>

                    <button type="button" onClick={handleLogin}>Login</button>

                </form>
            </div>
        </div>

    )
}

export default CreaateUser
