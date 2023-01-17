import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import Logo from '../Logo';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <Logo background='secondary' />
    </ThemeProvider>
  );
};

it('renders correctly logo', () => {
  const tree = renderer.create(<Wrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
