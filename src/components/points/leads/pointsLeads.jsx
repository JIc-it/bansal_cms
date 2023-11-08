import React, { useState, useEffect } from 'react';
import LeadDetails from './leadDetails';
import { getLeadRequest } from '../../../axiosHandle/requestHandle';




export default function LeadPoints() {

  const [lead_data, setLeadData] = useState(null);
  const [selectedLead, setSelectedLead] = useState(null);

  const handleViewClick = (lead) => {
    setSelectedLead(null);
    setSelectedLead(lead);
  };

  useEffect(() => {
    getLeadRequest()
      .then((data) => {
        setLeadData(data.pending_leads);
      })
      .catch((error) => {
        console.error('Error fetching lead data:', error);
      });
  }, []);

  const exportToCSV = () => {
    if (lead_data) {
      const header = ['Transaction Id', 'Name', 'Unique Id', 'Role', 'Distributor Id', 'Date & Time', 'Points', 'Quantity'];
      const csvData = lead_data.map((rr_data) => {
        return [null, rr_data.name, null, null, null, rr_data.created_at, null, null];
      });

      const csvContent = [header, ...csvData].map((row) => row.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Lead_Requests.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const [orderData, setOrderData] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  const totalPages = Math.ceil(lead_data ? lead_data.length / itemsPerPage : 1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = lead_data
    ? lead_data.slice(indexOfFirstItem, indexOfLastItem)
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
          <h5 className="mb-0">Lead Requests</h5>
        </div>
        <br></br>
            <div className="row">
              <div className="col-xl-12 wid-100">
                <div className="row">
                  <div className="col-xl-3 col-sm-6 same-card">
                    <div className="card">
                      <div className="card-body depostit-card">
                        <div className="depostit-card-media d-flex justify-content-between style-1">
                          <div>
                            <h6>Total Requests</h6><br />
                            <h3>36</h3>
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
                            <h3>12</h3>
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
                            <h3>12</h3>
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
                            <h3>12</h3>
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
                      <button style={{ marginLeft: 135 }} className="btn btn-light btn-sm" type="button"><i className="fa-solid fa-file-export" onClick={exportToCSV} /> Export</button>
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
                        currentItems.map((lead) => (
                          <tr key={lead.id}>
                            <td><h6>{lead.transaction_id}</h6></td>
                            <td><h6>{lead.name}</h6></td>
                            <td><h6>{null}</h6></td>
                            <td><h6>{lead.distributor}</h6></td>
                            <td><h6>{lead.created_at}</h6></td>
                            <td><h6>{null}</h6></td>
                            <td><h6>{lead.quantity}</h6></td>
                            <td>
                              <button className="btn btn-primary" onClick={() => handleViewClick(lead)}>Submit</button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">No leads available</td>
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
      {selectedLead && <LeadDetails data={selectedLead} open_view={true} />}
    </div>
  );
}

