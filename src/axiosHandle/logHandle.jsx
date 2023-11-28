import axiosInstance from "./authHandle";
const logRequestURL = "/report/log-list/";

export const getLogRequest = (data) => {
    return axiosInstance
      .get(logRequestURL, {
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