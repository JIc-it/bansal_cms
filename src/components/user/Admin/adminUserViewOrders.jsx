import React, { useState, useEffect } from "react";
import { adminUSerViewOrdersRequest } from "../../../axiosHandle/userHandle";

export default function AdminUserViewOrders(props) {
    const [orderData, setOrderData] = useState({});

console.log(orderData);
    useEffect(() => {
        adminUSerViewOrdersRequest(props.id)
            .then((data) => {
                console.log(data);
                setOrderData(data.results);
            })
            .catch((error) => {
                console.error("Error fetching distributor data:", error);
            });
    }, []);



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
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {orderData && orderData.length > 0 ? (
                        <>
                            {orderData.map((data, i) => {
                                return (
                                    <tr key={`transactionData-${i}`}>
                                        <td>
                                            <h6>{data.transaction_id ? data.transaction_id : '-'}</h6>
                                        </td>
                                        <td>
                                            <h6>{data.user.name ? data.user.name : '-'}</h6>
                                        </td>
                                        <td>
                                            <h6>{data.user.role ? data.user.role : '-'}</h6>
                                        </td>
                                        <td>
                                            <h6>{new Date(data.updated_at).toLocaleDateString('en-Us', { month: "short", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}</h6>
                                        </td>
                                        <td>
                                            <h6>{data.points ? data.points : '-'}</h6>
                                        </td>
                                        <td>
                                            <h6>{data.quantity ? data.quantity : '-'}</h6>
                                        </td>

                                        <td>
                                            <button
                                                className={`btn  btn-sm ${data.admin_approval === "Accepted" &&
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
        </div>

    );
}





