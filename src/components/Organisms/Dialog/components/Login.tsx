import InputWithLabel from 'components/Atoms/InputWithLabel/InputWithLabel';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { ComponentProps } from '../dialog.utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
`;

const Login = ({ handleChange }: ComponentProps): ReactNode => {
  return (
    <>
      <form>
        <Container>
          <InputWithLabel
            label={'Login'}
            type={'text'}
            name={'login'}
            placeholder={'Your login'}
            color={'secondary'}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'Password'}
            type={'password'}
            name={'password'}
            placeholder={'Password'}
            color={'secondary'}
            onChange={handleChange}
          />
        </Container>
      </form>
    </>
  );
};

export default Login;
