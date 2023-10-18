import React from 'react';

const SalesPocs = () => {
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
                        <h6>Total Users</h6>
                        <br />
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
                        <h6>Total Sales POC's</h6>
                        <br />
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
                        <h6>New Sales POC's in current Qtr</h6>
                        <br />
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
                    <h4 className="heading mb-0">Sales POC's</h4>
                  </div>
                  <div className="row">
                    <div className="col-5">
                        <div className="input-group mb-3" style={{ maxWidth: 300, paddingTop: 15, paddingLeft: 15 }}>
                        <input type="text" className="form-control" style={{ marginRight: 10 }} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                        <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                        </div>
                    </div>
                    <div className="col-5 text-end">
                    <button className="btn btn-primary btn-sm" type="button" id="add-points-button"><i className="fa-regular fa-square-plus" /> Add New Contractor</button>
                    </div>
                    <div className="col-2">
                    <button className="btn btn-light btn-sm" type="button" id="export-button"><i className="fa-solid fa-file-export" /> Export</button>
                    </div>
                </div>
                  <table id="employees-tblwrapper" className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Unique id</th>
                        <th>Mobile</th>
                        <th>Location</th>
                        <th>Action</th>
                        <th />
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
                      <a className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="/pocdetails" role="button" aria-controls="offcanvasExample">View User</a>
                    </td>
                    <td>
                      <h6 align="center">...</h6>
                    </td>
                  </tr>
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
                      <a className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">View User</a>
                    </td>
                    <td>
                      <h6 align="center">...</h6>
                    </td>
                  </tr>
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
                      <a className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">View User</a>
                    </td>
                    <td>
                      <h6 align="center">...</h6>
                    </td>
                  </tr>
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
                      <a className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">View User</a>
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
    </div>
  );
};

export default SalesPocs;
