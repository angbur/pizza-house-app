import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { setupStore } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'App/App';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={setupStore()}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('App', () => {
  test('should renders app correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
