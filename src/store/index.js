import { configureStore } from '@reduxjs/toolkit';
import squadReducer from './squadSlice';

export const store = configureStore({
  reducer: {
    squad: squadReducer,
  },
});
