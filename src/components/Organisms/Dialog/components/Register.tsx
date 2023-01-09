import InputWithLabel from 'components/Atoms/InputWithLabel/InputWithLabel';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { ComponentProps } from '../dialog.utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

const Register = ({handleChange}: ComponentProps ): ReactNode => {
    
  return (
    <>
      <form>
        <Container>
          <InputWithLabel
            label={'Login'}
            name={'login'}
            required
            type={'text'}
            placeholder={'Your login'}
            color={'secondary'}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'First name'}
            name={'firstName'}
            required
            type={'text'}
            placeholder={'Your first name'}
            color={'secondary'}
            helperText={'Minimum 3 letters'}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'Last name'}
            name={'lastName'}
            required
            type={'text'}
            placeholder={'Your last name'}
            color={'secondary'}
            helperText={'Minimum 3 letters'}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'Email'}
            name={'email'}
            required
            type={'email'}
            placeholder={'Your email'}
            color={'secondary'}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'Password'}
            name={'password'}
            required
            type={'password'}
            placeholder={'Password'}
            color={'secondary'}
            helperText={'At least 8 characters, one capital letter and one number'}
            onChange={handleChange}
          />
        </Container>
      </form>
    </>
  );
};

export default Register;
