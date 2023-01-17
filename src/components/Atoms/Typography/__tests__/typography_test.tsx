import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import Typography from '../Typography';
import { TypographyVariant } from 'components/Theme/theme.types';

type WrapperProps = {
  variant: TypographyVariant;
};

const Wrapper = ({ variant }: WrapperProps) => {
  return (
    <ThemeProvider>
      <Typography variant={variant}>Text</Typography>
    </ThemeProvider>
  );
};

describe('Typography', () => {
  it('renders correctly main-title', () => {
    const tree = renderer.create(<Wrapper variant={'main-title'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly section-title', () => {
    const tree = renderer.create(<Wrapper variant={'section-title'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly card-title', () => {
    const tree = renderer.create(<Wrapper variant={'card-title'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly card-subtitle', () => {
    const tree = renderer.create(<Wrapper variant={'card-subtitle'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly dialog-title', () => {
    const tree = renderer.create(<Wrapper variant={'dialog-title'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly item-title', () => {
    const tree = renderer.create(<Wrapper variant={'item-title'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly paragraph', () => {
    const tree = renderer.create(<Wrapper variant={'paragraph'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly price-tag', () => {
    const tree = renderer.create(<Wrapper variant={'price-tag'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly caption', () => {
    const tree = renderer.create(<Wrapper variant={'caption'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
