import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    Login: state => {
      state.isLoggedIn = true;
    },
    Logout: state => {
      state.isLoggedIn = false;
    }
  }
});

export const { Login, Logout } = authSlice.actions;

export default authSlice.reducer;
