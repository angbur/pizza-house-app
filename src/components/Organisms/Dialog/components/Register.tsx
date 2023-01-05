import Button from 'components/Atoms/Button/Button';
import InputWithLabel from 'components/Atoms/InputWithLabel/InputWithLabel';
import Typography from 'components/Atoms/Typography/Typography';
import { useAppDispatch } from 'hooks';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { closeDialog, FormType, openDialog } from '../dialogSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
`;

const ModalActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Register = (): ReactNode => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(closeDialog);
    dispatch(openDialog(FormType.login));
  };

  return (
    <>
      <form>
        <Container>
          <InputWithLabel
            label={'Name'}
            type={'text'}
            placeholder={'Your name'}
            color={'secondary'}
          />
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
      <ModalActions>
        <Button variant='primary-light' size='md'>
          Create Account
        </Button>
        <Typography variant='paragraph' color='secondary'>
          If you already have an account just
          <Button variant='button-text-light' size='sm' onClick={handleLogin}>
            SIGN IN
          </Button>
        </Typography>
      </ModalActions>
    </>
  );
};

export default Register;
