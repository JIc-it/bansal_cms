import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const ViewAdminTransaction = ({
  setOpen,
  data,
  seletedTranasactionType,
  userData,
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
      {seletedTranasactionType === "Orders" ? (
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
              SA
            </h6>
          </div>
          <div style={{ marginTop: 10, marginLeft: 20 }}>
            <h6>Transaction Details</h6>
            <span>Admin Status :</span>
            <span
              style={{ marginLeft: 200, color: "blue", marginBottom: "5px" }}
              className="badge badge-primary light border-0"
            >
              {data.admin_approval}
            </span>
            <br></br>
            <span>Distributor Status :</span>
            <span
              style={{ marginLeft: 168 }}
              className="badge badge-success light border-0"
            >
              {data.user_approval}
            </span>
            <br></br>
            <span>Transaction ID :</span>
            <span style={{ marginLeft: 150 }}>{data.transaction_id}</span>
            <br></br>
            <span>Date & Time :</span>
            <span style={{ marginLeft: 150 }}>
              {new Date(data.updated_at).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            <br></br>
          </div>
          <div style={{ marginTop: 10, marginLeft: 20 }}>
            <h6>Distributor Details</h6>
            <span>Name :</span>
            <span style={{ marginLeft: 235 }}>{data?.distributor?.name}</span>
            <br></br>
            <span>Unique ID :</span>
            <span style={{ marginLeft: 200 }}>
              {data?.distributor?.user_id}
            </span>
            <br></br>
            <span>Location :</span>
            <span style={{ marginLeft: 130 }}>
              {data?.distributor?.district} {data?.distributor?.state}
            </span>
            <br></br>
            <span>Mobile :</span>
            <span style={{ marginLeft: 237 }}>{data?.distributor?.mobile}</span>
            <br></br>
          </div>
          <div style={{ marginTop: 10, marginLeft: 20 }}>
            <h6>{`${data.user?.role} Details`}</h6>
            <span>Name :</span>
            <span style={{ marginLeft: 237 }}>{data?.user?.name}</span>
            <br></br>
            <span>Unique ID :</span>
            <span style={{ marginLeft: 200 }}>{data?.user?.user_id}</span>
            <br></br>
            <span>Location :</span>
            <span style={{ marginLeft: 130 }}>
              {data?.user.district} {data?.user?.state}
            </span>
            <br></br>
            <span>Mobile :</span>
            <span style={{ marginLeft: 237 }}>{data.user?.mobile}</span>
            <br></br>
          </div>
          <div>
            <h6 style={statusOffcanvas}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>
                  <span>Quantity</span>
                  <h5>{data?.quantity} Tons</h5>
                </div>
                <div className="divider-line"></div>
                <div>
                  <span>Loyalty Points</span>
                  <h5>{data?.points} Pts</h5>
                </div>
              </div>
            </h6>
          </div>
        </>
      ) : (
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

          <div style={{ marginTop: 10 }}>
            <div style={{ marginLeft: 20 }}>
              <h6>Transaction Details</h6>
              <span>Admin Status :</span>
              <span
                style={{ marginLeft: 200, color: "blue" }}
                className="badge badge-success light border-0"
              >
                {data?.admin_approval}
              </span>
              <br />
              <span>Transaction ID :</span>
              <span style={{ marginLeft: 190 }}>{data?.referral_id}</span>
              <br></br>
              <span>Date & Time :</span>
              <span style={{ marginLeft: 150 }}>
                {new Date(data?.created_at).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <hr />
            <div style={{ marginTop: 10, marginLeft: 20 }}>
              <h6>Lead Details</h6>
              <span>Name :</span>
              <span style={{ marginLeft: 235 }}>{data?.name}</span>
              <br></br>
              <span>Mobile:</span>
              <span style={{ marginLeft: 250 }}>{data?.mobile_no}</span>
              <br></br>

              <span>Site Location :</span>
              <span style={{ marginLeft: 237 }}>{data?.site_location}</span>
              <br></br>
            </div>
            <hr />
            <div style={{ marginTop: 10, marginLeft: 20 }}>
              <h6>referrer Details</h6>
              <span>Name :</span>
              <span style={{ marginLeft: 237 }}>{data?.user?.name}</span>
              <br></br>
              <span>Unique ID :</span>
              <span style={{ marginLeft: 250 }}>{data?.referral_id}</span>
              <br></br>
              <span>Location :</span>
              <span
                style={{ marginLeft: 250 }}
              >{`${data?.user?.district} , ${data?.user?.state}`}</span>
              <br></br>
              <span>Mobile :</span>
              <span style={{ marginLeft: 250 }}>{data?.user?.mobile}</span>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
              <h6>Comments :</h6>
              <span style={{ marginLeft: 85 }}>{data.comments}</span>
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
                    <h5>{data.order} Tons</h5>
                  </div>
                  <div className="divider-line"></div>
                  <div>
                    <span>Loyalty Points</span>
                    <h5>{data.points} Pts</h5>
                  </div>
                </div>
              </h6>
            </div>
          </div>
        </>
      )}
    </Offcanvas>
  );
};

export default ViewAdminTransaction;
