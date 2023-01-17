import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Login from '../Login';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Login />
      </Provider>
    </ThemeProvider>
  );
};

describe('Login content of dialog', () => {
  test('should renders login component correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
