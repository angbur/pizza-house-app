import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Sidebar />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Sidebar', () => {
  it('should renders sidebar correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <nav>
        <div
          className="sc-gswNZR fXfFKY sidebar"
        >
          <ul>
            <li>
              <a
                aria-current="page"
                className="active"
                href="/"
                onClick={[Function]}
                onMouseEnter={[Function]}
                onMouseLeave={[Function]}
              >
                <div
                  className="sc-bcXHqe WDvVZ icon-item"
                >
                  <img
                    height={32}
                    src={
                      Object {
                        "ReactComponent": Object {
                          "$$typeof": Symbol(react.forward_ref),
                          "render": [Function],
                        },
                        "__esModule": true,
                        "default": "menu-active.svg",
                      }
                    }
                  />
                  <h5
                    className="item-title"
                    style={
                      Object {
                        "color": "none",
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                        "textTransform": "uppercase",
                      }
                    }
                  >
                    menu
                  </h5>
                </div>
              </a>
            </li>
            <li>
              <a
                className=""
                href="/make-pizza"
                onClick={[Function]}
                onMouseEnter={[Function]}
                onMouseLeave={[Function]}
              >
                <div
                  className="sc-bcXHqe gIzvfo icon-item"
                >
                  <img
                    height={32}
                    src={
                      Object {
                        "ReactComponent": Object {
                          "$$typeof": Symbol(react.forward_ref),
                          "render": [Function],
                        },
                        "__esModule": true,
                        "default": "pizza-circle.svg",
                      }
                    }
                  />
                  <h5
                    className="item-title"
                    style={
                      Object {
                        "color": "none",
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                        "textTransform": "uppercase",
                      }
                    }
                  >
                    make pizza
                  </h5>
                </div>
              </a>
            </li>
            <li>
              <a
                className=""
                href="/order"
                onClick={[Function]}
                onMouseEnter={[Function]}
                onMouseLeave={[Function]}
              >
                <div
                  className="sc-bcXHqe gIzvfo icon-item"
                >
                  <img
                    height={26}
                    src={
                      Object {
                        "ReactComponent": Object {
                          "$$typeof": Symbol(react.forward_ref),
                          "render": [Function],
                        },
                        "__esModule": true,
                        "default": "order.svg",
                      }
                    }
                  />
                  <h5
                    className="item-title"
                    style={
                      Object {
                        "color": "none",
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                        "textTransform": "uppercase",
                      }
                    }
                  >
                    order
                  </h5>
                </div>
              </a>
            </li>
            <li>
              <a
                className=""
                href="/contact"
                onClick={[Function]}
                onMouseEnter={[Function]}
                onMouseLeave={[Function]}
              >
                <div
                  className="sc-bcXHqe gIzvfo icon-item"
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
                        "default": "email.svg",
                      }
                    }
                  />
                  <h5
                    className="item-title"
                    style={
                      Object {
                        "color": "none",
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                        "textTransform": "uppercase",
                      }
                    }
                  >
                    contact
                  </h5>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `);
  });
});
