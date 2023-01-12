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

it('renders correctly quantity change button', () => {
  const tree = renderer.create(<Wrapper />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="sc-bcXHqe eqesaf"
    >
      <button
        onClick={[MockFunction]}
      >
        <img
          height={14}
          src={
            Object {
              "ReactComponent": Object {
                "$$typeof": Symbol(react.forward_ref),
                "render": [Function],
              },
              "__esModule": true,
              "default": "arrow-up-active.svg",
            }
          }
        />
      </button>
      <button
        onClick={[MockFunction]}
      >
        <img
          height={14}
          src={
            Object {
              "ReactComponent": Object {
                "$$typeof": Symbol(react.forward_ref),
                "render": [Function],
              },
              "__esModule": true,
              "default": "arrow-down-active.svg",
            }
          }
        />
      </button>
    </div>
  `);
});
