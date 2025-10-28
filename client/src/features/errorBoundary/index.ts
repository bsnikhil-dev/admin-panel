import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ErrorBoundaryType {
  errorMessage: string | null;
  retryAction?: (() => void) | null;
}

const initialState: ErrorBoundaryType = {
  errorMessage: null,
};

const errorSlice = createSlice({
  name: 'errorBoundary',
  initialState,
  reducers: {
    setErrorBoundary: (
      state,
      action: PayloadAction<{ message: string; retryAction?: () => void }>
    ) => {
      state.errorMessage = action.payload.message;
      state.retryAction = action.payload.retryAction;
    },
    clearErrorBoundary: state => {
      state.errorMessage = null;
      state.retryAction = null;
    },
  },
});

export const { setErrorBoundary, clearErrorBoundary } = errorSlice.actions;
export default errorSlice.reducer;
