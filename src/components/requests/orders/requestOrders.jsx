import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderDetails from './orderDetails';
import { getOrderRequest, 
  getTotalOrderRequests, 
  getOrderPendingRequests, 
  getOrderAcceptedRequests, 
  getOrderRejectedRequests
 } from '../../../axiosHandle/requestHandle';

import FilterPopUp from './FilterPopUp';
export default function OrderRequests() {

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString();
  }

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
  const [created_at,setCreatedAt]=useState(null)
  const [points,setPoints]=useState(null)
  const [role,setRole]=useState(null)
  
  const handleViewClick = (order) => {
    setSelectedOrder(order);
  };

  const handledatechange = (date) => {
    setCreatedAt(date);
  };

  const handlerolechange = (role) => {
    setRole(role);
  };
 
  // useEffect(() => {
  //   getOrderRequest()
  //     .then((data) => {
  //       console.log(data);
  //       setOrderData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching order data:', error);
  //     });
  // }, []);

  useEffect(() => {
    getOrderRequest()
      .then((data) => {
        setOrderData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching lead data:", error);
      });
  }, []);

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

  const exportToCSV = () => {
    if (order_data) {
      const header = ['Transaction id', 'Name', 'Unique ID', 'Role', 'Distributor Id', 'Date & Time', 'Points', 'Quantity'];
      const csvData = order_data.map((rr_data) => {
        return [rr_data.transaction_id, rr_data.name, rr_data.id, null, rr_data.distributor, rr_data.created_at, null, rr_data.quantity];
      });

      const csvContent = [header, ...csvData].map((row) => row.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Order_Requests.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const totalPages = Math.ceil(order_data ? order_data.length / itemsPerPage : 1);
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
    <div className="content-body" style={{ width: '82vw', marginLeft: 265 }}>
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
                            <h6>Total Requests</h6><br />
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
                            <h6>Pending Requests</h6><br />
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
                            <h6>Accepted Requests</h6><br />
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
                            <h6>Rejected Requests</h6><br />
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
                      <div className="input-group mb-3" style={{ maxWidth: 300, paddingTop: 15, paddingLeft: 15 }}>
                        <input type="text" className="form-control" style={{ marginRight: 10 }} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
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
                      {openFilter && <FilterPopUp role={role} created_at={created_at} handledatechange={handledatechange} handlerolechange={handlerolechange} />}
                    </div>
                    <div className="col-3" style={{ marginTop: 18 }}>
                      <button style={{ marginLeft: 135 }} className="btn btn-light btn-sm" type="button" onClick={exportToCSV}><i className="fa-solid fa-file-export" /> Export</button>
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
                            <td><h6>{order.transaction_id}</h6></td>
                            <td><h6>{null}</h6></td>
                            <td><h6>{null}</h6></td>
                            <td><h6>{null}</h6></td>
                            <td><h6>{null}</h6></td>
                            <td><h6>{formatDate(order.created_at)}</h6></td>
                            <td><h6>{null}</h6></td>
                            <td><h6>{order.quantity}</h6></td>
                            <td>
                              <button className="btn btn-primary btn-sm" onClick={() => handleViewClick(order)}>View</button>
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
                    <div className="btn-group" style={{ float: 'right' }}>
                      <button className="btn btn-light btn-sm" onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous
                      </button>&nbsp;
                      <button className="btn btn-light btn-sm" onClick={handleNextPage} disabled={currentPage === totalPages}>
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
      {selectedOrder && (<OrderDetails data={selectedOrder} open={selectedOrder} setOpen={setSelectedOrder} />)}
    </div>
  );
}

