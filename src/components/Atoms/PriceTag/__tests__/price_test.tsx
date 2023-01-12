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
  expect(tree).toMatchInlineSnapshot(`
    <p
      className="price-tag"
      style={
        Object {
          "color": "#EB853E",
          "fontFamily": "Klepon Ijo",
          "fontSize": "3.1500000000000004rem",
          "letterSpacing": "0",
        }
      }
    >
      12$
    </p>
  `);
});
