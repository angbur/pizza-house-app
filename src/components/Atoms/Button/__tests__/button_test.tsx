import renderer from 'react-test-renderer';
import Button, { ButtonSize, ButtonVariant } from 'components/Atoms/Button/Button';
import ThemeProvider from 'components/Theme/ThemeContext';

type WrapperProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const Wrapper = ({ size }: WrapperProps) => {
  return (
    <ThemeProvider>
      <Button variant={'primary-light'} size={size} onClick={jest.fn()}>
        Press me
      </Button>
    </ThemeProvider>
  );
};

describe('Button', () => {
  test('renders correctly small size button', () => {
    const tree = renderer.create(<Wrapper size={'sm'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly medium size button', () => {
    const tree = renderer.create(<Wrapper size={'md'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly large size button', () => {
    const tree = renderer.create(<Wrapper size={'lg'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly primary-light button', () => {
    const tree = renderer.create(<Wrapper variant={'primary-light'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly primary-dark button', () => {
    const tree = renderer.create(<Wrapper variant={'primary-dark'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly secondary-light button', () => {
    const tree = renderer.create(<Wrapper variant={'secondary-light'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly secondary-dark button', () => {
    const tree = renderer.create(<Wrapper variant={'secondary-dark'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly button text-dark', () => {
    const tree = renderer.create(<Wrapper variant={'button-text-dark'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly button text-light', () => {
    const tree = renderer.create(<Wrapper variant={'button-text-light'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly button text without hover', () => {
    const tree = renderer.create(<Wrapper variant={'button-text-without-hover'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly icon button', () => {
    const tree = renderer.create(<Wrapper variant={'icon-button'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
