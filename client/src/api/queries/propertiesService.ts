import apiClient from '../axios';

export const fetchProducts = async () => {
  const { data } = await apiClient.get('/shop/products/get');
  return data;
};
