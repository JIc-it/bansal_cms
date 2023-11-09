import React, { useState, useEffect } from 'react';
import { getAdminsRequest } from '../../../axiosHandle/userHandle';
import UserView from '../userView';
import AddNewAdmin from './AddNewAdmin';
import { useNavigate } from "react-router";
function Admins() {
  const navigate = useNavigate();
  const [user_data, setUserData] = useState(null);
  const [user_total_data, setUserTotalData] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpenAddAdmin, setIsOpenAddAdmin] = useState(false);
  const [isAdminAdded, setIsAdminAdded] = useState(false);
  const handleViewClick = (data) => {
    setSelectedUser(data);
  };

  useEffect(() => {
    getAdminsRequest()
      .then((data) => {
        setUserData(data.results);
        setUserTotalData(data.count);
      })
      .catch((error) => {
        console.error('Error fetching distributor data:', error);
      });
  }, []);

  const exportToCSV = () => {
    if (user_data) {
      const header = ['Name', 'Unique ID', 'Mobile', 'Location'];
      const csvData = user_data.map((rr_data) => {
        return [rr_data.name, rr_data.user_id, rr_data.mobile, rr_data.district_name];
      });

      const csvContent = [header, ...csvData].map((row) => row.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Admins.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const handleViewAdmin = (id) => {
    navigate(`/viewadmin/${id}`);
  };

  return (
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
      {/* row */}
      <div className="container">
        <div className="row" style={{ marginLeft: '5px' }}>
          <div className="col-xl-12 wid-100">
            <div className="row">
              <div className="col-xl-4 col-sm-7 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>Total Users</h6><br />
                        <h3>{user_total_data}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-7 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>Total Admins</h6><br />
                        <h3>12</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-7 same-card">
                <div className="card">
                  <div className="card-body depostit-card">
                    <div className="depostit-card-media d-flex justify-content-between style-1">
                      <div>
                        <h6>New Admins in current Qtr</h6><br />
                        <h3>12</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginLeft: '15px' }}>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Admins</h4>
                </div>
                <div className="row">
                  <div className="col-5">
                    <div className="input-group mb-3" style={{ maxWidth: 300, paddingTop: 15, paddingLeft: 15 }}>
                      <input type="text" className="form-control" style={{ marginRight: 10 }} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                      <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                    </div>
                  </div>
                  <div className="col-5 text-end">
                    {/* <button className="btn btn-primary btn-sm" type="button" id="add-points-button"><i className="fa-regular fa-square-plus" /> Add New Contractor</button> */}
                    <button
                      className="btn btn-primary btn-sm"
                      type="button"
                      id="add-points-button"
                      onClick={() => {
                        setIsOpenAddAdmin(true);
                      }}
                    >
                      <i className="fa-regular fa-square-plus" /> Add New
                      Admin
                    </button>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-light btn-sm" type="button" id="export-button" onClick={exportToCSV}><i className="fa-solid fa-file-export" /> Export</button>
                  </div>
                </div>
                <table id="empoloyees-tblwrapper" className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Unique id</th>
                      <th>Mobile</th>
                      <th>Location</th>
                      <th>Action</th>
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {user_data && user_data.length > 0 ? (
                      user_data.slice(0, 5).map((data) => (
                        <tr key={data.id}>
                          <td><h6>{data.name}</h6></td>
                          <td><h6>{data.user_id}</h6></td>
                          <td><h6>{data.mobile}</h6></td>
                          <td><h6>{data.district_name}</h6></td>
                          {/* <td>
                              <button className="btn btn-primary" onClick={() => handleViewClick(data)}>View User</button>
                            </td> */}
                          <td onClick={() => handleViewAdmin(data)}>
                            <a
                              className="btn btn-primary btn-sm"
                              href="#"
                              role="button"
                            >
                              View User
                            </a>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">No user available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {selectedUser && <UserView data={selectedUser} open_view={true} />} */}
      {isOpenAddAdmin && (
        <AddNewAdmin
          setIsAdminAdded={setIsAdminAdded}
          isAdminAdded={isAdminAdded}
          setOpen={setIsOpenAddAdmin}
          open={isOpenAddAdmin}
        />
      )}
    </div>
  );
};

export default Admins;