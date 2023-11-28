import axiosInstance from "./authHandle";

const contractorsURL = "/account/create-contractor/";
const creatArchitect = "/account/create-architect/";
const architectsURL = "/account/create-architect/";
const salepocURL = "/account/create-sales-poc/";
const engineersURL = "/account/create-engineer/";
const adminsURL = "/account/create-admin/";
// const salessURL = "/account/create-sales-poc/";
const createUserURL = "account/admin-create-user/";
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
const adminUSerViewOrdersURL = "purchase/tmt_orders_admin/user";
const commonUserAddPointsURL = "/purchase/admin-add-points";
const commonUserRedemptionURL = "/purchase/redemption_history/user";
const adminpermissionviewURL = "account/custom_permission/retrieve";
const adminprofilecreation = "account/create-admin/";
const salesprofilecreation = "/account/create-sales-poc/";
const adminupdateuserURL = "account/admin-update-user";
const adminpermissionupdateuserURl = "/account/custom-permission";
const salesupdateuserURL = "account/admin-update-user";
const userStatusUrl = "account/api/users/user_stats/?role=";
const purchaseNotification = "/purchase/admin-notifications/";
const deleteNotification = "/purchase/notification-read/";
const adminUSerViewLeadsURL = "purchase/leads/admin";
const adminUserDisableEnableUrl = "/account/disable-enable/user";
const stateidURl="/core/location"
const activeUsersURL="account/active-users-count/?is_delete=false/"

const adminUSerViewOrderURL = "/purchase/tmt_orders_admin/user/";
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

export const getAdminsRequest = (search) => {
  return axiosInstance
    .get(adminsURL, { params: { search: search } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching engineers request:", error);
      throw error;
    });
};

export const getSalesRequest = (search) => {
  return axiosInstance
    .get(salepocURL, { params: { search: search } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching engineers request:", error);
      throw error;
    });
};
export const getSalePOCCount = (role) => {
  return axiosInstance
    .get(userStatusUrl + role)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching sale poc request:", error);
      throw error;
    });
};

const addSales = (data) => {
  return axiosInstance
    .post(createUserURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching add sale poc request:", error);
      throw error;
    });
};
export const getEngineersRequest = (searchUserData, filterCriteria) => {
  console.log(
    filterCriteria && new Date(filterCriteria.date).toLocaleDateString("en-CA")
  );
  return axiosInstance
    .get(engineersURL, {
      params: {
        search: searchUserData,
        points_from: filterCriteria.pointsFrom,
        points_to: filterCriteria.pointsTo,
        leads_from: filterCriteria.leadsFrom,
        leads_to: filterCriteria.leadsTo,
        date:
          filterCriteria.date === ""
            ? ""
            : new Date(filterCriteria.date).toLocaleDateString("en-CA"),
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching engineers request:", error);
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

export const getArchitectsRequest = (searchUserData, filterCriteria) => {
  console.log(
    filterCriteria && new Date(filterCriteria.date).toLocaleDateString("en-CA")
  );
  return axiosInstance
    .get(architectsURL, {
      params: {
        search: searchUserData,
        points_from: filterCriteria.pointsFrom,
        points_to: filterCriteria.pointsTo,
        leads_from: filterCriteria.leadsFrom,
        leads_to: filterCriteria.leadsTo,
        date:
          filterCriteria.date === ""
            ? ""
            : new Date(filterCriteria.date).toLocaleDateString("en-CA"),
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
export const createArchitect = async (data) => {
  console.log("createArchitect", data);
  try {
    const response = await axiosInstance.get(creatArchitect, data);
    return response.data;
  } catch (error) {
    console.error("Error while creating reward product:", error);
    throw error;
  }
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
export const getActiveUsers = (role) => {
  return axiosInstance
    .get(activeUsersURL, { params: { role: role } })
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

export const getUserOrders = (id, search, filterdata) => {
  return axiosInstance
    .get(`${getUserOrderURL}/${id}/`, {
      params: {
        search: search,
        status: filterdata.status,
        points_from: filterdata.points_from,
        points_to: filterdata.points_to,

        date:
          filterdata.date === ""
            ? ""
            : new Date(filterdata.date).toLocaleDateString("en-CA"),
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

export const getUserLeads = (id, search, filterdata) => {
  return axiosInstance
    .get(`${getUserLeadsURL}/${id}/`, {
      params: {
        search: search,
        status: filterdata.status,

        date:
          filterdata.date === ""
            ? ""
            : new Date(filterdata.date).toLocaleDateString("en-CA"),
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching leads request:", error);
      throw error;
    });
};

export const getUserRedemptionData = (id, search, filterdata) => {
  return axiosInstance
    .get(`${getUserRedemptionURL}/${id}/`, {
      params: {
        search: search,

        date:
          filterdata?.date === ""
            ? ""
            : new Date(filterdata.date).toLocaleDateString("en-CA"),
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching redemption request:", error);
      throw error;
    });
};

export const getDistributorOrders = (id, search, filterdata) => {
  return axiosInstance
    .get(`${distributorOrderURL}/${id}/`, {
      params: {
        search: search,
        points_from: filterdata?.points_from,
        points_to: filterdata?.points_to,
        status: filterdata?.status,
        role: filterdata?.role,
        date:
          filterdata?.date === ""
            ? ""
            : new Date(filterdata?.date).toLocaleDateString("en-CA"),
      },
    })
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

export const adminUSerViewOrdersRequest = async (id, data) => {
  console.log(data, "adminUSerViewOrdersRequest");
  try {
    const response = await axiosInstance.get(
      `${adminUSerViewOrdersURL}/${id}/`,
      {
        params: {
          // role:data?.role,
          search: data?.search,
          // status: data?.status,
          points_from: data?.from,
          points_to: data?.to,
          date: data?.formattedDate,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error while fetching order request:", error);
    throw error;
  }
};
export const adminUSerViewLeadssRequest = async (id, data) => {
  console.log(id, data, "adminUSerViewLeadssRequest");
  try {
    const response = await axiosInstance.get(
      `${adminUSerViewLeadsURL}/${id}/`,
      {
        params: {
          role: data?.roles,
          search: data?.search,
          status: data?.status,
          points_from: data?.from,
          points_to: data?.to,
          date: data?.formattedDate,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error while fetching adminUSer View Leads Request request:",
      error
    );
    throw error;
  }
};

///////////////add points for indivitual user//////////////
export const addUserPoints = (id, data) => {
  return axiosInstance
    .post(`${commonUserAddPointsURL}/${id}/`, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating user:", error);
      throw error;
    });
};

export const adminPermissionViewRequest = (id) => {
  return axiosInstance
    .get(`${adminpermissionviewURL}/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};

export const adminupdateuser = (id, data) => {
  return axiosInstance
    .put(`${adminupdateuserURL}/${id}/`, data)
    .then((response) => response)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};

export const adminpermissionupdateuser = (id, data) => {
  return axiosInstance
    .put(
      `${adminpermissionupdateuserURl}/${id}/`,
      { permission: data },
      {
        headers: { "Content-Type": "application/json", Accept: "*/*" },
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};

export const createAdmin = (data) => {
  return axiosInstance
    .post(adminprofilecreation, data, {
      headers: { "Content-Type": "application/json", Accept: "*/*" },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating reward product:", error);
      throw error;
    });
};

export const createSales = (data) => {
  console.log("createSales data", data);
  return axiosInstance
    .post(salesprofilecreation, data, {
      headers: { "Content-Type": "application/json", Accept: "*/*" },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while creating reward product:", error);
      throw error;
    });
};

export const salesupdateuser = (id, data) => {
  console.log(`${salesupdateuserURL}/${id}/`, data);
  return axiosInstance
    .put(`${salesupdateuserURL}/${id}/`, data)
    .then((response) => response)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};

export const NotificationList = async () => {
  try {
    const response = await axiosInstance.get(purchaseNotification);
    return response.data;
  } catch (error) {
    console.error("Error while fetching Notification List request:", error);
    throw error;
  }
};
export const NotificationDelete = async () => {
  try {
    const response = await axiosInstance.post(deleteNotification);
    return response.data;
  } catch (error) {
    console.error(
      "Error while fetching Notification Delete List request:",
      error
    );
    throw error;
  }
};

//////////////////////admin lead list//////////////////
export const adminUSerViewLeadsRequest = (id, search, data) => {
  return axiosInstance
    .get(`${adminUSerViewLeadsURL}/${id}/`, {
      params: {
        role: data?.role,
        search: search,
        status: data?.status,
        date:
          data?.date === ""
            ? ""
            : new Date(data.date).toLocaleDateString("en-CA"),
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};

export const adminUserDisableEnable = (id, active) => {
  return axiosInstance
    .put(`${adminUserDisableEnableUrl}/${id}/`, { is_delete: active })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};
export const stateIdFilter = (id) => {
  return axiosInstance
    .get(`${stateidURl}/`,{params:{state:id}})
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};

