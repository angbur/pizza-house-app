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
  it('renders correctly small size button', () => {
    const tree = renderer.create(<Wrapper size={'sm'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-sm button"
        onClick={[MockFunction]}
        style={
          Object {
            "fontSize": "0.8500000000000001rem",
            "padding": "0.52rem 1rem",
          }
        }
      >
        Press me
      </button>
    `);
  });

  it('renders correctly medium size button', () => {
    const tree = renderer.create(<Wrapper size={'md'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-md button"
        onClick={[MockFunction]}
        style={
          Object {
            "fontSize": "0.9500000000000001rem",
            "padding": "0.5850000000000001rem 1.125rem",
          }
        }
      >
        Press me
      </button>
    `);
  });

  it('renders correctly large size button', () => {
    const tree = renderer.create(<Wrapper size={'lg'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-lg button"
        onClick={[MockFunction]}
        style={
          Object {
            "fontSize": "1.05rem",
            "padding": "0.65rem 1.25rem",
          }
        }
      >
        Press me
      </button>
    `);
  });

  it('renders correctly primary-light button', () => {
    const tree = renderer.create(<Wrapper variant={'primary-light'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-lg button"
        onClick={[MockFunction]}
        style={
          Object {
            "fontSize": "1.05rem",
            "padding": "0.65rem 1.25rem",
          }
        }
      >
        Press me
      </button>
    `);
  });

  it('renders correctly primary-dark button', () => {
    const tree = renderer.create(<Wrapper variant={'primary-dark'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-lg button"
        onClick={[MockFunction]}
        style={
          Object {
            "fontSize": "1.05rem",
            "padding": "0.65rem 1.25rem",
          }
        }
      >
        Press me
      </button>
    `);
  });

  it('renders correctly secondary-light button', () => {
    const tree = renderer.create(<Wrapper variant={'secondary-light'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-lg button"
        onClick={[MockFunction]}
        style={
          Object {
            "fontSize": "1.05rem",
            "padding": "0.65rem 1.25rem",
          }
        }
      >
        Press me
      </button>
    `);
  });

  it('renders correctly secondary-dark button', () => {
    const tree = renderer.create(<Wrapper variant={'secondary-dark'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-lg button"
        onClick={[MockFunction]}
        style={
          Object {
            "fontSize": "1.05rem",
            "padding": "0.65rem 1.25rem",
          }
        }
      >
        Press me
      </button>
    `);
  });

  it('renders correctly button text-dark', () => {
    const tree = renderer.create(<Wrapper variant={'button-text-dark'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-lg button"
        onClick={[MockFunction]}
        style={
          Object {
            "fontSize": "1.05rem",
            "padding": "0.65rem 1.25rem",
          }
        }
      >
        Press me
      </button>
    `);
  });

  it('renders correctly button text-light', () => {
    const tree = renderer.create(<Wrapper variant={'button-text-light'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-lg button"
        onClick={[MockFunction]}
        style={
          Object {
            "fontSize": "1.05rem",
            "padding": "0.65rem 1.25rem",
          }
        }
      >
        Press me
      </button>
    `);
  });

  it('renders correctly button text without hover', () => {
    const tree = renderer.create(<Wrapper variant={'button-text-without-hover'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-lg button"
        onClick={[MockFunction]}
        style={
          Object {
            "fontSize": "1.05rem",
            "padding": "0.65rem 1.25rem",
          }
        }
      >
        Press me
      </button>
    `);
  });

  it('renders correctly icon button', () => {
    const tree = renderer.create(<Wrapper variant={'icon-button'} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="sc-bcXHqe sc-gswNZR feNVH gHullA primary-light btn-lg button"
        onClick={[MockFunction]}
        style={
          Object {
            "fontSize": "1.05rem",
            "padding": "0.65rem 1.25rem",
          }
        }
      >
        Press me
      </button>
    `);
  });
});
