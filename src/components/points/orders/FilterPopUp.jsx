import React from "react";

const FilterPopUp = ({ role, created_at, handledatechange, handlerolechange }) => {
    return (
        <div className="filter-popup-container">
            <div className="filter-heading">Filter</div>
            <span>By Role</span>
            <select className="form-control form-control-sm">
                <option>Engineer</option>
                <option>Contractor</option>
                <option>Architect</option>
            </select>
            <br/>
            <span>By Status</span>
            <select className="form-control form-control-sm">
                <option>Processing</option>
                <option>Accepted</option>
                <option>Rejected</option>
            </select>
            <span>By Points</span>
            <div className="filter-fields">
                <input
                    type="text"
                    placeholder="From"
                    className="form-control form-control-sm"
                    name="from"
                />
                <span style={{ fontWeight: '700', color: "#000", position: "relative", top: "5px" }}>-</span>
                <input
                    type="text"
                    placeholder="To"
                    className="form-control form-control-sm"
                    name="to"
                />
            </div>
            <span>By Date</span>
            <input
                type="date"
                placeholder="Date"
                className="form-control form-control-sm mb-2"
                name="to"
                defaultValue={created_at}
                onChange={(e) => handledatechange(e.target.value)}
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
