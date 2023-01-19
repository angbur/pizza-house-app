import { renderWithProviders } from 'test/test-utils';
import Footer from '../Footer';

describe('Footer', () => {
  
  test('should renders footer correctly', () => {
    const footer = renderWithProviders(<Footer />, {}).container;
    expect(footer).toMatchSnapshot();
  });
});
