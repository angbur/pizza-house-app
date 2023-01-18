import Sidebar from '../Sidebar';
import { renderWithProviders } from 'test/test-utils';

describe('Sidebar', () => {
  it('should renders Sidebar correctly for a non-logged in user', () => {
    const sidebar = renderWithProviders(<Sidebar />, {}).container;

    expect(sidebar).toMatchSnapshot();
  });

  it('should renders Sidebar correctly for a logged in user', async () => {
    const initialState = {
      loggedIn: true,
      status: '200',
      error: undefined,
      userId: 'dummy_id',
      login: 'dummy_login',
      token: 'dummy_token',
    };

    const sidebar = renderWithProviders(<Sidebar />, {
      preloadedState: {
        user: initialState,
      },
    }).container;

    expect(sidebar).toMatchSnapshot();
  });
});
