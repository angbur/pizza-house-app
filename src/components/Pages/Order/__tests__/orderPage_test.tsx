import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import OrderPage from '../OrderPage';
import { BrowserRouter } from 'react-router-dom';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <OrderPage />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Order Page', () => {
  it('should renders order page correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <section
        className="sc-fnGiBr idenfC"
      >
        <h2
          className="section-title"
          style={
            Object {
              "color": "#FCFBFB",
              "fontFamily": "Source Sans Pro",
              "fontSize": "2.25rem",
              "fontWeight": "300",
              "letterSpacing": "1px",
              "lineHeight": "1.3",
            }
          }
        >
          My Order
        </h2>
        <p
          className="paragraph"
          style={
            Object {
              "color": "#FCFBFB",
              "fontFamily": "Source Sans Pro",
              "fontSize": "1rem",
              "fontWeight": "400",
              "letterSpacing": "0",
              "lineHeight": "1.6",
            }
          }
        >
          You have not ordered anything yet.
        </p>
      </section>
    `);
  });
});
