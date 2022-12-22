import Typography from 'components/Atoms/Typography/Typography';
import { Box } from './Main.styles';

const Main = () => {
  return (
    <main>
      <Box className='box'>
        <Typography variant='main-title' color={'primary'}>
          Hello
        </Typography>
      </Box>
    </main>
  );
};

export default Main;
