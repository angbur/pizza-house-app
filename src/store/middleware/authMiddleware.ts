import { LoginResponse } from 'services/user';
import { PayloadAction } from '@reduxjs/toolkit';
import { NextFunction } from 'connect';
import { RootState } from '../store';
import { toast } from 'react-toastify';

const authMiddleware = (store: RootState) => (next: NextFunction) => (action: PayloadAction<LoginResponse>) => {
  if (action.type?.match('userApi/executeMutation/fulfilled')) {
     toast.success('You are logged in!');
  }
  if (action.type?.match('userApi/executeMutation/rejected')) {
    toast.error(action.payload.data.message);
 }
  return next(action);
};

export default authMiddleware;
