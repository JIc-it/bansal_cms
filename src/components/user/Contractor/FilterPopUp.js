import React from "react";

const FilterPopUp = ({
  filterCriteria,
  setFilterCriteria,
  isFilter,
  setIsFilter,
  setOpenFilter,
}) => {
  return (
    <div
      className="filter-popup-container"
      style={{ left: "23rem", top: "9rem" }}
    >
      <div className="filter-heading">Filter</div>
      <span>By Points</span>
      <div className="filter-fields">
        <input
          type="number"
          placeholder="From"
          className="form-control form-control-sm"
          name="from"
          value={filterCriteria.from}
          onChange={(e) => {
            setFilterCriteria({ ...filterCriteria, from: e.target.value });
          }}
          //   onBlur={formik.handleBlur}
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
          value={filterCriteria.to}
          onChange={(e) => {
            setFilterCriteria({ ...filterCriteria, to: e.target.value });
          }}
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
        onClick={() => {
          setOpenFilter(false);
          setIsFilter(!isFilter);
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
        onClick={() => {
          setFilterCriteria({ from: "", to: "" });
          setIsFilter(!isFilter);
        }}
      >
        Clear Filter
      </button>
    </div>
  );
};

export default FilterPopUp;
