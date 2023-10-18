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

function LeadRequests() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOpenOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);
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
                        <div className="input-group mb-3" style={{maxWidth: 300, paddingTop: 15, paddingLeft: 15}}>
                            <input type="text" className="form-control" style={{marginRight: 10}} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                            <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                        </div>
                    </div>
                    <div className="col-3" style={{marginTop: 18}}>
                    <button style={{marginLeft: 135}} className="btn btn-light btn-sm" type="button"><i className="fa-solid fa-file-export" /> Export</button>
                    </div>
                </div>
                  <table id="empoloyeestbl2" className="table">
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
                    <td><h6>Distributor</h6></td>
                    <td>
                      <h6>100023456</h6>
                    </td>
                    <td>
                      <h6>19 Feb 2023</h6>
                    </td>	
                    <td>
                      <h6>500 Pts</h6>
                    </td>
                    <td>
                      <h6>50 Ton</h6>
                    </td>
                    <td>
                      <button className="btn btn-primary" onClick={handleOpenOffcanvas}>View Request</button>
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
                    <td><h6>Distributor</h6></td>
                    <td>
                      <h6>100023456</h6>
                    </td>
                    <td>
                      <h6>19 Feb 2023</h6>
                    </td>	
                    <td>
                      <h6>500 Pts</h6>
                    </td>
                    <td>
                      <h6>50 Ton</h6>
                    </td>
                    <td>
                      <button className="btn btn-primary">View Request</button>
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
                    <td><h6>Distributor</h6></td>
                    <td>
                      <h6>100023456</h6>
                    </td>
                    <td>
                      <h6>19 Feb 2023</h6>
                    </td>	
                    <td>
                      <h6>500 Pts</h6>
                    </td>
                    <td>
                      <h6>50 Ton</h6>
                    </td>
                    <td>
                      <button className="btn btn-primary">View Request</button>
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
                    <td><h6>Distributor</h6></td>
                    <td>
                      <h6>100023456</h6>
                    </td>
                    <td>
                      <h6>19 Feb 2023</h6>
                    </td>	
                    <td>
                      <h6>500 Pts</h6>
                    </td>
                    <td>
                      <h6>50 Ton</h6>
                    </td>
                    <td>
                      <button className="btn btn-primary">View Request</button>
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
                    <td><h6>Distributor</h6></td>
                    <td>
                      <h6>100023456</h6>
                    </td>
                    <td>
                      <h6>19 Feb 2023</h6>
                    </td>	
                    <td>
                      <h6>500 Pts</h6>
                    </td>
                    <td>
                      <h6>50 Ton</h6>
                    </td>
                    <td>
                      <button className="btn btn-primary">View Request</button>
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
                    <td><h6>Distributor</h6></td>
                    <td>
                      <h6>100023456</h6>
                    </td>
                    <td>
                      <h6>19 Feb 2023</h6>
                    </td>	
                    <td>
                      <h6>500 Pts</h6>
                    </td>
                    <td>
                      <h6>50 Ton</h6>
                    </td>
                    <td>
                      <button className="btn btn-primary">View Request</button>
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
                    <td><h6>Distributor</h6></td>
                    <td>
                      <h6>100023456</h6>
                    </td>
                    <td>
                      <h6>19 Feb 2023</h6>
                    </td>	
                    <td>
                      <h6>500 Pts</h6>
                    </td>
                    <td>
                      <h6>50 Ton</h6>
                    </td>
                    <td>
                      <button className="btn btn-primary">View Request</button>
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
                    <td><h6>Distributor</h6></td>
                    <td>
                      <h6>100023456</h6>
                    </td>
                    <td>
                      <h6>19 Feb 2023</h6>
                    </td>	
                    <td>
                      <h6>500 Pts</h6>
                    </td>
                    <td>
                      <h6>50 Ton</h6>
                    </td>
                    <td>
                      <button className="btn btn-primary">View Request</button>
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
                    <td><h6>Distributor</h6></td>
                    <td>
                      <h6>100023456</h6>
                    </td>
                    <td>
                      <h6>19 Feb 2023</h6>
                    </td>	
                    <td>
                      <h6>500 Pts</h6>
                    </td>
                    <td>
                      <h6>50 Ton</h6>
                    </td>
                    <td>
                      <button className="btn btn-primary">View Request</button>
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
                    <td><h6>Distributor</h6></td>
                    <td>
                      <h6>100023456</h6>
                    </td>
                    <td>
                      <h6>19 Feb 2023</h6>
                    </td>	
                    <td>
                      <h6>500 Pts</h6>
                    </td>
                    <td>
                      <h6>50 Ton</h6>
                    </td>
                    <td>
                      <button className="btn btn-primary">View Request</button>
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
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', marginLeft: '13px', marginRight: '10px' }}>
        <button className="btn btn-success" style={{ flex: 1, margin: '0 5px', width: 'calc(50% - 5px)' }}>Accept</button>
        <button className="btn btn-danger" style={{ flex: 1, margin: '0 5px', width: 'calc(50% - 5px)' }}>Reject</button>
      </div>
      </div>
    </Offcanvas>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <LeadRequests />
    </div>
  );
}

export default App;
