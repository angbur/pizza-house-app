import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pizza } from 'types/Pizza';

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPizzasList: builder.query<{pizzaList: Pizza[]}, void>({
      query: () => 'pizza',
    }),
  }),
});

export const { useGetPizzasListQuery } = pizzaApi;
