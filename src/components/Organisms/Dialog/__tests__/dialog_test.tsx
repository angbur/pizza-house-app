import { renderWithProviders } from 'test/test-utils';
import Dialog from '../Dialog';
import { FormType } from '../dialogSlice';

describe('Dialog', () => {
  it('should renders dialog component correctly with register-component', () => {
    const initialState = {
      isOpen: true,
      formType: FormType.register,
    };

    const dialog = renderWithProviders(<Dialog />, {
      preloadedState: {
        dialog: initialState,
      },
    }).container;

    expect(dialog).toMatchSnapshot();
  });

  it('should renders dialog component correctly with login-component', () => {
    const initialState = {
      isOpen: true,
      formType: FormType.login,
    };

    const dialog = renderWithProviders(<Dialog />, {
      preloadedState: {
        dialog: initialState,
      },
    }).container;

    expect(dialog).toMatchSnapshot();
  });
});
