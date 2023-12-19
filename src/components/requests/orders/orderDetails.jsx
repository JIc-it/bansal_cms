import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState, useEffect } from "react";
import { handleOrderAcceptReject } from "../../../axiosHandle/requestHandle";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

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
  permissionForRequestOrder,
  setIsRefetch,
  isRefetch,
}) {
  const validationSchema = Yup.object({
    comment: Yup.string().required("Comment is required"),
  });

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        handleOrderAcceptReject(data?.id, "reject", values.comment)
          .then((data) => {
            if (data) {
              setOpen(false);
              setHasUpdate(!hasUpdate);
              setIsRefetch(!isRefetch);
              toast.success("Redemption rejected successfully");
              // window.location.reload();
            }
          })
          .catch((error) => {
            console.error("Error fetching Engineer data:", error);
          });
      } catch (err) {
        console.log(err);
        err.response.data.email && toast.error(err.response.data.email[0]);
        err.response.data.mobile && toast.error(err.response.data.mobile[0]);
      }
    },
  });
  const [order_data, setOrderData] = useState({
    transaction_id: "",
  });
  const [isRejectOrder, setIsRejectOrder] = useState(false);

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
    if (type === "reject") {
      setIsRejectOrder(true);
    } else {
      handleOrderAcceptReject(data?.id, type)
        .then((data) => {
          if (data) {
            setOpen(false);
            setHasUpdate(!hasUpdate);
            setIsRefetch(!isRefetch);
            toast.success(
              type === "accept"
                ? "Order accepted successfully"
                : "Order rejected successfully"
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching Engineer data:", error);
        });
    }
  };

  return (
    <>
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
        <br></br>
        <div style={{ marginLeft: 15, marginRight: 15 }}>
          <h6>Transaction Details</h6>
          <span style={{ flex: 1 }}>Admin Status :</span>
          <span
            style={{
              float: "inline-end",
              color: "blue",
              padding: 2,
              position: "relative",
              bottom: 5,
            }}
            className="badge badge-primary light border-0"
          >
            {data.admin_approval}
          </span>
          <br></br>
          <span>Distributor Status :</span>
          <span
            style={{
              float: "inline-end",
              position: "relative",
              left: 70,
              padding: 2,
            }}
            className="badge badge-success light border-0"
          >
            {data.user_approval}
          </span>
          <br></br>
          <span>Transaction ID :</span>
          <span style={{ float: "inline-end" }}>
            {order_data.transaction_id}
          </span>
          <br></br>
          <span>Date & Time :</span>
          <span style={{ float: "inline-end" }}>
            {new Date(data.updated_at).toLocaleString("es-cl", {
              hour12: true,
            })}
          </span>
          <br></br>
        </div>
        <div style={{ marginLeft: 15, marginRight: 15 }}>
          <h6>Distributor Details</h6>

          <span>Name :</span>
          <span style={{ float: "inline-end" }}>{data?.distributor?.name}</span>
          <br></br>

          <span>Unique ID :</span>
          <span style={{ float: "inline-end" }}>
            {data?.distributor?.user_id}
          </span>
          <br></br>

          <span>Address :</span>
          <span style={{ float: "inline-end" }}>
            {data?.distributor?.district},{data?.distributor?.state}
          </span>
          <br></br>
          <span>Mobile :</span>
          <span style={{ float: "inline-end" }}>
            {data?.distributor?.mobile}
          </span>
          <br></br>
        </div>
        <div style={{ marginLeft: 15, marginRight: 15 }}>
          <h6>Contractor Details</h6>
          <span>Name :</span>
          <span style={{ float: "inline-end" }}>{data?.user?.name}</span>
          <br></br>

          <span>Unique ID :</span>
          <span style={{ float: "inline-end" }}>{data?.user?.user_id}</span>
          <br></br>
          <span>Address :</span>
          <span style={{ float: "inline-end" }}>
            {data?.user?.district}, {data?.user?.state}
          </span>
          <br></br>
          <span>Mobile :</span>
          <span style={{ float: "inline-end" }}>{data?.user?.mobile}</span>
          <br></br>
        </div>
        <div>
          <h6 style={statusOffcanvas}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px",
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
          {permissionForRequestOrder?.action && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10px",
                marginLeft: "13px",
                marginRight: "10px",
                padding: "15px",
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
          )}
        </div>
        {isRejectOrder && (
          <div className="reject-modal-confirm">
            <div className="close " onClick={() => setIsRejectOrder(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M25.3331 6.66707L6.6665 25.3337M6.66642 6.66699L25.333 25.3336"
                  stroke="#393939"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="reject-modal-main">
                <textarea
                  name="comment" // Make sure the name is correct
                  rows="4"
                  className="form-control"
                  maxLength="30"
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Comment"
                ></textarea>

                {formik.touched.comment && formik.errors.comment ? (
                  <div className="error">{formik.errors.comment}</div>
                ) : null}
                <br />
                <button
                  type="submit"
                  className="btn bg-blue w-100"
                  style={{ flex: 1, width: "calc(50% - 5px)" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </Offcanvas>
    </>
  );
}
