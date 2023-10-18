import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

const offcanvasStyle = {
  width: '365px',
  height: '145px',
  backgroundColor: 'lightgray',
  display: 'flex',
  marginLeft: 18,
  marginTop: 20,
  flexDirection: 'column',
};

const statusOffcanvas = {
  width: '365px',
  height: '80px',
  marginLeft: 18,
  marginTop: 30,
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F2F2F2',
};

const closeButtonStyle = {
  alignSelf: 'flex',
};

function OrderPoints() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOpenOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  return (
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
      {/* row */}
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">Orders History</h4>
                  </div>
                  <div className="row">
                    <div className="col-9">
                        <div className="input-group mb-3" style={{maxWidth: 300, paddingTop: 15, paddingLeft: 15}}>
                            <input type="text" className="form-control" style={{marginRight: 10}} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                            <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                        </div>
                    </div>
                    <div className="col-3" style={{marginTop: 18}}>
                    <button style={{marginLeft: 120}} className="btn btn-light btn-sm" type="button"><i className="fa-solid fa-file-export" /> Export</button>
                    </div>
                </div>
                  <table id="reports-tbl" className="table">
                    <thead>
                      <tr>
                        <th>Transaction id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Unique id</th>
                        <th>Distributor id</th>
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
                        <td>
                          <div className="products">
                            <div>
                              <h6>100023456</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6>100023456</h6>
                        </td>
                        <td><h6>Distributor</h6></td>
                        <td>
                          <h6>19 Feb 2023, 06:00 PM</h6>
                        </td>
                        <td>
                          <h6>500 Pts</h6>
                        </td>
                        <td>
                          <h6>50 Ton</h6>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">Active</span>
                        </td>
                        <td>
                          <a href="#" onClick={handleOpenOffcanvas}><h6 align="center">View</h6></a>
                        </td>
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
                        <td>
                          <div className="products">
                            <div>
                              <h6>100023456</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6>100023456</h6>
                        </td>
                        <td><h6>Distributor</h6></td>
                        <td>
                          <h6>19 Feb 2023, 06:00 PM</h6>
                        </td>
                        <td>
                          <h6>500 Pts</h6>
                        </td>
                        <td>
                          <h6>50 Ton</h6>
                        </td>
                        <td>
                          <span className="badge badge-danger light border-0">Inactive</span>
                        </td>
                        <td>
                          <h6 align="center">...</h6>
                        </td>
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
                        <td>
                          <div className="products">
                            <div>
                              <h6>100023456</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6>100023456</h6>
                        </td>
                        <td><h6>Distributor</h6></td>
                        <td>
                          <h6>19 Feb 2023, 06:00 PM</h6>
                        </td>
                        <td>
                          <h6>500 Pts</h6>
                        </td>
                        <td>
                          <h6>50 Ton</h6>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">Active</span>
                        </td>
                        <td>
                          <h6 align="center">...</h6>
                        </td>
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
                        <td>
                          <div className="products">
                            <div>
                              <h6>100023456</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6>100023456</h6>
                        </td>
                        <td><h6>Distributor</h6></td>
                        <td>
                          <h6>19 Feb 2023, 06:00 PM</h6>
                        </td>
                        <td>
                          <h6>500 Pts</h6>
                        </td>
                        <td>
                          <h6>50 Ton</h6>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">Active</span>
                        </td>
                        <td>
                          <h6 align="center">...</h6>
                        </td>
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
                        <td>
                          <div className="products">
                            <div>
                              <h6>100023456</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6>100023456</h6>
                        </td>
                        <td><h6>Distributor</h6></td>
                        <td>
                          <h6>19 Feb 2023, 06:00 PM</h6>
                        </td>
                        <td>
                          <h6>500 Pts</h6>
                        </td>
                        <td>
                          <h6>50 Ton</h6>
                        </td>
                        <td>
                          <span className="badge badge-danger light border-0">Inactive</span>
                        </td>
                        <td>
                          <h6 align="center">...</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" style={{overflow:'auto'}}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <div style={offcanvasStyle}>
        <h6 style={{ marginLeft: 140, marginTop: 30, marginBottom: 30, fontSize: 60 }}>SA</h6>
      </div>
      <div style={{marginTop: 10, marginLeft: 20}}>
      <h6>Transaction Details</h6>
      <span>Admin Status :</span><span style={{ marginLeft: 200, color: "blue" }} className="badge badge-primary light border-0">Pending</span><br></br>
      <span>Distributor Status :</span><span style={{ marginLeft: 168 }} className="badge badge-success light border-0">Accepted</span><br></br>
      <span>Transaction ID :</span><span style={{ marginLeft: 190 }}>S455654663</span><br></br>
      <span>Date & Time :</span><span style={{ marginLeft: 150 }}>05 AUG 2023, 6:00 PM</span><br></br>
      </div>
      <div style={{marginTop: 10, marginLeft: 20}}>
      <h6>Distributor Details</h6>
      <span>Name :</span><span style={{ marginLeft: 235 }}>Pratibha Seth</span><br></br>
      <span>Unique ID :</span><span style={{ marginLeft: 250 }}>566565</span><br></br>
      <span>Address :</span><span style={{ marginLeft: 130 }}>127, KANCHAN VIHAR COLONY, <span style={{ marginLeft: 175 }}>NIRANJANPUR ROAD INDORE MP</span></span><br></br>
      <span>Mobile :</span><span style={{ marginLeft: 237 }}>9899959595</span><br></br>
      </div>
      <div style={{marginTop: 10, marginLeft: 20}}>
      <h6>Contractor Details</h6>
      <span>Name :</span><span style={{ marginLeft: 237 }}>Mixer Grinder</span><br></br>
      <span>Unique ID :</span><span style={{ marginLeft: 250 }}>566565</span><br></br>
      <span>Address :</span><span style={{ marginLeft: 130 }}>127, KANCHAN VIHAR COLONY, <span style={{ marginLeft: 175 }}>NIRANJANPUR ROAD INDORE MP</span></span><br></br>
      <span>Mobile :</span><span style={{ marginLeft: 237 }}>9899959595</span><br></br>
      </div>
      <div>
      <h6 style={statusOffcanvas}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <span>Quantity</span>
        <h5>82 Tons</h5>
      </div>
      <div className="divider-line"></div>
        <div>
          <span>Loyalty Points</span>
          <h5>500Pts</h5>
        </div>
      </div></h6>
      </div>
    </Offcanvas>
    </div>
  );
}

export default OrderPoints;
