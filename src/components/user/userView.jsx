import React, { useState, useEffect } from "react";
import { getProfileRequest } from "../../axiosHandle/profileHandle";

export default function UserView(props) {
  return (
    <div className="content-body" style={{ width: "82vw", marginLeft: 245 }}>
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
                          <h5 className="mt-2" style={{ color: "black" }}>
                            AB
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="event-data ms-2">
                      <h5 className="mb-0">{props.data.name}</h5>
                      <span>{props.data.user_id}</span>
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
                    <span>Email:</span>
                    <br />
                    <span>Mobile:</span>
                    <br />
                    <span>Location:</span>
                    <br />
                  </div>
                  <div className="col-sm-6 text-right">
                    <span>{props.data.email}</span>
                    <br />
                    <span>{props.data.mobile}</span>
                    <br />
                    <span>{props.data.district_name}</span>
                    <br />
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
