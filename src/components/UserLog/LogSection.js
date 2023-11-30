
import React, { useState, useEffect } from "react";
import { getLogRequest } from "../../axiosHandle/logHandle";
import UserDetails from "./userDetails";

function LogSection() {
  const [user_log_data, setUserLogData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchText, setSearchText] = useState("");
  const [isUpdated, setisUpdated] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString();
  }

  useEffect(() => {
    console.log("Fetching User Log data...");

    getLogRequest()
      .then((data) => {
        console.log("Fetched data:", data);
        setUserLogData(data.results);
        setisUpdated(false)
      })
      .catch((error) => {
        console.error("Error fetching User Log data:", error);
      });
  }, [isUpdated]);

  const handleViewClick = (rw_data) => {
    setSelectedLead(null);
    setSelectedLead(rw_data);
  };
  const exportToCSV = () => {
    if (user_log_data) {
      const header = [
        "User Id",
        "Name",
        "Email",
        "Role",
        "Create Date",
        "Update Date",
        "Model Name",
        "Value"
      ];
      const csvData = user_log_data.map((rr_data) => {
        return [
          rr_data.user?.user_id,
          rr_data.user?.name,
          rr_data.user?.email,
          rr_data.user?.role,
          rr_data.created_at,
          rr_data.updated_at,
          rr_data.model_name,
          rr_data.value,
        ];
      });

      const csvContent = [header, ...csvData]
        .map((row) => row.join(","))
        .join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "User_Log.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  // const totalPages = Math.ceil(
  //   user_log_data ? user_log_data.length / itemsPerPage : 1
  // );
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredItems =
    user_log_data && user_log_data.length > 0
      ? user_log_data.filter((rw_data) => {
        const searchableFields = [
          rw_data.title,
          rw_data.id,
          rw_data.points,
          rw_data.description,
          rw_data.is_active,
          rw_data.times_redeemed,
        ];
        return searchableFields.some(
          (field) =>
            typeof field === "string" &&
            field.toLowerCase().includes(searchText.toLowerCase())
        );
      })
      : [];

  const totalPages = Math.ceil(
    user_log_data ? user_log_data.length / itemsPerPage : 1
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user_log_data
    ? user_log_data.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="content-body" style={{ width: "82vw", marginLeft: 245, position: 'relative', top: 90 }}>
      {/* <Cards permissionForRedumtionWindow={permissionForRedumtionWindow} /> */}
      <div className="row" style={{ marginLeft: "15px" }}>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects manage-client">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">User Log</h4>
                </div>
                <div className="row">
                  <div className="col-10">
                    <div
                      className="input-group mb-3"
                      style={{ maxWidth: 300, paddingTop: 15, paddingLeft: 15 }}
                    >
                      {/* Step 3: Capture the search input */}
                      <input
                        type="text"
                        className="form-control"
                        style={{ marginRight: 10 }}
                        placeholder="Search..."
                        aria-label="Search..."
                        aria-describedby="search-button"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <button
                      className="btn btn-light btn-sm"
                      type="button"
                      id="export-button"
                      onClick={exportToCSV}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M3.33366 10C3.33366 13.6819 6.31843 16.6667 10.0003 16.6667C13.6822 16.6667 16.667 13.6819 16.667 10"
                          stroke="#0F0F0F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M10 11.6663L10 3.33301M10 3.33301L12.5 5.83301M10 3.33301L7.5 5.83301"
                          stroke="#0F0F0F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>{" "}
                      Export
                    </button>
                  </div>

                </div>
                <table id="reports-tbl" className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Create Date</th>
                      <th>Update Date</th>
                      <th>Model Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0 ? (
                      currentItems.map((rw_data) => (
                        <tr key={rw_data.id}>
                          <td>
                            <h6>{rw_data.user?.name}</h6>
                          </td>
                          <td>
                            <h6>{rw_data.user?.email}</h6>
                          </td>
                          <td>
                            <h6>{rw_data.user?.role}</h6>
                          </td>
                          <td>
                            <h6>{formatDate(rw_data.created_at)}</h6>
                          </td>
                          <td>
                            <h6>{formatDate(rw_data.updated_at)}</h6>
                          </td>
                          <td>
                            <h6>{rw_data.model_name}</h6>
                          </td>
                          <td>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => handleViewClick(rw_data)}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">No matching reward products</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <div className="col-12">
                  <div className="btn-group" style={{ float: "right" }}>
                    <button
                      className="btn btn-light btn-sm"
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-light btn-sm"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedLead && (
        <UserDetails
          data={selectedLead}
          open={true}
          setOpen={setSelectedLead}
        />
      )}
    </div>
  );
}

export default LogSection;
