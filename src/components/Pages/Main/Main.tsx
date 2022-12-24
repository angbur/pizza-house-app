import Typography from 'components/Atoms/Typography/Typography';
import ListIconItem from 'components/Molecules/ListIconItem/ListIconItem';
import { Box } from './Main.styles';

const Main = () => 
    <main>
      <Box className='box'>
        <Typography variant='main-title' color={'primary'}>
          Hello
        </Typography>
        <ListIconItem icon={{name: 'menu', size: 32}} label={'menu'}/>
      </Box>
    </main>


export default Main;
