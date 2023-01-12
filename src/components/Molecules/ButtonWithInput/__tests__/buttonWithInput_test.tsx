import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import ButtonWithInput from '../ButtonWithInput';

const value = 1;

const Wrapper = () => {
  return (
    <ThemeProvider>
      <ButtonWithInput value={value} />
    </ThemeProvider>
  );
};

describe('Button with input', () => {
  it('should renders button with input correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="sc-ipEyDJ fNXnrH"
      >
        <button
          className="sc-bcXHqe sc-eDvSVe feNVH cAJNIx secondary-dark btn-sm button"
          style={
            Object {
              "fontSize": "0.8500000000000001rem",
              "padding": "0.52rem 1rem",
            }
          }
        >
          <img
            height={17}
            src={
              Object {
                "ReactComponent": Object {
                  "$$typeof": Symbol(react.forward_ref),
                  "render": [Function],
                },
                "__esModule": true,
                "default": "basket.svg",
              }
            }
          />
          Add to order
        </button>
        <input
          className="sc-kDvujY dYXGJW"
          type="number"
          value={1}
        />
        <div
          className="sc-jrcTuL ggyCiw"
        >
          <button>
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
          <button>
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
      </div>
    `);
  });
});
