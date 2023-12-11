import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  getAllLocations,
  getAllStates,
} from "../../../axiosHandle/commonServicesHandle";
import { stateIdFilter, updateUser } from "../../../axiosHandle/userHandle";
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

export default function EditEngineer({
  open,
  setOpen,
  setIsUpdated,
  isUpdated,
  userId,
  userData,
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
      .matches(/^[0-9]{10}$/, "Mobile must be a 10-digit number")
      .required("Mobile is required"),
    // district: Yup.mixed().test(
    //   "isDistrictSelected",
    //   "District is required",
    //   function (value) {
    //     return value && value.id !== "0" && value.name !== "District";
    //   }
    // ),
    // state: Yup.mixed().test(
    //   "isStateSelected",
    //   "state is required",
    //   function (value) {
    //     return value && value.id !== "0" && value.name !== "State";
    //   }
    // ),
  });

  const formik = useFormik({
    initialValues: {
      name: userData.name,
      email: userData.email,
      mobile: userData.mobile,
      district: { id: "0", name: "District" },
      state: { id: "0", name: "state" },
      // password: "",
      // confirmPassword: "",
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
            district:
              values.district.id != "0"
                ? values.district.id
                : userData?.district?.id,
            state:
              values.state.id != "0" ? values.state.id : userData?.state?.id,
          };

          const contractorData = await updateUser(userId, data);
          console.log(contractorData);
          if (contractorData) {
            setIsUpdated(!isUpdated);
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

  const handleDistrictChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const id = selectedOption.getAttribute("id");
    const districtName = e.target.value;

    formik.setValues({
      ...formik.values,
      district: { id, name: districtName },
    });
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
      >
      </Offcanvas.Header>
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
              <option id={userData?.state?.id}>
                {userData?.state?.state}
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
              <option disabled={true} value="" id={userData?.district?.id}>
                {userData?.district?.district}
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
