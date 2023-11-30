import React, { useState, useEffect } from "react";
import {
  getAdsListing,
  updatePromotion,
} from "../../axiosHandle/promotionHandle";
import UpdateADPoster from "./UpdateADPoster";
import { convertToDateTime } from "../../helper";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

function Promotions() {
  const contextData = useContext(AppContext);
  const { permissionData } = contextData;
  const permissionForPromotion = permissionData?.promotions;
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [adslisting, setAdsLIsting] = useState({});
  const [selectedPromotionDetails, setSelectedPromotionDetails] = useState();
  const [isUpdatedPromotion, setIsUpdatedPromotion] = useState(false);

  const [selectedIdForCheck, setSelectedIdForCheck] = useState(0);
  console.log("adslisting", adslisting);
  const handleOpenOffcanvas = (data) => {
    setShowOffcanvas(true);
    setSelectedPromotionDetails(data);
  };
  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  useEffect(() => {
    getAdsListing()
      .then((data) => {
        setAdsLIsting(data.results);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, [isUpdatedPromotion, selectedIdForCheck]);

  const updateActivePromotion = async (id, status) => {
    const data = {
      is_active: status,
    };

    const updateData = await updatePromotion(id, data);
    setIsUpdatedPromotion(!isUpdatedPromotion);
  };

  return (
    <>
      <div className="content-body" style={{ width: "82vw", marginLeft: 245 }}>
        <div className="container">
          <div className="row" style={{ marginLeft: "4px" }}>
            <div className="mb-3">
              <h5 className="mb-0 ms-1">Promotions</h5>
            </div>
            {adslisting.length > 0 &&
              adslisting?.map((ads, index) => {
                return (
                  <div className="col-md-4 col-12">
                    <div className="card box-hover" key={`adslisting-${index}`}>
                      <div className="card-header" style={{ padding: "1rem" }}>
                        <h6 className="" style={{ fontSize: "16px" }}>
                          Ad Spot - {index + 1}
                        </h6>
                        {permissionForPromotion?.update && (
                          <a
                            className="btn bg-blue btn-sm"
                            data-bs-toggle="offcanvas"
                            href="#offcanvasExample"
                            role="button"
                            aria-controls="offcanvasExample"
                            onClick={() => handleOpenOffcanvas(ads)}
                          >
                            Update
                          </a>
                        )}
                      </div>
                      <div className="card-body">
                        <div className="products style-1">
                          <img
                            src={ads.ad_image}
                            className="img-fluid"
                            alt="Ad Image"
                            style={{ height: "150px", width: "100%" }}
                          />
                        </div>
                        <h6>Ad Details</h6>
                        <div className="promotion-details d-flex">
                          <div style={{ flex: "1" }}>
                            <span>Name:</span>
                            <br />
                            <span>Date & Time: </span>
                            <br />
                            <span>Runtime (days):</span>
                          </div>
                          <div style={{ textAlign: "end" }}>
                            <span>{ads.title ? ads.title : "-"}</span>
                            <br />
                            <span>{convertToDateTime(ads.created_at)}</span>
                            <br />
                            <span>{ads.runtime}</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card-footer  form-check form-switch"
                        style={{ padding: "5px 1rem" }}
                      >
                        <div className="row ">
                          <div className="col-md-6">
                            <a
                              href={`/promotionhistory/${ads.id}`}
                              style={{
                                color: "#2B59C3",
                                display: "inline-block",
                                fontSize: "12px",
                              }}
                            >
                              View History
                            </a>
                          </div>
                          <div className="col-md-6">
                            {permissionForPromotion?.update && (
                              <div
                                className="form-switch"
                                style={{
                                  display: "inline-block",
                                  float:'inline-end'
                                }}
                              >
                                <label
                                  className="form-check-label"
                                  htmlFor={`activationToggle-${index}`}
                                >
                                  {`${ads.is_active ? "Active" : "In Active"} `}
                                </label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`activationToggle-${index}`}
                                  name={`activationToggle-${index}`}
                                  checked={ads.is_active}
                                  defaultValue={ads.is_active}
                                  onChange={(e) => {
                                    updateActivePromotion(
                                      ads.id,
                                      !ads.is_active
                                    );
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {showOffcanvas && (
        <UpdateADPoster
          showOffcanvas={showOffcanvas}
          handleCloseOffcanvas={handleCloseOffcanvas}
          selectedPromotionDetails={selectedPromotionDetails}
          isUpdatedPromotion={isUpdatedPromotion}
          setIsUpdatedPromotion={setIsUpdatedPromotion}
        />
      )}
    </>
  );
}

export default Promotions;
