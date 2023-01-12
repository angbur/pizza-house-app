import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import Main from '../Main';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </ThemeProvider>
  );
};

describe('Main Page', () => {
  it('should renders main page correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="sc-hBxehG eMVfME box"
      >
        <main>
          <div
            className="sc-ksBlkl gMElwc"
          >
            <h5
              className="item-title"
              style={
                Object {
                  "color": "#FCFBFB",
                  "fontFamily": "Source Sans Pro",
                  "fontSize": "1rem",
                  "fontWeight": "600",
                  "letterSpacing": "1px",
                  "lineHeight": "1.4",
                  "textTransform": "uppercase",
                }
              }
            >
              Sort by
            </h5>
            <button
              className="sc-bcXHqe sc-gKPRtg sc-iBYQkv feNVH hUzBlu YZIpJ button-text-light btn-lg button"
              onClick={[Function]}
              style={
                Object {
                  "fontSize": "1.05rem",
                  "padding": "0.65rem 1.25rem",
                }
              }
            >
              <h5
                className="item-title"
                style={
                  Object {
                    "color": "#EB853E",
                    "fontFamily": "Source Sans Pro",
                    "fontSize": "1rem",
                    "fontWeight": "600",
                    "letterSpacing": "1px",
                    "lineHeight": "1.4",
                  }
                }
              >
                name
              </h5>
            </button>
            <button
              className="sc-bcXHqe sc-gKPRtg sc-iBYQkv feNVH hUzBlu YZIpJ button-text-light btn-lg button"
              onClick={[Function]}
              style={
                Object {
                  "fontSize": "1.05rem",
                  "padding": "0.65rem 1.25rem",
                }
              }
            >
              <h5
                className="item-title"
                style={
                  Object {
                    "color": "#FCFBFB",
                    "fontFamily": "Source Sans Pro",
                    "fontSize": "1rem",
                    "fontWeight": "600",
                    "letterSpacing": "1px",
                    "lineHeight": "1.4",
                  }
                }
              >
                price 
                <img
                  height={8}
                  src={
                    Object {
                      "ReactComponent": Object {
                        "$$typeof": Symbol(react.forward_ref),
                        "render": [Function],
                      },
                      "__esModule": true,
                      "default": "arrow-down.svg",
                    }
                  }
                />
              </h5>
            </button>
            <button
              className="sc-bcXHqe sc-gKPRtg sc-iBYQkv feNVH hUzBlu YZIpJ button-text-light btn-lg button"
              onClick={[Function]}
              style={
                Object {
                  "fontSize": "1.05rem",
                  "padding": "0.65rem 1.25rem",
                }
              }
            >
              <h5
                className="item-title"
                style={
                  Object {
                    "color": "#FCFBFB",
                    "fontFamily": "Source Sans Pro",
                    "fontSize": "1rem",
                    "fontWeight": "600",
                    "letterSpacing": "1px",
                    "lineHeight": "1.4",
                  }
                }
              >
                price 
                <img
                  height={8}
                  src={
                    Object {
                      "ReactComponent": Object {
                        "$$typeof": Symbol(react.forward_ref),
                        "render": [Function],
                      },
                      "__esModule": true,
                      "default": "arrow-up.svg",
                    }
                  }
                />
              </h5>
            </button>
          </div>
          <div
            className="sc-fnGiBr iYGvHq"
          />
        </main>
      </div>
    `);
  });
});
