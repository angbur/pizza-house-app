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
    expect(tree).toMatchInlineSnapshot(`
      <h1
        className="main-title"
        style={
          Object {
            "color": "none",
            "fontFamily": "Klepon Ijo",
            "fontSize": "3rem",
            "fontWeight": "400",
            "letterSpacing": "1px",
            "lineHeight": "1.6",
          }
        }
      >
        Text
      </h1>
    `);
  });

  it('renders correctly section-title', () => {
    const tree = renderer.create(<Wrapper variant={'section-title'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <h2
        className="section-title"
        style={
          Object {
            "color": "none",
            "fontFamily": "Source Sans Pro",
            "fontSize": "2.25rem",
            "fontWeight": "300",
            "letterSpacing": "1px",
            "lineHeight": "1.3",
          }
        }
      >
        Text
      </h2>
    `);
  });

  it('renders correctly card-title', () => {
    const tree = renderer.create(<Wrapper variant={'card-title'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <h3
        className="card-title"
        style={
          Object {
            "color": "none",
            "fontFamily": "Klepon Ijo",
            "fontSize": "2rem",
            "fontWeight": "400",
            "letterSpacing": "2px",
            "lineHeight": "1.2",
          }
        }
      >
        Text
      </h3>
    `);
  });

  it('renders correctly card-subtitle', () => {
    const tree = renderer.create(<Wrapper variant={'card-subtitle'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <h4
        className="card-subtitle"
        style={
          Object {
            "color": "none",
            "fontFamily": "Source Sans Pro",
            "fontSize": "0.9rem",
            "fontWeight": "400",
            "lineHeight": "1.6",
          }
        }
      >
        Text
      </h4>
    `);
  });

  it('renders correctly dialog-title', () => {
    const tree = renderer.create(<Wrapper variant={'dialog-title'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <h2
        className="dialog-title"
        style={
          Object {
            "color": "none",
            "fontFamily": "Source Sans Pro",
            "fontSize": "1.6rem",
            "fontWeight": "600",
            "letterSpacing": "1px",
            "lineHeight": "1.6",
          }
        }
      >
        Text
      </h2>
    `);
  });

  it('renders correctly item-title', () => {
    const tree = renderer.create(<Wrapper variant={'item-title'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <h5
        className="item-title"
        style={
          Object {
            "color": "none",
            "fontFamily": "Source Sans Pro",
            "fontSize": "1rem",
            "fontWeight": "600",
            "letterSpacing": "1px",
            "lineHeight": "1.4",
          }
        }
      >
        Text
      </h5>
    `);
  });

  it('renders correctly paragraph', () => {
    const tree = renderer.create(<Wrapper variant={'paragraph'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <p
        className="paragraph"
        style={
          Object {
            "color": "none",
            "fontFamily": "Source Sans Pro",
            "fontSize": "1rem",
            "fontWeight": "400",
            "letterSpacing": "0",
            "lineHeight": "1.6",
          }
        }
      >
        Text
      </p>
    `);
  });

  it('renders correctly price-tag', () => {
    const tree = renderer.create(<Wrapper variant={'price-tag'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <p
        className="price-tag"
        style={
          Object {
            "color": "none",
            "fontFamily": "Klepon Ijo",
            "fontSize": "3rem",
            "letterSpacing": "0",
          }
        }
      >
        Text
      </p>
    `);
  });

  it('renders correctly caption', () => {
    const tree = renderer.create(<Wrapper variant={'caption'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <p
        className="caption"
        style={
          Object {
            "color": "none",
            "fontFamily": "Klepon Ijo",
            "fontSize": "2rem",
            "fontWeight": "400",
            "letterSpacing": "0",
            "lineHeight": "1.6",
          }
        }
      >
        Text
      </p>
    `);
  });
});
