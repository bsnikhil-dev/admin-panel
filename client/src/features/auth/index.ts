import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  loginUser,
  registerUser,
  type authenticationReposneBody,
} from '../../api/services/authenticationService';
import { AxiosError } from 'axios';
import { setErrorBoundary } from '../errorBoundary';

interface authInitialState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: authenticationReposneBody;
  error: string | null;
}
interface SignUpData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface ApiError {
  message: string;
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
  error: null,
};

export const registerThunk = createAsyncThunk<
  authenticationReposneBody,
  SignUpData,
  { rejectValue: ApiError }
>('post/registerUser', async (userData, { dispatch, rejectWithValue }) => {
  const { firstname, lastname } = userData;
  const data = { username: firstname + ' ' + lastname, ...userData };
  try {
    const response = await registerUser(data);
    return response;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      if (!error.response) {
        dispatch(
          setErrorBoundary({
            message: 'Techincal Error.Please Try Again',
            retryAction: () => dispatch(registerThunk(data)),
          })
        );
      }
      return rejectWithValue(error.response?.data);
    }
    return rejectWithValue(error.response?.data);
  }
});

export const loginThunk = createAsyncThunk<
  authenticationReposneBody,
  LoginData,
  { rejectValue: ApiError }
>('post/loginUser', async (userData, { dispatch, rejectWithValue }) => {
  try {
    const response = await loginUser(userData);
    return response;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      if (!error.response) {
        dispatch(
          setErrorBoundary({
            message: 'Techincal Error.Please Try Again',
            retryAction: () => dispatch(loginThunk(userData)),
          })
        );
      }
      return rejectWithValue(error.response?.data);
    }
    return rejectWithValue(error.response?.data);
  }
});

const authSlice = createSlice({
  name: 'authSlice',
  initialState: authState,
  reducers: {
    resetErorr: state => {
      state.error = null;
    },
  },
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
          state.user = action.payload;
        }
      )
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message as string;
      })
      .addCase(loginThunk.pending, state => {
        return { ...authState, isLoading: true };
      })
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<authenticationReposneBody>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.user = authState.user;
        state.isAuthenticated = authState.isAuthenticated;
        state.isLoading = authState.isLoading;
        state.error = action.payload?.message as string;
      });
  },
});

export const { resetErorr } = authSlice.actions;
export default authSlice.reducer;
