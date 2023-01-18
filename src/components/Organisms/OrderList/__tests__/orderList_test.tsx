import OrderList from '../OrderList';
import { orderMocks } from 'test/mock/orderMock';
import { OrderState } from 'components/Pages/Order/orderSlice';
import { renderWithProviders } from 'test/test-utils';

describe('Order List', () => {
  it('should renders order list correctly', () => {
    const initialState: OrderState = {
      entities: orderMocks,
    };

    const orderList = renderWithProviders(<OrderList />, {
      preloadedState: {
        order: initialState,
      },
    }).container;

    expect(orderList).toMatchSnapshot();
  });
});
