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



// import React, { useState } from "react";
// import { Offcanvas } from "react-bootstrap";
// import styled from "styled-components";

// const StyledOffcanvas = styled(Offcanvas)`
//   overflow: auto;
// `;

// const UserDetails = ({ data, open, setOpen }) => {
//   const [showOffcanvas, setShowOffcanvas] = useState(open);

//   const handleCloseOffcanvas = () => {
//     setShowOffcanvas(false);
//     setOpen(null);
//   };

//   const renderFieldValues = (label, beforeValue, afterValue) => {
//     return (
//       <div className="row">
//         <div className="col-lg-12">
//           <span>{label} (Before):</span>
//           <span style={{ float: "inline-end" }}>{beforeValue}</span>
//         </div>
//         <div className="col-lg-12">
//           <span>{label} (After):</span>
//           <span style={{ float: "inline-end" }}>{afterValue}</span>
//         </div>
//       </div>
//     );
//   };

//   const renderLeadsDetails = () => {
//     return (
//       <>
//         <h6> User Details</h6>
//         {renderFieldValues("Name", data.value_before[0]?.fields?.name, data.value_after[0]?.fields?.name)}
//         {renderFieldValues("Order", data.value_before[0]?.fields?.order, data.value_after[0]?.fields?.order)}
//         {renderFieldValues("Points", data.value_before[0]?.fields?.points, data.value_after[0]?.fields?.points)}
//         {renderFieldValues("Mobile", data.value_before[0]?.fields?.mobile_no, data.value_after[0]?.fields?.mobile_no)}
//         {renderFieldValues("Accepted By", data.value_before[0]?.fields?.accepted_by, data.value_after[0]?.fields?.accepted_by)}
//         {renderFieldValues("Side Location", data.value_before[0]?.fields?.site_location, data.value_after[0]?.fields?.site_location)}
//         {renderFieldValues("User Approval", data.value_before[0]?.fields?.user_approval, data.value_after[0]?.fields?.user_approval)}
//         {renderFieldValues("Admin Approval", data.value_before[0]?.fields?.admin_approval, data.value_after[0]?.fields?.admin_approval)}
//         {renderFieldValues("Referral Id Count", data.value_before[0]?.fields?.referral_id_count, data.value_after[0]?.fields?.referral_id_count)}
//       </>
//     );
//   };

//   const renderIdverificationDetails = () => {
//     return (
//       <>
//         <h6>Id Verification</h6>
//         {renderFieldValues("Redeem", data.value_before[0]?.fields?.redeem, data.value_after[0]?.fields?.redeem)}
//         {renderFieldValues("ID Type", data.value_before[0]?.fields?.id_type, data.value_after[0]?.fields?.id_type)}
//         {renderFieldValues("ID Number", data.value_before[0]?.fields?.id_number, data.value_after[0]?.fields?.id_number)}
//         {/* {renderFieldValues("ID Verified", data.value_before[0]?.fields?.id_number_verified, data.value_after[0]?.fields?.id_number_verified)}
//         {renderFieldValues("Redemption History", data.value_before[0]?.fields?.redemption_history, data.value_after[0]?.fields?.redemption_history)} */}
//       </>
//     );
//   };

//   const renderAdvertisementDetails = () => {
//     return (
//       <>
//         <h6>Promotion Details</h6>
//         {renderFieldValues(
//           "Promotion Add",
//           data.value_before[0]?.fields?.is_active === true ? "Active" : "Inactive",
//           data.value_after[0]?.fields?.is_active === false ? "Inactive" : "Active"
//         )}
//       </>
//     );
//   };

//   const renderEventDetails = () => {
//     return (
//       <>
//         <h6>Event Details</h6>
//         {renderFieldValues(
//           "Redemption Window",
//           data.value_before[0]?.fields?.is_active === true ? "Active" : "Inactive",
//           data.value_after[0]?.fields?.is_active === false ? "Inactive" : "Active"
//         )}
//       </>
//     );
//   };

//   const renderPurchaseTMTOrder = () => {
//     return (
//       <>
//         <h6>Oder Details</h6>
//         {renderFieldValues("Points", data.value_before[0]?.fields?.points, data.value_after[0]?.fields?.points)}
//         {renderFieldValues("Comments", data.value_before[0]?.fields?.comments, data.value_after[0]?.fields?.comments)}
//         {renderFieldValues("Quantity", data.value_before[0]?.fields?.quantity, data.value_after[0]?.fields?.quantity)}
//         {renderFieldValues("User Approval", data.value_before[0]?.fields?.user_approval, data.value_after[0]?.fields?.user_approval)}
//         {renderFieldValues("Admin Approval", data.value_before[0]?.fields?.admin_approval, data.value_after[0]?.fields?.admin_approval)}
//         {renderFieldValues("Transaction Details", data.value_before[0]?.fields?.transaction_id, data.value_after[0]?.fields?.transaction_id)}
//         {renderFieldValues("Transaction ID Count", data.value_before[0]?.fields?.transaction_id_count, data.value_after[0]?.fields?.transaction_id_count)}
//       </>
//     );
//   };

//   const renderUserDetails = () => {
//     return (
//       <>
//         <h6>User Details</h6>
//         {renderFieldValues("Name", data.value_before[0]?.fields?.name, data.value_after[0]?.fields?.name)}
//         {renderFieldValues("Role", data.value_before[0]?.fields?.role, data.value_after[0]?.fields?.role)}
//         {renderFieldValues("Email", data.value_before[0]?.fields?.email, data.value_after[0]?.fields?.email)}
//         {renderFieldValues("Mobile", data.value_before[0]?.fields?.mobile, data.value_after[0]?.fields?.mobile)}
//         {renderFieldValues("User Id", data.value_before[0]?.fields?.user_id, data.value_after[0]?.fields?.user_id)}
//         {renderFieldValues("State", data.value_before[0]?.fields?.state, data.value_after[0]?.fields?.state)}
//         {renderFieldValues("District", data.value_before[0]?.fields?.district, data.value_after[0]?.fields?.district)}
//       </>
//     );
//   };

//   const renderRewardsDetails = () => {
//     return (
//       <>
//         <h6>Reward Details</h6>
//         {renderFieldValues("Title", data.value_before[0]?.fields?.title, data.value_after[0]?.fields?.title)}
//         {renderFieldValues("Points", data.value_before[0]?.fields?.points, data.value_after[0]?.fields?.points)}
//         {renderFieldValues("Reward Id", data.value_before[0]?.fields?.reward_id, data.value_after[0]?.fields?.reward_id)}
//         {renderFieldValues("Description", data.value_before[0]?.fields?.description, data.value_after[0]?.fields?.description)}
//         {renderFieldValues("Redeemed Times", data.value_before[0]?.fields?.times_redeemed, data.value_after[0]?.fields?.times_redeemed)}
//         {renderFieldValues("Reward Count", data.value_before[0]?.fields?.reward_id_count, data.value_after[0]?.fields?.reward_id_count)}
//       </>
//     );
//   };

//   const getModelDetails = () => {
//     switch (data.value_before[0]?.model) {
//       case "purchase.event":
//         return renderEventDetails();
//       case "advertisement.advertisement":
//         return renderAdvertisementDetails();
//       case "purchase.tmtorder":
//         return renderPurchaseTMTOrder();
//       case "account.user":
//         return renderUserDetails();
//       case "purchase.idverification":
//         return renderIdverificationDetails();
//       case "purchase.leads":
//         return renderLeadsDetails();
//       case "purchase.rewards":
//         return renderRewardsDetails();
//       default:
//         return null;
//     }
//   };

//   return (
//     <StyledOffcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
//       <Offcanvas.Header closeButton>
//         <Offcanvas.Title></Offcanvas.Title>
//       </Offcanvas.Header>

//       <div style={{ marginLeft: 15, marginRight: 15 }}>
//         {getModelDetails()}
//       </div>
//     </StyledOffcanvas>
//   );
// };

// export default UserDetails;


import React from "react";
import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";

const StyledOffcanvas = styled(Offcanvas)`
  overflow: auto;
`;

const ValuesCard = ({ label, value }) => (
  <div className="col-lg-12">
    <span>{label}:</span>
    <span style={{ float: "inline-end" }}>{value}</span>
  </div>
);

const BeforeValues = ({ data }) => (
  <div className="row">
    <h6>Before Values</h6>
    <ValuesCard label="Name" value={data.value_before[0]?.fields?.name} />
    <ValuesCard label="User Id" value={data.value_before[0]?.fields?.user_id} />
    <ValuesCard label="Role" value={data.value_before[0]?.fields?.role} />
    <ValuesCard label="Email" value={data.value_before[0]?.fields?.email} />
    <ValuesCard label="State" value={data.value_before[0]?.fields?.state} />
    <ValuesCard label="District" value={data.value_before[0]?.fields?.district} />

  </div>
);

const AfterValues = ({ data }) => (
  <div className="row">
    <h6>After Values</h6>
    <ValuesCard label="Name" value={data.value_after[0]?.fields?.name} />
    <ValuesCard label="User Id" value={data.value_before[0]?.fields?.user_id} />
    <ValuesCard label="Role" value={data.value_after[0]?.fields?.role} />
    <ValuesCard label="Email" value={data.value_after[0]?.fields?.email} />
    <ValuesCard label="State" value={data.value_after[0]?.fields?.state} />
    <ValuesCard label="District" value={data.value_after[0]?.fields?.district} />

  </div>
);

const BeforeValuesEvent = ({ data }) => (
  <div className="row">
    <h6>Before Values</h6>
    <ValuesCard label="Redemption Window" value={data.value_before[0]?.fields?.is_active === true ? "Active" : "Inactive"} />
  </div>
);

const AfterValuesEvent = ({ data }) => (
  <div className="row">
    <h6>After Values</h6>
    <ValuesCard label="Redemption Window" value={data.value_after[0]?.fields?.is_active === false ? "Inactive" : "Active"} />
  </div>
);

const BeforeValuesIdVerification = ({ data }) => (
  <div className="row">
    <h6>Before Values</h6>
    <ValuesCard label="Name" value={data.value_before[0]?.fields?.name} />
    <ValuesCard label="ID Type" value={data.value_before[0]?.fields?.id_type} />
    <ValuesCard label="ID Number" value={data.value_before[0]?.fields?.id_number} />
  </div>
);

const AfterValuesIdVerification = ({ data }) => (
  <div className="row">
    <h6>After Values</h6>
    <ValuesCard label="Name" value={data.value_after[0]?.fields?.name} />
    <ValuesCard label="ID Type" value={data.value_after[0]?.fields?.id_type} />
    <ValuesCard label="ID Number" value={data.value_after[0]?.fields?.id_number} />
  </div>
);

const BeforeValuesOrder = ({ data }) => (
  <div className="row">
    <h6>Before Values</h6>
    <ValuesCard label="Name" value={data.value_before[0]?.fields?.points} />
    <ValuesCard label="Comments" value={data.value_before[0]?.fields?.comments} />
    <ValuesCard label="Quantity" value={data.value_before[0]?.fields?.quantity} />
    <ValuesCard label="User Approval" value={data.value_before[0]?.fields?.user_approval} />
    <ValuesCard label="Admin Approval" value={data.value_before[0]?.fields?.admin_approval} />
    <ValuesCard label="Transaction ID" value={data.value_before[0]?.fields?.transaction_id} />
    <ValuesCard label="Transaction Count" value={data.value_before[0]?.fields?.transaction_id_count} />
  </div>
);

const AfterValuesOrder = ({ data }) => (
  <div className="row">
    <h6>After Values</h6>
    <ValuesCard label="Name" value={data.value_after[0]?.fields?.points} />
    <ValuesCard label="Comments" value={data.value_after[0]?.fields?.comments} />
    <ValuesCard label="Quantity" value={data.value_after[0]?.fields?.quantity} />
    <ValuesCard label="User Approval" value={data.value_after[0]?.fields?.user_approval} />
    <ValuesCard label="Admin Approval" value={data.value_after[0]?.fields?.admin_approval} />
    <ValuesCard label="Transaction ID" value={data.value_after[0]?.fields?.transaction_id} />
    <ValuesCard label="Transaction Count" value={data.value_after[0]?.fields?.transaction_id_count} />
  </div>
);

const BeforeValuesLeads = ({ data }) => (
  <div className="row">
    <h6>Before Values</h6>
    <ValuesCard label="Name" value={data.value_before[0]?.fields?.name} />
    <ValuesCard label="Order" value={data.value_before[0]?.fields?.order} />
    <ValuesCard label="Points" value={data.value_before[0]?.fields?.points} />
    <ValuesCard label="Comments" value={data.value_before[0]?.fields?.comments} />
    <ValuesCard label="Accepted BY" value={data.value_before[0]?.fields?.accepted_by} />
    <ValuesCard label="Referaal ID" value={data.value_before[0]?.fields?.referral_id} />
    <ValuesCard label="Site Location" value={data.value_before[0]?.fields?.site_location} />
    <ValuesCard label="User Approval" value={data.value_before[0]?.fields?.user_approval} />
    <ValuesCard label="Admin Approval" value={data.value_before[0]?.fields?.admin_approval} />
    <ValuesCard label="Referaal Count" value={data.value_before[0]?.fields?.referral_id_count} />
  </div>
);

const AfterValuesLeads = ({ data }) => (
  <div className="row">
    <h6>After Values</h6>
    <ValuesCard label="Name" value={data.value_after[0]?.fields?.name} />
    <ValuesCard label="Order" value={data.value_after[0]?.fields?.order} />
    <ValuesCard label="Points" value={data.value_after[0]?.fields?.points} />
    <ValuesCard label="Comments" value={data.value_after[0]?.fields?.comments} />
    <ValuesCard label="Accepted BY" value={data.value_after[0]?.fields?.accepted_by} />
    <ValuesCard label="Referaal ID" value={data.value_after[0]?.fields?.referral_id} />
    <ValuesCard label="Site Location" value={data.value_after[0]?.fields?.site_location} />
    <ValuesCard label="User Approval" value={data.value_after[0]?.fields?.user_approval} />
    <ValuesCard label="Admin Approval" value={data.value_after[0]?.fields?.admin_approval} />
    <ValuesCard label="Referaal Count" value={data.value_after[0]?.fields?.referral_id_count} />
  </div>
);

const BeforeValuesRewards = ({ data }) => (
  <div className="row">
    <h6>Before Values</h6>
    <ValuesCard label="Title" value={data.value_before[0]?.fields?.title} />
    <ValuesCard label="Points" value={data.value_before[0]?.fields?.points} />
    <ValuesCard label="Status" value={data.value_before[0]?.fields?.is_active === true ? "Active" : "Inactive"} />
    <ValuesCard label="Reward ID" value={data.value_before[0]?.fields?.reward_id} />
    <ValuesCard label="Description" value={data.value_before[0]?.fields?.description} />
    <ValuesCard label="Redeemed Time" value={data.value_before[0]?.fields?.times_redeemed} />
    <ValuesCard label="Reward Count" value={data.value_before[0]?.fields?.reward_id_count} />
  </div>
);

const AfterValuesRewards = ({ data }) => (
  <div className="row">
    <h6>After Values</h6>
    <ValuesCard label="Title" value={data.value_after[0]?.fields?.title} />
    <ValuesCard label="Points" value={data.value_after[0]?.fields?.points} />
    <ValuesCard label="Status" value={data.value_after[0]?.fields?.is_active === false ? "Inactive" : "Active"} />
    <ValuesCard label="Reward ID" value={data.value_after[0]?.fields?.reward_id} />
    <ValuesCard label="Description" value={data.value_after[0]?.fields?.description} />
    <ValuesCard label="Redeemed Time" value={data.value_after[0]?.fields?.times_redeemed} />
    <ValuesCard label="Reward Count" value={data.value_after[0]?.fields?.reward_id_count} />
  </div>
);

const UserDetails = ({ data, open, setOpen }) => {
  const [showOffcanvas, setShowOffcanvas] = React.useState(open);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
    setOpen(null);
  };

  const getModelDetails = () => {
    switch (data.value_before[0]?.model) {
      // Add cases for other models as needed
      case "account.user":
        return (
          <>
            <BeforeValues data={data} />
            <AfterValues data={data} />
          </>
        );
      case "purchase.event":
        return (
          <>
            <BeforeValuesEvent data={data} />
            <AfterValuesEvent data={data} />
          </>
        );
      case "purchase.idverification":
        return (
          <>
            <BeforeValuesIdVerification data={data} />
            <AfterValuesIdVerification data={data} />
          </>
        );
      case "purchase.tmtorder":
        return (
          <>
            <BeforeValuesOrder data={data} />
            <AfterValuesOrder data={data} />
          </>
        );
      case "purchase.leads":
        return (
          <>
            <BeforeValuesLeads data={data} />
            <AfterValuesLeads data={data} />
          </>
        );
      case "purchase.rewards":
        return (
          <>
            <BeforeValuesRewards data={data} />
            <AfterValuesRewards data={data} />
          </>
        );
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
