import authReducer from './authSlice';
import { configureStore } from "@reduxjs/toolkit";
import slidesReducer from "./slidesSlice";

const store = configureStore({
  reducer: {
    slides: slidesReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;