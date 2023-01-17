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
  test('should renders footer correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
