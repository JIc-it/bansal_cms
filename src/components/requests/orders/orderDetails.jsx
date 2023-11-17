import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect } from "react";
import { handleOrderAcceptReject } from "../../../axiosHandle/requestHandle";
import { toast } from "react-toastify";

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

export default function OrderDetails({
  data,
  open,
  setOpen,
  hasUpdate,
  setHasUpdate,
}) {
  const [order_data, setOrderData] = useState({
    transaction_id: "",
  });

  useEffect(() => {
    setOrderData({
      ...order_data,
      transaction_id: data.transaction_id,
    });
  }, [data.transaction_id]);

  const [showOffcanvas, setShowOffcanvas] = useState(open);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setOrderData({
      ...order_data,
      transaction_id: "",
    });
    setOpen(null);
  };

  const handleRequest = (type) => {
    console.log(data?.id);

    // let status = type === "accept" ? "Redeemed" : "Rejected";
    handleOrderAcceptReject(data?.id, type)
      .then((data) => {
        if (data) {
          setOpen(false);
          setHasUpdate(!hasUpdate);
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

  return (
    <Offcanvas
      show={showOffcanvas}
      onHide={handleCloseOffcanvas}
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
      <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 24 }}>
        <h6>Transaction Details</h6>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 24 }}>
        <span style={{flex:1}}>Admin Status :</span>
        <span
          style={{ justifyContent:'center',marginLeft: 200, color: "blue" }}
          className="badge badge-primary light border-0"
        >
          {data.admin_approval}
        </span>
        <br></br>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 24,marginBottom:12,marginTop:12 }}>
        <span>Distributor Status :</span>
        <span
          style={{ marginLeft: 168 }}
          className="badge badge-success light border-0"
        >
          {data.user_approval}
        </span>
        <br></br>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 14,marginBottom:12,marginTop:12 }}>
        <span>Transaction ID :</span>
        <span style={{ marginLeft: 114 }}>{order_data.transaction_id}</span>
        <br></br>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 24,marginBottom:12,marginTop:12 }}>
        <span>Date & Time :</span>
        <span style={{ marginLeft: 88 }}>
          {new Date(data.updated_at).toLocaleString("es-cl", { hour12: true })}
        </span>
        <br></br>
        </div>
        {/* <span>Date & Time :</span><span style={{ marginLeft: 150 }}>05 AUG 2023, 6:00 PM</span><br></br> */}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 24 }}>
        <h6>Distributor Details</h6>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 24 }}>
        <span>Name :</span>
        <span style={{ marginLeft: 235 }}>{data?.distributor?.name}</span>
        <br></br>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 24,marginBottom:12,marginTop:12 }}>
        <span>Unique ID :</span>
        <span style={{ marginLeft: 186 }}>{data?.distributor?.user_id}</span>
        <br></br>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 24,marginBottom:12,marginTop:12 }}>
        <span>Address :</span>
        <span style={{ marginLeft: 110 }}>
          {data?.distributor?.district},
          <span >{data?.distributor?.state}</span>
        </span>
        <br></br>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 24,marginBottom:12,marginTop:12 }}>
        <span>Mobile :</span>
        <span style={{ marginLeft: 200 }}>{data?.distributor?.mobile}</span>
        <br></br>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 24, }}>
        <h6>Contractor Details</h6>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 24,marginBottom:12,marginTop:12 }}>
        <span>Name :</span>
        <span style={{ marginLeft: 259 }}>{data?.user?.name}</span>
        <br></br>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 24,marginBottom:12,marginTop:12 }}>
        <span>Unique ID :</span>
        <span style={{ marginLeft: 187 }}>{data?.user?.user_id}</span>
        <br></br>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 24,marginBottom:12,marginTop:12 }}>
        <span>Address :</span>
        <span style={{ marginLeft: 112 }}>
          {data?.user?.district},
          <span >{data?.user?.state}</span>
        </span>
        <br></br>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', paddingRight: 24,marginBottom:12,marginTop:12 }}>
        <span>Mobile :</span>
        <span style={{ marginLeft: 204 }}>{data?.user?.mobile}</span>
        <br></br>
        </div>
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
            <div>
              <span>Quantity</span>
              <h5>{data.quantity}</h5>
            </div>
            <div className="divider-line"></div>
            <div>
              <span>Loyalty Points</span>
              <h5>{data.points}</h5>
            </div>
          </div>
        </h6>
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
            className="btn btn-success"
            style={{ flex: 1, margin: "0 5px", width: "calc(50% - 5px)" }}
            onClick={() => {
              handleRequest("accept");
            }}
          >
            Accept
          </button>
          <button
            className="btn btn-danger"
            style={{ flex: 1, margin: "0 5px", width: "calc(50% - 5px)" }}
            onClick={() => {
              handleRequest("reject");
            }}
          >
            Reject
          </button>
        </div>
      </div>
    </Offcanvas>
  );
}
