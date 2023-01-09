import { selectToken } from './../store/userSlice';
import { useAppSelector } from './../hooks';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type LoginRequest = {
  login: string;
  password: string;
};

export type LoginResponse = {
  user: string;
  token: string;
  status?: string;
  error?: string;
};

export type RegisterRequest = {
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  status?: string;
  error?: string;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/user/',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      const token = '';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (credentials) => ({
        url: 'register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
