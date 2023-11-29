import React, {  useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const TransactionFilterPopUp = ({ handlefilterdata, type }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [roles, setRoles] = useState("");
  const formattedDate = selectedDate
    ? moment(selectedDate).format("YYYY-MM-DD")
    : null;
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleApplyFilter = () => {
    const filterCriteria = {
      status,
      from,
      to,
      formattedDate,
      roles,
    };

    handlefilterdata(filterCriteria);
  };
  const clearCall = () => {
    setTo("");
    setSelectedDate(null);
    setStatus("");
    setFrom("");
    setRoles("");
  };
  const customInput = (
    <div className="custom-input">
      <input
        type="text"
        placeholder="date"
        value={selectedDate ? selectedDate.toLocaleDateString() : ""}
        readOnly
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M1.66602 9.99967C1.66602 6.85698 1.66602 5.28563 2.64233 4.30932C3.61864 3.33301 5.18999 3.33301 8.33268 3.33301H11.666C14.8087 3.33301 16.3801 3.33301 17.3564 4.30932C18.3327 5.28563 18.3327 6.85698 18.3327 9.99967V11.6663C18.3327 14.809 18.3327 16.3804 17.3564 17.3567C16.3801 18.333 14.8087 18.333 11.666 18.333H8.33268C5.18999 18.333 3.61864 18.333 2.64233 17.3567C1.66602 16.3804 1.66602 14.809 1.66602 11.6663V9.99967Z"
          stroke="#525252"
          stroke-width="1.5"
        />
        <path
          d="M5.83398 3.33301V2.08301"
          stroke="#525252"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M14.166 3.33301V2.08301"
          stroke="#525252"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M2.08398 7.5H17.9173"
          stroke="#525252"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M15.0007 14.1667C15.0007 14.6269 14.6276 15 14.1673 15C13.7071 15 13.334 14.6269 13.334 14.1667C13.334 13.7064 13.7071 13.3333 14.1673 13.3333C14.6276 13.3333 15.0007 13.7064 15.0007 14.1667Z"
          fill="#525252"
        />
        <path
          d="M15.0007 10.8333C15.0007 11.2936 14.6276 11.6667 14.1673 11.6667C13.7071 11.6667 13.334 11.2936 13.334 10.8333C13.334 10.3731 13.7071 10 14.1673 10C14.6276 10 15.0007 10.3731 15.0007 10.8333Z"
          fill="#525252"
        />
        <path
          d="M10.8327 14.1667C10.8327 14.6269 10.4596 15 9.99935 15C9.53911 15 9.16602 14.6269 9.16602 14.1667C9.16602 13.7064 9.53911 13.3333 9.99935 13.3333C10.4596 13.3333 10.8327 13.7064 10.8327 14.1667Z"
          fill="#525252"
        />
        <path
          d="M10.8327 10.8333C10.8327 11.2936 10.4596 11.6667 9.99935 11.6667C9.53911 11.6667 9.16602 11.2936 9.16602 10.8333C9.16602 10.3731 9.53911 10 9.99935 10C10.4596 10 10.8327 10.3731 10.8327 10.8333Z"
          fill="#525252"
        />
        <path
          d="M6.66667 14.1667C6.66667 14.6269 6.29357 15 5.83333 15C5.3731 15 5 14.6269 5 14.1667C5 13.7064 5.3731 13.3333 5.83333 13.3333C6.29357 13.3333 6.66667 13.7064 6.66667 14.1667Z"
          fill="#525252"
        />
        <path
          d="M6.66667 10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333C5 10.3731 5.3731 10 5.83333 10C6.29357 10 6.66667 10.3731 6.66667 10.8333Z"
          fill="#525252"
        />
      </svg>
    </div>
  );

  return (
    <div className="filter-popup-container">
      <div className="filter-heading">Filter</div>
      <span>By Role</span>
      <select
        defaultValue=""
        className=" w-100 form-control-sm form-control my-1"
        placeholder="Roles"
        //   onChange={handleStateChange}
        onChange={(e) => setRoles(e.target.value)}
      >
        <option disabled={true} value="" id={"0"}>
          Roles
        </option>
        <option>Engineer</option>
        <option>Architect</option>
        <option>Contractor</option>
      </select>
      <span>By Status</span>
      <select
        defaultValue=""
        className=" w-100 form-control-sm form-control my-1"
        placeholder="Status"
        //   onChange={handleStateChange}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option disabled={true} value="" id={"0"}>
          Status
        </option>
        <option>Processing</option>
        <option>Accepted</option>
        <option>Rejected</option>
      </select>
      {type === "Orders" ? (
        <>
          <span>By Points</span>
          <div className="filter-fields">
            <input
              type="number"
              placeholder="From"
              className="form-control form-control-sm"
              name="from"
              //   value={filterCriteria.from}
              //   onChange={(e) => {
              //     setFilterCriteria({ ...filterCriteria, from: e.target.value });
              //   }}
              //   onBlur={formik.handleBlur}
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <span
              style={{
                fontWeight: "700",
                color: "#000",
                position: "relative",
                top: "5px",
              }}
            >
              -
            </span>
            <input
              type="number"
              placeholder="To"
              className="form-control form-control-sm"
              name="to"
              //   value={filterCriteria.to}
              //   onChange={(e) => {
              //     setFilterCriteria({ ...filterCriteria, to: e.target.value });
              //   }}
              //   onBlur={formik.handleBlur}
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        </>
      ) : (
        ""
      )}

      <span>By Date</span>
      <br />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={customInput}
        dateFormat="dd/MM/yyyy"
      />

      <button
        type="submit"
        className="btn btn-primary"
        style={{
          flex: 1,
          width: "100%",
          background: "#2B59C3",
          outline: "none",
        }}
        // onClick={() => {
        //   setOpenFilter(false);
        //   setIsFilter(!isFilter);
        // }}
        onClick={handleApplyFilter}
      >
        Apply
      </button>
      <button
        type="submit"
        className="btn btn-primary"
        style={{
          flex: 1,
          width: "100%",
          marginTop: "10px",
          background: "#0F0F0F",
          outline: "none",
        }}
        // onClick={() => {
        //   setFilterCriteria({ from: "", to: "" });
        //   setIsFilter(!isFilter);
        // }}
        onClick={() => clearCall()}
      >
        Clear Filter
      </button>
    </div>
  );
};

export default TransactionFilterPopUp;
