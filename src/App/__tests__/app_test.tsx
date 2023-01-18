import App from 'App/App';
import { renderWithProviders } from 'test/test-utils';

describe('App', () => {
  test('should renders app correctly', () => {
    const app = renderWithProviders(<App />, {
      preloadedState: {},
    }).container;

    expect(app).toMatchSnapshot();
  });
});
