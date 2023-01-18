import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import { OrderItem } from 'types/Order';
import OrderListItem from '../OrderListItem';
import { orderMocks } from 'test/mock/orderMock';

type WrapperProps = {
  item: OrderItem;
};

const Wrapper = ({ item }: WrapperProps) => {
  return (
    <ThemeProvider>
      <Provider store={setupStore()}>
        <OrderListItem item={item} />
      </Provider>
    </ThemeProvider>
  );
};

describe('Order List item', () => {
  it('should renders order list item correctly', () => {
    const tree = renderer.create(<Wrapper item={orderMocks[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
