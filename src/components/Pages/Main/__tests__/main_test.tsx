import Main from '../Main';
import { renderWithProviders } from 'test/test-utils';
import { waitFor } from '@testing-library/react';

describe('Main Page', () => {
  it('should renders main page correctly', async () => {
    const main =  renderWithProviders(<Main />).container;

    await waitFor(() => {
      expect(main).toMatchSnapshot();
    });
    
  });
});
