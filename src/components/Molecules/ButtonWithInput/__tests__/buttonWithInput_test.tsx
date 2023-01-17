import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import ButtonWithInput from '../ButtonWithInput';

const value = 1;

const Wrapper = () => {
  return (
    <ThemeProvider>
      <ButtonWithInput value={value} />
    </ThemeProvider>
  );
};

describe('Button with input', () => {
  test('should renders button with input correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
