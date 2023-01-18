import OrderHistoryListItem from '../OrderHistoryListItem';
import { orderHistoryMocks } from 'test/mock/orderHistoryMock';
import { renderWithProviders } from 'test/test-utils';

describe('Order History List item', () => {
  it('should renders order list item correctly', () => {
    const initialState = {
      loggedIn: true,
      status: '200',
      error: undefined,
      userId: 'dummy_id',
      login: 'dummy_login',
      token: 'dummy_token',
    };

    const container = renderWithProviders(<OrderHistoryListItem element={orderHistoryMocks[0]} />, {
      preloadedState: {
        user: initialState,
      },
    }).container;

    expect(container).toMatchSnapshot();
  });
});
