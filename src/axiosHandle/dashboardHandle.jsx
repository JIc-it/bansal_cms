import axiosInstance from "./authHandle";

const totalUsersURL = '/account/total-users/';
const totalLeadURL = '/purchase/admin-total-leads/';
const totalOrderURL = '/purchase/admin-total-orders/';
const totalRequestsURL = '/purchase/admin-total-requests/';

const orderRequestURL = '/purchase/admin-pending-orders/';
const leadRequestURL = '/purchase/admin-pending-leads/';

const contractorAllURL = '/purchase/admin-top-contractors/';
const contractorsMonthlyURL = '/purchase/admin-monthly-contractors/'; 

const engarcAllURL = '/purchase/admin-top-others/';
const engarcMonthlyURL = '/purchase/admin-monthly-others/'; 

const distributorAllURL = '/purchase/admin-top-distributors/';
const distributorMonthlyURL = '/purchase/admin-monthly-distributors/'; 


// Star Performer

export const getDistributorMonthlyURLRequest = () => {
  return axiosInstance.get(distributorMonthlyURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching distributor monthly:', error);
      throw error;
    });
};

export const getDistributorAllRequest = () => {
  return axiosInstance.get(distributorAllURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching distributor all:', error);
      throw error;
    });
};

export const getEngArcMonthlyRequest = () => {
  return axiosInstance.get(engarcMonthlyURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching eng arc monthly:', error);
      throw error;
    });
};

export const getEngArcAllRequest = () => {
  return axiosInstance.get(engarcAllURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching eng arc all:', error);
      throw error;
    });
};

export const getContractorsMonthlyRequest = () => {
  return axiosInstance.get(contractorsMonthlyURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching contractor monthly:', error);
      throw error;
    });
};

export const getContractorAllRequest = () => {
  return axiosInstance.get(contractorAllURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching contractor all:', error);
      throw error;
    });
};

// Count cards
export const getUserCount = () => {
  return axiosInstance.get(totalUsersURL)
    .then((response) => response.data.total_users_count)
    .catch((error) => {
      console.error('Error while fetching user count:', error);
      throw error;
    });
};

export const getLeadCount = () => {
  return axiosInstance.get(totalLeadURL)
    .then((response) => response.data.total_leads_count)
    .catch((error) => {
      console.error('Error while fetching user count:', error);
      throw error;
    });
};

export const getOrderCount = () => {
  return axiosInstance.get(totalOrderURL)
    .then((response) => response.data.total_orders_count)
    .catch((error) => {
      console.error('Error while fetching user count:', error);
      throw error;
    });
};

export const getRequestCount = () => {
  return axiosInstance.get(totalRequestsURL)
    .then((response) => response.data.total_requests_count)
    .catch((error) => {
      console.error('Error while fetching user count:', error);
      throw error;
    });
};


// Pending order & lead request
export const getOrderRequest = () => {
  return axiosInstance.get(orderRequestURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching order request:', error);
      throw error;
    });
};


export const getLeadRequest = () => {
  return axiosInstance.get(leadRequestURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};