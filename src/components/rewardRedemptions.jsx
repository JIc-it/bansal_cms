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

const closeButtonStyle = {
  alignSelf: 'flex',
};

function Redemptions() {
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
                    <h4 className="heading mb-0">Redemptions</h4>
                  </div>
                  <div className="row">
                    <div className="col-9">
                        <div className="input-group mb-3" style={{maxWidth: 300, paddingTop: 15, paddingLeft: 15}}>
                            <input type="text" className="form-control" style={{marginRight: 10}} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                            <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                        </div>
                    </div>
                    <div className="col-3" style={{marginTop: 18}}>
                    <button style={{ marginLeft: 120 }} className="btn btn-light btn-sm" type="button"><i className="fa-solid fa-file-export" /> Export</button>
                    </div>
                </div>
                  <table id="reports-tbl" className="table">
                    <thead>
                      <tr>
                        <th>Transaction id</th>
                        <th>Reward</th>
                        <th>Product ID</th>
                        <th>Buyer</th>
                        <th>Buyer id</th>
                        <th>Date &amp; Time</th>
                        <th>Status</th>
                        <th className="text-end" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><h6>100023476</h6></td>
                        <td>
                          <div className="products">
                            <div>
                              <h6>Mixer Grinder</h6>
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
                          <h6>Pranav Sudhanan</h6>
                        </td>
                        <td><h6>788755982</h6></td>
                        <td>
                          <h6>19 Feb 2023, 06:00 PM</h6>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">REDEEMED</span>
                        </td>
                        <td>
                          <a href="#" onClick={handleOpenOffcanvas}><h6 align="center">View</h6></a>
                        </td>
                      </tr>
                      <tr>
                        <td><h6>100023489</h6></td>
                        <td>
                          <div className="products">
                            <div>
                              <h6>Rice Cooker</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="products">
                            <div>
                              <h6>100023422</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6>Pranav Sudhanan</h6>
                        </td>
                        <td><h6>788755982</h6></td>
                        <td>
                          <h6>19 Feb 2023, 06:00 PM</h6>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">REDEEMED</span>
                        </td>
                        <td>
                          <h6 align="center">...</h6>
                        </td>
                      </tr>
                      <tr>
                        <td><h6>100023406</h6></td>
                        <td>
                          <div className="products">
                            <div>
                              <h6>Milton Flask</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="products">
                            <div>
                              <h6>100023420</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6>Pranav Sudhanan</h6>
                        </td>
                        <td><h6>788755982</h6></td>
                        <td>
                          <h6>19 Feb 2023, 06:00 PM</h6>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">REDEEMED</span>
                        </td>
                        <td>
                          <h6 align="center">...</h6>
                        </td>
                      </tr>
                      <tr>
                        <td><h6>100023482</h6></td>
                        <td>
                          <div className="products">
                            <div>
                              <h6>Mixer Grinder</h6>
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
                          <h6>Prince R</h6>
                        </td>
                        <td><h6>788755982</h6></td>
                        <td>
                          <h6>19 Feb 2023, 06:00 PM</h6>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">REDEEMED</span>
                        </td>
                        <td>
                          <h6 align="center">...</h6>
                        </td>
                      </tr>
                      <tr>
                        <td><h6>100023405</h6></td>
                        <td>
                          <div className="products">
                            <div>
                              <h6>Rice Cooker</h6>
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
                          <h6>Prince R</h6>
                        </td>
                        <td><h6>788755982</h6></td>
                        <td>
                          <h6>19 Feb 2023, 06:00 PM</h6>
                        </td>
                        <td>
                          <span className="badge badge-success light border-0">REDEEMED</span>
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
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <div style={offcanvasStyle}>
        <h6 style={{ marginLeft: 140, marginTop: 30, fontSize: 60 }}>SA</h6>
      </div>
      <div style={{marginTop: 10, marginLeft: 20}}>
      <h6>Transaction Details</h6>
      <span>Status :</span><br></br>
      <span>Transaction ID :</span><span style={{ marginLeft: 190 }}>S455654663</span><br></br>
      <span>Date & Time :</span><span style={{ marginLeft: 150 }}>05 AUG 2023, 6:00 PM</span><br></br>
      <span>ID Type :</span><span style={{ marginLeft: 205 }}>Aadhar</span><button style={{ backgroundColor: "blue" }} className='btn btn-dark btn-sm ms-2'>View</button><br></br>
      <span>ID Number :</span><span style={{ marginLeft: 200 }}>545958785236</span><br></br>
      <span>Address :</span><span style={{ marginLeft: 130 }}>127, KANCHAN VIHAR COLONY, <span style={{ marginLeft: 175 }}>NIRANJANPUR ROAD INDORE MP</span></span><br></br>
      </div>
      <div style={{marginTop: 10, marginLeft: 20}}>
      <h6>Buyer Details</h6>
      <span>Name :</span><span style={{ marginLeft: 235 }}>Pratibha Seth</span><br></br>
      <span>Unique ID :</span><span style={{ marginLeft: 250 }}>566565</span><br></br>
      <span>Mobile :</span><span style={{ marginLeft: 237 }}>9899959595</span><br></br>
      </div>
      <div style={{marginTop: 10, marginLeft: 20}}>
      <h6>Reward Details</h6>
      <span>Name :</span><span style={{ marginLeft: 237 }}>Mixer Grinder</span><br></br>
      <span>Product ID :</span><span style={{ marginLeft: 244 }}>A59859</span><br></br>
      </div>
    </Offcanvas>
    </div>
  );
}

export default Redemptions;
