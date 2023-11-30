import { useState } from "react";
import LeadDetails from "./leadDetails";

export default function OrderTable({
  data,
  handlerefetch,
  setIsRefetch,
  isRefetch,
}) {
  const [selectedLead, setSelectedLead] = useState(null);
  const handleViewClick = (order) => {
    setSelectedLead(null);
    setSelectedLead(order);
  };

  return (
    <>
      <table id="list-tbl" class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Unique id</th>
            <th>Distributor id</th>
            <th>Quantity</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.slice(0, 5).map((order) => (
              <tr key={order.id}>
                <td>
                  <h6>{order?.user?.name}</h6>
                </td>
                <td>
                  <h6>{order?.user?.user_id}</h6>
                </td>
                <td>
                  <h6>{order?.distributor?.user_id}</h6>
                </td>
                <td>
                  <h6>{order.quantity}</h6>
                </td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleViewClick(order)}
                  >
                    View Request
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No orders available</td>
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
          isRefetch={isRefetch} setIsRefetch={setIsRefetch}
        />
      )}
    </>
  );
}
