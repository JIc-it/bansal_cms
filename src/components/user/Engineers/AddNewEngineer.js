import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  getAllLocations,
  getAllStates,
} from "../../../axiosHandle/commonServicesHandle";
import { createUser, stateIdFilter } from "../../../axiosHandle/userHandle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Loader } from "react-simple-widgets";
import { toast } from "react-toastify";
import { passwordRegex } from "../../../helper";

const offcanvasStyle = {
  width: "365px",
  height: "100%",
  display: "flex",
  marginLeft: 18,
  marginTop: 20,
  flexDirection: "column",
};
export default function AddNewEngineer({
  open,
  setOpen,
  setIsEngineerAdded,
  isEngineerAdded,
}) {
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

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .max(20, "Name must be at most 20 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
      mobile: Yup.string()
      .required("Mobile is required")
      .matches(/^\d{10}$/, "Mobile must be a 10-digit number"),
    district: Yup.mixed().test(
      "isDistrictSelected",
      "District is required",
      function (value, context) {
        const { parent } = context;
        const stateValue = parent.state;

        // Check if both state and district are not selected
        if (
          (!stateValue ||
            stateValue.id === "0" ||
            stateValue.name === "State") &&
          (!value || value.id === "0" || value.name === "District")
        ) {
          return this.createError({
            path: this.path,
            message: "District is required",
          });
        }

        // Check if the state is selected before validating the district
        if (
          !stateValue ||
          stateValue.id === "0" ||
          stateValue.name === "State"
        ) {
          return this.createError({
            path: this.path,
            message: "Please select a state",
          });
        }

        return value && value.id !== "0" && value.name !== "District"
          ? true
          : this.createError({
            path: this.path,
            message: "District is required",
          });
      }
    ),
    state: Yup.mixed().test(
      "isStateSelected",
      "State is required",
      function (value) {
        return value && value.id !== "0" && value.name !== "State";
      }
    ),

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
      name: "",
      email: "",
      mobile: "",
      district: { id: "0", name: "District" },
      state: { id: "0", name: "state" },
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      if (!isLoading) {
        try {
          const data = {
            name: values.name,
            email: values.email,
            mobile: values.mobile,
            password1: values.password,
            password2: values.confirmPassword,
            district: values.district.id,
            state: values.state.id,
            role: "Engineer",
          };

          const enginneerData = await createUser(data);

          if (enginneerData) {
            setIsEngineerAdded(!isEngineerAdded);
            toast.success("Engineer created successfully!");
            setOpen(false);
            setIsLoading(false);
          } else {
            console.error(
              "Error while creating Engineer:",
              enginneerData.error
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

  const handleListDistrict = (id) => {
    stateIdFilter(id)
      .then((data) => {
        setLocationList(data.results);
      })
      .catch((error) => {
        console.error("Error fetching lead data:", error);
      });
  };

  const handleDistrictChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const id = selectedOption.getAttribute("id");
    const districtName = e.target.value;

    formik.setValues({
      ...formik.values,
      district: { id, name: districtName },
    });
  };

  const handleStateChange = async (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const id = selectedOption.getAttribute("id");
    const stateName = e.target.value;
    handleListDistrict(id);

    formik.setValues({
      ...formik.values,
      state: { id, name: stateName },
    });
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
          <h5>Engineer Details</h5>
          <div style={{ marginTop: 7 }}>
            <input
              type="text"
              placeholder="Name"
              className="form-control form-control-sm"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div style={{ marginTop: 7 }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control form-control-sm"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div style={{ marginTop: 7 }}>
            <input
              type="text"
              placeholder="Mobile"
              name="mobile"
              className="form-control form-control-sm"
              value={formik.values.mobile}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (inputValue.length <= 10) {
                  const sanitizedValue = inputValue.replace(/\D/g, ""); // Remove non-digit characters
                  formik.handleChange("mobile")(sanitizedValue); // Update the formik field
                }
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <div className="error">{formik.errors.mobile}</div>
            ) : null}
          </div>
          <div style={{ marginTop: 7 }}>
            <select
              defaultValue=""
              className=" w-100 form-control-sm form-control"
              placeholder="State"
              onChange={handleStateChange}

            >
              <option disabled={true} value="" id={"0"}>
                State
              </option>
              {stateList &&
                stateList.map((ele, i) => {
                  return <option id={ele.id}>{ele.state}</option>;
                })}
            </select>
            {formik.touched.state && formik.errors.state ? (
              <div className="error">{formik.errors.state}</div>
            ) : null}
          </div>
          <div style={{ marginTop: 7 }}>
            <select
              defaultValue=""
              className=" w-100 form-control-sm form-control"
              placeholder="District"
              onChange={handleDistrictChange}
            >
              <option disabled={true} value="" id={"0"}>
                District
              </option>
              {locationList &&
                locationList.map((item, i) => {
                  return <option id={item.id}>{item.district}</option>;
                })}
            </select>
            {formik.touched.district && formik.errors.district ? (
              <div className="error">{formik.errors.district}</div>
            ) : null}
          </div>
          <h5 style={{ marginTop: 10 }}>Password</h5>
          <div style={{ marginTop: 7 }}>
            <input
              type="text"
              placeholder="Password"
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
            {isLoading ? <Loader /> : "Add New Engineer"}
          </button>
        </div>
      </form>
    </Offcanvas>
  );
}
