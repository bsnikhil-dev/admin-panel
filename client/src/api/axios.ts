import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import axios, { AxiosHeaders } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const getHeaders = () => {
  return {
    'content-type': 'application/json',
  };
};

const generateHeaders = (
  configurations: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const newHeaders = AxiosHeaders.from({
    ...getHeaders(),
    ...configurations.headers,
  });
  return {
    ...configurations,
    headers: newHeaders,
  };
};

apiClient.interceptors.request.use(
  (configurations: InternalAxiosRequestConfig) => {
    return generateHeaders(configurations);
  },
  error => Promise.reject(error)
);
export default apiClient;
