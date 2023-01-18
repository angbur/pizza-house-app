import { renderWithProviders } from 'test/test-utils';
import { getDialogElement } from '../../dialog.utils';
import { FormType } from '../../dialogSlice';

describe('Register content of dialog', () => {
  it('should renders register component correctly', () => {
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
      <>{getDialogElement(FormType.register)?.component({ handleChange: handleChange })}</>
    );

    const register = renderWithProviders(dialog(), {
      preloadedState: {
        user: initialState,
      },
    }).container;

    expect(register).toMatchSnapshot();
  });
});
