import Typography from 'components/Atoms/Typography/Typography';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 114px;
`;

const Main = () => (
  <main>
    <Box className='box'>
      <Typography variant='main-title' color={'primary'}>
        Hello
      </Typography>
    </Box>
  </main>
);

export default Main;
