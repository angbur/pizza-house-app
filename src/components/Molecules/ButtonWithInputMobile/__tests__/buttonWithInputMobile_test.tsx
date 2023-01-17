import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import ButtonWithInputMobile from '../ButtonWithInputMobile';

const value = 1;

const Wrapper = () => {
  return (
    <ThemeProvider>
      <ButtonWithInputMobile value={value} withRemove={true} />
    </ThemeProvider>
  );
};

describe('Button with input for mobile', () => {
  test('should renders button with input correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
