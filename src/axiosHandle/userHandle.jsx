import axiosInstance from "./authHandle";


const contractorsURL = '/account/create-contractor/';
const architectsURL = '/account/create-architect/';
const salepocURL = '/account/create-sales-poc/';
const engineersURL = '/account/create-engineer/';
const adminsURL = '/account/create-admin/';
const distributorsURL = '/account/create-distributor/';


export const getDistributorsRequest = () => {
    return axiosInstance.get(distributorsURL)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error while fetching engineers request:', error);
            throw error;
        });
};


export const getAdminsRequest = () => {
    return axiosInstance.get(adminsURL)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error while fetching engineers request:', error);
            throw error;
        });
};


export const getEngineersRequest = () => {
    return axiosInstance.get(engineersURL)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error while fetching engineers request:', error);
            throw error;
        });
};


export const getSalePOCRequest = () => {
    return axiosInstance.get(salepocURL)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error while fetching sale poc request:', error);
            throw error;
        });
};


export const getContractorsRequest = () => {
    return axiosInstance.get(contractorsURL)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error while fetching contractor request:', error);
            throw error;
        });
};


export const getArchitectsRequest = () => {
    return axiosInstance.get(architectsURL)
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error while fetching architects request:', error);
            throw error;
        });
};