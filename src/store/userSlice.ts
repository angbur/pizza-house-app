import { LoginRequest } from './../services/user';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { toast } from 'react-toastify';
import { userApi, RegisterRequest } from 'services/user';

type User = {
  loggedIn: boolean;
  status: string;
  error: string | undefined;
  user: string | undefined;
  token: string | undefined;
};

const initialState: User = {
  loggedIn: false,
  status: 'idle',
  error: undefined,
  user: undefined,
  token: undefined
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = undefined;
      toast.success('Logged out!');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    });
  },
});

export const { login, logout } = userSlice.actions;

export const selectName = (state: RootState) => state.user.user;

export const isLoggedIn = (state: RootState) => state.user.loggedIn;

export const selectResponseStatus = (state: RootState) => state.user.status;

export const selectResponseError = (state: RootState) => state.user.error;

export const selectLoggedInUser = (state: RootState) => state.user.user;

export const selectToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
