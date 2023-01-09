import InputWithLabel from 'components/Atoms/InputWithLabel/InputWithLabel';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
`;

const Login = (): ReactNode => {

  return (
    <>
      <form>
        <Container>
          <InputWithLabel
            label={'Email'}
            type={'email'}
            placeholder={'Your email'}
            color={'secondary'}
          />
          <InputWithLabel
            label={'Password'}
            type={'password'}
            placeholder={'Password'}
            color={'secondary'}
          />
        </Container>
      </form>
    </>
  );
};

export default Login;
