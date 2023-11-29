import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { getProfileRequest } from "../../axiosHandle/profileHandle";
import { NotificationList } from "../../axiosHandle/userHandle";
import Notification from "../../assets/notification";
import NotificationsOpen from "./notifications";

const options = ["one", "two", "three"];

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

export default function Navbar() {
  const [profile_data, setProfileData] = useState({
    name: "",
    user_id: "",
    email: "",
    mobile: "",
    district_name: "",
  });
  
  useEffect(() => {
    getProfileRequest()
      .then((data) => {
        console.log(" getProfileRequest data", data);
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
        console.error("Error fetching profile:", error);
      });
  }, []);

  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const showNotification=(condition)=>{
    console.log("condition",condition)
    setShowNotifications(condition,showNotifications)
  }

  useEffect(() => {
    NotificationList()
      .then((data) => {
        console.log("data", data);
        setCount(data.count);
        setMessage(data.results.message);
        setDataList(data.results);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  useEffect(() => {
    NotificationList()
      .then((data) => {
        console.log("data", data);
        setCount(data.count);
        setMessage(data.results.message);
        setDataList(data.results);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, [showNotifications]);

  return (
    <>
      <div
        className="nav-header"
        style={{
          height: "70px",
          width: "249px",
          position: "fixed",
          top: "0",
        }}
      >
        <a href="/dashboard" className="brand-logo">
          <img
            src="/bansal_logo.png"
            alt="Bansal Logo"
            width="70"
            height="45"
            style={{ marginLeft: "65px" }}
          />
        </a>
      </div>
      <div
        className="header"
        style={{
          height: "70px",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
        }}
      >
        <div className="header-content" style={{ paddingLeft: "30px" }}>
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left px-4">
                <form>
                  <div className="input-group search-area">
                    {/* <input type="text" className="form-control" placeholder="Search" /> */}
                    {/* <span className="input-group-text">
                                            <button className="bg-transparent border-0">
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8.78605" cy="8.78605" r="8.23951" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14.5168 14.9447L17.7471 18.1667" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </span> */}
                  </div>
                </form>
              </div>
              <ul className="navbar-nav header-right">
                <li className="nav-item dropdown notification_dropdown">
              
                  <div className="dropdown-menu dropdown-menu-end">
                    <div
                      id="DZ_W_Notification1"
                      className="widget-media dz-scroll p-3"
                      style={{ height: "380px" }}
                    >
                      {/* Notification items go here */}
                    </div>
                    <a className="all-notification" href="/">
                      See all notifications <i className="ti-arrow-end"></i>
                    </a>
                  </div>
                </li>
                <div
                  onClick={() => setShowNotifications(true)}
                  style={{ position: "relative", top: "15px" }}
                >
                  <Notification />
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      left: 28,
                      color: "#B1292C",
                      fontSize: 15,
                      backgroundColor: "white",
                      width: 20,
                      textAlign: "center",
                      borderRadius: 50,
                    }}
                  >
                    <span>{count}</span>
                  </div>
                </div>
                <li className="nav-item ps-3">
                  <Dropdown>
                    <Dropdown.Toggle as={CustomToggle}>
                      <a
                        className="nav-link py-3"
                        href="/profile"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="header-info2 d-flex align-items-center">
                          <div className="header-media">
                          {profile_data.name.slice(0,2).toUpperCase()}
                          </div>
                          <div className="header-info">
                            <h6 style={{ color: "#000" }}>
                              {profile_data.name}
                            </h6>
                            <p style={{ color: "#000" }}>
                              {profile_data.email}
                            </p>
                          </div>
                        </div>
                      </a>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <Link to="/profile">Profile </Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <Link to="/login" style={{ color: "#888888" }}>
                          Logout{" "}
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </nav>
          {showNotifications && (
            <NotificationsOpen
              dataList={dataList}
              open={showNotifications}
              setOpen={setShowNotifications}
              showNotification={showNotification}
            />
          )}
        </div>
      </div>
    </>
  );
}
