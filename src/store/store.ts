import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import orderReducer from 'components/Pages/Order/orderSlice';
import dialogReducer from 'components/Organisms/Dialog/dialogSlice';
import userReducer from './user/userSlice';
import { pizzaApi } from 'services/pizza/pizza';
import { userApi } from 'services/user/user';
import { orderApi } from 'services/order/order';
import orderMiddleware from './middleware/orderMiddleware';
import authMiddleware from './middleware/authMiddleware';

export const rootReducer = combineReducers({
  order: orderReducer,
  dialog: dialogReducer,
  user: userReducer,
  [pizzaApi.reducerPath]: pizzaApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
});

export const rootMiddleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(
    pizzaApi.middleware,
    userApi.middleware,
    orderApi.middleware,
    orderMiddleware,
    authMiddleware,
  );

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: rootMiddleware,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
