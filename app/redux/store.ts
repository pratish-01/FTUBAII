import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import profileReduce from "./slices/profileSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReduce,
  },
});

// Export store and types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
