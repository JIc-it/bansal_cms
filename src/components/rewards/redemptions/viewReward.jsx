// import React, { useState, useEffect } from 'react';
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { handleRewardAcceptReject } from "../../../axiosHandle/rewardHandle";
import { toast } from "react-toastify";
import ViewImage from "./ViewImage";

const closeButtonStyle = {
  alignSelf: "flex",
};

const offcanvasStyle = {
  width: "365px",
  height: "145px",
  backgroundColor: "lightgray",
  display: "flex",
  marginLeft: 18,
  marginTop: 20,
  flexDirection: "column",
};

export default function ViewReward({
  open,
  data,
  setOpen,
  setIsUpdated,
  isUpdated,
  permissionForRedemption,
}) {
  const [showOffcanvas, setShowOffcanvas] = useState(open);
  const [openImagePopUp, setOpenImagePopUp] = useState(false);
 console.log('dataaaaaa',data)
  const handleCloseOffcanvas = () => {
    setOpenImagePopUp(false);
    setShowOffcanvas(false);
    setOpen(null);
  };

  const handleRequest = (type) => {
    let status = type === "accept" ? "Redeemed" : "Rejected";
    handleRewardAcceptReject(data?.id, status)
      .then((data) => {
        if (data) {
          setOpen(false);
          setIsUpdated(!isUpdated);
          toast.success(
            type === "accept"
              ? "Redemption accepted successfully"
              : "Redemption rejected successfully"
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching Engineer data:", error);
      });
  };

  const apiResponseAddressString = data.selected_address;

  // Convert the string to a JavaScript object
  const changedAddress = JSON.parse(
    apiResponseAddressString.replace(/None/g, "null").replace(/'/g, '"')
  );
  console.log(changedAddress);
  // Create a new object with the desired format
  const formattedAddress = {
    name: changedAddress.name,
    mobile: changedAddress.mobile,
    address_1: changedAddress.address_1,
    address_2: changedAddress.address_2,
    pincode: changedAddress.pincode,
    city: changedAddress.city,
    state_name: changedAddress.state_name,
    land_mark: changedAddress.land_mark,
  };

  return (
    <>
      <Offcanvas
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        placement="end"
      >
        <Offcanvas.Header closeButton onClick={handleCloseOffcanvas}>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <div style={offcanvasStyle}>
          <h6 style={{ marginLeft: 140, marginTop: 30, fontSize: 60 }}>SA</h6>
        </div>
        <div style={{ marginTop: 10, marginLeft: 20 }}>
          <h6>Transaction Details</h6>
          <span>Status :</span>
          <span style={{ marginLeft: 190 }}>{data?.status}</span>
          <br></br>
          <span>Transaction ID :</span>
          <span style={{ marginLeft: 190 }}>{data?.transaction_id}</span>
          <br></br>
          <span>Date & Time :</span>
          <span style={{ marginLeft: 150 }}>{data?.created_at}</span>
          <br></br>
          <span>ID Type :</span>
          <span style={{ marginLeft: 205 }}>{data?.id_verification.id_type}</span>
          <button
            style={{ backgroundColor: "blue" }}
            className="btn btn-dark btn-sm ms-2"
            onClick={() => {
              setOpenImagePopUp(true);
            }}
          >
            View
          </button>
          <br></br>
          <span>ID Number :</span>
          <span style={{ marginLeft: 200 }}>545958785236</span>
          <br></br>
          <span>Address :</span>
          <span style={{ marginLeft: 130 }}>
            {`${formattedAddress.address_1} , ${formattedAddress.address_2}`}
          </span>
          <br></br>
        </div>
        <div style={{ marginTop: 10, marginLeft: 20 }}>
          <h6>Buyer Details</h6>
          <span>Name :</span>
          <span style={{ marginLeft: 235 }}>{data.user?.name}</span>
          <br></br>
          <span>Unique ID :</span>
          <span style={{ marginLeft: 250 }}>{data?.user?.user_id}</span>
          <br></br>
          <span>Mobile :</span>
          <span style={{ marginLeft: 237 }}>{data.user?.mobile}</span>
          <br></br>
        </div>
        <div style={{ marginTop: 10, marginLeft: 20 }}>
          <h6>Reward Details</h6>
          <span>Name :</span>
          <span style={{ marginLeft: 237 }}>{data.reward_id?.title}</span>
          <br></br>
          <span>Product ID :</span>
          <span style={{ marginLeft: 244 }}>{data.reward_id?.reward_id}</span>
          <br></br>
        </div>
        {permissionForRedemption?.action && data?.status === "Pending" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
              marginLeft: "13px",
              marginRight: "10px",
            }}
          >
            <button
              className="btn reward-redemption-success"
              style={{ flex: 1, margin: "0 5px", width: "calc(50% - 5px)" }}
              onClick={() => {
                handleRequest("accept");
              }}
            >
              Accept
            </button>
            <button
              className="btn reward-redemption-reject"
              style={{ flex: 1, margin: "0 5px", width: "calc(50% - 5px)" }}
              onClick={() => {
                handleRequest("reject");
              }}
            >
              Reject
            </button>
          </div>
        )}
      </Offcanvas>

      {openImagePopUp && (
        <ViewImage
          open={openImagePopUp}
          setOpen={setOpenImagePopUp}
          imageUrl={data}
          name={data?.id_verification?.name}
        />
      )}
    </>
  );
}
