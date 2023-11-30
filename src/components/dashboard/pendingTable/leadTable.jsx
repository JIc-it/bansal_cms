import { useState } from "react";
import LeadDetails from "./leadDetails";

export default function LeadTable({
  data,
  handlerefetch,
  isRefetch,
  setIsRefetch,
}) {
  const [selectedLead, setSelectedLead] = useState(null);

  const handleViewClick = (lead) => {
    setSelectedLead(null);
    setSelectedLead(lead);
  };
  return (
    <>
      <table id="list-tbl" class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Referred By</th>
            <th>Quantity</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.slice(0, 5).map((lead) => (
              <tr key={lead.id}>
                <td>
                  <h6>{lead.name}</h6>
                </td>
                <td>
                  <h6>{lead.mobile_no}</h6>
                </td>
                <td>
                  <h6>{lead.referral_id}</h6>
                </td>
                <td>
                  <h6>{lead.order}</h6>
                </td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleViewClick(lead)}
                  >
                    View Request
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No leads available</td>
            </tr>
          )}
        </tbody>
      </table>
      {selectedLead && (
        <LeadDetails
          data={selectedLead}
          open={selectedLead}
          setOpen={setSelectedLead}
          handlerefetch={handlerefetch}
          isRefetch={isRefetch}
          setIsRefetch={setIsRefetch}
        />
      )}
    </>
  );
}
