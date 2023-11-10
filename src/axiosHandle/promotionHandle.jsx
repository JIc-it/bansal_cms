import axiosInstance from "./authHandle";

const AdsListing = "advertisement/ads/";
const updatePromotionUrl = "/advertisement/ads";

export const getAdsListing = () => {
  return axiosInstance
    .get(AdsListing)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};

export const getAdHistory = (id, searchData) => {
  return axiosInstance
    .get(`advertisement/ads_history/${id}`, {
      params: {
        search: searchData,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching History:", error);
      throw error;
    });
};

export const updatePromotion = (id, data) => {
  return axiosInstance
    .put(`${updatePromotionUrl}/${id}/`, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while update order request:", error);
      throw error;
    });
};
