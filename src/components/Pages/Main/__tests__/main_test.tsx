import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import Main from '../Main';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </ThemeProvider>
  );
};

describe('Main Page', () => {
  test('should renders main page correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
