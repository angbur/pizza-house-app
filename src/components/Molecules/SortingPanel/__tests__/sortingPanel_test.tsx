import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import SortingPanel from '../SortingPanel';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Provider store={setupStore()}>
        <SortingPanel onClick={jest.fn()} />
      </Provider>
    </ThemeProvider>
  );
};

describe('Sorting Panel', () => {
  test('should renders sorting panel correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
