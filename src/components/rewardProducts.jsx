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

function RewardPoints() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOpenOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    }
  };
  return (
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
    <div className="container">
    <div className="row">
      <div className="col-xl-9 wid-100">
        <div className="row">
          <div className="col-xl-3 col-sm-6 same-card">
            <div className="card">
              <div className="card-body depostit-card">
                <div className="depostit-card-media d-flex justify-content-between style-1">
                  <div>
                    <h6>Redemption Window</h6><br />
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Closed</label>
                    </div>
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
                    <h6>Products Redeemed</h6><br />
                    <h3>5200</h3>
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
                    <h6>Redemptions in Current Qtr</h6><br />
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
                    <h6>Reward Products</h6><br />
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
                <div className="table-responsive active-projects manage-client">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">Orders History</h4>
                  </div>
                  <div className="row">
                    <div className="col-5">
                        <div className="input-group mb-3" style={{ maxWidth: 300, paddingTop: 15, paddingLeft: 15 }}>
                        <input type="text" className="form-control" style={{ marginRight: 10 }} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                        <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                        </div>
                    </div>
                    <div className="col-5 text-end">
                    <button className="btn btn-primary btn-sm" type="button" id="add-product-button" onClick={handleOpenOffcanvas}><i className="fa-regular fa-square-plus" /> Add Reward Product</button>
                    </div>
                    <div className="col-2">
                    <button className="btn btn-light btn-sm" type="button" id="export-button"><i className="fa-solid fa-file-export" /> Export</button>
                    </div>
                </div>
                    <table id="reports-tbl" className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Product ID</th>
                          <th>Points</th>
                          <th>Description</th>
                          <th>Status</th>
                          <th>Times Redeemed</th>
                          <th>Action</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                    <tr>
                      <td>
                        <h6><img src="https://images.wallpapersden.com/image/download/anime-naruto-hd-2023-ai_bW5mbGmUmZqaraWkpJRmbmdlrWZlbWU.jpg" className="img-fluid" style={{height: 50, paddingRight: 10}} />
                          Mixer Grinder</h6>
                      </td>
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
                            <h6>500 Pts</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <h6>Mixer Grinder is a reward</h6>
                      </td>
                      <td>
                        <span className="badge badge-success light border-0">Active</span>
                      </td>
                      <td>
                        <h6>1200</h6>
                      </td>
                      <td>
                        <button className="btn btn-primary" onClick={handleOpenOffcanvas} style={{width: 50, height: 35}}>Edit</button>
                      </td>
                      <td>
                        <h6 align="center">...</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6><img src="https://images.wallpapersden.com/image/download/anime-naruto-hd-2023-ai_bW5mbGmUmZqaraWkpJRmbmdlrWZlbWU.jpg" className="img-fluid" style={{height: 50, paddingRight: 10}} />
                          Mixer Grinder</h6>
                      </td>
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
                            <h6>500 Pts</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <h6>Mixer Grinder is a reward</h6>
                      </td>
                      <td>
                        <span className="badge badge-success light border-0">Active</span>
                      </td>
                      <td>
                        <h6>1200</h6>
                      </td>
                      <td>
                        <button className="btn btn-primary" style={{width: 50, height: 35}}>Edit</button>
                      </td>
                      <td>
                        <h6 align="center">...</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6><img src="https://images.wallpapersden.com/image/download/anime-naruto-hd-2023-ai_bW5mbGmUmZqaraWkpJRmbmdlrWZlbWU.jpg" className="img-fluid" style={{height: 50, paddingRight: 10}} />
                          Mixer Grinder</h6>
                      </td>
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
                            <h6>500 Pts</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <h6>Mixer Grinder is a reward</h6>
                      </td>
                      <td>
                        <span className="badge badge-danger light border-0">Inactive</span>
                      </td>
                      <td>
                        <h6>1200</h6>
                      </td>
                      <td>
                        <button className="btn btn-primary" style={{width: 50, height: 35}}>Edit</button>
                      </td>
                      <td>
                        <h6 align="center">...</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6><img src="https://images.wallpapersden.com/image/download/anime-naruto-hd-2023-ai_bW5mbGmUmZqaraWkpJRmbmdlrWZlbWU.jpg" className="img-fluid" style={{height: 50, paddingRight: 10}} />
                          Mixer Grinder</h6>
                      </td>
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
                            <h6>500 Pts</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <h6>Mixer Grinder is a reward</h6>
                      </td>
                      <td>
                        <span className="badge badge-success light border-0">Active</span>
                      </td>
                      <td>
                        <h6>1200</h6>
                      </td>
                      <td>
                        <button className="btn btn-primary" style={{width: 50, height: 35}}>Edit</button>
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
        <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" style={{ overflow: 'auto' }}>
  <Offcanvas.Header style={{marginLeft: 345}} closeButton>
    {/* <Offcanvas.Title>Reward Product Details</Offcanvas.Title> */}
  </Offcanvas.Header>
  <div style={offcanvasStyle}>
    <h5>Reward Product Details</h5>
    <div style={{ marginTop: 20 }}>
      <input type="text" className="form-control" />
    </div>
    <div style={{ marginTop: 20 }}>
      <input type="number" className="form-control" />
    </div>
    <div style={{ marginTop: 20 }}>
      <textarea rows="4" className="form-control"></textarea>
    </div>
    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <label>Product Photo (140*140)</label>
            <span style={{ marginLeft: 10 }}>{selectedFileName}</span>
            <input type="file" id="imageUpload" style={{ display: 'none' }} onChange={handleFileChange} />
            <label htmlFor="imageUpload" className="btn btn-secondary btn-sm" style={{ marginLeft: 106 }}>Choose File</label>        
          </div>
    </div>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', marginLeft: '13px', marginRight: '10px' }}>
        <button className="btn btn-primary" style={{ flex: 1, margin: '0 5px', width: '100%' }}>Confirm</button>
       
      </div>
</Offcanvas>


      </div>
  );
}

export default RewardPoints;
