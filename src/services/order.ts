import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import OrderForm from 'components/Organisms/OrderForm/OrderForm';
import { OrderItem } from 'types/Order';

export type Response = {
  orderId: string;
};

export type OrderDetailRequest = {
  user: string;
  order: Omit<OrderItem, '_id'>[];
  deliveryAddress: OrderForm;
  total: number;
};

export type OrderDetail = OrderDetailRequest & {
  _id: string;
  date: Date;
};

type OrderDetailResponse = {
  data: OrderDetail;
};

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/order',
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
    createOrder: builder.mutation<Response, OrderDetailRequest>({
      query: (credentials) => ({
        url: '',
        method: 'POST',
        body: credentials,
      }),
    }),
    getOrderById: builder.query({
      query: (id: string) => ({ url: `/${id}` }),
      transformResponse: (response: OrderDetailResponse) => response.data,
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderByIdQuery } = orderApi;
