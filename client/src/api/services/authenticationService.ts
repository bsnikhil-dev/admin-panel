import apiClient from '../axios';

export interface authenticationReposneBody {
  token: string;
  userId: string;
  username: string;
  email: string;
  role: string;
}

export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
}): Promise<authenticationReposneBody> => {
  try {
    const reposne = await apiClient.post<authenticationReposneBody>('/auth/register', userData, {
      headers: { 'request-id': 'REGISTER_REQUEST_ID' },
    });
    return reposne.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}): Promise<authenticationReposneBody> => {
  try {
    const reposne = await apiClient.post<authenticationReposneBody>('/auth/login', userData, {
      headers: { 'request-id': 'LOGIN_REQUEST_ID' },
    });
    return reposne.data;
  } catch (error) {
    throw error;
  }
};
