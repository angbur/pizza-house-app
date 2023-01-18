import Header from '../Header';
import { renderWithProviders } from 'test/test-utils';

describe('Header', () => {
  it('should renders header correctly for a non-logged in user', () => {
    const renderedHeader = renderWithProviders(<Header />, {}).container;

    expect(renderedHeader).toMatchSnapshot();
  });

  it('should renders header correctly for a logged in user', async () => {
    const initialState = {
      loggedIn: true,
      status: '200',
      error: undefined,
      userId: 'dummy_id',
      login: 'dummy_login',
      token: 'dummy_token',
    };

    const header = renderWithProviders(<Header />, {
      preloadedState: {
        user: initialState,
      },
    }).container;

    expect(header).toMatchSnapshot();
  });
});
