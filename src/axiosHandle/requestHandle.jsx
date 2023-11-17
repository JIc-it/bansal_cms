import axiosInstance from "./authHandle";

const orderRequestURL = "/purchase/admin-pending-orders/";
const leadRequestURL = "/purchase/admin-pending-leads/";
const orderAcceptRejectUrl = "/purchase/admin-order-confirm";

export const getOrderRequest = () => {
  return axiosInstance
    .get(orderRequestURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};

export const getLeadRequest = (data) => {
  return axiosInstance
    .get(leadRequestURL, {
      params: {
        search: data?.search,
        role: data?.role,
        date: data?.date,
        status: data?.status,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getTotalRequests = () => {
  return axiosInstance
    .get("/purchase/admin-total-leads/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getPendingRequests = () => {
  return axiosInstance
    .get("/purchase/admin-pending-leads/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getAcceptedRequests = () => {
  return axiosInstance
    .get("/purchase/admin-accepted-leads/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getRejectedRequests = () => {
  return axiosInstance
    .get("/purchase/admin-leads-rejected/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

// Order Total Count

export const getTotalOrderRequests = () => {
  return axiosInstance
    .get("/purchase/admin-total-orders/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getOrderPendingRequests = () => {
  return axiosInstance
    .get("/purchase/admin-pending-orders/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getOrderAcceptedRequests = () => {
  return axiosInstance
    .get("/purchase/admin-accepted-orders/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getOrderRejectedRequests = () => {
  return axiosInstance
    .get("/purchase/admin-orders-rejected/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const handleOrderAcceptReject = (id, data) => {
  return axiosInstance
    .put(`${orderAcceptRejectUrl}/${id}/`, { action_type: data })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
