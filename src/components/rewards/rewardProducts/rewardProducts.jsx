import React, { useState, useEffect, useContext } from "react";
import Cards from "./cards";
import { getRewardProductsRequest } from "../../../axiosHandle/rewardHandle";
import AddReward from "./addReward";
import EditReward from "./editReward";
import { AppContext } from "../../../contexts/AppContext";

function RewardPoints() {
  const contextData = useContext(AppContext);
  const { permissionData } = contextData;
  const permissionForRewardProducts = permissionData?.reward_products;
  const permissionForRedumtionWindow = permissionData?.redemptions_window;
  const [reward_product_data, setRewardProductData] = useState(null);
  const [createProduct, setCreateProduct] = useState(null);
  const [updateProduct, setUpdateProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchText, setSearchText] = useState("");
  const [isUpdated, setisUpdated] = useState(false);

  const handleEditClick = (data) => {
    setUpdateProduct(data);
  };

  const handleCreateClick = (order) => {
    setCreateProduct(true);
  };

  useEffect(() => {
    const uniqueKey = Date.now(); // Use a timestamp as a unique key
    console.log("Fetching reward product data...");
    
    getRewardProductsRequest()
      .then((data) => {
        console.log("Fetched data:", data);
        setRewardProductData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching lead data:", error);
      });
  }, []);

  const exportToCSV = () => {
    if (reward_product_data) {
      const header = [
        "Product",
        "Product ID",
        "Points",
        "Description",
        "Status",
        "Times Redeemed",
      ];
      const csvData = reward_product_data.map((rr_data) => {
        return [
          rr_data.title,
          rr_data.id,
          rr_data.points,
          rr_data.description,
          rr_data.is_active,
          rr_data.times_redeemed,
          rr_data.quantity,
        ];
      });

      const csvContent = [header, ...csvData]
        .map((row) => row.join(","))
        .join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "reward_product.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const totalPages = Math.ceil(
    reward_product_data ? reward_product_data.length / itemsPerPage : 1
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredItems =
    reward_product_data && reward_product_data.length > 0
      ? reward_product_data.filter((rw_data) => {
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
      <Cards permissionForRedumtionWindow={permissionForRedumtionWindow} />
      <div className="row" style={{ marginLeft: "15px" }}>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects manage-client">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Reward Products</h4>
                </div>
                <div className="row">
                  <div className="col-7">
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
                      {/* <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button> */}
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    {permissionForRewardProducts?.create && (
                      <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        id="add-product-button"
                        onClick={() => handleCreateClick()}
                      >
                        <i className="fa-regular fa-square-plus" /> Add Reward
                        Product
                      </button>
                    )}
                  </div>
                  <div className="col-2">
                    {permissionForRewardProducts?.action && (
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
                  </div>
                </div>
                <table id="reports-tbl" className="table">
                  <thead>
                    <tr>
                      <th>S No</th>
                      <th>Product</th>
                      <th>Product ID</th>
                      <th>Points</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Times Redeemed</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.length > 0 ? (
                      filteredItems.map((rw_data, i) => (
                        <tr key={rw_data.id}>
                             <td>
                          <h6>{i + 1 + indexOfFirstItem}</h6>
                          </td>
                          <td>
                            <h6>
                              <img
                                src={rw_data.item_image}
                                width={60}
                                height={40}
                                style={{ paddingRight: 10 }}
                              />
                              {rw_data.title}
                            </h6>
                          </td>
                          <td>
                            <h6>{rw_data.reward_id}</h6>
                          </td>
                          <td>
                            <h6>{rw_data.points}</h6>
                          </td>
                          <td>
                            <h6>{rw_data.description}</h6>
                          </td>

                          <td>
                            <span
                              className={
                                rw_data.is_active === true
                                  ? "badge badge-success light border-0"
                                  : "badge badge-danger light border-0"
                              }
                            >
                              {rw_data.is_active === true
                                ? "Active"
                                : "Inactive"}
                            </span>
                          </td>

                          <td>
                            <h6>{rw_data.times_redeemed}</h6>
                          </td>

                          <td>
                            {permissionForRewardProducts?.update && (
                              <button
                                style={{ background: "blue" }}
                                className="btn btn-primary btn-sm"
                                onClick={() => handleEditClick(rw_data)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M2.66699 14.667H13.3337"
                                    stroke="white"
                                    stroke-linecap="round"
                                  />
                                  <path
                                    d="M9.25903 2.44163L9.75336 1.94729C10.5724 1.12825 11.9003 1.12825 12.7194 1.94729C13.5384 2.76633 13.5384 4.09426 12.7194 4.9133L12.225 5.40764M9.25903 2.44163C9.25903 2.44163 9.32082 3.49209 10.2477 4.41897C11.1746 5.34585 12.225 5.40764 12.225 5.40764M9.25903 2.44163L4.71437 6.98629C4.40655 7.29411 4.25264 7.44802 4.12027 7.61772C3.96413 7.81791 3.83026 8.03451 3.72104 8.26369C3.62845 8.45797 3.55962 8.66446 3.42196 9.07745L2.83862 10.8275M12.225 5.40764L7.68038 9.9523C7.37256 10.2601 7.21865 10.414 7.04895 10.5464C6.84876 10.7025 6.63216 10.8364 6.40298 10.9456C6.2087 11.0382 6.0022 11.107 5.58922 11.2447L3.83922 11.828M3.83922 11.828L3.41144 11.9706C3.20821 12.0384 2.98414 11.9855 2.83266 11.834C2.68118 11.6825 2.62829 11.4585 2.69603 11.2552L2.83862 10.8275M3.83922 11.828L2.83862 10.8275"
                                    stroke="white"
                                  />
                                </svg>
                                &nbsp; Edit
                              </button>
                            )}
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
      {createProduct && (
        <AddReward
          data={createProduct}
          open={createProduct}
          setOpen={setCreateProduct}
          isUpdated={isUpdated}
          setisUpdated={setisUpdated}
        />
      )}
      {updateProduct && (
        <EditReward
          data={updateProduct}
          open={updateProduct}
          setOpen={setUpdateProduct}
          setisUpdated={setisUpdated}
        />
      )}
    </div>
  );
}

export default RewardPoints;
