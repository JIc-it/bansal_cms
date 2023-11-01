import axiosInstance from "./authHandle";

const profileURL = '/account/view/';



export const getProfileRequest = () => {
  return axiosInstance.get(profileURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error while fetching profile:', error);
      throw error;
    });
};