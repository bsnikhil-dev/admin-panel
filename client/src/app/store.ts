import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/auth/index.ts';
import errorBoundaryReducer from '../features/errorBoundary/index.ts';
export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    errorBoundary: errorBoundaryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
