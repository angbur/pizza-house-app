import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type LoginRequest = {
  login: string;
  password: string;
};

type Data = {
  message: string;
};

export type LoginResponse = {
  userId?: string;
  login?: string;
  token?: string;
  status?: string;
  error?: string;
  isSuccess: boolean;
  data: Data;
};

export type RegisterResponse = {
  status: string;
  isSuccess: boolean;
  data: Data;
};

export type LoginResponseData = {
  data: LoginResponse;
};

export type RequestData = {
  firstName?: string;
  lastName?: string;
  login: string;
  email?: string;
  password: string;
};

export type User = Omit<RequestData, 'password'> & { _id: string };

type UserResponse = {
  data: User;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/user',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, Pick<RequestData, 'login' | 'password'>>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<RegisterResponse, RequestData>({
      query: (credentials) => ({
        url: 'register',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUserById: builder.query({
      query: (id: string) => ({ url: `/${id}` }),
      transformResponse: (response: UserResponse) => response.data,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserByIdQuery } = userApi;
