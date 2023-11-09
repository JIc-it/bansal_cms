import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Table } from "reactstrap";
import {
  getAllLocations,
  getAllStates,
} from "../../../axiosHandle/commonServicesHandle";
import { createContractor } from "../../../axiosHandle/userHandle";
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
export default function EditSales({
  open,
  setOpen,
  setIsAdminAdded,
  isAdminAdded,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [locationList, setLocationList] = useState();
  const [stateList, setStateList] = useState();

  const initialPermissions = [
    {
      name: "Leads",
      create: false,
      view: false,
      edit: false,
      delete: false,
    },
    {
      name: "Points",
      create: false,
      view: false,
      edit: false,
      delete: false,
    },
    {
      name: "Rewards",
      create: false,
      view: false,
      edit: false,
      delete: false,
    },
    {
      name: "Mobile",
      create: false,
      view: false,
      edit: false,
      delete: false,
    },
  ]
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
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile is required"),
    district: Yup.mixed().test(
      "isDistrictSelected",
      "District is required",
      function (value) {
        return value && value.id !== "0" && value.name !== "District";
      }
    ),
    state: Yup.mixed().test(
      "isStateSelected",
      "state is required",
      function (value) {
        return value && value.id !== "0" && value.name !== "State";
      }
    ),

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
      setIsLoading(true);
      if (!isLoading) {
        try {
          const data = {
            name: values.name,
            email: values.email,
            mobile: values.mobile,
            password: values.password,
            district_name: values.district,
            state_name: values.state,
          };

          const adminData = await createContractor(data);
          console.log(adminData);
          if (adminData) {
            setIsAdminAdded(!isAdminAdded);
            toast.success("Sales created successfully!");
            setOpen(false);
            setIsLoading(false);
          } else {
            console.error(
              "Error while creating Sales:",
              adminData.error
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

  const handleDistrictChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const id = selectedOption.getAttribute("id");
    const districtName = e.target.value;

    formik.setValues({
      ...formik.values,
      district: { id, name: districtName },
    });
  };

  const handleStateChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const id = selectedOption.getAttribute("id");
    const stateName = e.target.value;

    formik.setValues({
      ...formik.values,
      state: { id, name: stateName },
    });
  };

  const [permissions, setPermissions] = useState(initialPermissions);

  const handleCheckboxChange = (index, option) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[index][option] = !updatedPermissions[index][option];
    setPermissions(updatedPermissions);
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
          <h5>Admin Details</h5>
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
                  return <option id={item.id}>{item.district_name}</option>;
                })}
            </select>
            {formik.touched.district && formik.errors.district ? (
              <div className="error">{formik.errors.district}</div>
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
          <h5 style={{ marginTop: 10 }}>Permission</h5>
          <Table bordered className="my-2">
            <thead className="text-center">
              <tr>
                <th>Section</th>
                <th>Create</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((permission, index) => (
                <tr key={permission.name} className="text-center">
                  <td>{permission.name}</td>
                  <td style={{padding: '-0.0625rem 0.625rem'}}>
                    <input
                      type="checkbox"
                      checked={permission.create}
                      onChange={() => handleCheckboxChange(index, "create")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={permission.view}
                      onChange={() => handleCheckboxChange(index, "view")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={permission.edit}
                      onChange={() => handleCheckboxChange(index, "edit")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={permission.delete}
                      onChange={() => handleCheckboxChange(index, "delete")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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
