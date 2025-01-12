import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import { updateLeadRequest } from "../../../axiosHandle/dashboardHandle";
import { useFormik } from "formik";
import * as Yup from "yup";
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

export default function LeadDetails({
  open,
  data,
  setOpen,
  permissionForRequestLead,
  setIsRefetch,
  isRefetch,
}) {
  const [showOffcanvas, setShowOffcanvas] = useState(open);
  const [isRejectLead, setIsRejectLead] = useState(false);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setOpen(null);
  };

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
        updateLeadRequest(data.id, {
          action_type: "reject",
          comments: values.comment,
        })
          .then((data) => {
            if (data) {
              toast.success("Lead rejected successfully");
              handleCloseOffcanvas();
              setIsRefetch(!isRefetch);
            }
          })
          .catch((error) => {
            console.error("Error fetching Engineer data:", error);
          });
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.error);
        // err.response.data.email && toast.error(err.response.data.email[0]);
        // err.response.data.mobile && toast.error(err.response.data.mobile[0]);
      }
    },
  });

  const handleleadrequest = async (req) => {
    await updateLeadRequest(data.id, { action_type: req })
      .then((res) => {
        if (res.status === 200) {
          setIsRefetch(!isRefetch);
          toast.success("Lead accepted successfully");
        }
      })
      .catch((error) => {
        console.error("Error while fetching:", error);
        throw error;
      });
  };

  const handleRequest = (req) => {
    if (req === "reject") {
      setIsRejectLead(true);
    } else {
      handleleadrequest(req);
      handleCloseOffcanvas();
    }
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
      <br></br>
      <div style={{ marginLeft: 15, marginRight: 15 }}>
        <h6>Transaction Details</h6>
        <span>Admin Status :</span>
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
        {/* <span>Distributor Status :</span>
        <span style={{ float: 'inline-end', position:'relative', left:62, padding:2 }} className="badge badge-success light border-0">{data.user_approval}</span>
        <br></br> */}
        <span>Transaction ID :</span>
        <span style={{ float: "inline-end" }}>{data.referral_id}</span>
        <br></br>
        <span>Date & Time :</span>
        <span style={{ float: "inline-end" }}>
          {" "}
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
      <br></br>
      <div style={{ marginLeft: 15, marginRight: 15 }}>
        <h6>Lead Details</h6>
        <span>Name :</span>
        <span style={{ float: "inline-end" }}>{data?.name}</span>
        <br></br>
        <span>Mobile :</span>
        <span style={{ float: "inline-end" }}>{data.mobile_no}</span>
        <br></br>
        <span>Site Location :</span>
        <span style={{ float: "inline-end" }}>{data.site_location}</span>
        <br></br>
      </div>
      <br></br>
      <div style={{ marginLeft: 15, marginRight: 15 }}>
        <h6>Referrer Details</h6>
        <span>Name :</span>
        <span style={{ float: "inline-end" }}>{data?.user?.name}</span>
        <br></br>
        <span>Unique ID :</span>
        <span style={{ float: "inline-end" }}>{data.user?.user_id}</span>
        <br></br>
        <span>Location :</span>
        <span style={{ float: "inline-end" }}>
          {data?.user?.district}, {data?.user?.state}
        </span>
        <br></br>
        <span>Mobile :</span>
        <span style={{ float: "inline-end" }}>{data.user?.mobile}</span>
        <br></br>
      </div>
      <br></br>
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
              <h5>{data.order} Tons</h5>
            </div>
            <div className="divider-line"></div>
            <div>
              <span>Loyalty Points</span>
              <h5>{data.points} Pts</h5>
            </div>
          </div>
        </h6>
        {permissionForRequestLead?.action && (
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
        )}
      </div>
      {isRejectLead && (
        <div className="reject-modal-confirm">
          <div className="close " onClick={() => setIsRejectLead(false)}>
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
  );
}
