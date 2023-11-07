import React, { useState, useEffect } from "react";
import { getDistributorsRequest } from "../../../axiosHandle/userHandle";
import AddNewDistributor from "./AddNewDistributor";

export default function Distributors() {
  const [user_data, setUserData] = useState(null);
  const [user_total_data, setUserTotalData] = useState(0);
  const [openRemoveOption, setOpenRemoveOption] = useState(false);
  const [selectedIdForRemove, setSelectedIdForRemove] = useState(0);
  const [isOpenAddDistributor, setIsOpenAddDistributor] = useState(false);
  const [isDistributorAdded, setIsDistributorAdded] = useState(false);

  const handleDelete = (id) => {
    console.log("deleted id", id);
    console.log("deleted id state ", selectedIdForRemove);
  };

  useEffect(() => {
    getDistributorsRequest()
      .then((data) => {
        setUserData(data.results);
        setUserTotalData(data.count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  return (
    <div className="content-body" style={{ width: "82vw", marginLeft: 245 }}>
      {/* row */}
      <div className="container">
        <div className="row">
          <div className="col-xl-9 wid-100">
            <div className="row">
              <div className="col-md-4 col-12 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>Total Users</h6>
                        <br />
                        <h3>{user_total_data}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>Total Admins</h6>
                        <br />
                        <h3>12</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>New Admins in current Qtr</h6>
                        <br />
                        <h3>12</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: 0 }}>
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">Admins</h4>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <div
                        className="input-group mb-3"
                        style={{
                          maxWidth: 300,
                          paddingTop: 15,
                          paddingLeft: 15,
                        }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          style={{ marginRight: 10 }}
                          placeholder="Search..."
                          aria-label="Search..."
                          aria-describedby="search-button"
                        />
                        <button
                          className="btn btn-dark"
                          type="button"
                          id="search-button"
                        >
                          <i className="fas fa-filter" />
                        </button>
                      </div>
                    </div>
                    <div className="col-5 text-end">
                      <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        id="add-points-button"
                        onClick={() => {
                          setIsOpenAddDistributor(true);
                        }}
                      >
                        <i className="fa-regular fa-square-plus" /> Add New
                        Distributor
                      </button>
                    </div>
                    <div className="col-2">
                      <button
                        className="btn btn-light btn-sm"
                        type="button"
                        id="export-button"
                      >
                        <i className="fa-solid fa-file-export" /> Export
                      </button>
                    </div>
                  </div>
                  <table id="empoloyees-tblwrapper" className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Unique id</th>
                        <th>Mobile</th>
                        <th>Location</th>
                        <th>Action</th>
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {user_data && user_data.length > 0 ? (
                        user_data.slice(0, 5).map((data) => (
                          <tr key={data.id}>
                            <td>
                              <h6>{data.name}</h6>
                            </td>
                            <td>
                              <h6>{data.user_id}</h6>
                            </td>
                            <td>
                              <h6>{data.mobile}</h6>
                            </td>
                            <td>
                              <h6>{data.district_name}</h6>
                            </td>
                            <td>
                              <a
                                className="btn btn-primary btn-sm"
                                href="#"
                                role="button"
                              >
                                View User
                              </a>
                            </td>
                            <td
                              onClick={() => {
                                setOpenRemoveOption(true);
                                setSelectedIdForRemove(data.id);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M5.83333 9.99967C5.83333 10.9201 5.08714 11.6663 4.16667 11.6663C3.24619 11.6663 2.5 10.9201 2.5 9.99967C2.5 9.0792 3.24619 8.33301 4.16667 8.33301C5.08714 8.33301 5.83333 9.0792 5.83333 9.99967Z"
                                  fill="#0F0F0F"
                                />
                                <path
                                  d="M11.6667 9.99967C11.6667 10.9201 10.9205 11.6663 10 11.6663C9.07952 11.6663 8.33333 10.9201 8.33333 9.99967C8.33333 9.0792 9.07952 8.33301 10 8.33301C10.9205 8.33301 11.6667 9.0792 11.6667 9.99967Z"
                                  fill="#0F0F0F"
                                />
                                <path
                                  d="M17.5 9.99967C17.5 10.9201 16.7538 11.6663 15.8333 11.6663C14.9129 11.6663 14.1667 10.9201 14.1667 9.99967C14.1667 9.0792 14.9129 8.33301 15.8333 8.33301C16.7538 8.33301 17.5 9.0792 17.5 9.99967Z"
                                  fill="#0F0F0F"
                                />
                              </svg>
                              {openRemoveOption &&
                                data.id === selectedIdForRemove && (
                                  <div className="option-container">
                                    <span onClick={() => handleDelete(data.id)}>
                                      Remove
                                    </span>
                                  </div>
                                )}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">No user available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpenAddDistributor && (
        <AddNewDistributor
          open={isOpenAddDistributor}
          setOpen={setIsOpenAddDistributor}
          setIsDistributorAdded={setIsDistributorAdded}
          isDistributorAdded={isDistributorAdded}
        />
      )}
    </div>
  );
}
