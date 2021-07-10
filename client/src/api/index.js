import https from 'https';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://4.144.147.110:4000/api/',
  hostname: process.env.REEACT_APP_API_HOST || 'http://4.144.147.110:4000/',
  httpsAgent: https.Agent({
    rejectUnauthorized: false,
  }),
});

// TODO - use interceptors for better error handling: https://masteringjs.io/tutorials/axios/interceptors#error-handling

// User Authentication
export const login = payload => api.post(`/user/login`, payload);
export const signUp = payload => api.post(`/user`, payload);

// export const getAllItems = payload => api.get(`/items`, payload);
// export const getItemById = id => api.get(`/item/${id}`);
// export const insertItem = payload => api.post(`/item`, payload);
// export const updateItemById = (id, payload) => api.put(`/item/${id}`, payload);
// export const deleteItemById = id => api.delete(`/item/${id}`);

const apis = {
 login
  ,signUp
};

export default apis;
