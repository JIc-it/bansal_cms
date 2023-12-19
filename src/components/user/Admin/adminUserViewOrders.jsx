import React, { useState, useEffect } from "react";
import { adminUSerViewOrdersRequest } from "../../../axiosHandle/userHandle";
import ViewAdminTransaction from "./ViewAdminTransaction";

export default function AdminUserViewOrders(props) {
  console.log(props.filterdata);
  const [orderData, setOrderData] = useState();

  useEffect(() => {
    adminUSerViewOrdersRequest(props.id, props.filterdata)
      .then((data) => {
        setOrderData(data.results);
        props.handlechangetransactiondata(data.results);
      })
      .catch((error) => {
        console.error("Error fetching Admin data:", error);
      });
  }, [props.id, props.filterdata]);

  const [viewTransaction, setViewTransaction] = useState(false);
  const [data, setData] = useState();
  const handlepassdata = (data) => {
    setViewTransaction(true);
    setData(data);
  };

  return (
    <div className="table-responsive  active-projects">
      <table id="list-tbl" class="table">
        <thead>
          <tr>
            <th>Transaction Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Unique Id</th>
            <th>Date & Time</th>
            <th>Points</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orderData && orderData.length > 0 ? (
            <>
              {orderData.map((data, i) => {
                return (
                  <tr key={`transactionData-${i}`}>
                    
                    <td>
                      <h6>{data.transaction_id ? data.transaction_id : "-"}</h6>
                    </td>
                    <td>
                      <h6>{data.user.name ? data.user.name : "-"}</h6>
                    </td>
                    <td>
                      <h6>{data.user.role ? data.user.role : "-"}</h6>
                    </td>
                    <td>
                      <h6>{data.user?.user_id ? data.user?.user_id : "-"}</h6>
                    </td>
                    <td>
                      <h6>
                        {new Date(data.updated_at).toLocaleDateString("en-Us", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </h6>
                    </td>
                    <td>
                      <h6>{data.points ? data.points : "-"}</h6>
                    </td>
                    <td>
                      <h6>{data.quantity ? data.quantity : "-"}</h6>
                    </td>

                    <td>
                      <button
                        className={`btn  btn-sm ${
                          data.admin_approval === "Accepted" &&
                          data.user_approval === "Accepted"
                            ? "Accepted-btn"
                            : data.admin_approval === "Rejected" ||
                              data.user_approval === "Rejected"
                            ? "Rejected-btn"
                            : "Processing-btn"
                        }`}
                      >
                        {data.admin_approval === "Accepted" &&
                        data.user_approval === "Accepted"
                          ? "Accepted"
                          : data.admin_approval === "Rejected" ||
                            data.user_approval === "Rejected"
                          ? "Rejected"
                          : "Processing"}
                      </button>
                    </td>
                    <td>
                      <a
                        className="btn btn-primary btn-sm"
                        href="#"
                        role="button"
                        onClick={() => handlepassdata(data)}
                      >
                        View
                      </a>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <tr>
              <td colSpan="5">No orders available</td>
            </tr>
          )}
        </tbody>
      </table>
      {viewTransaction && (
        <ViewAdminTransaction
          open={viewTransaction}
          setOpen={setViewTransaction}
          data={data}
        />
      )}
    </div>
  );
}
