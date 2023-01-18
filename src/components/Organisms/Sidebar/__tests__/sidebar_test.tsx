import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={setupStore()}>
          <Sidebar />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Sidebar', () => {
  test('should renders sidebar correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
