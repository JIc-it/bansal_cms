import React, { useState, useEffect } from "react";
import {
  getAdminsRequest,
  getSalePOCCount,
} from "../../../axiosHandle/userHandle";
import UserView from "../userView";
import AddNewAdmin from "./AddNewAdmin";
import { useNavigate } from "react-router";
import { AppContext } from "../../../contexts/AppContext";
import { useContext } from "react";
function Admins() {
  const contextData = useContext(AppContext);
  const { permissionData } = contextData;
  const permissionForUser = permissionData?.users;
  const navigate = useNavigate();
  const [user_data, setUserData] = useState(null);
  const [user_total_data, setUserTotalData] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpenAddAdmin, setIsOpenAddAdmin] = useState(false);
  const [isAdminAdded, setIsAdminAdded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [new_users_in_current_quarter, setnew_users_in_current_quarter] =
    useState("");
  const [total_users, settotal_users] = useState("");
  const [user_type_total, setuser_type_total] = useState("");
  const handleViewClick = (data) => {
    console.log(data);
    setSelectedUser(data);
  };
  const [pagination, setPagination] = useState({
    next: null,
    previous: null,
  });

  const handlePaginationClick = (url) => {
    getAdminsRequest(null, url)
      .then(({ results, next, previous }) => {
        setUserData(results);
        setPagination({ next, previous });
      })
      .catch((error) => {
        // Handle error
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAdminsRequest(searchValue); // Assuming getAdminsRequest accepts a search parameter
        setUserData(data.results);
        setUserTotalData(data.count);
        setPagination({ next: data.next, previous: data.previous });
      } catch (error) {
        console.error("Error fetching distributor data:", error);
      }
    };

    fetchData();
  }, [searchValue]);
  useEffect(() => {
    getSalePOCCount("Admin")
      .then((data) => {
        console.log("getSalePOCCount data", data);
        setnew_users_in_current_quarter(data.new_users_in_current_quarter);
        settotal_users(data.total_users);
        setuser_type_total(data.user_type_total);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);
  const exportToCSV = () => {
    if (user_data) {
      const header = ["Name", "Unique ID", "Mobile", "District", "State"];
      const csvData = user_data.map((rr_data) => {
        return [
          rr_data.name,
          rr_data.user_id,
          rr_data.mobile,
          rr_data.district?.district,
          rr_data.state?.state,
        ];
      });

      const csvContent = [header, ...csvData]
        .map((row) => row.join(","))
        .join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Admins.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  // const handleViewAdmin = (id) => {
  //   navigate(`/viewadmin/${id}`);
  // };
  const handleViewAdmin = (data) => {
    // Convert the data object to a query string
    console.log(data);
    const data_value = {
      id: data.id ? data.id : "",
      user_id: data.user_id ? data.user_id : "",
      name: data.name ? data.name : "",
      email: data.email ? data.email : "",
      mobile: data.mobile ? data.mobile : "",
      state: data.state?.state ? data.state?.state : "",
      district: data.district?.district ? data.district?.district : "",
      state_id: data.state?.id ? data.state?.id : "",
      district_id: data.district?.id ? data.district?.id : "",
    };
    console.log(data_value);
    const queryString = Object.keys(data_value)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(data_value[key])}`
      )
      .join("&");

    navigate(`/viewadmin?${queryString}`);
  };

  return (
    <div className="content-body" style={{ width: "82vw", marginLeft: 245 }}>
      {/* row */}
      <div className="container">
        <div className="row" style={{ marginLeft: "5px" }}>
          <div className="col-xl-12 wid-100">
            <div className="row">
              <div className="col-xl-4 col-sm-7 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>Total Admins</h6>
                        <br />
                        <h3>{user_type_total}</h3>
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
                        <h3>{new_users_in_current_quarter}</h3>
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
                        <h6>Total Users</h6>
                        <br />
                        <h3>{total_users}</h3>
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
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Admins</h4>
                </div>
                <div className="row">
                  <div className="col-5">
                    <div
                      className="input-group mb-3"
                      style={{ maxWidth: 300, paddingTop: 15, paddingLeft: 15 }}
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
                            const inputValue = e.target.value;
                            setSearchValue(inputValue);
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
                      {/* <button
                        className="btn btn-dark"
                        type="button"
                        id="search-button"
                      >
                        <i className="fas fa-filter" />
                      </button> */}
                    </div>
                  </div>
                  <div className="col-5 text-end">
                    {/* <button className="btn btn-primary btn-sm" type="button" id="add-points-button"><i className="fa-regular fa-square-plus" /> Add New Contractor</button> */}
                    {permissionForUser?.create && (
                      <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        id="add-points-button"
                        onClick={() => {
                          setIsOpenAddAdmin(true);
                        }}
                      >
                        <i className="fa-regular fa-square-plus" /> Add New
                        Admin
                      </button>
                    )}
                  </div>
                  <div className="col-2">
                  { permissionForUser?.action && <button
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
                    </button>}
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
                    { permissionForUser?.delete && <th />}
                      {/* <th /> */}
                    </tr>
                  </thead>
                  <tbody>
                    {user_data && user_data.length > 0 ? (
                      user_data.map((data) => (
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
                              {data.district?.district}, {data.state?.state}
                            </h6>
                          </td>
                          <td onClick={() => handleViewAdmin(data)}>
                            <a
                              className="btn bg-blue btn-sm"
                              href="#"
                              role="button"
                            >
                              View User
                            </a>
                          </td>
                         {/* {permissionForUser?.delete && <td></td>} */}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">No user available</td>
                      </tr>
                    )}
                    {user_data && user_data.length > 0 && (
                      <tr>
                        <td colSpan="5">
                          {/* Pagination controls */}
                          <button
                            className="btn btn-light btn-sm"
                            onClick={() =>
                              handlePaginationClick(pagination.previous)
                            }
                            disabled={!pagination.previous}
                            style={{ marginRight: "10px" }}
                          >
                            Previous
                          </button>
                          <button
                            className="btn btn-light btn-sm"
                            onClick={() =>
                              handlePaginationClick(pagination.next)
                            }
                            disabled={!pagination.next}
                          >
                            Next
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {selectedUser && <UserView data={selectedUser} open_view={true} />} */}
      {isOpenAddAdmin && (
        <AddNewAdmin
          setIsAdminAdded={setIsAdminAdded}
          isAdminAdded={isAdminAdded}
          setOpen={setIsOpenAddAdmin}
          open={isOpenAddAdmin}
        />
      )}
    </div>
  );
}

export default Admins;
