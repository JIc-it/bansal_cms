import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import {
  getEngineersRequest,
  getUserLeads,
  getUserOrders,
  getUserRedemptionData,
  getUserOrdersCounts,
  getUserPointsCounts,
  getUserLeadsCounts,
} from "../../../axiosHandle/userHandle";
import ResetEngineerPassword from "./ResetEngineerPassword";
import EditEngineer from "./EditEngineer";
import ViewTransactionDetails from "./ViewTransactionDetails";
import AddPointsPopUP from "./AddPointsPopUP";
import EngineerFilterPopUP from "./EngineerFilterPopUP";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

const ViewEngineerDetails = () => {
  const contextData = useContext(AppContext);
  const { permissionData } = contextData;
  const permissionForUser = permissionData?.user;
  const userDatail = useParams();
  const [userData, setUserData] = useState();
  const [viewTransaction, setViewTransaction] = useState(false);
  const [isOpenAddPointsPopUp, setIsOpenAddPointsPopUp] = useState(false);
  const [openResetPassword, setOpenResetPassword] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [seletedTranasactionType, setSeletedTranasactionType] =
    useState("Orders");
  const [transactionData, setTransactionData] = useState();
  const [totalOrder, setTotalOrder] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [leadsgenerated, setLeadsGenerated] = useState(0);
  const [transactionFilterOpen, setTransactionFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isUpdated, setIsUpdated] = useState(false);
  const [search, setSearch] = useState("");
  const [filterdata, setFilterdata] = useState({
    status: "",
    points_from: "",
    points_to: "",
    date: "",
  });
  const [data, setData] = useState();
  const [isFilter, setIsFilter] = useState(false);

  const handleOpenViewTransactionData = (data) => {
    setViewTransaction(true);
    setData(data);
  };

  const itemsPerPage = 10;
  function handlefilterdata(fields) {
    setFilterdata((prev) => {
      return { ...prev, ...fields };
    });
  }

  useEffect(() => {
    getEngineersRequest("", {
      points_from: "",
      points_to: "",
      leads_from: "",
      leads_to: "",
      date: "",
    })
      .then((data) => {
        let filteredData = data.results.find((item, i) => {
          return item.id === userDatail.id;
        });
        setUserData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, [isUpdated]);

  const totalPages = Math.ceil(
    transactionData ? transactionData.length / itemsPerPage : 1
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactionData
    ? transactionData.slice(indexOfFirstItem, indexOfLastItem)
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

  const handleUserOrderData = () => {
    getUserOrders(userDatail.id, search, filterdata)
      .then((data) => {
        setTransactionData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  };
  const getRedemptionData = () => {
    getUserRedemptionData(userDatail.id, search, filterdata)
      .then((data) => {
        setTransactionData(data.results);
        setTotalOrder(data.total);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  };
  const getLeadsData = () => {
    getUserLeads(userData.id, search, filterdata)
      .then((data) => {
        setTransactionData(data.results);
        setTotalOrder(data.total);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  };

  const handleUserOrderCount = () => {
    getUserOrdersCounts(userData.id)
      .then((data) => {
        setTotalOrder(data.total_orders);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  };

  const handleUserPointCount = () => {
    getUserPointsCounts(userData.id)
      .then((data) => {
        setTotalPoints(data.total_points);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  };

  const handleUserLeadsCount = () => {
    getUserLeadsCounts(userData.id)
      .then((data) => {
        setLeadsGenerated(data.total_leads);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  };

  useEffect(() => {
    if (seletedTranasactionType === "Orders") {
      handleUserOrderData();
    }
    if (seletedTranasactionType === "Redemptions") {
      getRedemptionData();
    }
    if (seletedTranasactionType === "Leads") {
      getLeadsData();
    }
  }, [search, isFilter]);

  useEffect(() => {
    userData && handleUserOrderData();
    userData && handleUserOrderCount();
    userData && handleUserPointCount();
    userData && handleUserLeadsCount();
  }, [userData]);

  const handleClickTrancationType = (type) => {
    setSeletedTranasactionType(type);
    setCurrentPage(1);
    setSearch("");

    setTransactionFilterOpen(false);
    handlefilterdata({
      status: "",
      points_from: 0,
      points_to: 0,
      date: "",
    });
    if (type === "Orders") {
      console.log("Orders");
      handleUserOrderData();
    }
    if (type === "Redemptions") {
      console.log("Redemptions");
      getRedemptionData();
    }
    if (type === "Leads") {
      console.log("Leads");
      getLeadsData();
    }
  };

  const exportToCSV = () => {
    if (transactionData) {
      const header =
        seletedTranasactionType === "Orders"
          ? [
              "Transaction Id",
              " Distributor Name",
              " Distributor id",
              "Date & Time",
              "Points",
              "Quantity",
              "Status",
            ]
          : seletedTranasactionType === "Redemptions"
          ? ["Transaction ID", "Reward", " Product ID", "Date & Time", "Status"]
          : ["Name", "Mobile", "Date & Time", "Points", "Quantity", "Status"];
      const csvData =
        seletedTranasactionType === "Orders"
          ? transactionData.map((item) => {
              let status =
                item.admin_approval === "Accepted"
                  ? // &&
                    // item.user_approval === "Accepted"
                    "Accepted"
                  : item.admin_approval === "Rejected"
                  ? // ||
                    //   item.user_approval === "Rejected"
                    "Rejected"
                  : "Processing";
              return [
                item.transaction_id,
                item.distributor?.name,
                item.distributor?.id,
                new Date(item.created_at).toLocaleDateString("en-Us", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                item.points,
                item.quantity,
                status,
              ];
            })
          : seletedTranasactionType === "Redemptions"
          ? transactionData.map((item) => {
              let status = "REDEEMED";
              return [
                item.transaction_id,
                item.product_name,
                item.product_id,
                new Date(item.created_at).toLocaleDateString("en-Us", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }),

                status,
              ];
            })
          : transactionData.map((item) => {
              let status =
                item.admin_approval === "Accepted"
                  ? // &&
                    // item.user_approval === "Accepted"
                    "Accepted"
                  : item.admin_approval === "Rejected"
                  ? // ||
                    //   item.user_approval === "Rejected"
                    "Rejected"
                  : "Processing";
              return [
                item.transaction_id,
                item.mobile_no,
                new Date(item.created_at).toLocaleDateString("en-Us", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                item.points,
                item.quantity,
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
          ? "Engineer-Order-List.csv"
          : seletedTranasactionType === "Redemptions"
          ? "Engineer-Redemption-List.csv"
          : "Engineer-Lead-List.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="content-body" style={{ marginLeft: "245px" }}>
      <div className="container">
        <div className="contractor-reset-password">
          <div className="contractor-name">
            Engineer/{" "}
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
                      {userData && userData.name.slice(0, 2)}
                    </div>
                  </div>
                  <div className="contractor-name">
                    {userData && userData.name}
                  </div>
                  <div className="contractorid">
                    Engineer .
                    <span className="error">
                      {userData && userData.user_id}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 same-card">
            {/* <div className="contractor-count-group"> */}
            <div className="d-flex justify-content-around">
              <div className="card col-md-5">
                <div className="card-body depostit-card">
                  <div className="depostit-card-media d-flex justify-content-between style-1">
                    <div>
                      <h6>Total Orders</h6>
                      <br />
                      <h3>{totalOrder}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* </div> */}

              <div className="card col-md-5">
                <div className="card-body depostit-card">
                  <div className="depostit-card-media d-flex justify-content-between style-1">
                    <div>
                      <h6>Total Points</h6>
                      <br />
                      <h3>{totalPoints} Pts</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contractor-count-detail">
              <div className="card">
                <div className="card-body depostit-card">
                  <div className="depostit-card-media d-flex justify-content-between style-1">
                    <div>
                      <h6>Leads Generated </h6>
                      <br />
                      <h3>{leadsgenerated}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12 same-card">
            <div className="card">
              <div className="card-body depostit-card">
                <div class="user-card-heading"> Details</div>
                <div className="depostit-card-media  style-1">
                  <div className="user-email-details">
                    <div className="user-email-details-property">
                      <span>Email</span>
                      <span>Mobile</span>
                      <span>Location</span>
                    </div>
                    <div className="user-email-details-data">
                      <span>{userData && userData.email}</span>
                      <span>{userData && userData.mobile}</span>
                      <span>{`${userData && userData?.district?.district} , ${
                        userData && userData?.state?.state
                      }`}</span>
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
                    onClick={() => {
                      handlefilterdata({
                        status: "",
                        points_from: 0,
                        points_to: 0,
                        date: "",
                      });
                      handleClickTrancationType("Orders");
                    }}
                  >
                    Orders
                  </button>
                  <button
                    className={`btn btn-sm ${
                      seletedTranasactionType === "Redemptions"
                        ? "btn-primary"
                        : "btn-light"
                    } mx-2`}
                    type="button"
                    id="add-points-button"
                    onClick={() => {
                      handlefilterdata({
                        status: "",
                        points_from: 0,
                        points_to: 0,
                        date: "",
                      });
                      handleClickTrancationType("Redemptions");
                    }}
                  >
                    Redemptions
                  </button>
                  <button
                    className={`btn btn-sm ${
                      seletedTranasactionType === "Leads"
                        ? "btn-primary"
                        : "btn-light"
                    }`}
                    type="button"
                    id="add-points-button"
                    onClick={() => {
                      handlefilterdata({
                        status: "",
                        points_from: 0,
                        points_to: 0,
                        date: "",
                      });
                      handleClickTrancationType("Leads");
                    }}
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
                          setCurrentPage(1);
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
                      className="btn filter-button"
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
                        setCurrentPage(1);
                        handlefilterdata({
                          status: "",
                          points_from: 0,
                          points_to: 0,
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
                    <EngineerFilterPopUP
                      handlefilterdata={handlefilterdata}
                      handleUserOrderData={handleUserOrderData}
                      filterdata={filterdata}
                      seletedTranasactionType={seletedTranasactionType}
                      isFilter={isFilter}
                      setIsFilter={setIsFilter}
                      transactionFilterOpen={transactionFilterOpen}
                      setTransactionFilterOpen={setTransactionFilterOpen}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                </div>
                <div className="col-3 text-end contractor-grid-button">
                  {seletedTranasactionType === "Orders" &&
                    permissionForUser?.action && (
                      <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        id="add-points-button"
                        onClick={() => {
                          setIsOpenAddPointsPopUp(true);
                        }}
                      >
                        <i className="fa-regular fa-square-plus" /> Add Points
                      </button>
                    )}
                  {permissionForUser?.action && (
                    <button
                      className="btn btn-light btn-sm mx-2"
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
              <div className="table-responsive  active-projects">
                {seletedTranasactionType === "Orders" ? (
                  <table id="list-tbl" class="table">
                    <thead>
                      <tr>
                        <th>Transaction Id</th>
                        <th>Distributor Name</th>
                        <th>Distributor id</th>
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
                          {currentItems.map((ele, i) => {
                            return (
                              <tr key={`transactionData-${i}`}>
                                <td>
                                  <h6>{ele.transaction_id}</h6>
                                </td>
                                <td>
                                  <h6>{ele.distributor?.name ?? "Manual"}</h6>
                                </td>
                                <td>
                                  <h6>{ele.distributor?.id ?? "Manual"}</h6>
                                </td>
                                <td>
                                  <h6>
                                    {new Date(
                                      ele.updated_at
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
                                  <h6>{ele.quantity}</h6>
                                </td>
                             
                                <td>
                                  <button
                                    className={`btn  btn-sm ${
                                      ele.admin_approval === "Accepted"
                                        ? // &&
                                          // ele.user_approval === "Accepted"
                                          "Accepted-btn"
                                        : ele.admin_approval === "Rejected"
                                        ? // ||
                                          //   ele.user_approval === "Rejected"
                                          "Rejected-btn"
                                        : "Processing-btn"
                                    }`}
                                  >
                                    {ele.admin_approval === "Accepted"
                                      ? //  &&
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
                                    handleOpenViewTransactionData(ele);
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
                ) : seletedTranasactionType === "Redemptions" ? (
                  <table id="list-tbl" class="table">
                    <thead>
                      <tr>
                        <th>Transaction ID</th>
                        <th>Reward</th>
                        <th>Product ID</th>
                        <th>Date & Time</th>
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
                                  <h6>{ele.transaction_id}</h6>
                                </td>
                                <td>
                                  <h6>{ele?.product_name}</h6>
                                </td>
                                <td>
                                  <h6>{ele?.product_id}</h6>
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
                                  <button
                                    className={`btn  btn-sm Accepted-btn`}
                                  >
                                    REDEEMED
                                  </button>
                                </td>
                                <td
                                  onClick={() => {
                                    handleOpenViewTransactionData(ele);
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
                ) : seletedTranasactionType === "Leads" ? (
                  <table id="list-tbl" class="table">
                    <thead>
                      <tr>
                        <th>Transaction Id</th>
                        <th>Name</th>
                        <th>Mobile</th>
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
                                  <h6>{ele.name}</h6>
                                </td>
                                <td>
                                  <h6>{ele.mobile_no}</h6>
                                </td>
                                <td>
                                  <h6>
                                    {new Date(
                                      ele.updated_at
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
                                  <h6>{ele.points || 0}</h6>
                                </td>
                                <td>
                                  <h6>{ele.order}</h6>
                                </td>

                                <td>
                                  <button
                                    className={`btn  btn-sm ${
                                      ele.admin_approval === "Accepted"
                                        ? // &&
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
                                      ? //  &&
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
                                    handleOpenViewTransactionData(ele);
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
                ) : (
                  ""
                )}
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
          </div>{" "}
        </div>
      </div>
      {openResetPassword && (
        <ResetEngineerPassword
          open={openResetPassword}
          setOpen={setOpenResetPassword}
          userDatail={userDatail}
        />
      )}
      {openEdit && (
        <EditEngineer
          open={openEdit}
          setOpen={setOpenEdit}
          userId={userDatail.id}
          setIsUpdated={setIsUpdated}
          isUpdated={isUpdated}
          userData={userData}
        />
      )}
      {viewTransaction && (
        <ViewTransactionDetails
          setOpen={setViewTransaction}
          data={data}
          userData={userData}
          seletedTranasactionType={seletedTranasactionType}
        />
      )}
      {isOpenAddPointsPopUp && (
        <AddPointsPopUP
          setOpen={setIsOpenAddPointsPopUp}
          open={isOpenAddPointsPopUp}
          userId={userDatail.id}
          setIsUpdated={setIsUpdated}
          isUpdated={isUpdated}
          userData={userData}
          totalPoints={totalPoints}
        />
      )}
    </div>
  );
};

export default ViewEngineerDetails;
