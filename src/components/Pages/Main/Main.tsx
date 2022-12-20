import Typography from '../../Atoms/Typography/Typography';
import { Box } from './Main.styles';

const Main = () => {
  return (
    <main>
      <Box className='box'>
        <Typography variant='mainTitle' color={'primary'}>Hello</Typography>
      </Box>
    </main>
  );
};

export default Main;
