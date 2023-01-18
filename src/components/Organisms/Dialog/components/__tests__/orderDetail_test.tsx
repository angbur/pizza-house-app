import { renderWithProviders } from 'test/test-utils';
import { getDialogElement } from '../../dialog.utils';
import { FormType } from '../../dialogSlice';

describe('Register content of dialog', () => {
  it('should renders register component correctly', () => {
    const initialState = {
      loggedIn: true,
      status: 200,
      error: undefined,
      userId: 'dummy_userId',
      login: 'dummy_login',
      token: 'dummy_token',
    };
    const handleChange = jest.fn();
    const dialog = () => (
      <>{getDialogElement(FormType.orderDetail)?.component({ handleChange: handleChange })}</>
    );

    const orderDetail = renderWithProviders(dialog(), {
      preloadedState: {
        user: initialState,
      },
    }).container;

    expect(orderDetail).toMatchSnapshot();
  });
});
