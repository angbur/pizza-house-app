import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import OrderList from '../OrderList';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Provider store={setupStore()}>
        <OrderList />
      </Provider>
    </ThemeProvider>
  );
};

describe('Order List', () => {
  it('should renders order list correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
