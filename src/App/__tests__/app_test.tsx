import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { store } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'App/App';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('App', () => {
  it('should renders app correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      Array [
        <header>
          <div
            className="sc-bjfHbI kMiecF header"
          >
            <a
              className="header_logo"
              href="/"
              onClick={[Function]}
            >
              <div
                className="sc-fEXmlR ceyJKD full logo"
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
              className="sc-idXgbr dtTWwi header_actions"
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
                className="sc-hHTYSt jTVKWh"
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
                  className="sc-kgTSHT bYCsuT"
                  style={
                    Object {
                      "display": "none",
                    }
                  }
                >
                  <li>
                    <button
                      className="sc-bcXHqe sc-jSUZER feNVH dkmCUq button-text-without-hover btn-lg button"
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
        </header>,
        <div
          className="sc-jfTVlA kta-dFp"
        >
          <div
            className="Toastify"
          />
          <nav>
            <div
              className="sc-gikAfH geGnZr sidebar"
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
                      className="sc-fLcnxK aRPVI icon-item"
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
                      className="sc-fLcnxK gvKqit icon-item"
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
                      className="sc-fLcnxK gvKqit icon-item"
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
                      className="sc-fLcnxK gvKqit icon-item"
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
        </div>,
        <footer>
          <footer
            className="sc-bBABsx eXFxpl footer"
          >
            <div
              className="sc-iveFHk bsuuEA"
            >
              <div
                className="sc-fEXmlR ceyJKD full logo"
                style={
                  Object {
                    "background": "#EB853E",
                  }
                }
              >
                <img
                  src="logo.svg"
                />
              </div>
            </div>
            <div
              className="sc-iveFHk bsuuEA"
            >
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
                Sitemap
              </h5>
              <a
                className="sc-cwSeag kczAPW"
                href="/make-pizza"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
              >
                Create own pizza
              </a>
              <a
                className="sc-cwSeag kczAPW"
                href="/contact"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
              >
                Contact
              </a>
              <a
                className="sc-cwSeag kczAPW"
                href="/profile"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
              >
                Profile
              </a>
              <a
                className="sc-cwSeag kczAPW"
                href="/history"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
              >
                My orders
              </a>
              <a
                className="sc-cwSeag kczAPW"
                href="/"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
              >
                Menu
              </a>
            </div>
            <div
              className="sc-iveFHk bsuuEA"
            >
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
                Tags
              </h5>
              <a
                className="sc-cwSeag kczAPW"
                href="/"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
              >
                Vegetarian
              </a>
              <a
                className="sc-cwSeag kczAPW"
                href="/"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
              >
                Meaty
              </a>
              <a
                className="sc-cwSeag kczAPW"
                href="/"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
              >
                Spicy
              </a>
              <a
                className="sc-cwSeag kczAPW"
                href="/"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
              >
                Seafood
              </a>
              <a
                className="sc-cwSeag kczAPW"
                href="/"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
              >
                Most popular
              </a>
            </div>
            <div
              className="sc-iveFHk bsuuEA"
            >
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
                Find us
              </h5>
              <a
                className="sc-cwSeag kczAPW"
                href="/"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
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
                      "default": "facebook.svg",
                    }
                  }
                />
                 Facebook
              </a>
              <a
                className="sc-cwSeag kczAPW"
                href="/"
                onClick={[Function]}
                theme={
                  Object {
                    "palette": Object {
                      "contrastColor": "#FCFBFB",
                      "danger": "#e74c3c",
                      "light": "#FCFBFB",
                      "primary": "#EB853E",
                      "primaryDark": "#E47120",
                      "secondary": "#151515",
                      "tertiary": "#4A4747",
                    },
                    "typography": Object {
                      "caption": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "card-subtitle": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "0.9rem",
                        "fontWeight": "400",
                        "lineHeight": "1.6",
                      },
                      "card-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "2rem",
                        "fontWeight": "400",
                        "letterSpacing": "2px",
                        "lineHeight": "1.2",
                      },
                      "dialog-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1.6rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "item-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "600",
                        "letterSpacing": "1px",
                        "lineHeight": "1.4",
                      },
                      "main-title": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "fontWeight": "400",
                        "letterSpacing": "1px",
                        "lineHeight": "1.6",
                      },
                      "paragraph": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "1rem",
                        "fontWeight": "400",
                        "letterSpacing": "0",
                        "lineHeight": "1.6",
                      },
                      "price-tag": Object {
                        "fontFamily": "Klepon Ijo",
                        "fontSize": "3rem",
                        "letterSpacing": "0",
                      },
                      "section-title": Object {
                        "fontFamily": "Source Sans Pro",
                        "fontSize": "2.25rem",
                        "fontWeight": "300",
                        "letterSpacing": "1px",
                        "lineHeight": "1.3",
                      },
                    },
                  }
                }
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
                      "default": "instagram.svg",
                    }
                  }
                />
                 Instagram
              </a>
            </div>
            <div
              className="sc-lllmON jLotgo"
            >
              <div
                className="sc-iJnaPW fyKhgX"
              >
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
                      className="sc-fLcnxK aRPVI icon-item"
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
              </div>
              <div
                className="sc-iJnaPW fyKhgX"
              >
                <li>
                  <a
                    className=""
                    href="/order"
                    onClick={[Function]}
                    onMouseEnter={[Function]}
                    onMouseLeave={[Function]}
                  >
                    <div
                      className="sc-fLcnxK gvKqit icon-item"
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
              </div>
              <div
                className="sc-iJnaPW fyKhgX"
              >
                <li>
                  <a
                    className=""
                    href="/make-pizza"
                    onClick={[Function]}
                    onMouseEnter={[Function]}
                    onMouseLeave={[Function]}
                  >
                    <div
                      className="sc-fLcnxK gvKqit icon-item"
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
              </div>
            </div>
          </footer>
        </footer>,
      ]
    `);
  });
});
