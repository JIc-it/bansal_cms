import React, { useEffect, useState } from 'react';
import { getProfileRequest } from '../../axiosHandle/profileHandle';

const options = [
    'one', 'two', 'three'
];


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        {/* &#x25bc; */}
    </a>
));

const defaultOption = options[0];

export default function Footer() {
    const [profile_data, setProfileData] = useState({
        name: '',
        user_id: '',
        email: '',
        mobile: '',
        district_name:'',
      });
      console.log("profile_data",profile_data)
    useEffect(() => {
        getProfileRequest()
          .then((data) => {
            console.log(" getProfileRequest data",data)
            setProfileData((prevData) => ({
              ...prevData,
              name: data.name,
              user_id: data.user_id,
              email: data.email,
              mobile: data.mobile,
              district_name: data.district,
            }));
          })
          .catch((error) => {
            console.error('Error fetching profile:', error);
          });
      }, []);

    return (
        <>
            <div className="nav-header" style={{
                height: '70px', width: "249px",
                position: 'fixed',
                bottom: '0',
            }}>
                <a href="/dashboard" className="brand-logo">
                    <img
                        src="/bansal_logo.png"
                        alt="Bansal Logo"
                        width="70"
                        height="45"
                        style={{ marginLeft: '65px' }}
                    />
                </a>
            </div>
            <div className="header" style={{
                height: '30px',
                position: 'fixed',
                bottom: '0',
                left: '0',
                right: '0',
            }}>
                <div className="header-content" style={{ paddingLeft: '30px' }}>
                    <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                            <div className="header-left px-4">
                             <p style={{position: 'relative', left: '1070px', fontSize: '14px', fontWeight: '500', top: '10px'}}>Powered BY <a href='https://www.jicitsolution.com/' target='_blank' style={{fontSize: '14px', fontWeight: '500'}}>JIC It Solution</a> </p>
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

