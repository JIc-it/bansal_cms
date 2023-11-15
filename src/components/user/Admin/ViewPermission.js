import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const ViewPermission = ({
  open,
  setOpen,

}) => {
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

  return (
    <Offcanvas
      show={true}
      onHide={() => {
        setOpen(false);
      }}
      placement="end"
      style={{ overflow: "auto" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      
        <>
          <div className="ms-4">
            <h4>Permission</h4>
            <table>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </table>
          </div>
        </>
      
    </Offcanvas>
  );
};

export default ViewPermission;
