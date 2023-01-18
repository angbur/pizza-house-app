import Button, { ButtonSize, ButtonVariant } from 'components/Atoms/Button/Button';
import { renderWithProviders } from 'test/test-utils';

type WrapperProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const button = ({ size, variant }: WrapperProps) => {
  return renderWithProviders(<Button size={size} variant={variant} />, {
    preloadedState: {},
  }).container;
};

describe('Button', () => {
  test('renders correctly small size button', () => {
    expect(button({ size: 'sm' })).toMatchSnapshot();
  });

  test('renders correctly medium size button', () => {
    expect(button({ size: 'md' })).toMatchSnapshot();
  });

  test('renders correctly large size button', () => {
    expect(button({ size: 'lg' })).toMatchSnapshot();
  });

  test('renders correctly primary-light button', () => {
    expect(button({ variant: 'primary-light' })).toMatchSnapshot();
  });

  test('renders correctly primary-dark button', () => {
    expect(button({ variant: 'primary-dark' })).toMatchSnapshot();
  });

  test('renders correctly secondary-light button', () => {
    expect(button({ variant: 'secondary-light' })).toMatchSnapshot();
  });

  test('renders correctly secondary-dark button', () => {
    expect(button({ variant: 'secondary-dark' })).toMatchSnapshot();
  });

  test('renders correctly button text-dark', () => {
    expect(button({ variant: 'button-text-dark' })).toMatchSnapshot();
  });

  test('renders correctly button text-light', () => {
    expect(button({ variant: 'button-text-light' })).toMatchSnapshot();
  });

  test('renders correctly button text without hover', () => {
    expect(button({ variant: 'button-text-without-hover' })).toMatchSnapshot();
  });

  test('renders correctly icon button', () => {
    expect(button({ variant: 'icon-button' })).toMatchSnapshot();
  });
});
