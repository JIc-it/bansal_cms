import axiosInstance from "./authHandle";

const contractorsURL = "/account/create-contractor/";
const architectsURL = "/account/create-architect/";
const salepocURL = "/account/create-sales-poc/";
const engineersURL = "/account/create-engineer/";
const adminsURL = "/account/create-admin/";
const distributorsURL = "/account/create-distributor/";
const userCountsURL = "/account/api/users/user_stats/";
const userResetPasswordURL = "/account/password-reset";
const getUserOrderURL = "/purchase/tmt_orders/user";
const getUserRedemptionURL = "/purchase/redemption_history/user";
const deleteContractorUrl = "/account/delete/user";
const distributorOrderURL = "purchase/tmt_orders_dist/user";
const getUserLeadsURL = "/purchase/leads/user";

export const getDistributorsRequest = (searchUserData) => {
  return axiosInstance
    .get(distributorsURL, {
      params: {
        search: searchUserData,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching engineers request:", error);
      throw error;
    });
};

export const getAdminsRequest = () => {
  return axiosInstance
    .get(adminsURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching engineers request:", error);
      throw error;
    });
};

export const getEngineersRequest = () => {
  return axiosInstance
    .get(engineersURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching engineers request:", error);
      throw error;
    });
};

export const getSalePOCRequest = () => {
  return axiosInstance
    .get(salepocURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching sale poc request:", error);
      throw error;
    });
};

export const getContractorsRequest = (searchData, filterCriteria) => {
  return axiosInstance
    .get(contractorsURL, {
      params: {
        search: searchData,
        points_from: filterCriteria.from,
        points_to: filterCriteria.to,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching contractor request:", error);
      throw error;
    });
};

export const getArchitectsRequest = () => {
  return axiosInstance
    .get(architectsURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching architects request:", error);
      throw error;
    });
};

export const createContractor = (data) => {
  console.log(data);
  return axiosInstance
    .post(contractorsURL, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating reward product:", error);
      throw error;
    });
};

export const deleteContractor = (id) => {
  console.log(id);
  return axiosInstance
    .post(contractorsURL, id)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating reward product:", error);
      throw error;
    });
};

export const getUserStatics = (role) => {
  return axiosInstance
    .get(userCountsURL, { params: { role: role } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching architects request:", error);
      throw error;
    });
};

export const handleUserResetPassword = (id, data) => {
  return axiosInstance
    .patch(`${userResetPasswordURL}/${id}/`, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching architects request:", error);
      throw error;
    });
};

export const getUserOrders = (id) => {
  return axiosInstance
    .get(`${getUserOrderURL}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching architects request:", error);
      throw error;
    });
};

export const getUserLeads = (id) => {
  return axiosInstance
    .get(`${getUserLeadsURL}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching architects request:", error);
      throw error;
    });
};

export const getUserRedemptionData = (id) => {
  return axiosInstance
    .get(`${getUserRedemptionURL}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching architects request:", error);
      throw error;
    });
};

export const getDistributorOrders = (id) => {
  return axiosInstance
    .get(`${distributorOrderURL}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching architects request:", error);
      throw error;
    });
};

export const deleteContractorUser = (id) => {
  return axiosInstance
    .delete(`${deleteContractorUrl}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching architects request:", error);
      throw error;
    });
};

export const createDistributor = (data) => {
  return axiosInstance
    .post(distributorsURL, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating reward product:", error);
      throw error;
    });
};

export const createEngineer = (data) => {
  return axiosInstance
    .post(engineersURL, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating reward product:", error);
      throw error;
    });
};
