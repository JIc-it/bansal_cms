import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

const offcanvasStyle = {
  width: '365px',
  height: '100%',
  // backgroundColor: 'lightgray',
  display: 'flex',
  marginLeft: 18,
  marginTop: 20,
  flexDirection: 'column',
};

function ContractorDetails() {
  const [showContractorOffcanvas, setShowContractorOffcanvas] = useState(false);
  const [showPasswordOffcanvas, setShowPasswordOffcanvas] = useState(false);
  const [showPointsOffcanvas, setShowPointsOffcanvas] = useState(false);

  const handleOpenContractorOffcanvas = () => setShowContractorOffcanvas(true);
  const handleOpenPasswordOffcanvas = () => setShowPasswordOffcanvas(true);
  const handleOpenPointsOffcanvas = () => setShowPointsOffcanvas(true);

  const handleCloseOffcanvas = () => {
    setShowContractorOffcanvas(false);
    setShowPasswordOffcanvas(false);
    setShowPointsOffcanvas(false);
  }

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOpenOffcanvas = () => setShowOffcanvas(true);

  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const stateOptions = [
    'State 1',
    'State 2',
    'State 3',
  ];

  const districtOptions = {
    'State 1': [
      'District 1',
      'District 2',
      'District 3',
    ],
    'State 2': [
      'District A',
      'District B',
    ],
    'State 3': [
      'District X',
      'District Y',
    ],
  };

  return (
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
      {/* row */}
      <div style={{ marginTop: 50, marginLeft: 18 }}>
        <h4 className="heading">
          Contractors / Name
          <button className="btn btn-primary btn-sm" type="button" id="add-points-button" onClick={handleOpenPasswordOffcanvas} style={{ marginLeft: 780 }}>Reset Password</button>
                  <button className="btn btn-primary btn-sm" type="button" id="add-points-button" onClick={handleOpenContractorOffcanvas} style={{ marginLeft: 6 }}>Edit</button>
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
                  <button className="btn btn-primary btn-sm" type="button" id="add-points-button" style={{ marginLeft: 17 }}>Orders</button>
                  <button className="btn btn-primary btn-sm" type="button" id="add-points-button" style={{ marginLeft: 6 }}>Redemptions</button>
                  <div className="row" style={{marginTop: 20}}>
                    <div className="col-5">
                        <div className="input-group mb-3" style={{ maxWidth: 300, paddingLeft: 15 }}>
                        <input type="text" className="form-control" style={{ marginRight: 10 }} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                        <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                        </div>
                    </div>
                    <div className="col-5 text-end">
                    <button className="btn btn-primary btn-sm" type="button" id="add-points-button" onClick={handleOpenPointsOffcanvas}><i className="fa-regular fa-square-plus" /> Add Points</button>
                    </div>
                    <div className="col-2">
                    <button className="btn btn-light btn-sm" type="button" id="export-button"><i className="fa-solid fa-file-export" /> Export</button>
                    </div>
                </div>
                  <div>
                    <table id="reports-tbl" className="table">
                      <thead>
                        <tr>
                          <th>Transaction id</th>
                          <th>Distrbuter Name</th>
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
  <Offcanvas show={showContractorOffcanvas} onHide={handleCloseOffcanvas} placement="end" style={{ overflow: 'auto' }}>
        <Offcanvas.Header style={{ marginLeft: 345 }} closeButton>
          {/* <Offcanvas.Title>Reward Product Details</Offcanvas.Title> */}
        </Offcanvas.Header>
        <div style={offcanvasStyle}>
          <h5>Edit Contractor Details</h5>
          <div style={{ marginTop: 20 }}>
            <input type="text" className="form-control" placeholder='Name' />
          </div>
          <div style={{ marginTop: 20 }}>
            <input type="text" className="form-control" placeholder='Email' />
          </div>
          <div style={{ marginTop: 20 }}>
            <input type="number" className="form-control" placeholder='Mobile' />
          </div>
          <div style={{ marginTop: 20 }}>
            <select
              className="form-control"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">State</option>
              {stateOptions.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginTop: 20 }}>
            <select
              className="form-control"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">District</option>
              {selectedState && districtOptions[selectedState] && districtOptions[selectedState].map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', marginLeft: '13px', marginRight: '10px' }}>
          <button className="btn btn-primary" style={{ flex: 1, margin: '0 5px', width: '100%' }}>Confirm</button>
        </div>

      </Offcanvas>
      <Offcanvas show={showPasswordOffcanvas} onHide={handleCloseOffcanvas} placement="end" style={{ overflow: 'auto' }}>
        <Offcanvas.Header style={{ marginLeft: 345 }} closeButton>
          {/* <Offcanvas.Title>Reward Product Details</Offcanvas.Title> */}
        </Offcanvas.Header>
        <div style={offcanvasStyle}>
          <h5>Reset Password</h5>
          <div>
            <h5 style={{ marginTop: 20 }}>Password</h5>
            <div style={{ marginTop: 20 }}>
              <input type="text" className="form-control" placeholder='Password' />
            </div>
            <div style={{ marginTop: 20 }}>
              <input type="text" className="form-control" placeholder='Confirm Password' />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', marginLeft: '13px', marginRight: '10px' }}>
          <button className="btn btn-primary" style={{ flex: 1, margin: '0 5px', width: '100%' }}>Confirm</button>
        </div>
      </Offcanvas>
      <Offcanvas show={showPointsOffcanvas} onHide={handleCloseOffcanvas} placement="end" style={{ overflow: 'auto' }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <div style={{marginTop: 10, marginLeft: 20}}>
      <h5>Contractor Details</h5>
      <span>Name :</span><span style={{ marginLeft: 235 }}>Pratibha Seth</span><br></br>
      <span>Unique ID :</span><span style={{ marginLeft: 250 }}>566565</span><br></br>
      <span>Mobile :</span><span style={{ marginLeft: 237 }}>9899959595</span><br></br>
      </div>
      <div style={{marginTop: 30, marginLeft: 20}}>
      <h6>Add Points</h6>
      <div style={{ marginTop: 20, paddingRight: 18 }}>
        <input type="text" className="form-control" placeholder='Points' />
      </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', marginLeft: '13px', marginRight: '10px' }}>
        <button className="btn btn-primary" style={{ flex: 1, margin: '0 5px', width: '100%', marginTop: 260 }}>Confirm</button>
      </div>
    </Offcanvas>
</div>
  );
}

export default ContractorDetails;
