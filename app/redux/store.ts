import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

// Create the Redux store and add reducers
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Export store and types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
