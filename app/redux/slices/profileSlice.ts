import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  name: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  gender: string;
}

const initialState: ProfileState = {
  name: "Gaurav Singh",
  email: "gaurav.singh@gmail.com",
  phone: "9876543210",
  address: "New Delhi, India",
  dob: "07/09/2003",
  gender: "Male",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { setName, setEmail, setPhone, setAddress, setDob, setGender } =
  profileSlice.actions;
export default profileSlice.reducer;
