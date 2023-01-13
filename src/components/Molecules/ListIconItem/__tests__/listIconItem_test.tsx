import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ListIconItem from '../ListIconItem';
import React from 'react';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <ListIconItem icon={{ name: 'order', size: 26 }} label={'order'} linkTo={'order'} />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Order List Item', () => {
  test('should renders order list item correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
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
    `);
  });
});
