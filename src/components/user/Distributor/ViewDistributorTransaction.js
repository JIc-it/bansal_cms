import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const ViewDistributorTransaction = ({
  open,
  setOpen,
  data,
  userData,
  seletedTranasactionType,
}) => {
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
      <>
        <div style={offcanvasStyle}>
          <h6
            style={{
              marginLeft: 140,
              marginTop: 30,
              marginBottom: 30,
              fontSize: 60,
            }}
          >
            {userData.name.slice(0, 2)}
          </h6>
        </div>
        <div style={{ marginLeft: 15, marginRight: 15 }}>
          <h6>Transaction Details</h6>
          {data?.accepted_by?.role==='Admin' ?
          <>
           <span>Admin Status :</span>
         <span
           style={{  float: "inline-end", color: "blue", padding:1 }}
           className="badge badge-primary light border-0"
         >
           {data.admin_approval}
         </span>
         <br></br> 
          </>:

          <>
           <span>Sales POC Status :</span>
         <span
           style={{  float: "inline-end" , color: "blue", padding:1 }}
           className="badge badge-primary light border-0"
         >
           {data?.admin_approval}
         </span>
         <br></br>
          </>
         
        }
         
          <span>Distributor Status :</span>
          <span
            style={{ float: "inline-end", padding:1 }}
            className="badge badge-success light border-0"
          >
            {data?.user_approval}
          </span>
          <br></br>
          <span>Transaction ID :</span>
          <span style={{ float: "inline-end" }}>{data?.transaction_id}</span>
          <br></br>
          <span>Date & Time :</span>
          <span style={{ float: "inline-end" }}>
            {new Date(data.created_at).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <br></br>
          <span>Accepted By :</span>
          <span
            style={{ marginLeft: 118 }}
          >
            {data?.accepted_by?.email}
          </span>
          <br></br>
        </div>
         <div style={{ marginLeft: 15, marginRight: 15 }}>
          <h6>Distributor Details</h6>
          <span>Name :</span>
          <span style={{ float: "inline-end" }}>{data.distributor?.name}</span>
          <br></br>
          <span>Unique ID :</span>
          <span style={{ float: "inline-end" }}>{data.distributor?.id}</span>
          <br></br>
          <span>Location :</span>
          <span style={{ float: "inline-end" }}>
            {(data.distributor?.district, data.distributor?.state)}{" "}
          </span>
          <br></br>
          <span>Mobile :</span>
          <span style={{ float: "inline-end" }}>{data.distributor?.mobile}</span>
          <br></br>
        </div>
         <div style={{ marginLeft: 15, marginRight: 15 }}>
          <h6>{`${data.user?.role} Details`}</h6>
          <span>Name :</span>
          <span style={{ float: "inline-end" }}>{data.user?.name}</span>
          <br></br>
          <span>Unique ID :</span>
          <span style={{ float: "inline-end" }}>{data.user?.user_id}</span>
          <br></br>
          <span>Location :</span>
          <span style={{ float: "inline-end" }}>
            {`${data.user?.district} , ${data.user?.state}`}{" "}
          </span>
          <br></br>
          <span>Mobile :</span>
          <span style={{ float: "inline-end" }}>{data.user?.mobile}</span>
          <br></br>
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
                <h5>{data.quantity} Tons</h5>
              </div>
              <div className="divider-line"></div>
              <div>
                <span>Loyalty Points</span>
                <h5>{data.points} Pts</h5>
              </div>
            </div>
          </h6>
        </div>
      </>
    </Offcanvas>
  );
};

export default ViewDistributorTransaction;
