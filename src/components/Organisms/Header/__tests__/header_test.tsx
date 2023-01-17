import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Header', () => {
  test('should renders header correctly for a non-logged in user', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <header>
        <div
          className="sc-kDvujY hragjb header"
        >
          <a
            className="header_logo"
            href="/"
            onClick={[Function]}
          >
            <div
              className="sc-jrcTuL cFiwzV full logo"
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
          </a>
          <div
            className="header_title"
          >
            <img
              src="quote.svg"
            />
          </div>
          <div
            className="sc-ipEyDJ cXcjSP header_actions"
          >
            <button
              className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-lg header_actions_button--desktop button"
              onClick={[Function]}
              style={
                Object {
                  "fontSize": "1.05rem",
                  "padding": "0.65rem 1.25rem",
                }
              }
            >
              Sign in
            </button>
            <button
              className="sc-bcXHqe sc-gKPRtg sc-ftTHYK feNVH hUzBlu hIdUJX button-text-dark btn-lg header_actions_button--desktop button"
              onClick={[Function]}
              style={
                Object {
                  "fontSize": "1.05rem",
                  "padding": "0.65rem 1.25rem",
                }
              }
            >
              Sign up
            </button>
            <div
              className="sc-eDWCr hgSJeQ"
            >
              <button
                className="sc-bcXHqe sc-jSUZER feNVH dkmCUq button-text-without-hover btn-lg button"
                onClick={[Function]}
                style={
                  Object {
                    "fontSize": "1.05rem",
                    "padding": "0.65rem 1.25rem",
                  }
                }
              >
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
              </button>
              <div
                className="sc-ksBlkl hTPapp"
                style={
                  Object {
                    "display": "none",
                  }
                }
              >
                <li>
                  <button
                    className="sc-bcXHqe sc-jSUZER feNVH dkmCUq button-text-without-hover btn-lg button"
                    onClick={[Function]}
                    style={
                      Object {
                        "fontSize": "1.05rem",
                        "padding": "0.65rem 1.25rem",
                      }
                    }
                  >
                    Sign in
                  </button>
                </li>
                <li>
                  <button
                    className="sc-bcXHqe sc-jSUZER feNVH dkmCUq button-text-without-hover btn-lg button"
                    onClick={[Function]}
                    style={
                      Object {
                        "fontSize": "1.05rem",
                        "padding": "0.65rem 1.25rem",
                      }
                    }
                  >
                    Sign up
                  </button>
                </li>
              </div>
            </div>
          </div>
        </div>
      </header>
    `);
  });
});
