import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from "../axiosHandle/authHandle";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  loginRequest,
  verifyAccessToken,
  refreshAccessToken,
} from "../axiosHandle/authHandle";
import { toast } from "react-toastify";

const CreaateUser = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const [msg, setMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email id is required"),
      password: Yup.string().max(50).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const data = {
          email: values.email,
          password: values.password,
        };
        const { access, refresh, role } = await loginRequest(data);
        if (access) {
          console.log(access, "access_token first");
          localStorage.setItem("access_token", access);
          localStorage.setItem("refresh_token", refresh);
          localStorage.setItem("role", role);
          navigate("/user-dashboard");
          console.log("sucess");
        } else {
          toast.error("Login error");
        }
      } catch (err) {
        console.log(err);
        helpers.setStatus({ success: false });
        helpers.setErrors({
          submit: err.response?.data?.error || "Login Failed.",
        });
        helpers.setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    document.getElementById("loginForm").autocomplete = "off";
    const checkTokens = async () => {
      const existingAccessToken = localStorage.getItem("access_token");
      const existingRefreshToken = localStorage.getItem("refresh_token");

      if (existingAccessToken && existingRefreshToken) {
        const isAccessTokenValid = await verifyAccessToken();

        if (isAccessTokenValid) {
          navigate("/user-dashboard");
        } else {
          try {
            const newAccessToken = await refreshAccessToken();

            if (newAccessToken) {
              localStorage.setItem("access_token", newAccessToken);
              navigate("/user-dashboard");
            }
          } catch (refreshError) {
            const refresh = localStorage.getItem("refresh_token");
            if (refresh) {
              const data = { refresh };
              logoutRequest(data);
            }
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            console.error("Error refreshing access token:", refreshError);
          }
        }
      }
    };

    checkTokens();
  }, [navigate]);

  return (
    <div
      style={{
        // alignItems: "center",
        justifyContent: "center",
        display: "flex",
        padding: "1rem",
        // position: "relative",
        // top: "70px",
      }}
    >
      <div class="login-containerr">
        <img className="loginLogo" src="/assets/images/bansal_logo.png" />
        <p className="banTxt">Bansal TMT Sariya Loyalty Management</p>
        {/* <form class="login-formm"> */}
        <form
          id="loginForm"
          onSubmit={formik.handleSubmit}
          autoComplete="off"
          style={{ position: "relative", top: 50 }}
        >
          <h2 style={{ color: "#fff" }}>Login</h2>
          <div class="form-groupp">
            <input
              type="text"
              className="form-control form-control"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
              placeholder="Unique id"
              maxLength={50}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div class="form-groupp">
            <input
              type={showPassword ? "text" : "password"}
              id="dz-password"
              className="form-control"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
              placeholder="Password"
              maxLength={20}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          {/* <button type="button" onClick={handleLogin}>Login</button> */}
          <div className="col-8 text-end">
            <button
              className="btn btn-primary btn-sm"
              type="submit"
              id="add-points-button"
              // onClick={handleLogin}
            >
              <i className="fa-regular fa-user" /> Login
            </button>
          </div>
          {formik.errors.submit && (
            <div className="error my-2 text-center">{formik.errors.submit}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreaateUser;
