import { useContext } from 'react';
import Button from './components/Atoms/Button/Button';
import { ThemeContext } from './components/Theme/ThemeContext';

const App = () => {
  const theme = useContext(ThemeContext);
  return (
    <Button variant={'primary'} theme={theme}>
      Hi
    </Button>
  );
};

export default App;
