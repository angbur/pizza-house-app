import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import { OrderItem } from 'types/Order';
import OrderListItem from '../OrderListItem';

type WrapperProps = {
  item: OrderItem;
};

const Wrapper = ({ item }: WrapperProps) => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <OrderListItem item={item} />
      </Provider>
    </ThemeProvider>
  );
};

const orderItem: OrderItem = {
  _id: 'awesome_id',
  item: {
    _id: '63b2d3b592b7f0f1c7c567b8',
    name: 'Pinza Mare',
    ingredients: ['shrimps', 'red fish', 'olives', 'white sauce', 'oregano', 'basil'],
    price: 26,
  },
  quantity: 1,
};

describe('Order List item', () => {
  it('should renders order list item correctly', () => {
    const tree = renderer.create(<Wrapper item={orderItem} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <li
        className="sc-kDvujY dbjIBw"
      >
        <div
          className="sc-csuSiG ofFbn quantity-container"
        >
          <p
            className="price-tag"
            style={
              Object {
                "color": "#FCFBFB",
                "fontFamily": "Klepon Ijo",
                "fontSize": "3rem",
                "letterSpacing": "0",
              }
            }
          >
            1
             X
          </p>
        </div>
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
        <img
          alt="Picture of Pinza Mare pizza"
          height="75px"
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
        <div
          className="sc-ipEyDJ iDbEtX"
        >
          <h3
            className="card-title"
            style={
              Object {
                "color": "none",
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
          <h4
            className="card-subtitle"
            style={
              Object {
                "color": "none",
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
          className="sc-eDWCr kQTIh"
        >
          <p
            className="price-tag"
            style={
              Object {
                "color": "#EB853E",
                "fontFamily": "Klepon Ijo",
                "fontSize": "2.5500000000000003rem",
                "letterSpacing": "0",
              }
            }
          >
            26$
          </p>
        </div>
        <button
          className="sc-bcXHqe sc-pyfCe feNVH hIOFrL icon-button btn-lg button"
          onClick={[Function]}
          style={
            Object {
              "fontSize": "1.05rem",
              "padding": "0.65rem 1.25rem",
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
                "default": "trash.svg",
              }
            }
          />
        </button>
      </li>
    `);
  });
});
