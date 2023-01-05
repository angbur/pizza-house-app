import { configureStore, Store } from '@reduxjs/toolkit';
import orderReducer from 'components/Pages/Order/orderSlice';
import { pizzaApi } from 'services/pizza';
import orderMiddleware from './middleware/orderMiddleware';

export const store: Store = configureStore({
  reducer: {
    order: orderReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware, orderMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;