import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import AdminResetPassword from "./AdminResetPassword";
import EditAdmin from "./EditAdmin";
import {

  adminPermissionViewRequest,
  adminUSerViewOrdersRequest,
  adminUSerViewLeadsRequest,
  getAdminsRequest,
} from "../../../axiosHandle/userHandle";
import TransactionFilterPopUp from "./TransactionFilterPopUp";
import ViewPermission from "./ViewPermission";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import ViewAdminTransaction from "./ViewAdminTransaction";

const ViewAdmin = () => {
  const contextData = useContext(AppContext);
  const { permissionData } = contextData;
  const permissionForUser = permissionData?.user;
  const userDatail = useParams();
  const [userData, setUserData] = useState();
  const [viewTransaction, setViewTransaction] = useState(false);
  const [permissionview, setPermissionView] = useState(false);
  const [openResetPassword, setOpenResetPassword] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [seletedTranasactionType, setSeletedTranasactionType] =
    useState("Orders");
  const [transactionData, setTransactionData] = useState();
  const [totalOrder, setTotalOrder] = useState(0);
  const [transactionFilterOpen, setTransactionFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  const [filterData, setFilterData] = useState({
    role: "",
    status: "",
    points_from: "",
    points_to: "",
    date: "",
  });
  const [search, setSearch] = useState("");
  const [isFilter, setIsFilter] = useState(false);

  const handlefilterdata = (field) => {
    setFilterData((prev) => {
      return {
        ...prev,
        ...field,
      };
    });
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [userDataParam, setUserDataParam] = useState({
    id: queryParams.get("id"),
    user_id: queryParams.get("user_id"),
    name: queryParams.get("name"),
    email: queryParams.get("email"),
    mobile: queryParams.get("mobile"),
    state: queryParams.get("state"),
    district: queryParams.get("district"),
    state_id: queryParams.get("state_id"),
    district_id: queryParams.get("district_id"),
  });

  const handlepassdata = () => {
    setPermissionView(true);
  };

  useEffect(() => {
    getAdminsRequest("")
      .then((data) => {
        let filteredData = data.results.find((item, i) => {
          return item.id === userDataParam.id;
        });
        setUserData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, [isUpdateUser, userDataParam.id]);

  const handleUserOrderData = () => {
    adminUSerViewOrdersRequest(userDataParam.id, search, filterData)
      .then((data) => {
        setTransactionData(data.results);
        setTotalOrder(data.total);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  };

  const handleUserLeadData = () => {
    adminUSerViewLeadsRequest(userDataParam.id, search, filterData)
      .then((data) => {
        setTransactionData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  };

  const [data, setData] = useState();

  useEffect(() => {
    adminPermissionViewRequest(userDataParam.id)
      .then((data) => {
        setData(data?.permission);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, [userDataParam.id, seletedTranasactionType, isUpdateUser]);

  useEffect(() => {
    if (seletedTranasactionType === "Orders") {
      handleUserOrderData();
    } else {
      handleUserLeadData();
    }
  }, [userDataParam.id, seletedTranasactionType, search, isFilter]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const totalPages = Math.ceil(
    transactionData ? transactionData.length / itemsPerPage : 1
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    transactionData && transactionData.length > 0
      ? transactionData.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickTrancationType = (type) => {
    setCurrentPage(1);
    handlefilterdata({
      role: "",
      status: "",
      points_from: "",
      points_to: "",
      date: "",
    });
    setSeletedTranasactionType(type);
    if (type === "Orders") {
      handleUserOrderData();
    } else {
      handleUserLeadData();
    }
  };

  const exportToCSV = () => {
    if (transactionData) {
      const header =
        seletedTranasactionType === "Orders"
          ? [
              "Transaction Id",
              " Name",
              "Role",
              " Unique_id",
              "Date & Time",
              "Points",
              "Quantity",
              "Status",
            ]
          : [
              "Transaction Id",
              " Name",
              "Mobile",
              "Referred By",
              "Date & Time",
              "Points",
              "Quantity",
              "Status",
            ];
      const csvData =
        seletedTranasactionType === "Orders"
          ? transactionData.map((item) => {
              let status =
                item.admin_approval === "Accepted"
                  ? //  &&
                    // item.user_approval === "Accepted"
                    "Accepted"
                  : item.admin_approval === "Rejected"
                  ? // ||
                    //   item.user_approval === "Rejected"
                    "Rejected"
                  : "Processing";
              return [
                item.transaction_id,
                item.user?.name,
                item.user?.role,
                item.user?.user_id,
                item.updated_at,
                item.points,
                item.quantity,
                status,
              ];
            })
          : transactionData.map((item) => {
              let status =
                item.admin_approval === "Accepted"
                  ? //  &&
                    // item.user_approval === "Accepted"
                    "Accepted"
                  : item.admin_approval === "Rejected"
                  ? // ||
                    //   item.user_approval === "Rejected"
                    "Rejected"
                  : "Processing";
              return [
                item.referral_id,
                item.user?.name,
                item.mobile_no,
                item.user?.user_id,
                new Date(item.created_at).toLocaleDateString("en-Us", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                item.points,
                item.order,
                status,
              ];
            });

      const csvContent = [header, ...csvData]
        .map((row) => row.join(","))
        .join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download =
        seletedTranasactionType === "Orders"
          ? "Admin-Order-List.csv"
          : "Admin-Lead-List.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="content-body" style={{ marginLeft: "245px" }}>
      <div className="container">
        <div className="contractor-reset-password">
          <div className="contractor-name">
            Admin/{" "}
            <span style={{ fontWeight: 400, fontSize: "12px" }}>
              {userData && userData.name}
            </span>
          </div>
          <div className="reset-buttons">
            {permissionForUser?.action && (
              <button
                className="btn bg-blue btn-sm"
                type="button"
                id="add-points-button"
                onClick={() => {
                  setOpenResetPassword(true);
                }}
              >
                Reset Password
              </button>
            )}
            {permissionForUser?.update && (
              <button
                className="btn bg-blue btn-sm mx-2"
                type="button"
                id="export-button"
                onClick={() => setOpenEdit(true)}
              >
                Edit Details
              </button>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-12 same-card">
            <div className="card">
              <div className="card-body depostit-card">
                <div className="depostit-card-media justify-content-between style-1">
                  <div className="image-container-contractor">
                    <div className="contractor-image">
                      {/* {userData && userData.name.slice(0, 2)} */}
                      {userData && userData.name.slice(0, 2)}
                    </div>
                  </div>
                  <div className="contractor-name">
                    {userData && userData.name}
                  </div>
                  <div className="contractorid">
                    Admin .
                    <span className="error">
                      {userData && userData.user_id}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9 col-12 same-card">
            <div className="card">
              <div className="card-body depostit-card">
                <div class="user-card-heading"> Details</div>
                <div className="depostit-card-media  style-1">
                  <div className="user-email-details">
                    <div className="user-email-details-property">
                      <span className="fs-6">Email</span>
                      <span className="fs-6">Mobile</span>
                      <span className="fs-6">Location</span>
                      <span className="fs-6 fw-bold">
                        Permissions &nbsp;&nbsp;{" "}
                        <button
                          className="btn bg-blue btn-sm"
                          onClick={() => handlepassdata()}
                        >
                          View
                        </button>
                      </span>
                    </div>
                    <div className="user-email-details-data">
                      <span className="fs-6">{userData && userData.email}</span>
                      <span className="fs-6">
                        {userData && userData.mobile}
                      </span>
                      <span className="fs-6">
                        {userData &&userData.district&& userData.district?.district}
                        {userData&&userData.state&&userData.state?.state && ", "}
                        {userData&&userData.state&& userData.state?.state
                          ? userData.state?.state
                          : "-"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row " style={{ margin: "0 1px" }}>
          <div className="card " style={{ paddingLeft: 0 }}>
            <div className="card-body ">
              <div className="contractor-detail-heading">Transactions</div>
              <div className="col-12 my-4">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    className={`btn btn-sm ${
                      seletedTranasactionType === "Orders"
                        ? "btn-primary"
                        : "btn-light"
                    }`}
                    type="button"
                    id="add-points-button"
                    onClick={() => handleClickTrancationType("Orders")}
                  >
                    Orders
                  </button>
                  <button
                    className={`btn btn-sm ${
                      seletedTranasactionType === "Leads"
                        ? "btn-primary"
                        : "btn-light"
                    }`}
                    type="button"
                    id="add-points-button"
                    style={{ marginLeft: 6 }}
                    onClick={() => handleClickTrancationType("Leads")}
                  >
                    Leads
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-7" style={{ paddingLeft: 0 }}>
                  <div
                    className="input-group mb-3"
                    style={{
                      paddingTop: 15,
                      paddingLeft: 15,
                    }}
                  >
                    <div
                      className="search-group form-control"
                      style={{ maxWidth: 300 }}
                    >
                      <input
                        type="text"
                        className=""
                        style={{ marginRight: 10 }}
                        placeholder="Search..."
                        aria-label="Search..."
                        aria-describedby="search-button"
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
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

                    <button
                      className="px-3 py-2 filter-button"
                      type="button"
                      id="search-button"
                      onClick={() => {
                        setTransactionFilterOpen(!transactionFilterOpen);
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

                    <button
                      className="btn btn-dark mx-1"
                      type="button"
                      onClick={() => {
                        handlefilterdata({
                          role: "",
                          status: "",
                          points_from: "",
                          points_to: "",
                          date: "",
                        });
                        setSearch("");
                        setIsFilter(!isFilter);
                      }}
                    >
                      Clear filter
                    </button>
                  </div>
                  {transactionFilterOpen && (
                    <TransactionFilterPopUp
                      handlefilterdata={handlefilterdata}
                      seletedTranasactionType={seletedTranasactionType}
                      filterData={filterData}
                      setIsFilter={setIsFilter}
                      isFilter={isFilter}
                      setOpenFilter={setTransactionFilterOpen}
                    />
                  )}
                </div>
                <div className="col-5 text-end contractor-grid-button">
                  {permissionForUser?.action && (
                    <button
                      className="btn btn-light btn-sm mx-2"
                      type="button"
                      id="export-button"
                      onClick={exportToCSV}
                    >
                      <i className="fa-solid fa-file-export" /> Export
                    </button>
                  )}
                </div>
              </div>

              {seletedTranasactionType === "Orders" ? (
                <div className="table-responsive  active-projects">
                  <table id="list-tbl" class="table">
                    <thead>
                      <tr>
                        <th>Transaction Id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Unique Id</th>
                        <th>Date & Time</th>
                        <th>Points</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems && currentItems.length > 0 ? (
                        <>
                          {currentItems.map((data, i) => {
                            return (
                              <tr key={`transactionData-${i}`}>
                                <td>
                                  <h6>
                                    {data.transaction_id
                                      ? data.transaction_id
                                      : "-"}
                                  </h6>
                                </td>
                                <td>
                                  <h6>
                                    {data.user.name ? data.user.name : "-"}
                                  </h6>
                                </td>
                                <td>
                                  <h6>
                                    {data.user.role ? data.user.role : "-"}
                                  </h6>
                                </td>
                                <td>
                                  <h6>
                                    {data.user?.user_id
                                      ? data.user?.user_id
                                      : "-"}
                                  </h6>
                                </td>
                                <td>
                                  <h6>
                                    {new Date(
                                      data.updated_at
                                    ).toLocaleDateString("en-Us", {
                                      month: "short",
                                      day: "2-digit",
                                      year: "numeric",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </h6>
                                </td>
                                <td>
                                  <h6>{data.points ? data.points : "-"}</h6>
                                </td>
                                <td>
                                  <h6>{data.quantity ? data.quantity : "-"}</h6>
                                </td>

                                <td>
                                  <button
                                    className={`btn  btn-sm ${
                                      data.admin_approval === "Accepted"
                                        ? // &&
                                          // data.user_approval === "Accepted"
                                          "Accepted-btn"
                                        : data.admin_approval === "Rejected"
                                        ? //  ||
                                          //   data.user_approval === "Rejected"
                                          "Rejected-btn"
                                        : "Processing-btn"
                                    }`}
                                  >
                                    {data.admin_approval === "Accepted"
                                      ? //  &&
                                        // data.user_approval === "Accepted"
                                        "Accepted"
                                      : data.admin_approval === "Rejected"
                                      ? // ||
                                        //   data.user_approval === "Rejected"
                                        "Rejected"
                                      : "Processing"}
                                  </button>
                                </td>
                                <td>
                                  <a
                                    className="btn bg-blue btn-sm"
                                    href="#"
                                    role="button"
                                    onClick={() => {
                                      setData(data);
                                      setViewTransaction(true);
                                    }}
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      ) : (
                        <tr className="text-center">
                          <td colSpan="9">No orders available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="table-responsive  active-projects">
                  <table id="list-tbl" class="table">
                    <thead>
                      <tr>
                        <th>Transaction ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Referred By</th>
                        <th>Date & Time</th>
                        <th>Points</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems && currentItems.length > 0 ? (
                        <>
                          {currentItems.map((ele, i) => {
                            return (
                              <tr key={`transactionData-${i}`}>
                                <td>
                                  <h6>{ele.referral_id}</h6>
                                </td>
                                <td>
                                  <h6>{ele.user?.name}</h6>
                                </td>
                                <td>
                                  <h6>{ele.mobile_no}</h6>
                                </td>
                                <td>
                                  <h6>{ele.user?.user_id}</h6>
                                </td>
                                <td>
                                  <h6>
                                    {new Date(
                                      ele.created_at
                                    ).toLocaleDateString("en-Us", {
                                      month: "short",
                                      day: "2-digit",
                                      year: "numeric",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </h6>
                                </td>
                                <td>
                                  <h6>{ele.points}</h6>
                                </td>
                                <td>
                                  <h6>{ele.order}</h6>
                                </td>

                                <td>
                                  <button
                                    className={`btn  btn-sm ${
                                      ele.admin_approval === "Accepted"
                                        ? //  &&
                                          // ele.user_approval === "Accepted"
                                          "Accepted-btn"
                                        : ele.admin_approval === "Rejected"
                                        ? //  ||
                                          //   ele.user_approval === "Rejected"
                                          "Rejected-btn"
                                        : "Processing-btn"
                                    }`}
                                  >
                                    {ele.admin_approval === "Accepted"
                                      ? // &&
                                        // ele.user_approval === "Accepted"
                                        "Accepted"
                                      : ele.admin_approval === "Rejected"
                                      ? //  ||
                                        //   ele.user_approval === "Rejected"
                                        "Rejected"
                                      : "Processing"}
                                  </button>
                                </td>
                                <td
                                  onClick={() => {
                                    setData(ele);
                                    setViewTransaction(true);
                                  }}
                                >
                                  <a
                                    className="btn bg-blue btn-sm"
                                    href="#"
                                    role="button"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      ) : (
                        <tr>
                          <td colSpan="5">No orders available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
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
          </div>{" "}
        </div>
      </div>
      {viewTransaction && (
        <ViewAdminTransaction
          open={viewTransaction}
          setOpen={setViewTransaction}
          data={data}
          seletedTranasactionType={seletedTranasactionType}
          userData={userDataParam}
        />
      )}
      {permissionview && (
        <ViewPermission
          open={permissionview}
          setOpen={setPermissionView}
          data={data}
        />
      )}

      {openResetPassword && (
        <AdminResetPassword
          open={openResetPassword}
          setOpen={setOpenResetPassword}
          userDatail={userDataParam.id}
        />
      )}
      {openEdit && (
        <EditAdmin
          open={openEdit}
          setOpen={setOpenEdit}
          data={data}
          userdata={userData}
          isUpdateUser={isUpdateUser}
          setIsUpdateUser={setIsUpdateUser}
        
        />
      )}
    </div>
  );
};

export default ViewAdmin;