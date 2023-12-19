import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { getAdHistory, getAdsListing } from "../../axiosHandle/promotionHandle";
import UpdateADPoster from "./UpdateADPoster";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

function PromotionsHistory() {
  const contextData = useContext(AppContext);
  const { permissionData } = contextData;
  const permissionForPromotion = permissionData?.promotions;
  const paramsid = useParams();
  const [history, setHistory] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedPromotionDetails, setSelectedPromotionDetails] = useState();
  const [isUpdatedPromotion, setIsUpdatedPromotion] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getAdHistory(paramsid.id, searchData)
      .then((data) => {
        setHistory(data.results);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, [searchData, isUpdatedPromotion, paramsid.id]);

  const handleOpenOffcanvas = (id) => {
    setShowOffcanvas(true);
    getAdsListing()
      .then((data) => {
        let filteredData = data.results.find((item, i) => {
          return item.id === id;
        });
        console.log(filteredData);

        filteredData && setSelectedPromotionDetails(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  };

  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  const exportToCSV = () => {
    if (history) {
      const header = [
        "Promotions",
        "Date & Time",
        "Ad Run Time(days)",
        "Status",
      ];
      const csvData = history.map((item) => {
        let status = item.is_active ? "Active" : "Inactive";
        return [item.title, item.updated_at, item.active_time, status];
      });

      const csvContent = [header, ...csvData]
        .map((row) => row.join(","))
        .join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Promotion-List.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const totalPages = Math.ceil(
    history ? history.length / itemsPerPage : 1
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = history
    ? history.slice(indexOfFirstItem, indexOfLastItem)
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
    <div className="content-body" style={{ width: "82vw", marginLeft: 245 }}>
      {/* row */}
      <div className="container">
        <div className="row" style={{ marginLeft: "5px" }}>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects manage-client">
                  {/* <div className="tbl-caption">
                    <a href='/dashboard'>
                      <img src="/assets/Arrow Left.png" />
                    </a>
                    <h4 className="heading mb-0">Promotions/ Ad Spot 01</h4>
                  </div> */}
                  <div className="tbl-caption" style={{ display: "flex", cursor: "pointer" }}>
                    <a href='/promotions'>
                      <img src="/assets/Arrow Left.png" />
                    </a>

                    <h3 className="heading mb-0" style={{fontSize: 15, position: 'relative', top: 3, left: 10}}>Promotions/ Ad Spot 01</h3>
                  </div>
                  <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-6">
                      <div
                        className="input-group mb-3"
                        style={{ maxWidth: 300, paddingLeft: 15 }}
                      >
                        <div className="search-group form-control">
                          <input
                            type="text"
                            className=""
                            style={{ marginRight: 10 }}
                            placeholder="Search..."
                            aria-label="Search..."
                            aria-describedby="search-button"
                            onChange={(e) => {
                              setSearchData(e.target.value);
                            }}
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.58342 2.29199C5.55634 2.29199 2.29175 5.55658 2.29175 9.58366C2.29175 13.6107 5.55634 16.8753 9.58342 16.8753C13.6105 16.8753 16.8751 13.6107 16.8751 9.58366C16.8751 5.55658 13.6105 2.29199 9.58342 2.29199ZM1.04175 9.58366C1.04175 4.86623 4.86598 1.04199 9.58342 1.04199C14.3008 1.04199 18.1251 4.86623 18.1251 9.58366C18.1251 11.7174 17.3427 13.6684 16.0491 15.1655L18.7754 17.8917C19.0194 18.1358 19.0194 18.5315 18.7754 18.7756C18.5313 19.0197 18.1356 19.0197 17.8915 18.7756L15.1653 16.0494C13.6682 17.3429 11.7172 18.1253 9.58342 18.1253C4.86598 18.1253 1.04175 14.3011 1.04175 9.58366Z"
                              fill="#525252"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      {permissionForPromotion?.action && (
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
                      )}
                      {permissionForPromotion?.update && (
                        <a
                          className="btn bg-blue btn-sm mx-2"
                          data-bs-toggle="offcanvas"
                          href="#offcanvasExample"
                          role="button"
                          aria-controls="offcanvasExample"
                          onClick={() => handleOpenOffcanvas(paramsid.id)}
                        >
                          Update
                        </a>
                      )}
                    </div>
                  </div>
                  <div>


                    <table id="reports-tbl" className="table">
                      <thead>
                        <tr>
                          <th>S No</th>
                          <th>Promotions</th>
                          <th>Date &amp; Time</th>
                          <th>Ad Runtime (Days)</th>
                          <th>Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {currentItems.length > 0 ? (
                          currentItems.map((data, i) => (
                            <tr>
                              <td>
                                <h6>{i + 1 + indexOfFirstItem}</h6>
                              </td>
                              <td>
                                <h6>
                                  <img
                                    src={data.ad_image}
                                    // className="img-fluid"
                                    width={60}
                                    height={40}
                                    style={{ paddingRight: 10 }}
                                  />
                                  {data.title || ""}
                                </h6>
                              </td>
                              <td>
                                <div className="products">
                                  <div>
                                    <h6>
                                      {new Date(
                                        data.updated_at
                                      ).toLocaleDateString("en-Us", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="products">
                                  <div>
                                    <h6>{data.active_time}</h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span
                                  className={
                                    data.is_active === true
                                      ? "badge badge-success light border-0"
                                      : "badge badge-danger light border-0"
                                  }
                                >
                                  {data.is_active === true
                                    ? "Active"
                                    : "Inactive"}
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5">No Promotions Ad available</td>
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
        </div>
      </div>
      {showOffcanvas && selectedPromotionDetails && (
        <UpdateADPoster
          showOffcanvas={showOffcanvas}
          handleCloseOffcanvas={handleCloseOffcanvas}
          selectedPromotionDetails={selectedPromotionDetails}
          isUpdatedPromotion={isUpdatedPromotion}
          setIsUpdatedPromotion={setIsUpdatedPromotion}
        />
      )}
    </div>
  );
}

export default PromotionsHistory;
