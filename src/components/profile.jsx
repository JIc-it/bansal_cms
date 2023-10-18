import React from 'react';

const Profile = () => {
  return (
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
  {/* row */}
  <div className="container-fluid">
    <div className="row">
      <div className="col-xl-3 col-sm-6">
        <div className="card box-hover">
          <div className="card-body">
            <div className="events">
              <div className="dz-scroll event-scroll">
                <div className="event-media">
                  <div className="d-flex align-items-center">
                    <div className="event-box">
                      <h5 className="mt-2" style={{ color: 'black' }}>AB</h5>
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
      <div className="col-xl-9 col-sm-12">
        <div className="card box-hover">
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
</div>

  );
};

export default Profile;
