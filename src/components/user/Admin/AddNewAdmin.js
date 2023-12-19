import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  getAllLocations,
  getAllStates,
} from "../../../axiosHandle/commonServicesHandle";
import { createAdmin, stateIdFilter } from "../../../axiosHandle/userHandle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Loader } from "react-simple-widgets";
import { toast } from "react-toastify";

const offcanvasStyle = {
  height: "100%",
  display: "flex",
  padding: "18px",
  flexDirection: "column",
};
export default function AddNewAdmin({
  open,
  setOpen,
  setIsAdminAdded,
  isAdminAdded,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [locationList, setLocationList] = useState();
  const [stateList, setStateList] = useState();

  const [permissions, setPermissions] = useState({
    order_requests: {
      create: false,
      update: false,
      action: false,
      delete: false,
    },
    lead_requests: {
      create: false,
      update: false,
      action: false,
      delete: false,
    },
    points_orders: {
      create: false,
      update: false,
      action: false,
      delete: false,
    },
    points_leads: {
      create: false,
      update: false,
      action: false,
      delete: false,
    },
    reward_products: {
      create: false,
      update: false,
      action: false,
      delete: false,
    },
    redemptions: {
      create: false,
      update: false,
      action: false,
      delete: false,
    },
    redemptions_window: {
      action: false,
    },
    user: {
      create: false,
      update: false,
      action: false,
      delete: false,
    },
    promotions: {
      create: false,
      update: false,
      action: false,
      delete: false,
    },
  });

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

    password1: Yup.string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must contain at least 8 characters, at least one uppercase letter, lowercase letter, special character, and number"
      ),
    password2: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password1")], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      district: { id: "0", name: "District" },
      state: { id: "0", name: "state" },
      password1: "",
      password2: "",
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
            password: values.password1,
            confirm_password: values.password2,
            district: values.district.id,
            state: values.state.id,
            permission: permissions,
          };

          const adminData = await createAdmin(data);

          if (adminData) {
            setIsAdminAdded(!isAdminAdded);
            toast.success("Admin created successfully!");
            setOpen(false);
            setIsLoading(false);
            window.location.reload();
          } else {
            toast.error("Admin Creation failed !");
            console.error("Error while creating Admin:", adminData.error);
            setIsLoading(false);
          }
          setIsLoading(false);
        } catch (err) {
          console.log(err);
          toast.error(err.response.data.error);
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
      district: { id: "0", name: "District" }, // Set district to its initial value
    });
  };

  const handleCheckboxChange = (category, action) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [category]: {
        ...prevPermissions[category],
        [action]: !prevPermissions[category][action],
      },
    }));
  };

  return (
    <Offcanvas
      show={open}
      onHide={handleCloseOffcanvas}
      placement="end"
      style={{ overflow: "auto" }}
      className="admin-permisiion-offcanvas"
    >
      <Offcanvas.Header
        closeButton
        onClick={handleCloseOffcanvas}
      ></Offcanvas.Header>
      <form onSubmit={formik.handleSubmit} style={{ overflowY: "auto" }}>
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
              name="password1"
              className="form-control form-control-sm"
              value={formik.values.password1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password1 && formik.errors.password1 ? (
              <div className="error">{formik.errors.password1}</div>
            ) : null}
          </div>
          <div style={{ marginTop: 7 }}>
            <input
              type="text"
              name="password2"
              placeholder="Confirm Password"
              className="form-control form-control-sm"
              value={formik.values.password2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password2 && formik.errors.password2 ? (
              <div className="error">{formik.errors.password2}</div>
            ) : null}
          </div>
          <h5 style={{ marginTop: 10 }}>Permission</h5>
          <Table bordered className="my-2">
            <thead className="text-center">
              <tr>
                <th>Section</th>
                <th>Create</th>
                <th>Update</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(permissions)?.map((category) => (
                <tr key={`category-${category}`}>
                  <td>
                    {category.replace(/_/g, " ").charAt(0).toUpperCase() +
                      category.replace(/_/g, " ").slice(1)}
                  </td>
                  {Object.keys(permissions[category])?.map((action) => {
                    let permissionCheckBox =
                      category === "redemptions_window" ? (
                        <>
                          <td></td>
                          <td></td>
                          <td
                            className="text-center"
                            key={`category-action${action}`}
                          >
                            <input
                              type="checkbox"
                              checked={permissions[category][action]}
                              onChange={() =>
                                handleCheckboxChange(category, action)
                              }
                            />
                          </td>
                          <td></td>
                        </>
                      ) : (
                        <td
                          className="text-center"
                          key={`category-action${action}`}
                        >
                          <input
                            type="checkbox"
                            checked={permissions[category][action]}
                            onChange={() =>
                              handleCheckboxChange(category, action)
                            }
                          />
                        </td>
                      );
                    return permissionCheckBox;
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "100%",
            }}
          >
            {isLoading ? <Loader /> : "Add New Admin"}
          </button>
        </div>
      </form>
    </Offcanvas>
  );
}
