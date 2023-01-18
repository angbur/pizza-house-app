import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import PriceTag from '../PriceTag';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <PriceTag price={12} />
    </ThemeProvider>
  );
};

it('renders correctly price tag', () => {
  const tree = renderer.create(<Wrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
