import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";

const offcanvasStyle = {
  width: "365px",
  height: "145px",
  backgroundColor: "lightgray",
  display: "flex",
  marginLeft: 18,
  marginTop: 20,
  flexDirection: "column",
};

const statusOffcanvas = {
  width: "365px",
  height: "80px",
  marginLeft: 18,
  marginTop: 30,
  borderRadius: 8,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#F2F2F2",
};

export default function UserDetails({ data, open, setOpen }) {
  const [showOffcanvas, setShowOffcanvas] = useState(open);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setOpen(null);
  };

  const valuesChanged = data.value_before !== data.value_after;
  console.log(valuesChanged);
  return (
    <Offcanvas
      show={showOffcanvas}
      onHide={handleCloseOffcanvas}
      placement="end"
      style={{ overflow: "auto" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>

      <div style={{ marginLeft: 15, marginRight: 15 }}>
        <h6>Before Value</h6>
        {valuesChanged && (
          <>
            <span>Name:</span>
            <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.name}</span>
            <br></br>
            <span>role:</span>
            <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.role}</span>
            <br></br>
            <span>Email:</span>
            <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.email}</span>
            <br></br>
            <span>Mobile:</span>
            <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.mobile}</span>
            <br></br>
            <span>User Id:</span>
            <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.user_id}</span>
            <br></br>
            <span>State:</span>
            <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.state}</span>
            <br></br>
            <span>District:</span>
            <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.district}</span>
            <br></br>
            <span>Status:</span>
            <span style={{ float: "inline-end" }}
              className={
                data.value_after[0]?.fields?.is_delete === true
                  ? "badge badge-success light border-0"
                  : "badge badge-danger light border-0"
              }
            >
              {data.value_after[0]?.fields?.is_delete === true
                ? "Active"
                : "Inactive"}
            </span>
            <br></br>
          </>
        )}
      </div>
      <br></br>
      <div style={{ marginLeft: 15, marginRight: 15 }}>
        <h6>After Value</h6>
        {valuesChanged && (
          <>
            <span>Name:</span>
            <span style={{ float: "inline-end" }}>{data.value_after[0]?.fields?.name}</span>
            <br></br>
            <span>role:</span>
            <span style={{ float: "inline-end" }}>{data.value_after[0]?.fields?.role}</span>
            <br></br>
            <span>Email:</span>
            <span style={{ float: "inline-end" }}>{data.value_after[0]?.fields?.email}</span>
            <br></br>
            <span>Mobile:</span>
            <span style={{ float: "inline-end" }}>{data.value_after[0]?.fields?.mobile}</span>
            <br></br>
            <span>User Id:</span>
            <span style={{ float: "inline-end" }}>{data.value_after[0]?.fields?.user_id}</span>
            <br></br>
            <span>State:</span>
            <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.state}</span>
            <br></br>
            <span>District:</span>
            <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.district}</span>
            <br></br>
            <span>Status:</span>
            <span style={{ float: "inline-end" }}
              className={
                data.value_after[0]?.fields?.is_delete === true
                  ? "badge badge-success light border-0"
                  : "badge badge-danger light border-0"
              }
            >
              {data.value_after[0]?.fields?.is_delete === true
                ? "Active"
                : "Inactive"}
            </span>
            <br></br>

          </>
        )}
      </div>
    </Offcanvas>
  );
}
