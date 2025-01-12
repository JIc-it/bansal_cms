import { flexbox } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getProfileRequest } from "../../axiosHandle/profileHandle";
import { getUserStatics } from "../../axiosHandle/userHandle";
import { getUserArchitects } from "../../axiosHandle/userHandle";
import { getUserEngg } from "../../axiosHandle/userHandle";
import { getUserDistributor } from "../../axiosHandle/userHandle";
import { Link } from "react-router-dom";
const UserDashboard = () => {
  const [profile_data, setProfileData] = useState({
    name: "",
    user_id: "",
    email: "",
    mobile: "",
    district_name: "",
  });

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [totalUserCount, setTotalUserCount] = useState(0);
  const [totalArchiectCount, setTotalArchiectCount] = useState(0);
  const [totalEnggCount, setTotalEnggCount] = useState(0);
  const [totalDistributorCount, setTotalDistributorCount] = useState(0);

  useEffect(() => {
    getUserStatics("Contractor")
      .then((data) => {
        console.log(data);
        setTotalUserCount(data);
      })
      .catch((error) => {
        console.error("Error fetching  data:", error);
      });
  }, []);

  useEffect(() => {
    getUserEngg("Architect")
      .then((data) => {
        console.log(data);
        setTotalArchiectCount(data);
      })
      .catch((error) => {
        console.error("Error fetching Architect data:", error);
      });
  }, []);

  useEffect(() => {
    getUserEngg("Engineer")
      .then((data) => {
        console.log(data);
        setTotalEnggCount(data);
      })
      .catch((error) => {
        console.error("Error fetching  data:", error);
      });
  }, []);

  useEffect(() => {
    getUserDistributor("Distributor")
      .then((data) => {
        console.log(data);
        setTotalDistributorCount(data);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

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

  const handleLogout = () => {
    // Implement your logout logic here
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    // Implement logout confirmation action
    // For example: Redirect to logout endpoint
    setShowLogoutModal(false);
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <div>
      <div className="row" style={{ display: "flex", padding: 10 }}>
        <div className="col-sm-2">
          <p>Welcome</p>
          <h5 style={{ position: "relative", bottom: 15 }}>
            {profile_data.name}
          </h5>
          <svg
            width="32"
            height="40"
            viewBox="0 0 32 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "relative",
              bottom: 55,
              left: 310,
              cursor: "pointer",
            }}
            onClick={handleLogout}
          >
            <path
              opacity="0.6"
              d="M21.875 2.25H20.75C17.568 2.25 15.977 2.25 14.9885 3.23851C14 4.22703 14 5.81802 14 9V18C14 21.182 14 22.773 14.9885 23.7615C15.977 24.75 17.568 24.75 20.75 24.75H21.875C25.057 24.75 26.648 24.75 27.6365 23.7615C28.625 22.773 28.625 21.182 28.625 18V9C28.625 5.81802 28.625 4.22703 27.6365 3.23851C26.648 2.25 25.057 2.25 21.875 2.25Z"
              fill="#B1292C"
            />
            <path
              opacity="0.4"
              d="M14 9C14 7.2703 14 6.01073 14.1588 5.0625H14C11.3483 5.0625 10.0225 5.0625 9.19876 5.88626C8.375 6.71002 8.375 8.03585 8.375 10.6875V16.3125C8.375 18.9642 8.375 20.29 9.19876 21.1137C10.0225 21.9375 11.3483 21.9375 14 21.9375H14.1588C14 20.9893 14 19.7297 14 18V14.3438V12.6562V9Z"
              fill="#B1292C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0284 12.9034C9.69887 13.2329 9.69887 13.7671 10.0284 14.0966L12.2784 16.3466C12.6079 16.6761 13.1421 16.6761 13.4716 16.3466C13.8011 16.0171 13.8011 15.4829 13.4716 15.1534L12.662 14.3438L20.75 14.3437C21.216 14.3437 21.5938 13.966 21.5938 13.5C21.5938 13.034 21.216 12.6562 20.75 12.6562L12.662 12.6562L13.4716 11.8466C13.8011 11.5171 13.8011 10.9829 13.4716 10.6534C13.1421 10.3239 12.6079 10.3239 12.2784 10.6534L10.0284 12.9034Z"
              fill="#B1292C"
            />
            <path
              d="M1.344 32.408H3.296V33H0.616V27.424H1.344V32.408ZM5.98113 33.072C5.57046 33.072 5.19713 32.9787 4.86113 32.792C4.53046 32.6053 4.26913 32.3413 4.07713 32C3.89046 31.6533 3.79713 31.2533 3.79713 30.8C3.79713 30.352 3.89313 29.9573 4.08513 29.616C4.28246 29.2693 4.54913 29.0053 4.88513 28.824C5.22113 28.6373 5.59713 28.544 6.01313 28.544C6.42913 28.544 6.80513 28.6373 7.14113 28.824C7.47713 29.0053 7.74113 29.2667 7.93313 29.608C8.13046 29.9493 8.22913 30.3467 8.22913 30.8C8.22913 31.2533 8.12779 31.6533 7.92513 32C7.72779 32.3413 7.45846 32.6053 7.11713 32.792C6.77579 32.9787 6.39713 33.072 5.98113 33.072ZM5.98113 32.432C6.24246 32.432 6.48779 32.3707 6.71713 32.248C6.94646 32.1253 7.13046 31.9413 7.26913 31.696C7.41313 31.4507 7.48513 31.152 7.48513 30.8C7.48513 30.448 7.41579 30.1493 7.27713 29.904C7.13846 29.6587 6.95713 29.4773 6.73313 29.36C6.50913 29.2373 6.26646 29.176 6.00513 29.176C5.73846 29.176 5.49313 29.2373 5.26913 29.36C5.05046 29.4773 4.87446 29.6587 4.74113 29.904C4.60779 30.1493 4.54113 30.448 4.54113 30.8C4.54113 31.1573 4.60513 31.4587 4.73313 31.704C4.86646 31.9493 5.04246 32.1333 5.26113 32.256C5.47979 32.3733 5.71979 32.432 5.98113 32.432ZM10.9943 28.544C11.373 28.544 11.7036 28.6267 11.9863 28.792C12.2743 28.9573 12.4876 29.1653 12.6263 29.416V28.616H13.3623V33.096C13.3623 33.496 13.277 33.8507 13.1063 34.16C12.9356 34.4747 12.6903 34.72 12.3703 34.896C12.0556 35.072 11.6876 35.16 11.2663 35.16C10.6903 35.16 10.2103 35.024 9.82631 34.752C9.44231 34.48 9.21565 34.1093 9.14631 33.64H9.86631C9.94631 33.9067 10.1116 34.12 10.3623 34.28C10.613 34.4453 10.9143 34.528 11.2663 34.528C11.6663 34.528 11.9916 34.4027 12.2423 34.152C12.4983 33.9013 12.6263 33.5493 12.6263 33.096V32.176C12.4823 32.432 12.269 32.6453 11.9863 32.816C11.7036 32.9867 11.373 33.072 10.9943 33.072C10.605 33.072 10.2503 32.976 9.93031 32.784C9.61565 32.592 9.36765 32.3227 9.18631 31.976C9.00498 31.6293 8.91431 31.2347 8.91431 30.792C8.91431 30.344 9.00498 29.952 9.18631 29.616C9.36765 29.2747 9.61565 29.0107 9.93031 28.824C10.2503 28.6373 10.605 28.544 10.9943 28.544ZM12.6263 30.8C12.6263 30.4693 12.5596 30.1813 12.4263 29.936C12.293 29.6907 12.1116 29.504 11.8823 29.376C11.6583 29.2427 11.4103 29.176 11.1383 29.176C10.8663 29.176 10.6183 29.24 10.3943 29.368C10.1703 29.496 9.99165 29.6827 9.85831 29.928C9.72498 30.1733 9.65831 30.4613 9.65831 30.792C9.65831 31.128 9.72498 31.4213 9.85831 31.672C9.99165 31.9173 10.1703 32.1067 10.3943 32.24C10.6183 32.368 10.8663 32.432 11.1383 32.432C11.4103 32.432 11.6583 32.368 11.8823 32.24C12.1116 32.1067 12.293 31.9173 12.4263 31.672C12.5596 31.4213 12.6263 31.1307 12.6263 30.8ZM19.2534 33.056C18.736 33.056 18.264 32.936 17.8374 32.696C17.4107 32.4507 17.072 32.112 16.8214 31.68C16.576 31.2427 16.4534 30.752 16.4534 30.208C16.4534 29.664 16.576 29.176 16.8214 28.744C17.072 28.3067 17.4107 27.968 17.8374 27.728C18.264 27.4827 18.736 27.36 19.2534 27.36C19.776 27.36 20.2507 27.4827 20.6774 27.728C21.104 27.968 21.44 28.304 21.6854 28.736C21.9307 29.168 22.0534 29.6587 22.0534 30.208C22.0534 30.7573 21.9307 31.248 21.6854 31.68C21.44 32.112 21.104 32.4507 20.6774 32.696C20.2507 32.936 19.776 33.056 19.2534 33.056ZM19.2534 32.424C19.6427 32.424 19.992 32.3333 20.3014 32.152C20.616 31.9707 20.8614 31.712 21.0374 31.376C21.2187 31.04 21.3094 30.6507 21.3094 30.208C21.3094 29.76 21.2187 29.3707 21.0374 29.04C20.8614 28.704 20.6187 28.4453 20.3094 28.264C20 28.0827 19.648 27.992 19.2534 27.992C18.8587 27.992 18.5067 28.0827 18.1974 28.264C17.888 28.4453 17.6427 28.704 17.4614 29.04C17.2854 29.3707 17.1974 29.76 17.1974 30.208C17.1974 30.6507 17.2854 31.04 17.4614 31.376C17.6427 31.712 17.888 31.9707 18.1974 32.152C18.512 32.3333 18.864 32.424 19.2534 32.424ZM26.9024 28.616V33H26.1744V32.352C26.0358 32.576 25.8411 32.752 25.5904 32.88C25.3451 33.0027 25.0731 33.064 24.7744 33.064C24.4331 33.064 24.1264 32.9947 23.8544 32.856C23.5824 32.712 23.3664 32.4987 23.2064 32.216C23.0518 31.9333 22.9744 31.5893 22.9744 31.184V28.616H23.6944V31.088C23.6944 31.52 23.8038 31.8533 24.0224 32.088C24.2411 32.3173 24.5398 32.432 24.9184 32.432C25.3078 32.432 25.6144 32.312 25.8384 32.072C26.0624 31.832 26.1744 31.4827 26.1744 31.024V28.616H26.9024ZM29.0196 29.216V31.8C29.0196 32.0133 29.065 32.1653 29.1556 32.256C29.2463 32.3413 29.4036 32.384 29.6276 32.384H30.1636V33H29.5076C29.1023 33 28.7983 32.9067 28.5956 32.72C28.393 32.5333 28.2916 32.2267 28.2916 31.8V29.216H27.7236V28.616H28.2916V27.512H29.0196V28.616H30.1636V29.216H29.0196Z"
              fill="#393939"
            />
          </svg>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 wid-100">
          <div
            className="row"
            style={{ padding: "10px", position: "relative", bottom: 60 }}
          >
            <div className="col-xl-3 col-sm-6 same-card">
              <div className="card">
                <div className="card-body depostit-card">
                  <div className="depostit-card-media d-flex justify-content-between style-1">
                    <div>
                      <h6>Total Contractors</h6>
                      <br />
                      <h3>{totalUserCount.user_type_total}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 same-card">
              <div className="card">
                <div className="card-body depostit-card">
                  <div className="depostit-card-media d-flex justify-content-between style-1">
                    <div>
                      <h6>Total Engineers</h6>
                      <br />
                      <h3>{totalEnggCount.user_type_total}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 same-card">
              <div className="card">
                <div className="card-body depostit-card">
                  <div className="depostit-card-media d-flex justify-content-between style-1">
                    <div>
                      <h6>Total Architects</h6>
                      <br />
                      <h3>{totalArchiectCount.user_type_total}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 same-card">
              <div className="card">
                <div className="card-body depostit-card">
                  <div className="depostit-card-media d-flex justify-content-between style-1">
                    <div>
                      <h6>Total Distributors</h6>
                      <br />
                      <h3>{totalDistributorCount.user_type_total}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="col-8 text-end" style={{ paddingTop: "1.5rem" }}>
            <button
              className="btn btn-primary btn-sm"
              type="button"
              id="add-points-button"
              // onClick={handleAddUser}
            >
              {/* <i className="fa-regular fa-square-plus" /> Add New
                            User */}
              <Link to="/create-new-user" style={{ color: "white" }}>
                <i className="fa-regular fa-square-plus" /> Add New User
              </Link>
            </button>
          </div>
        </div>
      </div>
      {showLogoutModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content modelCss">
              <div className="modal-body">
                <h5 className="modal-title">Logout Confirmation</h5>
                <p>Are you sure you want to logout?</p>
              </div>
              <div
                className="modal-footer"
                style={{ justifyContent: "flex-end" }}
              >
                <button
                  type="button"
                  className="btn btn-secondary btn-sm me-2"
                  onClick={handleLogoutCancel}
                  style={{ width: "80px" }}
                >
                  No
                </button>
                <Link to="/create-user">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={handleLogoutConfirm}
                    style={{ width: "80px" }}
                  >
                    Yes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
