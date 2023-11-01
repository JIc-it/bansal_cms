import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/navbar';
import AllRouting from './components/allRouting';
import SideMenu from './components/common/sideMenu';
import './App.css';
import Login from './components/auth/login';
import ForgotPassword from './components/forgotPassword';

function App() {
  return (
    <div id="app" style={{ display: 'flex', flexDirection: 'column', 
    // marginTop: '60px'
     }}>
      <Routes>
        {/* Define your login route without Navbar and Sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/*"
          element={
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Navbar />
              <SideMenu />
              <AllRouting />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
