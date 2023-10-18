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

const Contractor = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOpenOffcanvas = () => setShowOffcanvas(true);

  const [selectedState, setSelectedState] = useState(''); // State dropdown value
  const [selectedDistrict, setSelectedDistrict] = useState(''); // District dropdown value

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  }

  const handleFormSubmit = () => {
    // This function should handle the form submission logic
    console.log('Button clicked - handleFormSubmit called');
    // Add your form submission logic here
  };

  // Define your state and district options here
  const stateOptions = [
    'State 1',
    'State 2',
    'State 3',
    // Add more states as needed
  ];

  const districtOptions = {
    'State 1': [
      'District 1',
      'District 2',
      'District 3',
      // Add districts for State 1
    ],
    'State 2': [
      'District A',
      'District B',
      // Add districts for State 2
    ],
    'State 3': [
      'District X',
      'District Y',
      // Add districts for State 3
    ],
    // Add more states and districts as needed
  };

  return (
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 wid-100">
            <div className="row">
              <div className="col-xl-4 col-sm-7 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>Total Users</h6><br />
                        <h3>5236</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-7 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>Total Contractors</h6><br />
                        <h3>12</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-7 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>New Contractors in current Qtr</h6><br />
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
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">Contractors</h4>
                  </div>
                  <div className="row">
                    <div className="col-5">
                        <div className="input-group mb-3" style={{ maxWidth: 300, paddingTop: 15, paddingLeft: 15 }}>
                        <input type="text" className="form-control" style={{ marginRight: 10 }} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                        <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                        </div>
                    </div>
                    <div className="col-5 text-end">
                    <button className="btn btn-primary btn-sm" type="button" id="add-points-button" onClick={handleOpenOffcanvas}><i className="fa-regular fa-square-plus" /> Add New Contractor</button>
                    </div>
                    <div className="col-2">
                    <button className="btn btn-light btn-sm" type="button" id="export-button"><i className="fa-solid fa-file-export" /> Export</button>
                    </div>
                  </div>

                  <table id="empoloyees-tblwrapper" className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Unique id</th>
                        <th>Mobile</th>
                        <th>Location</th>
                        <th>Points</th>
                        <th>Action</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><h6>Pranav S L</h6></td>
                        <td>
                          <div className="products">
                            <div>
                              <h6>1033402</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="products">
                            <div>
                              <h6>9986564789</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h6>Kerala</h6>
                        </td>
                        <td>
                          <h6>500 Pts</h6>
                        </td>
                        <td>
                          <a className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="/ctrdetails" role="button" aria-controls="offcanvasExample">View User</a>
                        </td>
                        <td>
                          <h6 align="center">...</h6>
                        </td>
                      </tr>
                      {/* ... Rest of your table rows */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" style={{ overflow: 'auto' }}>
        <Offcanvas.Header style={{ marginLeft: 345 }} closeButton>
          {/* <Offcanvas.Title>Reward Product Details</Offcanvas.Title> */}
        </Offcanvas.Header>
        <div style={offcanvasStyle}>
          <h5>Add Contractor Details</h5>
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
          <div>
            <h5 style={{ marginTop: 20 }}>Password</h5>
            <div style={{ marginTop: 20 }}>
              <input type="password" className="form-control" placeholder='Password' />
            </div>
            <div style={{ marginTop: 20 }}>
              <input type="password" className="form-control" placeholder='Confirm Password' />
            </div>
          </div>
          <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={handleFormSubmit}>Create Contractor</button>
        </div>
      </Offcanvas>
    </div>
  );
};

export default Contractor;
