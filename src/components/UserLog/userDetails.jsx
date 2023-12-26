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
