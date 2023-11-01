import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  getAllLocations,
  getAllStates,
} from "../../axiosHandle/commonServicesHandle";
import { createContractor } from "../../axiosHandle/userHandle";
import { useFormik } from "formik";
import * as Yup from "yup";

const offcanvasStyle = {
  width: "365px",
  height: "100%",
  // backgroundColor: 'lightgray',
  display: "flex",
  marginLeft: 18,
  marginTop: 20,
  flexDirection: "column",
};
export default function AddNewContractor({
  open,
  setOpen,
  setIsContractorAdded,
  isContractorAdded,
}) {
  const [formValues, setFormValues] = useState({
    district: { id: "0", name: "District" },
    state: { id: "0", name: "State" },
  });
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
  console.log(formValues);
  
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile is required"),
    district: Yup.string().required("District is required"),
    state: Yup.string().required("State is required"),
    password: Yup.string().required("Password is required"),
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
      try {
        const data = {
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          password: values.password,
          district_name: values.district,
          state_name: values.state,
        };

        const contractorData = await createContractor(data);
        if (contractorData) {
          setIsContractorAdded(!isContractorAdded);
          window.alert("Contractor created successfully!");
          setOpen(false);
        } else {
          console.error(
            "Error while creating Contractor:",
            contractorData.error
          );
        }
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleCloseOffcanvas = () => {
    setOpen(false);
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
        {/* <Offcanvas.Title>Reward Product Details</Offcanvas.Title> */}
      </Offcanvas.Header>
      <form onSubmit={formik.handleSubmit}>
        <div style={offcanvasStyle}>
          <h5>Reward Product Details</h5>
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
              type="number"
              placeholder="Mobile"
              name="mobile"
              className="form-control form-control-sm"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <div className="error">{formik.errors.mobile}</div>
            ) : null}
          </div>
          <div>
            <select
              defaultValue=""
              className="my-2 w-100 form-control-sm form-control"
              placeholder="District"
              onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                const id = selectedOption.getAttribute("id");
                console.log("Selected Option ID:", id);
                setFormValues({
                  ...formValues,
                  district: { id: id, name: e.target.value },
                });
              }}
            >
              <option disabled={true} value="" id={"0"}>
                District
              </option>
              {locationList &&
                locationList.map((item, i) => {
                  return <option id={item.id}>{item.district_name}</option>;
                })}
            </select>
            {/* <select
              name="district"
              className="w-100 form-control-sm form-control"
              value={formik.values.district}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option disabled={true} value="" id={"0"}>
                District
              </option>
              {locationList &&
                locationList.map((item, i) => (
                  <option key={item.id} value={item.district_name}>
                    {item.district_name}
                  </option>
                ))}
            </select> */}
          </div>
          <div>
            <select
              defaultValue=""
              className=" w-100 form-control-sm form-control"
              placeholder="State"
              onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                const id = selectedOption.getAttribute("id");
                console.log("State Option ID:", id);
                setFormValues({
                  ...formValues,
                  state: { id: id, name: e.target.value },
                });
              }}
            >
              <option disabled={true} value="" id={"0"}>
                State
              </option>
              {stateList &&
                stateList.map((ele, i) => {
                  return <option id={ele.id}>{ele.state_name}</option>;
                })}
            </select>
          </div>
          <h5 style={{ marginTop: 10 }}>Password</h5>
          <div>
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
          <div style={{ marginTop: 10 }}>
            <input
              type="text"
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
            style={{ flex: 1,
              //  margin: "0 5px",
                width: "100%" }}
          >
            Confirm
          </button>
        </div>
      </form>
    </Offcanvas>
  );
}
