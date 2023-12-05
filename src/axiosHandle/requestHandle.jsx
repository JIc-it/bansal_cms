import axiosInstance from "./authHandle";

const orderRequestURL = "/purchase/admin-pending-orders/";
const leadRequestURL = "/purchase/admin-leads-points/";
const orderAcceptRejectUrl = "/purchase/admin-order-confirm";

export const getOrderRequest = (search,filter) => {
  return axiosInstance
    .get(orderRequestURL,{params:{search:search,role:filter?.role,date:filter?.date}})
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

export const getPendingRequests = (search,data) => {
  return axiosInstance
    .get("/purchase/admin-pending-leads/",{
      params: {
        search: search,
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

export const handleOrderAcceptReject = (id, data, comment) => {
  return axiosInstance
    .put(`${orderAcceptRejectUrl}/${id}/`, {
      action_type: data,
      comments: comment,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
