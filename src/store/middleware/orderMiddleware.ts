import { PayloadAction } from '@reduxjs/toolkit';
import { NextFunction } from 'connect';

const orderMiddleware = (store: any) => (next: NextFunction) => (action: PayloadAction) => {
  if (action.type?.startsWith('order/')) {
    setTimeout(() => {
      const orderState = store.getState().order;
      localStorage.setItem('order', JSON.stringify(orderState));
    }, 300);
  }
  return next(action);
};

export default orderMiddleware;
