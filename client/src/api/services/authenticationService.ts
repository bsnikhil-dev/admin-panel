import apiClient from '../axios';

interface userReposneData {
  userId: string;
  displayName: string;
  username: string;
  email: string;
  token: string;
}

export const registerUser = async (userData: {
  username: string;
  displayName: string;
  email: string;
  password: string;
}): Promise<userReposneData> => {
  try {
    const reposne = await apiClient.post<userReposneData>('/auth/register', userData);
    return reposne.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}): Promise<userReposneData> => {
  try {
    const reposne = await apiClient.post<userReposneData>('/auth/login', userData);
    return reposne.data;
  } catch (error) {
    throw error;
  }
};
