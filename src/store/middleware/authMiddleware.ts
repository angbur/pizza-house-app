import { LoginResponse } from 'services/user/user';
import { PayloadAction } from '@reduxjs/toolkit';
import { NextFunction } from 'connect';
import { toast } from 'react-toastify';

const authMiddleware = () => (next: NextFunction) => (action: PayloadAction<LoginResponse>) => {
  if (action.type?.match('userApi/executeMutation/rejected')) {
    toast.error(action.payload.data.message);
  }
  if (action.type?.startsWith('user/logout')) {
    localStorage.clear();
  }
  return next(action);
};

export default authMiddleware;
