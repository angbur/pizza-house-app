import Typography from 'components/Atoms/Typography/Typography';
import Sidebar from 'components/Organisms/Sidebar/Sidebar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 114px;
`;

const Main = () => (
  <Container>
    <Sidebar />
    <main>
      <Box className='box'>
        <Typography variant='main-title' color={'primary'}>
          Hello
        </Typography>
      </Box>
    </main>
  </Container>
);

export default Main;
