import { rest } from 'msw';
import { Pizza } from 'types/Pizza';
import { pizzaMocks } from './pizzaMock';

export const handlers = {
  getPizzasList: rest.get('http://localhost:3000/pizza', (_, res, ctx) =>
    res(ctx.status(200), ctx.json<Pizza[]>(pizzaMocks)),
  ),
  login: rest.post('http://localhost:3000/login', (_, res, ctx) => {
    localStorage.setItem('token', 'dummy_token');
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        data: {
          message: 'You are logged in!',
        },
        isSuccess: true,
        token: 'dummy_token',
        userId: 'dummy_userId',
        login: 'dummy_login',
      }),
    );
  }),

  register: rest.post('http://localhost:3000/register', (_, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        status: 201,
        data: {
          message: 'Registration was successful!',
        },
        isSuccess: true,
      }),
    );
  }),

  getUserById: rest.get('http://localhost:3000/user/:userId', (_, res, ctx) => {
    return res(
      ctx.json({
        data: {
          firstName: 'Ola',
          lastName: 'Malina',
          login: 'mal',
          email: 'dummy_email',
        },
      }),
    );
  }),

  createOrder: rest.post('http://localhost:3000/order', (_, res, ctx) => {
    return res(
      ctx.json({
        status: 201,
        data: {
          message: 'Success!',
        },
        isSuccess: true,
      }),
    );
  }),

  getOrdersByUserId: rest.get('http://localhost:3000/order/:userId', (_, res, ctx) => {
    return res(
      ctx.json({
        data: {
          firstName: 'Ola',
          lastName: 'Malina',
          login: 'mal',
          email: 'dummy_email',
        },
      }),
    );
  }),
};
