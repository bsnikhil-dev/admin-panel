import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ErrorBoundaryType {
  errorMessage: string | null;
}

const initialState: ErrorBoundaryType = {
  errorMessage: null,
};

const errorSlice = createSlice({
  name: 'errorBoundary',
  initialState,
  reducers: {
    setErrorBoundary: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    clearErrorBoundary: state => {
      state.errorMessage = null;
    },
  },
});

export const { setErrorBoundary, clearErrorBoundary } = errorSlice.actions;
export default errorSlice.reducer;
