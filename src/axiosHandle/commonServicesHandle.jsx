import axiosInstance from "./authHandle";

export const getAllLocations = () => {
  return axiosInstance
    .get("/core/location/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getAllStates = () => {
  return axiosInstance
    .get("/core/state/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getTotalUsersCount = () => {
  return axiosInstance
    .get("/account/total-users/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getPermission = (id) => {
  return axiosInstance
    .get(`/account/custom_permission/retrieve/${id}/`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
