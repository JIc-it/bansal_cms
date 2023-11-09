import React, { useState,useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import{getAdsListing} from "../../axiosHandle/promotionHandle"

const offcanvasStyle = {
  width: '365px',
  height: '145px',
  display: 'flex',
  marginLeft: 18,
  marginTop: 20,
  flexDirection: 'column',
};

function Promotions() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [adslisting,setAdsLIsting]=useState({})

  const handleOpenOffcanvas = () => setShowOffcanvas(true);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    }
  };

  useEffect(() => {
    getAdsListing()
      .then((data) => {
        setAdsLIsting(data.results);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  return (
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
      <div className="container">
        <div className="row" style={{marginLeft: '4px'}}>
          <div className="mb-3">
            <h5 className="mb-0 ms-1">Promotions</h5>
          </div>
          {adslisting.length > 0 && adslisting?.map((ads,index)=>
          <>
          <div className="col-xl-4 col-sm-7">
          <div className="card box-hover">
            <div className="card-header">
              <h6 className="mb-0">Ad Spot - {index+1}</h6>
              <a className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={handleOpenOffcanvas}>Update</a>
            </div>
            <div className="card-body">
              <div className="products style-1">
                <img src={ads.ad_image} className="img-fluid" alt="Ad Image" />
              </div>
              <div>
                <h6>Ad Details</h6>
                <span>Name:</span><br />
                <span>Date & Time: {new Date(ads.updated_at).toLocaleString("es-cl",{hour12:true})}</span><br />
                <span>Runtime (days):</span>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between flex-wrap form-check form-switch">
              <div className="due-progress">
                <div className="row">
                  <div className="col-md-6">
                    <a href={`/promotionhistory/${ads.id}`} style={{ color: 'blue', display: 'inline-block' }}>View History</a>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-switch" style={{ display: 'inline-block', marginLeft: 80 }}>
                      <input className="form-check-input" type="checkbox" id="activationToggle" defaultChecked={ads.is_active} defaultValue={ads.is_active}/>
                      <label className="form-check-label" htmlFor="activationToggle">Active</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </>
          )
          
          
          }
          

          {/* <div className="col-xl-4 col-sm-7">
            <div className="card box-hover">
              <div className="card-header">
                <h6 className="mb-0">Ad Spot - 02</h6>
                <a className="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Update</a>
              </div>
              <div className="card-body">
                <div className="products style-1">
                  <img src="https://images.wallpapersden.com/image/download/anime-naruto-hd-2023-ai_bW5mbGmUmZqaraWkpJRmbmdlrWZlbWU.jpg" className="img-fluid" alt="Ad Image" />
                </div>
                <div>
                  <h6>Ad Details</h6>
                  <span>Name:</span><br />
                  <span>Date & Time:</span><br />
                  <span>Runtime (days):</span>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between flex-wrap form-check form-switch">
                <div className="due-progress">
                  <div className="row">
                    <div className="col-md-6">
                      <a href="/promotionhistory" style={{ color: 'blue', display: 'inline-block' }}>View History</a>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check form-switch" style={{ display: 'inline-block', marginLeft: 80 }}>
                        <input className="form-check-input" type="checkbox" id="activationToggle" />
                        <label className="form-check-label" htmlFor="activationToggle">Active</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" style={{ overflow: 'auto' }}>
        <Offcanvas.Header style={{ marginLeft: 345 }} closeButton>
          {/* <Offcanvas.Title>Reward Product Details</Offcanvas.Title> */}
        </Offcanvas.Header>
        <div style={offcanvasStyle}>
          <h5>Add Spot - 01</h5>
          <div>
            <h5 style={{ marginTop: 20 }}>Name</h5>
            <div style={{ marginTop: 20 }}>
              <input type="text" className="form-control" placeholder='Name' />
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
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', marginLeft: '13px', marginRight: '10px' }}>
          <button className="btn btn-primary" style={{ flex: 1, margin: '0 5px', width: '100%', marginTop: 260 }}>Confirm</button>
        </div>

      </Offcanvas>
    </div>
  );
}

export default Promotions;
