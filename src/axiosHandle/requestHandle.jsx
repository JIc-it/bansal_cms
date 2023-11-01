import axiosInstance from "./authHandle";


const orderRequestURL = '/purchase/admin-pending-orders/';
const leadRequestURL = '/purchase/admin-pending-leads/';



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