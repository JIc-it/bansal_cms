import axiosInstance from "./authHandle";

const totalUsersURL = '/account/total-users/';
const totalLeadURL = '/purchase/admin-total-leads/';
const totalOrderURL = '/purchase/admin-total-orders/';
const totalRequestsURL = '/purchase/admin-total-requests/';

const orderRequestURL = '/purchase/admin-pending-orders/';
const leadRequestURL = '/purchase/admin-pending-leads/';

const orderconfirmURL='/purchase/admin-order-confirm/'
const LeadconfirmURL='/purchase/admin-lead-confirm/'

const contractorAllURL = '/purchase/admin-top-contractors/';
const contractorsMonthlyURL = '/purchase/admin-monthly-contractors/'; 

const engarcAllURL = '/purchase/admin-top-others/';
const engarcMonthlyURL = '/purchase/admin-monthly-others/'; 

const distributorAllURL = '/purchase/admin-top-distributors/';
const distributorMonthlyURL = '/purchase/admin-monthly-distributors/'; 

const rewardProducts = 'purchase/admin-reward-redeemed/'; 
const pendingrewards = 'purchase/admin-reward-pending/'; 
const rejectedrewards = 'purchase/admin-reward-rejected/'; 

const monthlyOrders='purchase/admin-monthly-orders/'
const quarterlyOrder='purchase/admin-quarterly-orders/'
const yearlyOrder='purchase/admin-yearly-orders/'

const monthlyQuantity='purchase/admin-monthly-quantity/'
const quarterlyQuantity='purchase/admin-quarterly-quantity/'
const yearlyQuantity='purchase/admin-yearly-quantity/'

const projectstatus='purchase/admin-redeemed-rewards/'
const projectstatusqtr='purchase/admin-reward-redemptions-qtr/'





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


export const updateOrderRequest = (id,pass) => {
  return axiosInstance.put(orderconfirmURL+id+'/',pass)
    .then((response) => response)
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

export const updateLeadRequest = (id,pass) => {
  return axiosInstance.put(LeadconfirmURL+id,pass)
    .then((response) => response)
    .catch((error) => {
      console.error('Error while fetching order request:', error);
      throw error;
    });
};

//admin-total-rewards
export const getrewardproducts = () => {
  return axiosInstance.get(rewardProducts)
    .then((response) => response.data.redeemed_rewards_count)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};

//rejected-orders
export const getrejectedOrders = () => {
  return axiosInstance.get(pendingrewards)
    .then((response) => response.data.pending_rewards_count)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};

//rejected-leads
export const getrejectedleads = () => {
  return axiosInstance.get(rejectedrewards)
    .then((response) => response.data.rejected_rewards_count)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};

//monthly-orders
export const getmonthlyorders = () => {
  return axiosInstance.get(monthlyOrders)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};

//quarterly-orders
export const getquarterlyorders = () => {
  return axiosInstance.get(quarterlyOrder)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};

//yearly-orders
export const getyearlyOrders = () => {
  return axiosInstance.get(yearlyOrder)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};

//monthly-quantity
export const getmonthlyquantity = () => {
  return axiosInstance.get(monthlyQuantity)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};

//quarterly-quantity
export const getquarterlyquantity = () => {
  return axiosInstance.get(quarterlyQuantity)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};

//yearly-quantity
export const getyearlyquantity = () => {
  return axiosInstance.get(yearlyQuantity)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};

//project-status
export const getrewardredeemed = () => {
  return axiosInstance.get(projectstatus)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};

//project-status-qtr
export const getrewardredeemedqtr = () => {
  return axiosInstance.get(projectstatusqtr)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching lead request:', error);
      throw error;
    });
};


