import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  UserData: {
    username: '',
    password: ''
  }
};
const authSlice = createSlice({
  name: 'auth', // the name of the slice
  initialState, // the initial state of the slice
  reducers: {
    Login: state => {
      state.isLoggedIn = true; // set isLoggedIn to true when the user logs in
    },
    Logout: state => {
      state.isLoggedIn = false; // set isLoggedIn to false when the user logs out
    },
    UserData: (state, action) => {
      state.UserData = action.payload; // update the UserData property with the provided payload
    }
  }
});

export const { Login, Logout, UserData } = authSlice.actions;

export default authSlice.reducer;
