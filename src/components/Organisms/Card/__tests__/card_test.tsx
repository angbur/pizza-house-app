import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Card from '../Card';
import { Pizza } from 'types/Pizza';

const pizza: Pizza = {
  _id: '63b2d3b592b7f0f1c7c567b8',
  name: 'Pinza Mare',
  ingredients: ['shrimps', 'red fish', 'olives', 'white sauce', 'oregano', 'basil'],
  price: 26,
  categories: ['seafood'],
};

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Card pizza={pizza} />
      </Provider>
    </ThemeProvider>
  );
};

describe('Card', () => {
  it('should renders card correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="sc-csuSiG ivvTvi"
      >
        <img
          alt="Picture of Pinza Mare pizza"
          height="192px"
          src={
            Object {
              "ReactComponent": Object {
                "$$typeof": Symbol(react.forward_ref),
                "render": [Function],
              },
              "__esModule": true,
              "default": "pizza-63b2d3b592b7f0f1c7c567b8.svg",
            }
          }
        />
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
          26$
        </p>
        <h3
          className="card-title"
          style={
            Object {
              "color": "#FCFBFB",
              "fontFamily": "Klepon Ijo",
              "fontSize": "2rem",
              "fontWeight": "400",
              "letterSpacing": "2px",
              "lineHeight": "1.2",
              "textTransform": "uppercase",
            }
          }
        >
          Pinza Mare
        </h3>
        <div
          className="sc-eDWCr FLiKK"
        >
          <h4
            className="card-subtitle"
            style={
              Object {
                "color": "#FCFBFB",
                "fontFamily": "Source Sans Pro",
                "fontSize": "0.9rem",
                "fontWeight": "400",
                "lineHeight": "1.6",
              }
            }
          >
            <span>
               
              shrimps
              , 
            </span>
            <span>
               
              red fish
              , 
            </span>
            <span>
               
              olives
              , 
            </span>
            <span>
               
              white sauce
              , 
            </span>
            <span>
               
              oregano
              , 
            </span>
            <span>
               
              basil
            </span>
          </h4>
        </div>
        <div
          className="sc-bqWxrE faBsZM"
        >
          <div
            className="sc-ipEyDJ fNXnrH"
          >
            <button
              className="sc-bcXHqe sc-eDvSVe feNVH cAJNIx secondary-dark btn-sm button"
              onClick={[Function]}
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
              onChange={[Function]}
              type="number"
              value={1}
            />
            <div
              className="sc-jrcTuL ggyCiw"
            >
              <button
                onClick={[Function]}
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
                onClick={[Function]}
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
          </div>
          <p
            className="price-tag"
            style={
              Object {
                "color": "#EB853E",
                "fontFamily": "Klepon Ijo",
                "fontSize": "2.25rem",
                "letterSpacing": "0",
              }
            }
          >
            26$
          </p>
        </div>
      </div>
    `);
  });
});
