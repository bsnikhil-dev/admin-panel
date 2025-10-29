import apiClient from '../axios';
import { AxiosError } from 'axios';

export const fetchProperties = async () => {
  try {
    const response = await apiClient.get('/shop/products/get');
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || error.message);
    }
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred');
  }
};
