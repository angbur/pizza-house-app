import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import OrderForm from '../OrderForm';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <OrderForm
            user={{
              firstName: 'Kamila',
              lastName: 'Lasocka',
              email: 'lasocka@gmail.com',
            }}
          />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Order Form', () => {
  it('should renders order form correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <section
        className="sc-bjfHbI laezQq"
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
          Form
        </h2>
        <form>
          <div
            className="sc-idXgbr bqcThc"
          >
            <div
              className="sc-jrcTuL RAKdu"
            >
              <label
                style={
                  Object {
                    "color": "#FCFBFB",
                  }
                }
              >
                Name
              </label>
              <input
                name="firstName"
                onChange={[Function]}
                placeholder="Your first name"
                style={
                  Object {
                    "color": "#151515",
                  }
                }
                type="text"
                value="Kamila"
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
              className="sc-jrcTuL RAKdu"
            >
              <label
                style={
                  Object {
                    "color": "#FCFBFB",
                  }
                }
              >
                Last Name
              </label>
              <input
                name="lastName"
                onChange={[Function]}
                placeholder="Your last name"
                style={
                  Object {
                    "color": "#151515",
                  }
                }
                type="text"
                value="Lasocka"
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
              className="sc-jrcTuL RAKdu"
            >
              <label
                style={
                  Object {
                    "color": "#FCFBFB",
                  }
                }
              >
                Email
              </label>
              <input
                name="email"
                onChange={[Function]}
                placeholder="Your email"
                style={
                  Object {
                    "color": "#151515",
                  }
                }
                type="email"
                value="lasocka@gmail.com"
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
              className="sc-jrcTuL RAKdu"
            >
              <label
                style={
                  Object {
                    "color": "#e74c3c",
                  }
                }
              >
                City
              </label>
              <input
                name="city"
                onChange={[Function]}
                placeholder="Your city"
                style={
                  Object {
                    "color": "#e74c3c",
                  }
                }
                type="text"
                value=""
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
              className="sc-jrcTuL RAKdu"
            >
              <label
                style={
                  Object {
                    "color": "#e74c3c",
                  }
                }
              >
                Postal Code
              </label>
              <input
                name="postalCode"
                onChange={[Function]}
                placeholder="00-000"
                style={
                  Object {
                    "color": "#e74c3c",
                  }
                }
                type="text"
                value=""
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
              className="sc-jrcTuL RAKdu"
            >
              <label
                style={
                  Object {
                    "color": "#e74c3c",
                  }
                }
              >
                Street
              </label>
              <input
                name="street"
                onChange={[Function]}
                placeholder="Street"
                style={
                  Object {
                    "color": "#e74c3c",
                  }
                }
                type="text"
                value=""
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
              className="sc-jrcTuL RAKdu"
            >
              <label
                style={
                  Object {
                    "color": "#e74c3c",
                  }
                }
              >
                House / apartment number 
              </label>
              <input
                name="houseNumber"
                onChange={[Function]}
                placeholder="Number"
                style={
                  Object {
                    "color": "#e74c3c",
                  }
                }
                type="text"
                value=""
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
              className="sc-jrcTuL RAKdu"
            >
              <label
                style={
                  Object {
                    "color": "#e74c3c",
                  }
                }
              >
                Phone
              </label>
              <input
                name="phone"
                onChange={[Function]}
                placeholder="000-000-000"
                style={
                  Object {
                    "color": "#e74c3c",
                  }
                }
                type="tel"
                value=""
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
        <div
          className="sc-dIfARi bCnaWm"
        >
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
            Back
          </button>
          <button
            className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-lg button"
            onClick={[Function]}
            style={
              Object {
                "fontSize": "1.05rem",
                "padding": "0.65rem 1.25rem",
              }
            }
          >
            Summary
          </button>
        </div>
      </section>
    `);
  });
});
