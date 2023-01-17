import { LoginResponse } from 'services/user';
import { rest } from 'msw';

const handlers = [
  rest.post('http://localhost:3000/login', (req, res, ctx) => {
    const mockApiResponse: LoginResponse = {
      isSuccess: true,
      login: 'funnyLogin43',
      userId: '354645rytfyg8',
      token: '4657r68t798yohilk',
      status: '200',
      data: {
        message: 'You are logged in!',
      },
    };
    return res(ctx.json(mockApiResponse));
  }),
];

export { handlers };
