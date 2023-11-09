import React from "react";

const FilterPopUp = ({role,created_at,handledatechange,handlerolechange}) => {
    return (
        <div className="filter-popup-container">
            <div className="filter-heading">Filter</div>
            <span>By Role</span>
            <select className="form-control form-control-sm">
                <option>Engineer</option>
                <option>Contractor</option>
                <option>Architect</option>
            </select>
            <span>By Status</span>
            <select className="form-control form-control-sm">
                <option>Processing</option>
                <option>Accepted</option>
                <option>Rejected</option>
            </select>
            <span>By Date</span>
            <input
                type="date"
                placeholder="Date"
                className="form-control form-control-sm mb-2"
                name="to"
            />
            <button
                type="button"
                // onClick={()=>handlefilterorder(role,created_at)}
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
