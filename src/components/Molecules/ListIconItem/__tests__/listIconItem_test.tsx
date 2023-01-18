import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import { setupStore } from 'store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ListIconItem from '../ListIconItem';
import React from 'react';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={setupStore()}>
          <ListIconItem icon={{ name: 'order', size: 26 }} label={'order'} linkTo={'order'} />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Order List Item', () => {
  test('should renders order list item correctly', () => {
    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
