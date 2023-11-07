import axiosInstance from "./authHandle";


const rewardProductsURL = '/purchase/rewards/';
const rewardProductCreateURL = '/purchase/rewards/';
const rewardProductEditURL = '/purchase/rewards/';
const rewardRedemptionURL = '/purchase/rewards/';
const rewardProductTotalCountURL = '/purchase/rewards/'
const redeemedviewURL = "/purchase/admin-pending-orders/";

export const getRewardProductsRequest = () => {
  return axiosInstance.get(rewardProductsURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching reward products:', error);
      throw error;
    });
};

export const createRewardProductRequest = (data) => {
  console.log(data);
  return axiosInstance.post(rewardProductCreateURL, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while creating reward product:', error);
      throw error;
    });
};


export const editRewardProductRequest = (data, id) => {
  return axiosInstance.patch(rewardProductEditURL + id, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while creating reward product:', error);
      throw error;
    });
};

export const getRedemptionRequest = () => {
  return axiosInstance.get(rewardRedemptionURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching reward redemption:', error);
      throw error;
    });
};

export const getTotalRewardProducts = () => {
  return axiosInstance
    .get("/purchase/rewards/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getTotalProductsRedeemed = () => {
  return axiosInstance
    .get("/redemption-history/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getTotalRedeemedCount = () => {
  return axiosInstance
    .get("/purchase/admin-reward-otr/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};


export const getLeadView = (searchData) => {
  return axiosInstance
    .get(redeemedviewURL, { params: { search: searchData } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching contractor request:", error);
      throw error;
    });
};