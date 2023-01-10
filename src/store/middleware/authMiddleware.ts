import { PayloadAction } from '@reduxjs/toolkit';
import { NextFunction } from 'connect';
import { toast } from 'react-toastify';
import { RootState } from '../store';

const authMiddleware = (store: RootState) => (next: NextFunction) => (action: PayloadAction) => {
  const userState = store.getState().user.status;
  if (userState === '201') toast.success('Registration was successful!');
  return next(action);
};

export default authMiddleware;
