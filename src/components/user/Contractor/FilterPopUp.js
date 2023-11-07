import React from "react";

const FilterPopUp = () => {
  return (
    <div className="filter-popup-container">
      <div className="filter-heading">Filter</div>
      <span>By Points</span>
      <div className="filter-fields">
        <input
          type="text"
          placeholder="From"
          className="form-control form-control-sm"
          name="from"
          //   value={formik.values.name}
          //   onChange={formik.handleChange}
          //   onBlur={formik.handleBlur}
        />
        <span style={{fontWeight:'700',color:"#000",position:"relative",top:"5px"}}>-</span>
        <input
          type="text"
          placeholder="To"
          className="form-control form-control-sm"
          name="to"
          //   value={formik.values.name}
          //   onChange={formik.handleChange}
          //   onBlur={formik.handleBlur}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{
          flex: 1,
          width: "100%",
          background: "#2B59C3",
          outline: "none",
        }}
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
      >
        Clear Filter
      </button>
    </div>
  );
};

export default FilterPopUp;
