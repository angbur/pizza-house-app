import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Login from '../Login';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Login />
      </Provider>
    </ThemeProvider>
  );
};

describe('Login content of dialog', () => {
  it('should renders login component correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <form>
        <div
          className="sc-gswNZR tROUR"
        >
          <div
            className="sc-bcXHqe dJGWXp"
          >
            <label
              style={
                Object {
                  "color": "#151515",
                }
              }
            >
              Login
            </label>
            <input
              name="login"
              placeholder="Your login"
              style={
                Object {
                  "color": "#151515",
                }
              }
              type="text"
            />
            <p
              className="paragraph"
              style={
                Object {
                  "color": "#e74c3c",
                  "fontFamily": "Source Sans Pro",
                  "fontSize": "1rem",
                  "fontWeight": "400",
                  "letterSpacing": "0",
                  "lineHeight": "1.6",
                }
              }
            />
          </div>
          <div
            className="sc-bcXHqe dJGWXp"
          >
            <label
              style={
                Object {
                  "color": "#151515",
                }
              }
            >
              Password
            </label>
            <input
              name="password"
              placeholder="Password"
              style={
                Object {
                  "color": "#151515",
                }
              }
              type="password"
            />
            <p
              className="paragraph"
              style={
                Object {
                  "color": "#e74c3c",
                  "fontFamily": "Source Sans Pro",
                  "fontSize": "1rem",
                  "fontWeight": "400",
                  "letterSpacing": "0",
                  "lineHeight": "1.6",
                }
              }
            />
          </div>
        </div>
      </form>
    `);
  });
});
