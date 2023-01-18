import Main from '../Main';
import { renderWithProviders } from 'test/test-utils';

describe('Main Page', () => {
  it('should renders main page correctly', async () => {
    const main = await renderWithProviders(<Main />, {
      preloadedState: {},
    }).container;

    expect(main).toMatchSnapshot();
  });
});
