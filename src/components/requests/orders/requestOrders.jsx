import React, { useState, useEffect } from 'react';
import OrderDetails from './orderDetails';
import { getOrderRequest } from '../../../axiosHandle/requestHandle';
import { getTotalOrderRequests } from '../../../axiosHandle/requestHandle';
import { getOrderPendingRequests } from '../../../axiosHandle/requestHandle';
import { getOrderAcceptedRequests } from '../../../axiosHandle/requestHandle';
import { getOrderRejectedRequests } from '../../../axiosHandle/requestHandle';

export default function OrderRequests() {

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString();
  }

  const [order_data, setOrderData] = useState(null);
  // const [order_total, setOrderTotal] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [totalOrderRequests, setTotalOrderRequests] = useState(0);
  const [totalPendingRequests, setTotalOrderPending] = useState(0);
  const [totalAcceptedRequests, setTotalOrderAccepted] = useState(0);
  const [totalRejectedRequests, setTotalOrderRejected] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleViewClick = (order) => {
    setSelectedOrder(order);
  };

  useEffect(() => {
    getOrderRequest()
      .then((data) => {
        setOrderData(data.pending_orders);
        // setOrderTotal(data.total_requests_count);
      })
      .catch((error) => {
        console.error('Error fetching order data:', error);
      });
  }, []);

  useEffect(() => {
    getTotalOrderRequests()
      .then((data) => {
        console.log(data);
        setTotalOrderRequests(data.total_orders_count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  useEffect(() => {
    getOrderPendingRequests()
      .then((data) => {
        console.log(data);
        setTotalOrderPending(data.total_requests_count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  useEffect(() => {
    getOrderAcceptedRequests()
      .then((data) => {
        console.log(data);
        setTotalOrderAccepted(data.total_requests_count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  useEffect(() => {
    getOrderRejectedRequests()
      .then((data) => {
        console.log(data);
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
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
      {/* row */}
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Order Requests</h5>
        </div>
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 wid-100">
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
          </div>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects task-table">
                  <div className="row">
                    <div className="col-9">
                      <div className="input-group mb-3" style={{ maxWidth: 300, paddingTop: 15, paddingLeft: 15 }}>
                        <input type="text" className="form-control" style={{ marginRight: 10 }} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                        <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                      </div>
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
                            <td><h6>{order.name}</h6></td>
                            <td><h6>{order.distributor}</h6></td>
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
        </div>
      </div>
      {selectedOrder && (<OrderDetails data={selectedOrder} open={selectedOrder} setOpen={setSelectedOrder} />)}
    </div>
  );
}

