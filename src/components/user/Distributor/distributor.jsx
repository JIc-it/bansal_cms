import React, { useState, useEffect } from "react";
import {
  adminUserDisableEnable,
  deleteContractorUser,
  getDistributorsRequest,
  getUserStatics,
  getActiveUsers
} from "../../../axiosHandle/userHandle";
import AddNewDistributor from "./AddNewDistributor";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AppContext } from "../../../contexts/AppContext";
import { useContext } from "react";

export default function Distributors() {
  const contextData = useContext(AppContext);
  const { permissionData } = contextData;
  const permissionForUser = permissionData?.user;
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [user_total_data, setUserTotalData] = useState(0);
  const [openRemoveOption, setOpenRemoveOption] = useState(false);
  const [selectedIdForRemove, setSelectedIdForRemove] = useState(0);
  const [isOpenAddDistributor, setIsOpenAddDistributor] = useState(false);
  const [isDistributorAdded, setIsDistributorAdded] = useState(false);
  const [totalUserCount, setTotalUserCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchUserData, setSearchUserData] = useState("");
  const [activeUserCount, setActiveUserCount] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    getActiveUsers("Distributor")
      .then((data) => {
        console.log(data?.active_users);
        setActiveUserCount(data?.active_users_based_on_role);
      })
      .catch((error) => {
        console.error("Error fetching  data:", error);
      });
  }, [isDistributorAdded]);

  useEffect(() => {
    getUserStatics("Distributor")
      .then((data) => {
        console.log(data);
        setTotalUserCount(data);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  useEffect(() => {
    getDistributorsRequest(searchUserData)
      .then((data) => {
        setUserData(data.results);
        setUserTotalData(data.count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, [isDistributorAdded, searchUserData]);

  const exportToCSV = () => {
    if (userData) {
      const header = ["Name", "Unique ID", "Mobile", "Location"];
      const csvData = userData.map((item) => {
        return [
          item.district_name,
          item.user_id,
          item.mobile,
          item.district_name,
        ];
      });

      const csvContent = [header, ...csvData]
        .map((row) => row.join(","))
        .join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Distributor-List.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const totalPages = Math.ceil(userData ? userData.length / itemsPerPage : 1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData
    ? userData.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="content-body" style={{ width: "82vw", marginLeft: 245 }}>
      {/* row */}
      <div className="container">
        <div className="row" style={{ position: "relative", left: "15px" }}>
          <div className="col-xl-12 wid-100">
            <div className="row">
              <div className="col-md-4 col-12 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>Total Distributors</h6>
                        <br />
                        <h3>{totalUserCount.user_type_total}</h3>
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
                        <h6>New Distributors in current Qtr</h6>
                        <br />
                        <h3>{totalUserCount.new_users_in_current_quarter}</h3>
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
                        <h6>Active Distributors</h6>
                        <br />
                        <h3>{activeUserCount}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginLeft: "15px", marginTop: "0" }}>
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">Distributors</h4>
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
                        <div className="search-group form-control">
                          <input
                            type="text"
                            className=""
                            style={{ marginRight: 10 }}
                            placeholder="Search..."
                            aria-label="Search..."
                            aria-describedby="search-button"
                            onChange={(e) => {
                              setSearchUserData(e.target.value);
                            }}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.58342 2.29199C5.55634 2.29199 2.29175 5.55658 2.29175 9.58366C2.29175 13.6107 5.55634 16.8753 9.58342 16.8753C13.6105 16.8753 16.8751 13.6107 16.8751 9.58366C16.8751 5.55658 13.6105 2.29199 9.58342 2.29199ZM1.04175 9.58366C1.04175 4.86623 4.86598 1.04199 9.58342 1.04199C14.3008 1.04199 18.1251 4.86623 18.1251 9.58366C18.1251 11.7174 17.3427 13.6684 16.0491 15.1655L18.7754 17.8917C19.0194 18.1358 19.0194 18.5315 18.7754 18.7756C18.5313 19.0197 18.1356 19.0197 17.8915 18.7756L15.1653 16.0494C13.6682 17.3429 11.7172 18.1253 9.58342 18.1253C4.86598 18.1253 1.04175 14.3011 1.04175 9.58366Z"
                              fill="#525252"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-5 text-end"
                      style={{ paddingTop: "1.5rem" }}
                    >
                      {permissionForUser?.create && (
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
                      )}
                    </div>
                    <div className="col-2" style={{ paddingTop: "1.5rem" }}>
                      {permissionForUser?.action && (
                        <button
                          className="btn btn-light btn-sm"
                          type="button"
                          id="export-button"
                          onClick={exportToCSV}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M3.33366 10C3.33366 13.6819 6.31843 16.6667 10.0003 16.6667C13.6822 16.6667 16.667 13.6819 16.667 10"
                              stroke="#0F0F0F"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                            <path
                              d="M10 11.6663L10 3.33301M10 3.33301L12.5 5.83301M10 3.33301L7.5 5.83301"
                              stroke="#0F0F0F"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>{" "}
                          Export
                        </button>
                      )}
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
                        {/* <th /> */}
                        {permissionForUser?.delete && <th />}
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems && currentItems.length > 0 ? (
                        currentItems.map((data, index) => (
                          <tr key={data.id}>
                            <td className={data.is_delete && "disabled-row"}>
                              <h6>{data.name}</h6>
                            </td>
                            <td className={data.is_delete && "disabled-row"}>
                              <h6>{data.user_id}</h6>
                            </td>
                            <td className={data.is_delete && "disabled-row"}>
                              <h6>{data.mobile}</h6>
                            </td>
                            <td className={data.is_delete && "disabled-row"}>
                              <h6>
                                <span>{data.district?.district}</span>,
                                <span>{data.state?.state}</span>
                              </h6>
                            </td>
                            <td
                              style={{ width: 100, paddingRight: 0 }}
                              className={data.is_delete && "disabled-row"}
                            >
                              <a
                                className="btn bg-blue btn-sm"
                                href="#"
                                role="button"
                                onClick={() => {
                                  navigate(`/viewDistributor/${data.id}`);
                                }}
                              >
                                View User
                              </a>
                            </td>
                            {permissionForUser?.delete && (
                              <td
                                className={`card-footer ${
                                  data.is_delete && "disabled-row"
                                }`}
                              >{data.is_delete?"Inactive":"Active"}
                                {" "}
                                <div
                                  className=" form-switch"
                                  style={{
                                    display: "inline-block",
                                  }}
                                >
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`activationToggle-${index}`}
                                    name={`activationToggle-${index}`}
                                    checked={!data.is_delete}
                                    style={{cursor: "pointer"}}
                                    onChange={(e) => {
                                      adminUserDisableEnable(
                                        data.id,
                                        !data.is_delete
                                      )
                                        .then((data) => {
                                          console.log("active data", data);
                                          setIsDistributorAdded(
                                            !isDistributorAdded
                                          );
                                        })
                                        .catch((error) => {
                                          console.error(
                                            "Error fetching distributor data:",
                                            error
                                          );
                                        });
                                    }}
                                  />
                                  {/* <label
                                    className={`form-check-label ${
                                      data.is_delete
                                        ? " success-color mx-3"
                                        : "error-color mx-2"
                                    }`}
                                    htmlFor={`activationToggle-${index}`}
                                  >
                                    {`${
                                      data.is_delete ? " Active" : " In Active"
                                    }`}
                                  </label> */}
                                </div>
                              </td>
                             )}
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
                <div className="col-12 my-2">
                  <div className="btn-group" style={{ float: "right" }}>
                    <button
                      className="btn btn-light btn-sm"
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-light btn-sm"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
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
