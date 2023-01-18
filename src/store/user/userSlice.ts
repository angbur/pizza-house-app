import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { toast } from 'react-toastify';
import { userApi } from 'services/user/user';

type User = {
  loggedIn: boolean;
  status: string | undefined;
  error: string | undefined;
  userId: string | undefined;
  login: string | undefined;
  token: string | undefined;
};

const initialState: User = {
  loggedIn: false,
  status: 'idle',
  error: undefined,
  userId: undefined,
  login: undefined,
  token: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.loggedIn = false;
      state.userId = undefined;
      state.login = undefined;
      state.token = undefined;
      state.status = undefined;
      toast.success('Logged out!');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.loggedIn = true;
      state.token = payload.token;
      state.userId = payload.userId;
      state.login = payload.login;
      state.status = payload.status;
      toast.success('You are logged in!');
      localStorage.setItem('token', state.token as string);
    });
  },
});

export const { logout } = userSlice.actions;

export const selectUserId = (state: RootState) => state.user.userId;

export const selectIsLoggedIn = (state: RootState) => state.user.loggedIn;

export const selectResponseStatus = (state: RootState) => state.user.status;

export const selectResponseError = (state: RootState) => state.user.error;

export const selectLogin = (state: RootState) => state.user.login;

export default userSlice.reducer;
