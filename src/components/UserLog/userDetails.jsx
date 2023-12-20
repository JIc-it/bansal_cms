// import Offcanvas from "react-bootstrap/Offcanvas";
// import React, { useState } from "react";

// const offcanvasStyle = {
//   width: "365px",
//   height: "145px",
//   backgroundColor: "lightgray",
//   display: "flex",
//   marginLeft: 18,
//   marginTop: 20,
//   flexDirection: "column",
// };

// const statusOffcanvas = {
//   width: "365px",
//   height: "80px",
//   marginLeft: 18,
//   marginTop: 30,
//   borderRadius: 8,
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   backgroundColor: "#F2F2F2",
// };

// export default function UserDetails({ data, open, setOpen }) {
//   const [showOffcanvas, setShowOffcanvas] = useState(open);

//   const handleCloseOffcanvas = () => {
//     setShowOffcanvas(false);
//     setOpen(null);
//   };

//   const valuesChanged = data.value_before !== data.value_after;
//   console.log(valuesChanged);

//   const renderFields = (label, beforeValue, afterValue) => {
//     return (
//       <>
//         <span>{label}:</span>
//         <span style={{ float: "inline-end" }}>{beforeValue}</span>
//         <br></br>
//         <span>{label}:</span>
//         <span style={{ float: "inline-end" }}>{afterValue}</span>
//         <br></br>
//       </>
//     );
//   };

//   return (
//     <Offcanvas
//       show={showOffcanvas}
//       onHide={handleCloseOffcanvas}
//       placement="end"
//       style={{ overflow: "auto" }}
//     >
//       <Offcanvas.Header closeButton>
//         <Offcanvas.Title></Offcanvas.Title>
//       </Offcanvas.Header>

//       <div style={{ marginLeft: 15, marginRight: 15 }}>
//         <h6>Before Value</h6>
//         {valuesChanged && (
//           <>
//             <span>Name:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.name}</span>
//             <br></br>
//             <span>role:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.role}</span>
//             <br></br>
//             <span>Email:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.email}</span>
//             <br></br>
//             <span>Mobile:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.mobile}</span>
//             <br></br>
//             <span>User Id:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.user_id}</span>
//             <br></br>
//             <span>State:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.state}</span>
//             <br></br>
//             <span>District:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.district}</span>
//             <br></br>
//             <span>Redemption Window:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.is_active}</span>
//             <br></br>
//             <span>Status:</span>
//             <span style={{ float: "inline-end" }}
//               className={
//                 data.value_after[0]?.fields?.is_delete === true
//                   ? "badge badge-success light border-0"
//                   : "badge badge-danger light border-0"
//               }
//             >
//               {data.value_after[0]?.fields?.is_delete === true
//                 ? "Active"
//                 : "Inactive"}
//             </span>
//             <br></br>
//             <h6>Order</h6>
//             <span>Points:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.points}</span>
//             <br></br>
//             <span>Comments:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.comments}</span>
//             <br></br>
//             <span>Quantity:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.quantity}</span>
//             <br></br>
//             <span>User Approval:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.user_approval}</span>
//             <br></br>
//             <span>Admin Approval:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.admin_approval}</span>
//             <br></br>
//             <span>Transaction Id :</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.transaction_id}</span>
//             <br></br>
//             <span>Transaction Id Count:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.transaction_id_count}</span>
//             <br></br>
//             <h6>Id Verification</h6>
//             <span>Image:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.redeem}</span>
//             <br></br>
//             <span>Redeem:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.id_type}</span>
//             <br></br>
//             <span>ID Type:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.id_number}</span>
//             <br></br>
//             <span>ID Number:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.id_number_verified}</span>
//             <br></br>
//             <span>Name Verification:</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.redemption_history}</span>
//             <br></br>
//             <span>Redemption History :</span>
//             <span style={{ float: "inline-end" }}>{data.value_before[0]?.fields?.redemption_history}</span>
//           </>
//         )}
//       </div>
//       <br></br>
//       <div style={{ marginLeft: 15, marginRight: 15 }}>
//         <h6>After Value</h6>
//         {valuesChanged && (
//           <>
//             <h6>Id Verification</h6>
//             <span>Image:</span>
//             <span style={{ float: "inline-end" }}>{data.value_after[0]?.fields?.redeem}</span>
//             <br></br>
//             <span>Redeem:</span>
//             <span style={{ float: "inline-end" }}>{data.value_after[0]?.fields?.id_type}</span>
//             <br></br>
//             <span>ID Type:</span>
//             <span style={{ float: "inline-end" }}>{data.value_after[0]?.fields?.id_number}</span>
//             <br></br>
//             <span>ID Number:</span>
//             <span style={{ float: "inline-end" }}>{data.value_after[0]?.fields?.id_number_verified}</span>
//             <br></br>
//             <span>Name Verification:</span>
//             <span style={{ float: "inline-end" }}>{data.value_after[0]?.fields?.redemption_history}</span>
//             <br></br>
//             <span>Redemption History :</span>
//             <span style={{ float: "inline-end" }}>{data.value_after[0]?.fields?.redemption_history}</span>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//           </>
//         )}
//       </div>
//     </Offcanvas>
//   );
// }




import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";

const StyledOffcanvas = styled(Offcanvas)`
  overflow: auto;
`;

const UserDetails = ({ data, open, setOpen }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(open);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setOpen(null);
  };

  const renderFieldValues = (label, beforeValue, afterValue) => (
    <>
     <div>
        <span>{label} (Before):</span>
        <span style={{ float: "inline-end" }}>{beforeValue}</span>
      </div>
      <div>
        <span>{label} (After):</span>
        <span style={{ float: "inline-end" }}>{afterValue}</span>
      </div>
    </>
  );

  const renderEventDetails = () => {
    return (
      <>
        <h6>Id Verification</h6>
        {renderFieldValues("Redeem", data.value_before[0]?.fields?.redeem, data.value_after[0]?.fields?.redeem)}
        {renderFieldValues("ID Type", data.value_before[0]?.fields?.id_type, data.value_after[0]?.fields?.id_type)}
        {renderFieldValues("ID Number", data.value_before[0]?.fields?.id_number, data.value_after[0]?.fields?.id_number)}
        {renderFieldValues("ID Verified", data.value_before[0]?.fields?.id_number_verified, data.value_after[0]?.fields?.id_number_verified)}
        {renderFieldValues("Redemption History",data.value_before[0]?.fields?.redemption_history,data.value_after[0]?.fields?.redemption_history)}
      </>
    );
  };

  const renderAdvertisementDetails = () => {
    return (
      <>
        <h6>Advertisement Details</h6>
        {renderFieldValues("Redemption Window", data.value_before[0]?.fields?.is_active, data.value_after[0]?.fields?.is_active)}      </>
    );
  };

  const renderPurchaseTMTOrder = () => {
    return (
      <>
        <h6>Oder Details</h6>
        {renderFieldValues("Points", data.value_before[0]?.fields?.points, data.value_after[0]?.fields?.points)}
        {renderFieldValues("Comments", data.value_before[0]?.fields?.comments, data.value_after[0]?.fields?.comments)}
        {renderFieldValues("Quantity", data.value_before[0]?.fields?.quantity, data.value_after[0]?.fields?.quantity)}
        {renderFieldValues("User Approval", data.value_before[0]?.fields?.user_approval, data.value_after[0]?.fields?.user_approval)}
        {renderFieldValues("Admin Approval", data.value_before[0]?.fields?.admin_approval, data.value_after[0]?.fields?.admin_approval)}
        {renderFieldValues("Transaction Details", data.value_before[0]?.fields?.transaction_id, data.value_after[0]?.fields?.transaction_id)}
        {renderFieldValues("Transaction ID Count", data.value_before[0]?.fields?.transaction_id_count, data.value_after[0]?.fields?.transaction_id_count)}
      </>
    );
  };

  const renderUserDetails = () => {
    return (
      <>
        <h6>User Details</h6>
        {renderFieldValues("Name", data.value_before[0]?.fields?.name, data.value_after[0]?.fields?.name)}
        {renderFieldValues("Role", data.value_before[0]?.fields?.role, data.value_after[0]?.fields?.role)}
        {renderFieldValues("Email", data.value_before[0]?.fields?.email, data.value_after[0]?.fields?.email)}
        {renderFieldValues("Mobile", data.value_before[0]?.fields?.mobile, data.value_after[0]?.fields?.mobile)}
        {renderFieldValues("User Id", data.value_before[0]?.fields?.user_id, data.value_after[0]?.fields?.user_id)}
        {renderFieldValues("State", data.value_before[0]?.fields?.state, data.value_after[0]?.fields?.state)}
        {renderFieldValues("District", data.value_before[0]?.fields?.district, data.value_after[0]?.fields?.district)}
      </>
    );
  };

  const getModelDetails = () => {
    switch (data.value_before[0]?.model) {
      case "purchase.event":
        return renderEventDetails();
      case "advertisement.advertisement":
        return renderAdvertisementDetails();
      case "purchase.tmtorder":
        return renderPurchaseTMTOrder();
      case "account.user":
        return renderUserDetails();
      default:
        return null;
    }
  };

  return (
    <StyledOffcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>

      <div style={{ marginLeft: 15, marginRight: 15 }}>
        {getModelDetails()}
      </div>
    </StyledOffcanvas>
  );
};

export default UserDetails;
