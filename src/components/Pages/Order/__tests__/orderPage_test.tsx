import { screen } from '@testing-library/react';
import { orderMocks } from 'test/mock/orderMock';
import { renderWithProviders } from 'test/test-utils';
import OrderPage from '../OrderPage';
import { OrderState } from '../orderSlice';

const initialState: OrderState = {
  entities: orderMocks,
};

describe('Order Page', () => {
  it('should renders order page correctly when order list is not empty', () => {
    const orderPage = renderWithProviders(<OrderPage />, {
      preloadedState: {
        order: initialState,
      },
    }).container;

    expect(orderPage).toMatchSnapshot();
  });

  it('should renders order page correctly when order list is empty', async () => {
    renderWithProviders(<OrderPage />, {
      preloadedState: {},
    }).container;
    expect(await screen.findByText(/You have not ordered anything yet./i)).toBeInTheDocument();
  });
});
