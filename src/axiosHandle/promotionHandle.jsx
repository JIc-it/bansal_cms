import axiosInstance from "./authHandle";

const AdsListing = 'advertisement/ads/';


export const getAdsListing = () => {
    return axiosInstance.get(AdsListing)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error while fetching order request:', error);
        throw error;
      });
  };