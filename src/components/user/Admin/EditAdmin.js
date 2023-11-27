import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Table } from "reactstrap";
import {
  getAllLocations,
  getAllStates,
} from "../../../axiosHandle/commonServicesHandle";
import {
  adminupdateuser,
  adminpermissionupdateuser,
} from "../../../axiosHandle/userHandle";
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

export default function EditAdmin({
  open,
  setOpen,
  setIsAdminAdded,
  isAdminAdded,
  data,
  userdata,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [locationList, setLocationList] = useState();
  const [stateList, setStateList] = useState();
  const queryParams_id = new URLSearchParams(window.location.search).get("id");
  const [permission, setPermissions] = useState(data);
  let passpermission = { permission: permission };

  const handleCheckboxChange = (category, action) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [category]: {
        ...prevPermissions[category],
        [action]: !prevPermissions[category][action],
      },
    }));
  };

  const handlepermissionchange = (id, data) => {
    adminpermissionupdateuser(id, data)
      .then((res) => console.log(res))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

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
  });

  const formik = useFormik({
    initialValues: {
      name: userdata.name,
      email: userdata.email,
      mobile: userdata.mobile,
      district: { id: userdata.district_id, name: userdata.district },
      state: { id: userdata.state_id, name: userdata.state },
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const datas = {
        name: values.name,
        email: values.email,
        mobile: values.mobile,
        district: values.district.id,
        state: values.state.id,
      };

      handlepermissionchange(queryParams_id, passpermission);

      try {
        await adminupdateuser(queryParams_id, datas).then((res) => {
          if (res.status === 200) {
            toast.success("Admin Updated successfully!");
            setIsAdminAdded(!isAdminAdded);
            setOpen(false);
          } else {
            console.error("Error while creating Admin:");
          }
        });
      } catch (err) {
        console.log(err);
        err.response.data.email && toast.error(err.response.data.email[0]);
        err.response.data.mobile && toast.error(err.response.data.mobile[0]);
      } finally {
        setIsLoading(false);
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

  return (
    <Offcanvas
      show={open}
      onHide={handleCloseOffcanvas}
      placement="end"
      style={{ overflow: "auto" }}
      className="admin-permisiion-offcanvas"
    >
      <Offcanvas.Header
        // style={{ marginLeft: 345 }}
        closeButton
        onClick={handleCloseOffcanvas}
      >
        {/* <Offcanvas.Title>Reward Product Details</Offcanvas.Title> */}
      </Offcanvas.Header>
      <form onSubmit={formik.handleSubmit} style={{ overflowY: "auto" }}>
        <div style={offcanvasStyle}>
          <h5>Admin Details</h5>
          <div style={{ marginTop: 7 }}>
            <input
              type="text"
              placeholder="Name"
              className="form-control form-control-sm"
              name="name"
              defaultValue={formik.values.name}
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
              defaultValue={formik.values.district?.name}
              className=" w-100 form-control-sm form-control"
              placeholder="District"
              onChange={handleDistrictChange}
            >
              <option
                selected
                value={formik.values?.district?.name}
                id={formik.values?.district?.id}
              >
                {formik.values?.district?.name}
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
          <div style={{ marginTop: 7 }}>
            <select
              value={formik.values.state?.name}
              className=" w-100 form-control-sm form-control"
              placeholder="State"
              onChange={handleStateChange}
            >
              <option
                selected
                value={formik.values?.state?.name}
                id={formik.values?.state?.id}
              >
                {formik.values?.state?.name}
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
                <th>Action</th>
                <th>Create</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(permission)?.map((category) => (
                <tr key={category}>
                  <td>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </td>
                  {Object.keys(permission[category])
                    ?.sort()
                    .map((action) => (
                      <td className="text-center">
                        <input
                          type="checkbox"
                          checked={permission[category][action]}
                          onChange={() =>
                            handleCheckboxChange(category, action)
                          }
                        />
                      </td>
                    ))}
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
            {isLoading ? <Loader /> : "Confirm"}
          </button>
        </div>
      </form>
    </Offcanvas>
  );
}
