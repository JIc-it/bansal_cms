import React from 'react';

function DistributorDetails() {
  return (
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
  {/* row */}
  <div style={{marginTop: 50, marginLeft: 18}}>
    <h4 className="heading">Distributors / Name
      <a style={{marginLeft: 1000}} className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Edit Details</a>
    </h4>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-3">
        <div className="card box-hover">
          {/* Content for the first card */}
          <div className="card-body">
            <div className="events">
              <div className="dz-scroll event-scroll">
                <div className="event-media">
                  <div className="d-flex align-items-center">
                    <div className="event-box">
                      <h5 className="mt-2">AB</h5>
                    </div>
                  </div>
                </div>
                <div className="event-data ms-2">
                  <h5 className="mb-0">Pranav S L</h5>
                  <span>109972</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="row">
          {/* Second and Third Cards (Two in the same line) */}
          <div className="col-12">
            <div className="card">
              {/* Content for the second card */}
              <div className="card-body depostit-card">
                <div className="depostit-card-media d-flex justify-content-between style-1">
                  <div>
                    <h6>Total Orders</h6>
                    <h3>64</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              {/* Content for the fourth card */}
              <div className="card-body depostit-card">
                <div className="depostit-card-media d-flex justify-content-between style-1">
                  <div>
                    <h6>Total Points</h6>
                    <h3>6400 Pts</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card box-hover">
          {/* Content for the fifth card */}
          <div className="card-header">
            <h5 className="mb-0">Details</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <span>Email:</span><br />
                <span>Mobile:</span><br />
                <span>Location:</span><br />
              </div>
              <div className="col-sm-6 text-right">
                <span>example@example.com</span><br />
                <span>00998776688</span><br />
                <span>Kerala</span><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive active-projects">
              <div className="tbl-caption">
                <h4 className="heading mb-0">Transactions</h4>
              </div>
              <button className="btn btn-primary btn-sm" type="button" id="add-points-button" style={{marginLeft: 17}}>Orders</button>
              <div className="row">
                <div className="col-9">
                  <div className="input-group mb-3" style={{maxWidth: 300, paddingTop: 15, paddingLeft: 15}}>
                    <input type="text" className="form-control" style={{marginRight: 10}} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                    <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                  </div>
                </div>
              </div>
              <div>
                <table id="reports-tbl" className="table">
                  <thead>
                    <tr>
                      <th>Transaction id</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Unique id</th>
                      <th>Date &amp; Time</th>
                      <th>Points</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th className="text-end" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><h6>100023456</h6></td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>Pranav Sudhanan</h6>
                          </div>	
                        </div>
                      </td>
                      <td><h6>Engineer</h6></td>
                      <td><h6>100023456</h6></td>
                      <td><h6>19 Feb 2023, 06:00 PM</h6></td>	
                      <td><h6>500 Pts</h6></td>
                      <td><h6>50 Ton</h6></td>
                      <td><span className="badge badge-primary light border-0">Processing</span></td>
                      <td><h6 align="center">...</h6></td>
                    </tr>
                    <tr>
                      <td><h6>100023456</h6></td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>Pranav Sudhanan</h6>
                          </div>	
                        </div>
                      </td>
                      <td><h6>Architect</h6></td>
                      <td><h6>100023456</h6></td>
                      <td><h6>19 Feb 2023, 06:00 PM</h6></td>	
                      <td><h6>500 Pts</h6></td>
                      <td><h6>50 Ton</h6></td>
                      <td><span className="badge badge-success light border-0">Accepted</span></td>
                      <td><h6 align="center">...</h6></td>
                    </tr>
                    <tr>
                      <td><h6>100023456</h6></td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>Pranav Sudhanan</h6>
                          </div>	
                        </div>
                      </td>
                      <td><h6>Engineer</h6></td>
                      <td><h6>100023456</h6></td>
                      <td><h6>19 Feb 2023, 06:00 PM</h6></td>	
                      <td><h6>500 Pts</h6></td>
                      <td><h6>50 Ton</h6></td>
                      <td><span className="badge badge-danger light border-0">Rejected</span></td>
                      <td><h6 align="center">...</h6></td>
                    </tr>
                    <tr>
                      <td><h6>100023456</h6></td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>Pranav Sudhanan</h6>
                          </div>	
                        </div>
                      </td>
                      <td><h6>Contractor</h6></td>
                      <td><h6>100023456</h6></td>
                      <td><h6>19 Feb 2023, 06:00 PM</h6></td>	
                      <td><h6>500 Pts</h6></td>
                      <td><h6>50 Ton</h6></td>
                      <td><span className="badge badge-success light border-0">Accepted</span></td>
                      <td><h6 align="center">...</h6></td>
                    </tr>
                    <tr>
                      <td><h6>100023456</h6></td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>Pranav Sudhanan</h6>
                          </div>	
                        </div>
                      </td>
                      <td><h6>Architect</h6></td>
                      <td><h6>100023456</h6></td>
                      <td><h6>19 Feb 2023, 06:00 PM</h6></td>	
                      <td><h6>500 Pts</h6></td>
                      <td><h6>50 Ton</h6></td>
                      <td><span className="badge badge-success light border-0">Accepted</span></td>
                      <td><h6 align="center">...</h6></td>
                    </tr>											
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default DistributorDetails;
