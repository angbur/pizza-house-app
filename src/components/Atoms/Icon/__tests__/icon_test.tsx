import Icon from '../Icon';
import { renderWithProviders } from 'test/test-utils';

describe('Icon', () => {
  it('should renders correctly icon', () => {
    const icon = renderWithProviders(Icon({ name: 'menu-burger', size: 20, isActive: false }), {
      preloadedState: {},
    }).container;

    expect(icon).toMatchSnapshot();
  });
});
