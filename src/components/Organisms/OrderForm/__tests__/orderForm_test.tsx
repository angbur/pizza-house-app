import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import OrderForm from '../OrderForm';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={setupStore()}>
          <OrderForm
            user={{
              firstName: 'Kamila',
              lastName: 'Lasocka',
              email: 'lasocka@gmail.com',
            }}
          />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Order Form', () => {
  it('should renders order form correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
