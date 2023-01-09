import { ReactNode } from 'react';
import Login from './components/Login';
import LoginSuccess from './components/LoginSuccess';
import OrderDetail from './components/OrderDetail';
import Register from './components/Register';
import RegisterSuccess from './components/RegisterSuccess';
import { FormType } from './dialogSlice';

type DialogWidth = 'sm' | 'md' | 'lg';

export type DialogDetail = {
  title: string;
  component: () => ReactNode;
  width: DialogWidth;
};

type DialogMap = Map<FormType, DialogDetail>;

export const getDialogElement = (formType: FormType) => {
  const map: DialogMap = new Map([
    [
      FormType.register,
      {
        title: 'Sign Up',
        component: Register,
        width: 'sm',
      },
    ],
    [
      FormType.registerSuccess,
      {
        title: 'Congratulation',
        component: RegisterSuccess,
        width: 'sm',
      },
    ],
    [
      FormType.login,
      {
        title: 'Log In',
        component: Login,
        width: 'sm',
      },
    ],
    [
      FormType.loginSuccess,
      {
        title: 'Congratulation',
        component: LoginSuccess,
        width: 'sm',
      },
    ],
    [
      FormType.orderDetail,
      {
        title: 'Order Details',
        component: OrderDetail,
        width: 'lg',
      },
    ],
  ]);

  return map.get(formType);
};
