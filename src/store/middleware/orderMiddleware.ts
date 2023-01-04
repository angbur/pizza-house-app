import { PayloadAction } from '@reduxjs/toolkit';
import { NextFunction } from 'connect';
import { RootState } from '../store';

const orderMiddleware = (store: RootState) => (next: NextFunction) => (action: PayloadAction) => {
  if (action.type?.startsWith('order/')) {
    const orderState = store.getState().order;
    localStorage.setItem('order', JSON.stringify(orderState));
  }
  return next(action);
};

export default orderMiddleware;
