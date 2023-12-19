import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { createRewardProductRequest } from "../../../axiosHandle/rewardHandle";
import { toast } from "react-toastify";

const offcanvasStyle = {
  width: "365px",
  height: "100%",
  display: "flex",
  marginLeft: 18,
  marginTop: 20,
  flexDirection: "column",
};

export default function AddReward({
  open,
  data,
  setOpen,
  isUpdated,
  setisUpdated,
}) {
  const [credentials, setCredentials] = useState({
    title: "",
    points: "",
    description: "",
    item_image: "",
    is_active: true,
  });

  const [errors, setErrors] = useState({
    title: "",
    points: "",
    description: "",
    item_image: "",
    is_active: "",
  });
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    // Validation logic
    const validationErrors = {};

    const pointsNumber = parseFloat(credentials.points);

    if (!credentials.title) {
      validationErrors.title = "Product Name is required";
    }

    if (!credentials.points || isNaN(pointsNumber) || pointsNumber <= 0) {
      validationErrors.points = "Points must be a valid number greater than 0";
    }

    if (!credentials.points || isNaN(credentials.points)) {
      validationErrors.points = "Points must be a valid number";
    }

    if (!credentials.description) {
      validationErrors.description = "Description is required";
    } else if (credentials.description.length < 30) {
      validationErrors.description =
        "Description must be at least 30 characters long";
    } else if (credentials.description.length > 30) {
      validationErrors.description =
        "Description must be at most 30 characters long";
    }

    if (!credentials.item_image) {
      validationErrors.item_image = "Product image is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      const { title, points, description, item_image, is_active } = credentials;

      const data = new FormData();
      data.append("title", title);
      data.append("points", points);
      data.append("description", description);
      data.append("item_image", item_image);
      data.append("is_active", is_active);
      data.append("thumbnail_image", item_image);

      const crt_data = await createRewardProductRequest(data);

      if (crt_data) {
        toast.success("Reward product created successfully!");
        setOpen(false);
        setisUpdated(!isUpdated);
      } else {
        console.error("Error while creating reward product:", crt_data.error);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const [showOffcanvas, setShowOffcanvas] = useState(open);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setOpen(null);
  };

  return (
    <Offcanvas
      show={showOffcanvas}
      onHide={handleCloseOffcanvas}
      placement="end"
      style={{ overflow: "auto" }}
    >
      <div style={offcanvasStyle}>
        <div style={{ display: "flex" }}>
          <h5>Reward Product Details</h5>
          <p style={{position: 'relative', left:190, cursor:"pointer"}} onClick={handleCloseOffcanvas}>
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.3336 6.66707L6.66699 25.3337M6.66691 6.66699L25.3335 25.3336" stroke="#393939" stroke-width="3" stroke-linecap="round" />
          </svg>
          </p>
        </div>

        <div style={{ marginTop: 20 }}>
          <input
            type="text"
            className="form-control"
            value={credentials.title}
            onChange={(e) => {
              setCredentials({ ...credentials, title: e.target.value });
              setErrors({ ...errors, title: "" }); // Clear the error when the input changes
            }}
            placeholder="Product Name"
            maxLength={15}
          />
          {errors.title && <p className="text-danger">{errors.title}</p>}
        </div>
        <div style={{ marginTop: 20 }}>
          <input
            type="text"
            className="form-control"
            value={credentials.points}
            onChange={(e) => {
              const values = e.target.value;
              if (values <= 800000) {
                setCredentials({ ...credentials, points: values });
              }
              if (values.includes(".")) {
                setErrors({ ...errors, points: "Decimals not allowed" });
              } else {
                setErrors({ ...errors, points: "" });
              }
            }}
            placeholder="Points"
          />
          {errors.points && <p className="text-danger">{errors.points}</p>}
        </div>
        <div style={{ marginTop: 20 }}>
          <textarea
            rows="4"
            className="form-control"
            maxLength={30}
            onChange={(e) => {
              const values = e.target.value;
              if (values.trim() !== "") {
                setCredentials({ ...credentials, description: e.target.value });
              } else if (values.trim() === "") {
                setErrors({ ...errors, description: "Space is not Allowed" });
              } else {
                setErrors({ ...errors, description: "" });
              }
            }}
            defaultValue={credentials.description}
            placeholder="Description"
          />
          {errors.description && (
            <p className="text-danger">{errors.description}</p>
          )}
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <label>Product Photo (140*140)</label>
            <input
              type="file"
              id="imageUpload"
              style={{ display: "none" }}
              onChange={async (e) => {
                const file = e.target.files[0];

                // Validate file type and size if needed

                // Validate image dimensions
                const image = new Image();
                image.src = URL.createObjectURL(file);

                await new Promise((resolve) => {
                  image.onload = () => {
                    if (image.width === 140 && image.height === 140) {
                      setCredentials({
                        ...credentials,
                        item_image: file,
                      });
                      setErrors({ ...errors, item_image: "" });
                    } else {
                      setErrors({
                        ...errors,
                        item_image: "Image dimensions must be 140x140 pixels",
                      });
                    }
                    resolve();
                  };
                });
              }}
            />
            <label
              htmlFor="imageUpload"
              className="btn btn-secondary btn-sm"
              style={{ marginLeft: 106 }}
            >
              Choose File
            </label>
            {errors.item_image && (
              <p className="text-danger">{errors.item_image}</p>
            )}
          </div>
        </div>
        <div>
          <h6>Status</h6>
          <br />
          <div
            className="form-check form-switch"
            style={{
              position: "relative",
              bottom: "35px",
              float: "inline-end",
            }}
          >
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {credentials.is_active ? "Active" : "Inactive"}
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  is_active: !credentials.is_active,
                })
              }
              defaultChecked={credentials.is_active}
              value={credentials.is_active}
            />
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
          onClick={handleCreate}
          style={{ flex: 1, margin: "0 5px", width: "100%" }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Confirm"}
        </button>
      </div>
    </Offcanvas>
  );
}
