import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import OrderSummary from '../OrderSummary';

const data = {
  firstName: 'Kamila',
  lastName: 'Lasocka',
  email: 'lasocka@gmail.com',
  city: 'Wrocław',
  postalCode: '55-001',
  street: 'Malinowa',
  houseNumber: '3a',
  phone: '697748282',
};

const Wrapper = () => {
  return (
    <ThemeProvider>
      <OrderSummary data={data} />
    </ThemeProvider>
  );
};

describe('Order Summary', () => {
  it('should renders order summary correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="sc-jrcTuL cgPqIu"
      >
        <h3
          className="card-title title"
          style={
            Object {
              "color": "#EB853E",
              "fontFamily": "Klepon Ijo",
              "fontSize": "2rem",
              "fontWeight": "400",
              "letterSpacing": "2px",
              "lineHeight": "1.2",
            }
          }
        >
          Address:
        </h3>
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
          Kamila Lasocka
        </p>
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
          lasocka@gmail.com
        </p>
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
          697748282
        </p>
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
          Malinowa 3a
        </p>
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
          55-001 Wrocław
        </p>
        <button
          className="sc-bcXHqe sc-hLBbgP feNVH joABVS secondary-light btn-lg button"
          style={
            Object {
              "fontSize": "1.05rem",
              "padding": "0.65rem 1.25rem",
            }
          }
        >
          Edit
        </button>
      </div>
    `);
  });
});
