import userReducer, { logout } from '../userSlice';

describe('userSlice', () => {
  const initialState = {
    loggedIn: true,
    status: 'idle',
    error: undefined,
    userId: 'dummy_userId',
    login: 'dummy_login',
    token: 'dummy_token',
  };

  it(`should change state when the ${logout}`, () => {
    const action = logout();
    const newState = userReducer(initialState, action);

    expect(newState.loggedIn).toEqual(false);
    expect(newState.login).toBeUndefined();
    expect(newState.userId).toBeUndefined();
    expect(newState.token).toBeUndefined();
  });

});
