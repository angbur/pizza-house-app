import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import QuantityChangeButton from '../QuantityChangeButton';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <QuantityChangeButton onIncrement={jest.fn()} onDecrement={jest.fn()} />
    </ThemeProvider>
  );
};

test('renders correctly quantity change button', () => {
  const tree = renderer.create(<Wrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
