import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderDetails from "./orderDetails";
import {
  getOrderRequest,
  getTotalOrderRequests,
  getOrderPendingRequests,
  getOrderAcceptedRequests,
  getOrderRejectedRequests,
  getLeadRequest,
} from "../../../axiosHandle/requestHandle";

import FilterPopUp from "./FilterPopUp";
export default function OrderRequests() {
  function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString();
  }
  const [lead_data, setLeadData] = useState(null);
  const [order_data, setOrderData] = useState([]);
  // const [order_total, setOrderTotal] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [totalOrderRequests, setTotalOrderRequests] = useState(0);
  const [totalPendingRequests, setTotalOrderPending] = useState(0);
  const [totalAcceptedRequests, setTotalOrderAccepted] = useState(0);
  const [totalRejectedRequests, setTotalOrderRejected] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [openFilter, setOpenFilter] = useState(false);
  const [created_at, setCreatedAt] = useState(null);
  const [points, setPoints] = useState(null);
  const [role, setRole] = useState(null);
  const [searchUserData, setSearchUserData] = useState("");
  const [istrue, setIstrue] = useState(false);
  const [filterdata, setFilterdata] = useState({
    search: "",
    role: "",
    date: "",
  });
  const [hasUpdate, setHasUpdate] = useState(false);

  console.log(filterdata);
  const handlefilterdata = (data) => {
    setFilterdata((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  const handleViewClick = (order) => {
    setSelectedOrder(order);
  };

  const handledatechange = (date) => {
    setCreatedAt(date);
  };

  const handlerolechange = (role) => {
    setRole(role);
  };

  useEffect(() => {
    getOrderRequest()
      .then((data) => {
        setOrderData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching lead data:", error);
      });
  }, [hasUpdate]);

  useEffect(() => {
    getTotalOrderRequests()
      .then((data) => {
        setTotalOrderRequests(data.total_orders_count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  useEffect(() => {
    getOrderPendingRequests()
      .then((data) => {
        setTotalOrderPending(data.count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  useEffect(() => {
    getOrderAcceptedRequests()
      .then((data) => {
        setTotalOrderAccepted(data.total_requests_count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  useEffect(() => {
    getOrderRejectedRequests()
      .then((data) => {
        setTotalOrderRejected(data.total_rejected_count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  useEffect(() => {
    getLeadRequest(filterdata)
      .then((data) => {
        setLeadData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching lead data:", error);
      });
  }, [filterdata.search]);

  const handlefilter = () => {
    getLeadRequest(filterdata)
      .then((data) => {
        setLeadData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching lead data:", error);
      });
  };

  const exportToCSV = () => {
    if (order_data) {
      const header = [
        "Transaction id",
        "Name",
        "Unique ID",
        "Role",
        "Distributor Id",
        "Date & Time",
        "Points",
        "Quantity",
      ];
      const csvData = order_data.map((rr_data) => {
        return [
          rr_data.transaction_id,
          rr_data.name,
          rr_data.id,
          null,
          rr_data.distributor,
          rr_data.created_at,
          null,
          rr_data.quantity,
        ];
      });

      const csvContent = [header, ...csvData]
        .map((row) => row.join(","))
        .join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Order_Requests.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const totalPages = Math.ceil(
    order_data ? order_data.length / itemsPerPage : 1
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = order_data
    ? order_data.slice(indexOfFirstItem, indexOfLastItem)
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
    <div className="content-body" style={{ width: "82vw", marginLeft: 265 }}>
      {/* row */}
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Order Requests</h5>
        </div>
        <br></br>
        {/* <div className="row"> */}
        {/* <div className="container"> */}
        <div className="row">
          <div className="col-xl-12 wid-100">
            <div className="row">
              <div className="col-xl-3 col-sm-6 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>Total Requests</h6>
                        <br />
                        <h3>{totalOrderRequests}</h3>
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
                        <h6>Pending Requests</h6>
                        <br />
                        <h3>{totalPendingRequests}</h3>
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
                        <h6>Accepted Requests</h6>
                        <br />
                        <h3>{totalAcceptedRequests}</h3>
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
                        <h6>Rejected Requests</h6>
                        <br />
                        <h3>{totalRejectedRequests}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects task-table">
                <div className="row">
                  <div className="col-9">
                    <div
                      className="input-group mb-3"
                      style={{ maxWidth: 300, paddingTop: 15, paddingLeft: 15 }}
                    >
                      <div className="position-relative mx-2">
                        <input
                          type="text"
                          className="form-control"
                          style={{ marginRight: 10 }}
                          placeholder="Search..."
                          aria-label="Search..."
                          aria-describedby="search-button"
                          value={filterdata.search}
                          onChange={async (e) => {
                            handlefilterdata({ search: e.target.value });
                          }}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          style={{
                            position: "absolute",
                            top: "20%",
                            right: "5%",
                            cursor: "pointer",
                          }}
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
                    {openFilter && (
                      <FilterPopUp
                        handlefilterdata={handlefilterdata}
                        handlefilter={handlefilter}
                        setOpenFilter={setOpenFilter}
                        // created_at={created_at}
                        // handledatechange={handledatechange}
                        // handlerolechange={handlerolechange}
                      />
                    )}
                  </div>
                  <div className="col-3" style={{ marginTop: 18 }}>
                    <button
                      style={{ marginLeft: 135 }}
                      className="btn btn-light btn-sm"
                      type="button"
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
                <table id="list-tbl" class="table">
                  <thead>
                    <tr>
                      <th>Transaction id</th>
                      <th>Name</th>
                      <th>Unique id</th>
                      <th>Role</th>
                      <th>Distributor id</th>
                      <th>Date &amp; Time</th>
                      <th>Points</th>
                      <th>Quantity</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0 ? (
                      currentItems.map((order) => (
                        <tr key={order.id}>
                          <td>
                            <h6>{order.transaction_id}</h6>
                          </td>
                          <td>
                            <h6>{order?.user?.name}</h6>
                          </td>
                          <td>
                            <h6>{order?.user?.user_id}</h6>
                          </td>
                          <td>
                            <h6>{order?.user?.role}</h6>
                          </td>
                          <td>
                            <h6>{order?.distributor?.user_id}</h6>
                          </td>
                          {/* {data?.distributor?.name} */}
                          <td>
                            <h6>{formatDate(order.created_at)}</h6>
                          </td>
                          <td>
                            <h6>{order.points}</h6>
                          </td>
                          <td>
                            <h6>{order.quantity || 0}</h6>
                          </td>
                          <td>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => handleViewClick(order)}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">No orders available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <div className="col-12">
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
        {/* </div> */}
      </div>
      {selectedOrder && (
        <OrderDetails
          data={selectedOrder}
          open={selectedOrder}
          setOpen={setSelectedOrder}
          hasUpdate={hasUpdate}
          setHasUpdate={setHasUpdate}
        />
      )}
    </div>
  );
}
