import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { createContractor } from "../../../axiosHandle/userHandle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Loader } from "react-simple-widgets";
import { toast } from "react-toastify";

const offcanvasStyle = {
  width: "365px",
  height: "100%",
  display: "flex",
  marginLeft: 18,
  marginTop: 20,
  flexDirection: "column",
};

export default function AddPointDistributorPoppUp({
  open,
  setOpen,
  setIsContractorAdded,
  isContractorAdded,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    points: Yup.string()
      .required("Points is required")
      .matches(/^\d{1,4}$/, "Points must be up to 4 digits"), // Validation for up to 4 digits
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
          const data = {
            points: values.points,
          };

          const contractorData = await createContractor(data);
          if (contractorData) {
            setIsContractorAdded(!isContractorAdded);
            toast.success("Distributor created successfully!");
            setOpen(false);
            setIsLoading(false);
          } else {
            console.error(
              "Error while creating Distributor:",
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
          <h5>Distributor Details</h5>
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
                  <span>abahuja</span>
                  <span>9452346</span>
                  <span>9456452346</span>
                  <span>6200 pts</span>
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

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              flex: 1,
              margin: "7px 0",
              padding: 0,
              width: "100%",
            }}
          >
            {isLoading ? <Loader /> : "Confirm"}
          </button>
        </div>
      </form>
    </Offcanvas>
  );
}
