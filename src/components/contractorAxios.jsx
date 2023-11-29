import React, { useState } from 'react';
import axios from 'axios';

function CreateContractor() {
  const [newContractorData, setNewContractorData] = useState({
    name: '',
    email: '',
    mobile: '',
    state: '',
    district: '',
    password: '',
    confirmPassword: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewContractorData({
      ...newContractorData,
      [name]: value,
    }); 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Replace with your Django API endpoint
    const apiUrl = 'http://127.0.0.1:8000/account/create-contractor/';

    axios.post(apiUrl, newContractorData)
      .then((response) => {
        // Handle success, e.g., show a success message or reset the form
        console.log('Contractor created:', response.data);
        // Reset the form
        setNewContractorData({
          name: '',
          email: '',
          mobile: '',
          state: '',
          district: '',
          password: '',
          confirmPassword: '',
        });
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error('Error creating contractor:', error);
      });
  };

  return (
    <div>
      <h2>Create New Contractor</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={newContractorData.name}
          placeholder="Name"
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          value={newContractorData.email}
          placeholder="Email"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="mobile"
          value={newContractorData.mobile}
          placeholder="Mobile"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="state"
          value={newContractorData.state}
          placeholder="State"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="district"
          value={newContractorData.district}
          placeholder="District"
          onChange={handleFormChange}
        />
        <input
          type="password"
          name="password"
          value={newContractorData.password}
          placeholder="Password"
          onChange={handleFormChange}
        />
        <input
          type="password"
          name="confirmPassword"
          value={newContractorData.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleFormChange}
        />
        <button type="submit">Create Contractor</button>
      </form>
    </div>
  );
}

export default CreateContractor;
