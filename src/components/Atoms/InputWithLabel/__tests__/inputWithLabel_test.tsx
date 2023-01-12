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

it('renders correctly input with label', () => {
  const tree = renderer.create(<Wrapper />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="sc-bcXHqe dJGWXp"
    >
      <label
        style={
          Object {
            "color": "#FCFBFB",
          }
        }
      >
        Name
      </label>
      <input
        name="firstName"
        onChange={[MockFunction]}
        placeholder="Your first name"
        style={
          Object {
            "color": "#151515",
          }
        }
        type="text"
        value="Bernard"
      />
      <p
        className="paragraph"
        style={
          Object {
            "color": "#e74c3c",
            "fontFamily": "Source Sans Pro",
            "fontSize": "1rem",
            "fontWeight": "400",
            "letterSpacing": "0",
            "lineHeight": "1.6",
          }
        }
      />
    </div>
  `);
});
