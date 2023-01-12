import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import Logo from '../Logo';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Logo background='secondary' />
    </ThemeProvider>
  );
};

it('renders correctly logo', () => {
  const tree = renderer.create(<Wrapper />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="sc-bcXHqe hnPJle full logo"
      style={
        Object {
          "background": "#151515",
        }
      }
    >
      <img
        src="logo.svg"
      />
    </div>
  `);
});
