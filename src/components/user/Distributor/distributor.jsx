import React, { useState, useEffect } from "react";
import {
  deleteContractorUser,
  getDistributorsRequest,
  getUserStatics,
} from "../../../axiosHandle/userHandle";
import AddNewDistributor from "./AddNewDistributor";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function Distributors() {
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

  const itemsPerPage = 10;

  const handleDelete = (id) => {
    deleteContractorUser(id)
      .then((data) => {
        setIsDistributorAdded(!isDistributorAdded);
        toast.success("Deleted Succefully");
        setOpenRemoveOption(false);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  };

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
        <div className="row">
          <div className="col-xl-9 wid-100">
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
                        <h6>Total Users</h6>
                        <br />
                        <h3>{totalUserCount.total_users}</h3>
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
                    <div className="col-2" style={{ paddingTop: "1.5rem" }}>
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
                      {currentItems && currentItems.length > 0 ? (
                        currentItems.map((data) => (
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
                              <h6>
                                <span>{data.district?.district}</span>,
                                <span>{data.state?.state}</span>
                              </h6>
                            </td>
                            <td>
                              <a
                                className="btn btn-primary btn-sm"
                                href="#"
                                role="button"
                                onClick={() => {
                                  navigate(`/viewDistributor/${data.id}`);
                                }}
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
