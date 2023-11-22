import { getTotalRewardProducts } from "../../../axiosHandle/rewardHandle";
import { getTotalProductsRedeemed } from "../../../axiosHandle/rewardHandle";
import { getTotalRedeemedCount } from "../../../axiosHandle/rewardHandle";
import React, { useState, useEffect } from "react";

export default function Cards({ permissionForRedumtionWindow }) {
  const [totalRewardProducts, setTotalRewardProducts] = useState(0);
  const [totalProductsRedeemed, setTotalProductsRedeemed] = useState(0);
  const [totalRedeemedCount, setTotalRedeemedCount] = useState(0);

  useEffect(() => {
    getTotalRewardProducts()
      .then((data) => {
        console.log(data);
        setTotalRewardProducts(data.count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  useEffect(() => {
    getTotalProductsRedeemed()
      .then((data) => {
        console.log(data);
        setTotalProductsRedeemed(data.count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  // useEffect(() => {
  //     getTotalProductsRedeemed()
  //         .then((data) => {
  //             console.log(data);
  //             setTotalProductsRedeemed(data.count);
  //         })
  //         .catch((error) => {
  //             console.error("Error fetching distributor data:", error);
  //         });
  // }, []);

  useEffect(() => {
    getTotalRedeemedCount()
      .then((data) => {
        console.log(data);
        setTotalRedeemedCount(data.total_history_count);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row" style={{ marginLeft: "4px" }}>
        <div className="col-xl-12 wid-100">
          <div className="row">
            <div className="col-xl-3 col-sm-6 same-card">
              <div className="card">
                <div className="card-body depostit-card">
                  <div className="depostit-card-media d-flex justify-content-between style-1">
                    <div>
                      <h6>Redemption Window</h6>
                      <br />
                      {permissionForRedumtionWindow?.action && (
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          >
                            Closed
                          </label>
                        </div>
                      )}
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
                      <h6>Products Redeemed</h6>
                      <br />
                      <h3>{totalProductsRedeemed}</h3>
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
                      <h6>Redemptions in Current Qtr</h6>
                      <br />
                      <h3>{totalRedeemedCount}</h3>
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
                      <h6>Reward Products</h6>
                      <br />
                      <h3>{totalRewardProducts}</h3>
                    </div>
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
