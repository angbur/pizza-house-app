import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import Icon from '../Icon';

const Wrapper = () => {
  return <ThemeProvider>{Icon({ name: 'menu-burger', size: 20, isActive: false })}</ThemeProvider>;
};

describe('Icon', () => {
  it('should renders correctly icon', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <img
        height={20}
        src={
          Object {
            "ReactComponent": Object {
              "$$typeof": Symbol(react.forward_ref),
              "render": [Function],
            },
            "__esModule": true,
            "default": "menu-burger.svg",
          }
        }
      />
    `);
  });
});
