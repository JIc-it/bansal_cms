import React, { useState, useEffect } from 'react';
import { getRedemptionRequest } from '../../../axiosHandle/rewardHandle';
import ViewReward from './viewReward';

function Redemptions() {
  const handleViewClick = (data) => {
    setselectedRedemption(data);
  };

  const [reward_redemption_data, setRedemptionData] = useState(null);
  const [selectedRedemption, setselectedRedemption] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getRedemptionRequest()
      .then((data) => {
        setRedemptionData(data.results);
      })
      .catch((error) => {
        console.error('Error fetching lead data:', error);
      });
  }, []);

  const exportToCSV = () => {
    if (reward_redemption_data) {
      const header = ['Transaction id', 'Reward', 'Product ID', 'Buyer', 'Buyer id', 'Date & Time', 'Status'];
      const csvData = reward_redemption_data.map((rr_data) => {
        return [rr_data.title, rr_data.id, rr_data.points, rr_data.description, null, null, rr_data.quantity];
      });

      const csvContent = [header, ...csvData].map((row) => row.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'redemptions.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const totalPages = Math.ceil(reward_redemption_data ? reward_redemption_data.length / itemsPerPage : 1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reward_redemption_data
    ? reward_redemption_data.slice(indexOfFirstItem, indexOfLastItem)
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
      <div className="container">
        <div className="row" style={{marginLeft: '4px'}}>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">Redemptions</h4>
                  </div>
                  <div className="row">
                    <div className="col-9">
                      <div className="input-group mb-3" style={{ maxWidth: 300, paddingTop: 15, paddingLeft: 15 }}>
                        <input type="text" className="form-control" style={{ marginRight: 10 }} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                        <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                      </div>
                    </div>
                    <div className="col-3" style={{ marginTop: 18 }}>
                      <button style={{ marginLeft: 120 }} className="btn btn-light btn-sm" type="button" onClick={exportToCSV}>
                        <i className="fa-solid fa-file-export" /> Export
                      </button>
                    </div>
                  </div>
                  <table id="reports-tbl" className="table">
                    <thead>
                      <tr>
                        <th>Transaction id</th>
                        <th>Reward</th>
                        <th>Product ID</th>
                        <th>Buyer</th>
                        <th>Buyer id</th>
                        <th>Date &amp; Time</th>
                        <th>Status</th>
                        <th className="text-end" />
                      </tr>
                    </thead>

                    <tbody>
                      {currentItems.length > 0 ? (
                        currentItems.map((rr_data) => (
                          <tr key={rr_data.id}>
                            <td><h6>{rr_data.title}</h6></td>
                            <td><h6>{rr_data.id}</h6></td>
                            <td><h6>{rr_data.points}</h6></td>
                            <td><h6>{rr_data.description}</h6></td>
                            <td><h6>{null}</h6></td>
                            <td><h6>{null}</h6></td>
                            <td><h6>{rr_data.quantity}</h6></td>
                            <td>
                              <button style={{ background: 'blue' }} className="btn btn-primary btn-sm" onClick={() => handleViewClick(rr_data)}>
                                View
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">No reward products available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className="col-12">
                    <div className="btn-group" style={{float: 'right'}}>
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
      </div>
      {selectedRedemption && <ViewReward data={selectedRedemption} open={selectedRedemption} setOpen={setselectedRedemption} />}
    </div>
  );
}

export default Redemptions;
