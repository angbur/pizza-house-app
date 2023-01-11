import { PayloadAction } from '@reduxjs/toolkit';
import { NextFunction } from 'connect';
import { RootState } from '../store';
import { toast } from 'react-toastify';

const authMiddleware = (store: RootState) => (next: NextFunction) => (action: PayloadAction) => {
  if (action.type?.startsWith('userApi/')) {
    const userState = store.getState().user;
    if (userState.loggedIn) toast.success('You are logged in!');
  }
  return next(action);
};

export default authMiddleware;
