import { configureStore } from '@reduxjs/toolkit';
import orderReducer from 'components/Pages/Order/orderSlice';
import { pizzaApi } from 'services/pizza';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pizzaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
