import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  getAllLocations,
  getAllStates,
} from "../../../axiosHandle/commonServicesHandle";
import { handleUserResetPassword } from "../../../axiosHandle/userHandle";
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

export default function SalesResetPassword({ open, setOpen, userDatail }) {
  const [isLoading, setIsLoading] = useState(false);
  const [locationList, setLocationList] = useState();
  const [stateList, setStateList] = useState();

  useEffect(() => {
    getAllLocations()
      .then((data) => {
        setLocationList(data.results);
      })
      .catch((error) => {
        console.error("Error fetching lead data:", error);
      });
    getAllStates()
      .then((data) => {
        setStateList(data.results);
      })

      .catch((error) => {
        console.error("Error fetching lead data:", error);
      });
  }, []);

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must contain at least 8 characters, at least one uppercase letter, lowercase letter, special character, and number"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      if (!isLoading) {
        try {
          const data = {
            new_password: values.password,
            confirm_password: values.confirmPassword,
          };

          const resetData = await handleUserResetPassword(userDatail, data);
          if (resetData) {
            toast.success("Reset password successfully!");
            setOpen(false);
            setIsLoading(false);
          } else {
            console.error("Error while creating Admin:", resetData.error);
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
      ></Offcanvas.Header>
      <form onSubmit={formik.handleSubmit}>
        <div style={offcanvasStyle}>
          <h5 style={{ marginTop: 10 }}>Reset Password</h5>
          <div style={{ marginTop: 7 }}>
            <input
              type="text"
              placeholder="New Password"
              name="password"
              className="form-control form-control-sm"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <div style={{ marginTop: 7 }}>
            <input
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="form-control form-control-sm"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="error">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>
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
