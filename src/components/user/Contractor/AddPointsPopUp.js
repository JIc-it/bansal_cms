import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  addUserPoints,
} from "../../../axiosHandle/userHandle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Loader } from "react-simple-widgets";
import { toast } from "react-toastify";

const offcanvasStyle = {
  width: "365px",
  height: "100%",
  // backgroundColor: 'lightgray',
  display: "flex",
  marginLeft: 18,
  marginTop: 20,
  flexDirection: "column",
};

export default function AddPointsPopUp({
  open,
  setOpen,
  userId,
  setIsContractorUpdated,
  isContractorUpdated,
  userData,
  totalPoints,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    points: Yup.string()
      .required("Points is required")
      .matches(/^\d{1,10}$/, "Points must be up to 10 digits") // Validation for up to 10 digits
      .test('maxPoints', 'Maximum 1000 points allowed', (value) => {
        return parseInt(value, 10) <= 1000;
      }),
    comments: Yup.string()
      .required("Comments is required")
      .max(50, 'Comments must be up to 50 characters'),
  });

  const formik = useFormik({
    initialValues: {
      points: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      if (!isLoading) {

        try {
          const pointsValue = parseInt(values.points, 10);
          if (pointsValue > 1000) {
            // Display a custom error message for exceeding the maximum points
            formik.setErrors({ points: 'Maximum 1000 points allowed' });
            setIsLoading(false);
            return;
          }
          const data = {
            points: values.points,
            comments: values.comments,
          };

          const contractorData = await addUserPoints(userId, data);
          if (contractorData) {
            setIsContractorUpdated(!isContractorUpdated);
            toast.success("Points added successfully!");
            setOpen(false);
            setIsLoading(false);
          } else {
            console.error(
              "Error while creating Contractor:",
              contractorData.error
            );
            setIsLoading(false);
          }
          setIsLoading(false);
        } catch (err) {
          console.log(err);
          err.response.data.email && toast.error(err.response.data.email[0]);
          err.response.data.mobile && toast.error(err.response.data.mobile[0]);
          setIsLoading(false);
        }
      }
    },
  });

  const handleCloseOffcanvas = () => {
    setOpen(false);
    setIsLoading(false);
  };

  return (
    <Offcanvas
      show={open}
      onHide={handleCloseOffcanvas}
      placement="end"
      style={{ overflow: "auto" }}
    >
      <Offcanvas.Header
        style={{ marginLeft: 345 }}
        closeButton
        onClick={handleCloseOffcanvas}
      >
      </Offcanvas.Header>
      <form onSubmit={formik.handleSubmit}>
        <div style={offcanvasStyle}>
          <h5>Contractor Details</h5>
          <div className=" depostit-card">
            <div className="depostit-card-media  style-1 ">
              <div
                className="user-email-details"
                style={{ paddingTop: 0, fontWeight: 400 }}
              >
                <div className="user-email-details-property">
                  <span>Name</span>
                  <span>Unique ID</span>
                  <span>Mobile</span>
                  <span>Total Points</span>
                </div>
                <div className="user-email-details-data">
                  <span>{userData.name}</span>
                  <span>{userData.user_id}</span>
                  <span>{userData.mobile}</span>
                  <span>{totalPoints} pts</span>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <h5 style={{ marginTop: 10 }}>Add Points</h5>
          <div style={{ marginTop: 7 }}>
            <input
              type="number"
              placeholder="Points"
              name="points"
              maxLength={10}
              className="form-control form-control-sm"
              value={formik.values.points}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.points && formik.errors.points ? (
              <div className="error">{formik.errors.points}</div>
            ) : null}
          </div>
          <div style={{ marginTop: 7 }}>
            <input
              type="text"
              placeholder="Comments"
              name="comments"
              className="form-control form-control-sm"
              value={formik.values.comments}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.comments && formik.errors.comments ? (
              <div className="error" style={{ color: 'red' }}>{formik.errors.comments}</div>
            ) : null}
          </div>
          <span
            className="my-2"
            style={{ color: "#1F86FF", fontSize: "12px", fontWeight: "400" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00065 14.6663C4.85795 14.6663 3.28661 14.6663 2.3103 13.69C1.33398 12.7137 1.33398 11.1424 1.33398 7.99967C1.33398 4.85698 1.33398 3.28563 2.3103 2.30932C3.28661 1.33301 4.85795 1.33301 8.00065 1.33301C11.1433 1.33301 12.7147 1.33301 13.691 2.30932C14.6673 3.28563 14.6673 4.85698 14.6673 7.99967C14.6673 11.1424 14.6673 12.7137 13.691 13.69C12.7147 14.6663 11.1433 14.6663 8.00065 14.6663ZM8.00065 11.833C8.27679 11.833 8.50065 11.6092 8.50065 11.333V7.33301C8.50065 7.05687 8.27679 6.83301 8.00065 6.83301C7.72451 6.83301 7.50065 7.05687 7.50065 7.33301V11.333C7.50065 11.6092 7.72451 11.833 8.00065 11.833ZM8.00065 4.66634C8.36884 4.66634 8.66732 4.96482 8.66732 5.33301C8.66732 5.7012 8.36884 5.99967 8.00065 5.99967C7.63246 5.99967 7.33398 5.7012 7.33398 5.33301C7.33398 4.96482 7.63246 4.66634 8.00065 4.66634Z"
                fill="#1F86FF"
              />
            </svg>
            Maximum 1000 Pts
          </span>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              flex: 1,
              width: "93%",
              bottom: "1rem",
              position: "absolute",
            }}
          >
            {isLoading ? <Loader /> : "Confirm"}
          </button>
        </div>
      </form>
    </Offcanvas>
  );
}
