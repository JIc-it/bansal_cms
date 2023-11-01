import React, { useState, useEffect } from 'react';
import LeadDetails from './leadDetails';
import { getLeadRequest} from '../../../axiosHandle/requestHandle';




export default function LeadRequests() {

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

  return (
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
      {/* row */}
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Lead Requests</h5>
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
                      <button style={{ marginLeft: 135 }} className="btn btn-light btn-sm" type="button"><i className="fa-solid fa-file-export" /> Export</button>
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

                      {lead_data && lead_data.length > 0 ? (
                        lead_data.map((lead) => (
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


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedLead && <LeadDetails data={selectedLead} open_view = {true} />}
    </div>
  );
}

