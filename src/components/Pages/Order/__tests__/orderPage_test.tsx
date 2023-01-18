import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import OrderPage from '../OrderPage';
import { BrowserRouter } from 'react-router-dom';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={setupStore()}>
          <OrderPage />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Order Page', () => {
  test('should renders order page correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
