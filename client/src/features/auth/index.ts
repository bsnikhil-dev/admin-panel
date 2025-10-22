import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { userDetails } from '../../types';
import { registerUser, type userReposneData } from '../../api/services/authenticationService';
import { AxiosError } from 'axios';

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

const registerThunk = createAsyncThunk<
  userReposneData,
  {
    username: string;
    displayName: string;
    email: string;
    password: string;
  },
  { rejectValue: { message: string } }
>('post/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await registerUser(userData);
    return response;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error.response?.data);
    }
    return rejectWithValue(error.response?.data);
  }
});

const authSlice = createSlice({
  name: 'authSlice',
  initialState: authState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action: PayloadAction<userReposneData>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
