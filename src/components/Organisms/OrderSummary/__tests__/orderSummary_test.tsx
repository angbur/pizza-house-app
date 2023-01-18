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
      <OrderSummary data={data} onClick={jest.fn()} />
    </ThemeProvider>
  );
};

describe('Order Summary', () => {
  it('should renders order summary correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
