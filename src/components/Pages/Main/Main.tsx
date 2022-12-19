import Typography from '../../Atoms/Typography/Typography';
import { Box } from './Main.styles';

const Main = () => {
  return (
    <main>
      <Box className='box'>
        <h1>Heading 1</h1>
        <h2>Title</h2>
        <Typography variant={'page-title'} color={'primary'}>Page Title</Typography>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>paragraph</p>
      </Box>
    </main>
  );
};

export default Main;
