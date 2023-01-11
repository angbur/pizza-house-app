import { configureStore, Store } from '@reduxjs/toolkit';
import orderReducer from 'components/Pages/Order/orderSlice';
import dialogReducer from 'components/Organisms/Dialog/dialogSlice';
import userReducer from './userSlice';
import { pizzaApi } from 'services/pizza';
import { userApi } from 'services/user';
import orderMiddleware from './middleware/orderMiddleware';

export const store: Store = configureStore({
  reducer: {
    order: orderReducer,
    dialog: dialogReducer,
    user: userReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware, orderMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
