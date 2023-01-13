import { configureStore, Store } from '@reduxjs/toolkit';
import orderReducer from 'components/Pages/Order/orderSlice';
import dialogReducer from 'components/Organisms/Dialog/dialogSlice';
import userReducer from './userSlice';
import { pizzaApi } from 'services/pizza';
import { userApi } from 'services/user';
import { orderApi } from 'services/order';
import orderMiddleware from './middleware/orderMiddleware';
import authMiddleware from './middleware/authMiddleware';

export const store: Store = configureStore({
  reducer: {
    order: orderReducer,
    dialog: dialogReducer,
    user: userReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pizzaApi.middleware,
      userApi.middleware,
      orderApi.middleware,
      orderMiddleware,
      authMiddleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
