import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

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
        &#x25bc;
    </a>
));

const defaultOption = options[0];

export default function Navbar() {

    return (
        <>
            <div className="nav-header" style={{
                height: '70px', width: "249px",
                position: 'fixed',
                top: '0',
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
                height: '70px',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
            }}>
                <div className="header-content" style={{ paddingLeft: '30px' }}>
                    <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                            <div className="header-left px-4">
                                <form>
                                    <div className="input-group search-area" style={{ width: '540px', borderRadius: '2px' }}>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <span className="input-group-text">
                                            <button className="bg-transparent border-0">
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8.78605" cy="8.78605" r="8.23951" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14.5168 14.9447L17.7471 18.1667" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <ul className="navbar-nav header-right">
                                <li className="nav-item dropdown notification_dropdown">
                                    {/* <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" style={{ marginTop: "14px" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a> */}
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3" style={{ height: '380px' }}>
                                            {/* Notification items go here */}
                                        </div>
                                        <a className="all-notification" href="/">See all notifications <i className="ti-arrow-end"></i></a>
                                    </div>
                                </li>
                                <li className="nav-item ps-3">
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle}>
                                            <a className="nav-link py-4" href="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div className="header-info2 d-flex align-items-center">
                                                    <div className="header-media">
                                                        <img src="/assets/images/profile.jpg" alt="" />
                                                    </div>
                                                    <div className="header-info">
                                                        <h6 style={{ color: '#000' }}>Johanna Fleming</h6>
                                                        <p style={{ color: '#000' }}>info@gmail.com</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1"><Link to="/profile">Profile </Link></Dropdown.Item>
                                            <Dropdown.Item href="#/action-2"><Link to="/login" style={{ color: "#888888" }}>Logout </Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

