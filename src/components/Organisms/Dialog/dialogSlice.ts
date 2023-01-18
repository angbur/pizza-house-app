import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export enum FormType {
  register = 'register',
  login = 'login',
  orderDetail = 'orderDetail',
}

type DialogState = {
  isOpen: boolean;
  formType: FormType | undefined;
};

const initialState: DialogState = {
  isOpen: false,
  formType: undefined,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<FormType>) => {
      state.isOpen = true;
      state.formType = action.payload;
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.formType = undefined;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export default dialogSlice.reducer;

export const selectDialogState = (state: RootState) => state.dialog;
