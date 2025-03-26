import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  showForgetPassword: boolean;
}

const initialState: AuthState = {
  showForgetPassword: false,
};

// Create a slice of state for auth
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setForgetPassword: (state, action) => {
      state.showForgetPassword = action.payload;
    },
  },
});

// Export the actions and reducer
export const { setForgetPassword } = authSlice.actions;
export default authSlice.reducer;
