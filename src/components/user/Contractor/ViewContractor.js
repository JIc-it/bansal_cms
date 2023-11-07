import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ViewContractorTransaction from "./ViewContractorTransaction";
import AddPointsPopUp from "./AddPointsPopUp";
import ContractorResetPassword from "./ContractorResetPassword";
import EditContractor from "./EditContractor";
import {
  getContractorsRequest,
  getUserOrders,
} from "../../../axiosHandle/userHandle";

const ViewContractor = () => {
  const userDatail = useParams();
  const [userData, setUserData] = useState();
  const [viewTransaction, setViewTransaction] = useState(false);
  const [isOpenAddPointsPopUp, setIsOpenAddPointsPopUp] = useState(false);
  const [openResetPassword, setOpenResetPassword] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [seletedTranasactionType, setSeletedTranasactionType] =
    useState("Order");
  const [transactionData, setTransactionData] = useState();

  useEffect(() => {
    getContractorsRequest()
      .then((data) => {
        let filteredData = data.results.find((item, i) => {
          return item.id === userDatail.id;
        });
        setUserData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  const handleClickTrancationType = (type) => {
    console.log(userDatail);
    if (type === "Orders") {
      getUserOrders(userData.id)
        .then((data) => {
          setTransactionData(data);
        })
        .catch((error) => {
          console.error("Error fetching distributor data:", error);
        });
    } else {
    }
  };
  console.log(transactionData);
  return (
    <div className="content-body" style={{ marginLeft: "245px" }}>
      <div className="container">
        <div className="contractor-reset-password">
          <div className="contractor-name">
            Contractor/{" "}
            <span style={{ fontWeight: 400, fontSize: "12px" }}>
              {userData && userData.name}
            </span>
          </div>
          <div className="reset-buttons">
            <button
              className="btn bg-blue btn-sm"
              type="button"
              id="add-points-button"
              onClick={() => {
                setOpenResetPassword(true);
              }}
            >
              Reset Password
            </button>
            <button
              className="btn bg-blue btn-sm mx-2"
              type="button"
              id="export-button"
              onClick={() => setOpenEdit(true)}
            >
              Edit Details
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-12 same-card">
            <div className="card">
              <div className="card-body depostit-card">
                <div className="depostit-card-media justify-content-between style-1">
                  <div className="image-container-contractor">
                    <div className="contractor-image">
                      {userData && userData.name.slice(0, 2)}
                    </div>
                  </div>
                  <div className="contractor-name">
                    {userData && userData.name}
                  </div>
                  <div className="contractorid">
                    constractor{" "}
                    <span className="error">
                      .{userData && userData.user_id}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 same-card">
            {/* <div className="contractor-count-group"> */}
            <div className="contractor-count ">
              {" "}
              <div className="card">
                <div className="card-body depostit-card">
                  <div className="depostit-card-media d-flex justify-content-between style-1">
                    <div>
                      <h6>Total Orders</h6>
                      <br />
                      <h3>56780 pts</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}
            <div className="contractor-count-detail">
              <div className="card">
                <div className="card-body depostit-card">
                  <div className="depostit-card-media d-flex justify-content-between style-1">
                    <div>
                      <h6>Total Points</h6>
                      <br />
                      <h3>56780 pts</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12 same-card">
            <div className="card">
              <div className="card-body depostit-card">
                <div class="user-card-heading"> Details</div>
                <div className="depostit-card-media  style-1">
                  <div className="user-email-details">
                    <div className="user-email-details-property">
                      <span>Email</span>
                      <span>Mobile</span>
                      <span>Location</span>
                    </div>
                    <div className="user-email-details-data">
                      <span>{userData && userData.email}</span>
                      <span>{userData && userData.mobile}</span>
                      <span>{`${userData && userData.district_name}  ${
                        userData && userData.state_name
                          ? `, ${userData.state_name}`
                          : ""
                      }`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row " style={{ margin: "0 1px" }}>
          <div className="card " style={{ paddingLeft: 0 }}>
            <div className="card-body ">
              <div className="contractor-detail-heading">Transactions</div>
              <div className="col-12 my-4">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    id="add-points-button"
                    onClick={() => handleClickTrancationType("Orders")}
                  >
                    Orders
                  </button>
                  <button
                    className="btn btn-light btn-sm"
                    type="button"
                    id="add-points-button"
                    style={{ marginLeft: 6 }}
                    onClick={() => handleClickTrancationType("Redemptions")}
                  >
                    Redemptions
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-5" style={{ paddingLeft: 0 }}>
                  <div
                    className="input-group mb-3"
                    style={{
                      maxWidth: 300,
                      paddingTop: 15,
                      paddingLeft: 15,
                    }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      style={{ marginRight: 10 }}
                      placeholder="Search..."
                      aria-label="Search..."
                      aria-describedby="search-button"
                    />
                    <button
                      className="btn btn-dark"
                      type="button"
                      id="search-button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.70703 11.6663C9.08774 11.6663 10.207 12.7856 10.207 14.1663C10.207 15.5471 9.08774 16.6663 7.70703 16.6663C6.32632 16.6663 5.20703 15.5471 5.20703 14.1663C5.20703 12.7856 6.32632 11.6663 7.70703 11.6663Z"
                          fill="#525252"
                        />
                        <path
                          d="M11.8737 3.33301C10.493 3.33301 9.3737 4.4523 9.3737 5.83301C9.3737 7.21372 10.493 8.33301 11.8737 8.33301C13.2544 8.33301 14.3737 7.21372 14.3737 5.83301C14.3737 4.4523 13.2544 3.33301 11.8737 3.33301Z"
                          fill="#525252"
                        />
                        <path
                          d="M7.29036 5.17344C7.63554 5.17344 7.91536 5.45326 7.91536 5.79844C7.91536 6.14362 7.63554 6.42344 7.29036 6.42344L1.45703 6.42344C1.11185 6.42344 0.832031 6.14362 0.832031 5.79844C0.832031 5.45326 1.11185 5.17344 1.45703 5.17344H7.29036Z"
                          fill="#525252"
                        />
                        <path
                          d="M12.2904 13.5068C11.9452 13.5068 11.6654 13.7866 11.6654 14.1318C11.6654 14.477 11.9452 14.7568 12.2904 14.7568H18.1237C18.4689 14.7568 18.7487 14.477 18.7487 14.1318C18.7487 13.7866 18.4689 13.5068 18.1237 13.5068H12.2904Z"
                          fill="#525252"
                        />
                        <path
                          d="M0.832031 14.1318C0.832031 13.7866 1.11185 13.5068 1.45703 13.5068H3.1237C3.46888 13.5068 3.7487 13.7866 3.7487 14.1318C3.7487 14.477 3.46888 14.7568 3.1237 14.7568H1.45703C1.11185 14.7568 0.832031 14.477 0.832031 14.1318Z"
                          fill="#525252"
                        />
                        <path
                          d="M18.1237 5.17344C18.4689 5.17344 18.7487 5.45326 18.7487 5.79844C18.7487 6.14362 18.4689 6.42344 18.1237 6.42344L16.457 6.42344C16.1119 6.42344 15.832 6.14362 15.832 5.79844C15.832 5.45326 16.1119 5.17344 16.457 5.17344H18.1237Z"
                          fill="#525252"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="col-7 text-end contractor-grid-button">
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    id="add-points-button"
                    onClick={() => {
                      setIsOpenAddPointsPopUp(true);
                    }}
                  >
                    <i className="fa-regular fa-square-plus" /> Add Points
                  </button>
                  <button
                    className="btn btn-light btn-sm mx-2"
                    type="button"
                    id="export-button"
                    // onClick={exportToCSV}
                  >
                    <i className="fa-solid fa-file-export" /> Export
                  </button>
                </div>
              </div>
              <table id="list-tbl" class="table">
                <thead>
                  <tr>
                    <th>Transaction Id</th>
                    <th>Distributor Name</th>
                    <th>Distributor id</th>
                    <th>Date & Time</th>
                    <th>Points</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={"324243"}>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <button className="btn  btn-sm">View Request</button>
                    </td>
                    <td onClick={() => setViewTransaction(true)}>
                      <a
                        className="btn btn-primary btn-sm"
                        href="#"
                        role="button"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr key={"324243"}>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <button className="btn  btn-sm">View Request</button>
                    </td>
                    <td onClick={() => setViewTransaction(true)}>
                      <a
                        className="btn btn-primary btn-sm"
                        href="#"
                        role="button"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr key={"324243"}>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <h6>order.name</h6>
                    </td>
                    <td>
                      <button className="btn  btn-sm">View Request</button>
                    </td>
                    <td onClick={() => setViewTransaction(true)}>
                      <a
                        className="btn btn-primary btn-sm"
                        href="#"
                        role="button"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  {/* {props.data && props.data.length > 0 ? (
                    props.data.slice(0, 5).map((order) => (
                        <tr key={order.id}>
                            <td><h6>{order.name}</h6></td>
                            <td><h6>{order.transaction_id}</h6></td>
                            <td><h6>{order.orderNumber}</h6></td>
                            <td><h6>{order.quantity}</h6></td>
                            <td>
                                <button className="btn btn-primary btn-sm">View Request</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">No orders available</td>
                    </tr>
                )} */}
                </tbody>
              </table>
            </div>
          </div>{" "}
        </div>
      </div>
      {viewTransaction && (
        <ViewContractorTransaction setOpen={setViewTransaction} />
      )}
      {isOpenAddPointsPopUp && (
        <AddPointsPopUp
          setOpen={setIsOpenAddPointsPopUp}
          open={isOpenAddPointsPopUp}
        />
      )}
      {openResetPassword && (
        <ContractorResetPassword
          open={openResetPassword}
          setOpen={setOpenResetPassword}
          userDatail={userDatail}
        />
      )}
      {openEdit && <EditContractor open={openEdit} setOpen={setOpenEdit} />}
    </div>
  );
};

export default ViewContractor;
