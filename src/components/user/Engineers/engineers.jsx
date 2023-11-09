import React, { useState, useEffect } from "react";
import {
  deleteContractorUser,
  getEngineersRequest,
} from "../../../axiosHandle/userHandle";
import EngineersFilter from "./EngineersFilter";
import AddNewEngineer from "./AddNewEngineer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function Engineers() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [user_total_data, setUserTotalData] = useState(0);
  const [openFilter, setOpenFilter] = useState(false);
  const [isOpenAddEngineer, setIsOpenAddEngineer] = useState(false);
  const [isEngineerAdded, setIsEngineerAdded] = useState(false);
  const [openRemoveOption, setOpenRemoveOption] = useState(false);
  const [selectedIdForRemove, setSelectedIdForRemove] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getEngineersRequest()
      .then((data) => {
        setUserData(data.results);
        setUserTotalData(data.count);
      })
      .catch((error) => {
        console.error("Error fetching Engineer data:", error);
      });
  }, [isEngineerAdded]);

  const handleDelete = (id) => {
    deleteContractorUser(id)
      .then((data) => {
        setIsEngineerAdded(!isEngineerAdded);
        toast.success("Deleted Succefully");
        setOpenRemoveOption(false);
      })
      .catch((error) => {
        console.error("Error fetching Engineer data:", error);
      });
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

  const exportToCSV = () => {
    if (userData) {
      const header = [
        "Name",
        "Unique ID",
        "Mobile",
        "Location",
        "Leads",
        "Points",
      ];
      const csvData = userData.map((item) => {
        return [item.name, item.user_id, item.mobile, item.district_name];
      });

      const csvContent = [header, ...csvData]
        .map((row) => row.join(","))
        .join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Engineer-List.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="content-body" style={{ width: "82vw", marginLeft: 245 }}>
      {/* row */}
      <div className="container">
        <div className="row">
          <div className="col-xl-12 wid-100">
            <div className="row">
              <div className="col-xl-4 col-sm-7 same-card">
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
              <div className="col-xl-4 col-sm-7 same-card">
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
              <div className="col-xl-4 col-sm-7 same-card">
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
      <div className="row" style={{ marginLeft: "15px" }}>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body ">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Engineers</h4>
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
                          // onChange={(e) => {
                          //   setSearchUserData(e.target.value);
                          // }}
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
                      <button
                        className="btn filter-button"
                        type="button"
                        id="search-button"
                        onClick={() => {
                          setOpenFilter(!openFilter);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.70703 11.6663C9.08774 11.6663 10.207 12.7856 10.207 14.1663C10.207 15.5471 9.08774 16.6663 7.70703 16.6663C6.32632 16.6663 5.20703 15.5471 5.20703 14.1663C5.20703 12.7856 6.32632 11.6663 7.70703 11.6663Z"
                            fill="#525252"
                          />
                          <path
                            d="M11.8737 3.33301C10.493 3.33301 9.3737 4.4523 9.3737 5.83301C9.3737 7.21372 10.493 8.33301 11.8737 8.33301C13.2544 8.33301 14.3737 7.21372 14.3737 5.83301C14.3737 4.4523 13.2544 3.33301 11.8737 3.33301Z"
                            fill="#525252"
                          />
                          <path
                            d="M7.29036 5.17344C7.63554 5.17344 7.91536 5.45326 7.91536 5.79844C7.91536 6.14362 7.63554 6.42344 7.29036 6.42344L1.45703 6.42344C1.11185 6.42344 0.832031 6.14362 0.832031 5.79844C0.832031 5.45326 1.11185 5.17344 1.45703 5.17344H7.29036Z"
                            fill="#525252"
                          />
                          <path
                            d="M12.2904 13.5068C11.9452 13.5068 11.6654 13.7866 11.6654 14.1318C11.6654 14.477 11.9452 14.7568 12.2904 14.7568H18.1237C18.4689 14.7568 18.7487 14.477 18.7487 14.1318C18.7487 13.7866 18.4689 13.5068 18.1237 13.5068H12.2904Z"
                            fill="#525252"
                          />
                          <path
                            d="M0.832031 14.1318C0.832031 13.7866 1.11185 13.5068 1.45703 13.5068H3.1237C3.46888 13.5068 3.7487 13.7866 3.7487 14.1318C3.7487 14.477 3.46888 14.7568 3.1237 14.7568H1.45703C1.11185 14.7568 0.832031 14.477 0.832031 14.1318Z"
                            fill="#525252"
                          />
                          <path
                            d="M18.1237 5.17344C18.4689 5.17344 18.7487 5.45326 18.7487 5.79844C18.7487 6.14362 18.4689 6.42344 18.1237 6.42344L16.457 6.42344C16.1119 6.42344 15.832 6.14362 15.832 5.79844C15.832 5.45326 16.1119 5.17344 16.457 5.17344H18.1237Z"
                            fill="#525252"
                          />
                        </svg>
                      </button>
                    </div>
                    {openFilter && <EngineersFilter />}
                  </div>
                  <div className="col-5 text-end" style={{ paddingTop: "1.5rem" }}>
                    <button
                      className="btn btn-primary btn-sm"
                      type="button"
                      id="add-points-button"
                      onClick={() => {
                        setIsOpenAddEngineer(true);
                      }}
                    >
                      <i className="fa-regular fa-square-plus" /> Add New
                      Contractor
                    </button>
                  </div>
                  <div className="col-2" style={{ paddingTop: "1.5rem" }}>
                    <button
                      className="btn btn-light btn-sm"
                      type="button"
                      id="export-button"
                      onClick={exportToCSV}
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
                      {/* <th>Leads</th>
                        <th>Points</th> */}
                      <th>Action</th>
                      <th> </th>
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
                            <h6>{data.district_name}</h6>
                          </td>
                          <td>
                            <a
                              className="btn btn-primary btn-sm"
                              href="#"
                              role="button"
                              onClick={() => {
                                navigate(`/viewEngineer/${data.id}`);
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
      {isOpenAddEngineer && (
        <AddNewEngineer
          open={isOpenAddEngineer}
          setOpen={setIsOpenAddEngineer}
          setIsEngineerAdded={setIsEngineerAdded}
          isEngineerAdded={isEngineerAdded}
        />
      )}
    </div>
  );
}