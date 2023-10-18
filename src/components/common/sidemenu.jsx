function SideMenu() {
    return (
        <div className="deznav">
            <div className="deznav-scroll">
                <ul className="metismenu" id="menu">
                    <li>
                        <a href="index.html" className="" aria-expanded="true">
                            <div className="menu-icon">
                                <i className="fa fa-tachometer fa-lg" aria-hidden="true"></i>
                            </div>
                            <span className="nav-text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a className="has-arrow" href="/" aria-expanded="true">
                            <div className="menu-icon">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* SVG path code for the arrow */}
                                </svg>
                            </div>
                            <span className="nav-text">Requests</span>
                        </a>
                        <ul aria-expanded="true">
                            <li><a href="task.html">Orders</a></li>
                            <li><a href="task.html">Leads</a></li>
                        </ul>
                    </li>
                    {/* Repeat the above structure for other menu items */}
                    {/* ... */}
                    <li>
                        <a href="performance.html" className="" aria-expanded="true">
                            <div className="menu-icon">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* SVG path code for the performance icon */}
                                </svg>
                            </div>
                            <span className="nav-text">Promotions</span>
                        </a>
                    </li>
                </ul>
                <div className="help-desk text-center">
                    <a href="/" className="btn btn-primary">
                        Help Desk
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
