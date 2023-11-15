import React from "react";

const FilterPopUp = ({handlefilterdata,handlefilter,setOpenFilter}) => {
    return (
        <div className="filter-popup-container w-25">
            <div className="filter-heading">Filter</div>
            <span>By Role</span>
            <select className="form-control form-control-sm" 
            onChange={(e)=>handlefilterdata({role:e.target.value})}
             >
                <option value="">Role</option>
                <option>Engineer</option>
                <option>Contractor</option>
                <option>Architect</option>
            </select>
            <span>By Status</span>
            <select className="form-control form-control-sm" 
            onChange={(e)=>handlefilterdata({status:e.target.value})}
             >
                <option value="">status</option>
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
                // defaultValue={created_at}
                onChange={(e)=>{
                    const formatdate=new Date(e.target.value);
                    const Year=formatdate.getFullYear();
                    const month=formatdate.getMonth() +1;
                    const day=formatdate.getDate();

                    handlefilterdata({date:Year+"-"+month+"-"+day})
                }}
            />
            <button
                type="button"
                onClick={()=>{handlefilter();handlefilterdata({search:"",role:"",date:""});setOpenFilter((prev)=>!prev)}}
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
                type="button"
                className="btn btn-primary"
                style={{
                    flex: 1,
                    width: "100%",
                    marginTop: "10px",
                    background: "#0F0F0F",
                    outline: "none",
                }}
                onClick={()=>{
                    handlefilter();
                    setOpenFilter((prev)=>!prev)
                }}
            >
                Clear Filter
            </button>
        </div>
    );
};

export default FilterPopUp;
