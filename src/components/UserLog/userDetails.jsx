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
        <h6>User Details</h6>
        {valuesChanged && (
          <>
            <span>Before Value:</span>
            <span style={{ float: "inline-end" }}>{data.value_before}</span>
            <br></br>
            <span>After Value:</span>
            <span style={{ float: "inline-end" }}>{data.value_after}</span>
            <br></br>
          </>
        )}
      </div>
    </Offcanvas>
  );
}
