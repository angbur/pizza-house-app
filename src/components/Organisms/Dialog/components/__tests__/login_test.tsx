import { renderWithProviders } from 'test/test-utils';
import { getDialogElement } from '../../dialog.utils';
import { FormType } from '../../dialogSlice';

describe('Login content of dialog', () => {
  it('should renders login component correctly', () => {
    const initialState = {
      loggedIn: false,
      status: undefined,
      error: undefined,
      userId: undefined,
      login: undefined,
      token: undefined,
    };
    const handleChange = jest.fn();
    const dialog = () => (
      <>{getDialogElement(FormType.login)?.component({ handleChange: handleChange })}</>
    );

    const login = renderWithProviders(dialog(), {
      preloadedState: {
        user: initialState,
      },
    }).container;

    expect(login).toMatchSnapshot();
  });
});
