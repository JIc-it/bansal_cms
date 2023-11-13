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
const getUserOrderCount = "/purchase/admin-userview-orders-counts";
const getUserPointsCount = "/purchase/admin-userview-points-counts";
const getUserLeadsCount = "/purchase/admin-userview-leads-counts";
const getUserRedemptionURL = "/purchase/redemption_history/user";
const deleteContractorUrl = "/account/delete/user";
const distributorOrderURL = "purchase/tmt_orders_dist/user";
const getUserLeadsURL = "/purchase/leads/user";
const commonUserCreationURL = "/account/admin-create-user/";
const commonUserUpdationnURL = "/account/admin-update-user";

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

export const getEngineersRequest = (searchUserData) => {
  return axiosInstance
    .get(engineersURL, {
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

export const getArchitectsRequest = (searchUserData) => {
  return axiosInstance
    .get(architectsURL, {
      params: {
        search: searchUserData,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching architects request:", error);
      throw error;
    });
};

export const createArchitects = (data) => {
  return axiosInstance
    .post(architectsURL, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating reward product:", error);
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
      console.error("Error while reset password request:", error);
      throw error;
    });
};

export const getUserOrders = (id, data) => {
  return axiosInstance
    .get(`${getUserOrderURL}/${id}/`, {
      params: {
        search: data.search,
        status: data.status,
        point_from: data.point_from,
        point_to: data.point_to,
        date: data.date,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};

export const getUserOrdersCounts = (id) => {
  return axiosInstance
    .get(`${getUserOrderCount}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};

export const getUserPointsCounts = (id) => {
  return axiosInstance
    .get(`${getUserPointsCount}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching points request:", error);
      throw error;
    });
};

export const getUserLeadsCounts = (id) => {
  return axiosInstance
    .get(`${getUserLeadsCount}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching leads request:", error);
      throw error;
    });
};

export const getUserLeads = (id) => {
  return axiosInstance
    .get(`${getUserLeadsURL}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching leads request:", error);
      throw error;
    });
};

export const getUserRedemptionData = (id) => {
  return axiosInstance
    .get(`${getUserRedemptionURL}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching redemption request:", error);
      throw error;
    });
};

export const getDistributorOrders = (id) => {
  return axiosInstance
    .get(`${distributorOrderURL}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching ditributor request:", error);
      throw error;
    });
};

export const deleteContractorUser = (id) => {
  return axiosInstance
    .delete(`${deleteContractorUrl}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching contractor request:", error);
      throw error;
    });
};

export const createDistributor = (data) => {
  return axiosInstance
    .post(distributorsURL, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating ditributor:", error);
      throw error;
    });
};

export const createEngineer = (data) => {
  return axiosInstance
    .post(engineersURL, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating engineer:", error);
      throw error;
    });
};

//////////////////common api for all user creation//////////////////////
export const createUser = (data) => {
  console.log(data);
  return axiosInstance
    .post(commonUserCreationURL, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating user:", error);
      throw error;
    });
};

//////////////////common api for all user edition//////////////////////
export const updateUser = (id, data) => {
  console.log(data);
  return axiosInstance
    .patch(`${commonUserUpdationnURL}/${id}/`, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating user:", error);
      throw error;
    });
};
