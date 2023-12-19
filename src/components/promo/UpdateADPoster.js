import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { updatePromotion } from "../../axiosHandle/promotionHandle";

const UpdateADPoster = ({
  showOffcanvas,
  handleCloseOffcanvas,
  selectedPromotionDetails,
  isUpdatedPromotion,
  setIsUpdatedPromotion,
}) => {
  const offcanvasStyle = {
    width: "365px",
    height: "145px",
    display: "flex",
    marginLeft: 18,
    marginTop: 20,
    flexDirection: "column",
  };

  const [selectedFileName, setSelectedFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const modifiedUrl = selectedPromotionDetails.ad_image.replace(
    "http://bansal.jicitsolution.com/assets/media/advertisements/",
    ""
  );


  const handleFileChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
      const maxSize = 328 * 180; // Max size in pixels
  
      // Check file type
      if (!allowedTypes.includes(file.type)) {
        toast.error("Please upload a PNG or JPG/JPEG file.");
        return;
      }
  
      // Check file size
      if (file.size > maxSize) {
        toast.error("Please upload an image with dimensions 328x180 or smaller.");
        return;
      }
  
      // Check image dimensions
      const img = new Image();
      img.onload = function () {
        if (img.width !== 328 || img.height !== 180) {
          toast.error("Please upload an image with dimensions 328x180 pixels.");
        } else {
          setSelectedFileName(file);
        }
      };
  
      img.src = URL.createObjectURL(file);
    }
  };


  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .max(20, "Name must be at most 20 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: selectedPromotionDetails.title,
      ad_image: selectedPromotionDetails.ad_image,
      is_active: selectedPromotionDetails.is_active,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      if (!isLoading) {
        try {
          const data = {
            title: values.name,
            ad_image: selectedFileName && selectedFileName,
            is_active: values.is_active,
          };

          const updateData = await updatePromotion(
            selectedPromotionDetails.id,
            data
          );
          console.log(updateData);
          if (updateData) {
            setIsUpdatedPromotion(!isUpdatedPromotion);
            toast.success("Promotion updated successfully!");
            handleCloseOffcanvas();
            setIsLoading(false);
          } else {
            console.error("Error while creating Contractor:", updateData.error);
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

  return (
    <Offcanvas
      show={showOffcanvas}
      onHide={handleCloseOffcanvas}
      placement="end"
      style={{ overflow: "auto" }}
    >
      <Offcanvas.Header style={{ marginLeft: 345 }} closeButton>
        {/* <Offcanvas.Title>Reward Product Details</Offcanvas.Title> */}
      </Offcanvas.Header>

      <form onSubmit={formik.handleSubmit}>
        <div style={offcanvasStyle} className="update-promotion-container">
          <h5>Add Spot - 01</h5>
          <div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>
            <div
              style={{
                marginTop: 10,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <label>Ad Poster (328*180)</label>
                <span style={{ position: 'relative', right: 40, top: 30 }}>
                  {selectedFileName.name || modifiedUrl}
                </span>
                <input
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="imageUpload"
                  className="btn bg-blue btn-sm update-btn"
                  style={{ float: 'inline-end' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2 10C2 11.8856 2 12.8284 2.58579 13.4142C3.17157 14 4.11438 14 6 14H10C11.8856 14 12.8284 14 13.4142 13.4142C14 12.8284 14 11.8856 14 10"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.99967 10.6667V2M7.99967 2L10.6663 4.91667M7.99967 2L5.33301 4.91667"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span className="mx-1"> Choose File</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <a style={{ display: "inline-block" }}><b>Status</b></a>
              </div>
              <div className="col-md-6">
                <div
                  className="form-check form-switch"
                  style={{
                    display: "flex",
                    // marginLeft: 80,
                  }}
                >
                  <span>
                    {" "}
                    {formik.values.is_active ? "Active" : "In Active"}
                  </span>
                  <input
                    style={{ marginLeft: "1rem" }}
                    className="form-check-input"
                    type="checkbox"
                    name="is_active"
                    checked={formik.values.is_active}
                    onChange={formik.handleChange}
                  />
                  <label
                    className="form-check-label d-none"
                    htmlFor="activationToggle"
                  >
                    Active
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px",
            marginLeft: "13px",
            marginRight: "10px",
          }}
        >
          <button
            className="btn btn-primary"
            style={{
              flex: 1,
              margin: "0 5px",
              width: "93%",
              marginTop: 260,
              bottom: "1rem",
              position: "absolute",
            }}
          >
            {isLoading ? <Loader /> : "Update Ad Poster"}
          </button>
        </div>
      </form>
    </Offcanvas>
  );
};

export default UpdateADPoster;
