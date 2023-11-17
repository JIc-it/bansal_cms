import axiosInstance from "./authHandle";

const orderRequestURL = "/purchase/admin-pending-orders/";
const leadRequestURL = "/purchase/admin-pending-leads/";
const orderPointURL = "/purchase/admin-order-points/";

export const getOrderRequest = () => {
  return axiosInstance
    .get(orderRequestURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};

export const getLeadRequest = () => {
  return axiosInstance
    .get(leadRequestURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getOrderPoint = (search, filterCriteria) => {
  return axiosInstance
    .get(orderPointURL, {
      params: {
        search: search,
        points_from: filterCriteria.points_from,
        points_to: filterCriteria.points_to,
        status: filterCriteria.status,
        role: filterCriteria.role,
        date:
          filterCriteria.date === ""
            ? ""
            : new Date(filterCriteria.date).toLocaleDateString("en-CA"),
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};
