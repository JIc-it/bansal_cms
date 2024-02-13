import React from 'react'
const CreaateUser = () => {
    return (
        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', position: 'relative', top: '70px' }}>
            <div class="login-containerr">
                <img className='loginLogo' src='/assets/images/bansal_logo.png' />
                <p className='banTxt' >Bansal TMT Sariya
                    Loyalty Management</p>
                <form class="login-formm">
                    <h2>Login</h2>
                    <div class="form-groupp">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div class="form-groupp">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <a href='user-dashboard'>
                        <button type="submit">Login</button>
                    </a>
                </form>
            </div>
        </div>

    )
}

export default CreaateUser
