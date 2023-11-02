import React, { useState, useEffect } from 'react';
import Cards from './cards';
import { getRewardProductsRequest } from '../../../axiosHandle/rewardHandle';
import AddReward from './addReward';
import EditReward from './editReward';

function RewardPoints() {
  const [reward_product_data, setRewardProductData] = useState(null);
  const [createProduct, setCreateProduct] = useState(null);
  const [updateProduct, setUpdateProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchText, setSearchText] = useState('');

  const handleEditClick = (data) => {
    setUpdateProduct(data);
  };

  const handleCreateClick = (order) => {
    setCreateProduct(true);
  };

  useEffect(() => {
    getRewardProductsRequest()
      .then((data) => {
        setRewardProductData(data.results);
      })
      .catch((error) => {
        console.error('Error fetching lead data:', error);
      });
  }, []);

  const exportToCSV = () => {
    if (reward_product_data) {
      const header = ['Product', 'Product ID', 'Points', 'Description', 'Status', 'Times Redeemed'];
      const csvData = reward_product_data.map((rr_data) => {
        return [rr_data.title, rr_data.id, rr_data.points, rr_data.description, null, null, rr_data.quantity];
      });

      const csvContent = [header, ...csvData].map((row) => row.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'reward_product.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const totalPages = Math.ceil(reward_product_data ? reward_product_data.length / itemsPerPage : 1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredItems = reward_product_data
    ? reward_product_data.filter((rw_data) => {
      const searchableFields = [rw_data.title, rw_data.id, rw_data.points, rw_data.description];
      return searchableFields.some((field) =>
        (typeof field === 'string' && field.toLowerCase().includes(searchText.toLowerCase()))
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
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
      <Cards />
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects manage-client">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">Orders History</h4>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <div className="input-group mb-3" style={{ maxWidth: 300, paddingTop: 15, paddingLeft: 15 }}>
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
                        <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                      </div>
                    </div>
                    <div className="col-5 text-end">
                      <button className="btn btn-primary btn-sm" type="button" id="add-product-button" onClick={() => handleCreateClick()}><i className="fa-regular fa-square-plus" /> Add Reward Product</button>
                    </div>
                    <div className="col-2">
                      <button className="btn btn-light btn-sm" type="button" id="export-button"><i className="fa-solid fa-file-export" onClick={exportToCSV} /> Export</button>
                    </div>
                  </div>
                  <table id="reports-tbl" className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Product ID</th>
                        <th>Points</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Times Redeemed</th>
                        <th>Action</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>

                      {filteredItems.length > 0 ? (
                        filteredItems.map((rw_data) => (
                          <tr key={rw_data.id}>
                            <td><h6>{rw_data.title}</h6></td>
                            <td><h6>{rw_data.id}</h6></td>
                            <td><h6>{rw_data.points}</h6></td>
                            <td><h6>{rw_data.description}</h6></td>
                            <td><h6>{null}</h6></td>
                            <td><h6>{null}</h6></td>
                            <td><h6>{rw_data.quantity}</h6></td>
                            <td>
                              <button style={{ background: 'blue' }} className="btn btn-primary btn-sm" onClick={() => handleEditClick(rw_data)}>Edit</button>
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
                    <div className="btn-group" style={{ float: 'right' }}>
                      <button className="btn btn-light btn-sm" onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous
                      </button>&nbsp;
                      <button className="btn btn-light btn-sm" onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {createProduct && <AddReward data={createProduct} open={createProduct} setOpen={setCreateProduct} />}
        {updateProduct && <EditReward data={updateProduct} open={updateProduct} setOpen={setUpdateProduct} />}
      </div>
    </div>
  );
}

export default RewardPoints;
