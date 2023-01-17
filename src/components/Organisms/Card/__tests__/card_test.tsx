import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Card from '../Card';
import { Pizza } from 'types/Pizza';

const pizza: Pizza = {
  _id: '63b2d3b592b7f0f1c7c567b8',
  name: 'Pinza Mare',
  ingredients: ['shrimps', 'red fish', 'olives', 'white sauce', 'oregano', 'basil'],
  price: 26,
  categories: ['seafood'],
};

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Card pizza={pizza} />
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
