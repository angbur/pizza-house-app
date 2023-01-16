import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import Footer from '../Footer';
import { BrowserRouter } from 'react-router-dom';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Footer', () => {
  it('should renders footer correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <footer>
        <footer
          className="sc-dkrFOg dTqxBq footer"
        >
          <div
            className="sc-hLBbgP bHyvAM"
          >
            <div
              className="sc-bcXHqe hnPJle full logo"
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
            className="sc-hLBbgP bHyvAM"
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
              className="sc-eDvSVe gEhQXJ"
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
              className="sc-eDvSVe gEhQXJ"
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
              className="sc-eDvSVe gEhQXJ"
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
              className="sc-eDvSVe gEhQXJ"
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
              className="sc-eDvSVe gEhQXJ"
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
            className="sc-hLBbgP bHyvAM"
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
              className="sc-eDvSVe gEhQXJ"
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
              className="sc-eDvSVe gEhQXJ"
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
              className="sc-eDvSVe gEhQXJ"
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
              className="sc-eDvSVe gEhQXJ"
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
              className="sc-eDvSVe gEhQXJ"
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
            className="sc-hLBbgP bHyvAM"
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
              className="sc-eDvSVe gEhQXJ"
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
              className="sc-eDvSVe gEhQXJ"
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
            className="sc-jSUZER hJwfIF"
          >
            <div
              className="sc-gKPRtg cDjubB"
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
                    className="sc-gswNZR cqszsx icon-item"
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
              className="sc-gKPRtg cDjubB"
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
                    className="sc-gswNZR gGndno icon-item"
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
              className="sc-gKPRtg cDjubB"
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
                    className="sc-gswNZR gGndno icon-item"
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
      </footer>
    `);
  });
});