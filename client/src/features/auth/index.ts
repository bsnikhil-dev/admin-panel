import { createSlice } from '@reduxjs/toolkit';
import type { userDetails } from '../../types';

interface authInitialState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: userDetails;
}

const authState: authInitialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {
    userName: '',
    email: '',
    password: '',
    role: '',
  },
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: authState,
  reducers: {},
});

export default authSlice.reducer;
