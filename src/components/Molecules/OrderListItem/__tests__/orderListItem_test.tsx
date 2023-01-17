import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import { OrderItem } from 'types/Order';
import OrderListItem from '../OrderListItem';

type WrapperProps = {
  item: OrderItem;
};

const Wrapper = ({ item }: WrapperProps) => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <OrderListItem item={item} />
      </Provider>
    </ThemeProvider>
  );
};

const orderItem: OrderItem = {
  _id: 'awesome_id',
  item: {
    _id: '63b2d3b592b7f0f1c7c567b8',
    name: 'Pinza Mare',
    ingredients: ['shrimps', 'red fish', 'olives', 'white sauce', 'oregano', 'basil'],
    price: 26,
  },
  quantity: 1,
};

describe('Order List item', () => {
  it('should renders order list item correctly', () => {
    const tree = renderer.create(<Wrapper item={orderItem} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
