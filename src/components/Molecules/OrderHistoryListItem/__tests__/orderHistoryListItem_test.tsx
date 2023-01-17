import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import OrderHistoryListItem from '../OrderHistoryListItem';
import { OrderDetail } from 'services/order';

const orderItem: OrderDetail = {
  _id: 'awesome_id',
  date: Date('2023-01-13T16:12:16.982Z'),
  order: [
    {
      item: {
        _id: '63b2d3b592b7f0f1c7c567b8',
        name: 'Pinza Mare',
        ingredients: ['shrimps', 'red fish', 'olives', 'white sauce', 'oregano', 'basil'],
        price: 26,
      },
      quantity: 2,
    },
  ],
};

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <OrderHistoryListItem element={orderItem} />
      </Provider>
    </ThemeProvider>
  );
};

describe('Order History List item', () => {
  it('should renders order list item correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
