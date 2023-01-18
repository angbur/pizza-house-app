import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import Card from '../Card';
import { pizzaMocks } from 'test/mock/pizzaMock';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Provider store={setupStore()}>
        <Card pizza={pizzaMocks[0]} />
      </Provider>
    </ThemeProvider>
  );
};

describe('Card', () => {
  test('should renders card correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
