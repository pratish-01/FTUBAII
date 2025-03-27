import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isSignUp: boolean;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: AuthState = {
  isSignUp: false,
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuthMode: (state) => {
      state.isSignUp = !state.isSignUp;
    },
    updateField: (
      state,
      action: PayloadAction<{ key: keyof AuthState; value: string }>
    ) => {
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export const { toggleAuthMode, updateField } = authSlice.actions;
export default authSlice.reducer;
