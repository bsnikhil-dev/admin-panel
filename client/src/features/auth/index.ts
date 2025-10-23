import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { userDetails } from '../../types';
import {
  loginUser,
  registerUser,
  type authenticationReposneBody,
} from '../../api/services/authenticationService';
import { AxiosError } from 'axios';

interface authInitialState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: authenticationReposneBody;
}

const authState: authInitialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {
    token: '',
    userId: '',
    username: '',
    email: '',
    role: '',
  },
};

export const registerThunk = createAsyncThunk<
  authenticationReposneBody,
  {
    username: string;
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

export const loginThunk = createAsyncThunk<
  authenticationReposneBody,
  { email: string; password: string },
  { rejectValue: { message: string } }
>('post/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await loginUser(userData);
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
      .addCase(
        registerThunk.fulfilled,
        (state, action: PayloadAction<authenticationReposneBody>) => {
          state.isLoading = false;
          state.isAuthenticated = true;
        }
      )
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<authenticationReposneBody>) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
