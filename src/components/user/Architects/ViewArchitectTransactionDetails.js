import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const ViewArchitectTransactionDetails = ({ open, setOpen, itemData }) => {
  console.log("ViewArchitectTransactionDetails", itemData);
  const offcanvasStyle = {
    width: "365px",
    height: "145px",
    backgroundColor: "lightgray",
    display: "flex",
    marginLeft: 18,
    marginTop: 20,
    flexDirection: "column",
  };

  const statusOffcanvas = {
    width: "365px",
    height: "80px",
    marginLeft: 18,
    marginTop: 30,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
  };
  return (
    <Offcanvas
      show={true}
      onHide={() => {
        setOpen(false);
      }}
      placement="end"
      style={{ overflow: "auto" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <div style={offcanvasStyle}>
        <h6
          style={{
            marginLeft: 140,
            marginTop: 30,
            marginBottom: 30,
            fontSize: 60,
          }}
        >
          SA
        </h6>
      </div>
      <br></br>
      <div style={{ marginLeft: 15, marginRight: 15 }}>
        <h6>Transaction Details</h6>

        <span>Admin Status :</span>

        <span
          style={{
            float: "inline-end",
            color: "green",
            padding: 2,
            position: "relative",
            bottom: 7,
          }}
          className={`btn  btn-sm ${
            itemData.admin_approval === "Accepted" &&
            itemData.user_approval === "Accepted"
              ? "Accepted-btn"
              : itemData.admin_approval === "Rejected" ||
                itemData.user_approval === "Rejected"
              ? "Rejected-btn"
              : "Processing-btn"
          }`}
        >
          {itemData.admin_approval === "Accepted"
            ? "Accepted"
            : itemData.admin_approval === "Rejected"
            ? "Rejected"
            : "Processing"}
        </span>
        {/* <span
          style={{ marginLeft: 200, color: "blue" }}
          className="badge badge-primary light border-0"
        >
          {itemData.admin_approval}
        </span> */}
        <br></br>
        <span>Distributor Status :</span>
        <span
          style={{
            float: "inline-end",
            color: "green",
            padding: 2,
            position: "relative",
            left: 60,
          }}
          className={`btn  btn-sm ${
            itemData.admin_approval === "Accepted" &&
            itemData.user_approval === "Accepted"
              ? "Accepted-btn"
              : itemData.admin_approval === "Rejected" ||
                itemData.user_approval === "Rejected"
              ? "Rejected-btn"
              : "Processing-btn"
          }`}
        >
          {itemData.admin_approval === "Accepted" &&
          itemData.user_approval === "Accepted"
            ? "Accepted"
            : itemData.admin_approval === "Rejected" ||
              itemData.user_approval === "Rejected"
            ? "Rejected"
            : "Processing"}
        </span>
        {/* <span
          style={{ marginLeft: 168 }}
          className="badge badge-success light border-0"
        >
          {itemData.user_approval}
        </span> */}
        <br></br>

        <span>Transaction ID :</span>
        <span style={{ float: "inline-end" }}>{itemData.transaction_id}</span>
        <br></br>
        <span>Date & Time :</span>
        <span style={{ float: "inline-end" }}>
          {new Date(itemData.created_at).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <br></br>
      </div>
      <br></br>
      <div style={{ marginLeft: 15, marginRight: 15 }}>
        <h6>{itemData.distributor ? "Distributor Details" : "Lead Details"}</h6>
        <span>Name :</span>
        <span style={{ float: "inline-end" }}>
          {itemData.distributor
            ? itemData?.distributor?.name
            : itemData?.accepted_by?.name}
        </span>
        <br></br>

        <span>Unique ID :</span>
        <span style={{ float: "inline-end" }}>
          {itemData.distributor
            ? itemData.distributor?.user_id
            : itemData?.accepted_by?.user_id}
        </span>
        <br></br>
        <span>Address :</span>
        <span style={{ float: "inline-end" }}>
          {itemData.distributor
            ? itemData.distributor?.district
            : itemData?.accepted_by?.district}
          ,
          <span>
            {itemData.distributor
              ? itemData.distributor?.state
              : itemData?.accepted_by?.state}
          </span>
        </span>
        <br></br>
        <span>Mobile :</span>
        <span style={{ float: "inline-end" }}>
          {itemData.distributor
            ? itemData.distributor?.mobile
            : itemData.accepted_by?.mobile}
        </span>
      </div>
      <br></br>
      <div style={{ marginLeft: 15, marginRight: 15 }}>
        <h6>{itemData.user?.role} Details</h6>

        <span>Name :</span>
        <span style={{ float: "inline-end" }}>{itemData.user?.name}</span>
        <br></br>

        <span>Unique ID :</span>
        <span style={{ float: "inline-end" }}>{itemData.user?.user_id}</span>
        <br></br>

        <span>Address :</span>
        <span style={{ float: "inline-end" }}>
          {itemData.user?.district}, <span> {itemData.user?.state}</span>
        </span>
        <br></br>

        <span>Mobile :</span>
        <span style={{ float: "inline-end" }}>{itemData.user?.mobile}</span>
      </div>
      <br></br>
      <div
        style={{
          marginTop: 10,
          marginLeft: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h6>Comments :</h6>
        <span style={{ marginRight: 10 }}>
          {itemData?.comments?.trim() === ""
            ? "No Comments"
            : itemData?.comments}
        </span>
      </div>
      <div>
        <h6 style={statusOffcanvas}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ padding: 20 }}>
              <span>Quantity</span>
              <h5>
                {itemData?.quantity ? itemData?.quantity : itemData?.order} Tons
              </h5>
            </div>
            <div className="divider-line"></div>
            <div style={{ padding: 20 }}>
              <span>Loyalty Points</span>
              <h5>{itemData?.points} Pts</h5>
            </div>
          </div>
        </h6>
       
      </div>
    </Offcanvas>
  );
};

export default ViewArchitectTransactionDetails;