import renderer from 'react-test-renderer';
import ThemeProvider from 'components/Theme/ThemeContext';
import InputWithLabel from '../InputWithLabel';

const name = 'Bernard';

const Wrapper = () => {
  return (
    <ThemeProvider>
      <InputWithLabel
        label={'Name'}
        name={'firstName'}
        type={'text'}
        placeholder={'Your first name'}
        color={'light'}
        value={name}
        onChange={jest.fn()}
        error={!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,50}$/.test(name.trim())}
      />
    </ThemeProvider>
  );
};

test('renders correctly input with label', () => {
  const tree = renderer.create(<Wrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
