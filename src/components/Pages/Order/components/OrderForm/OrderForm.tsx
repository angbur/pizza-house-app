import Button from 'components/Atoms/Button/Button';
import InputWithLabel from 'components/Atoms/InputWithLabel/InputWithLabel';
import Typography from 'components/Atoms/Typography/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ImportedUserData, useUserData } from './useUserData';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
  & > h2 {
    margin: 2rem 0;
  }
  margin: 2rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormActions = styled.div`
  display: flex;
  gap: 3rem;
  margin: 2rem;
`;

type OrderForm = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  postalCode: string;
  street: string;
  apartmentNumber: string;
  phone: string;
};

type OrderFormProps = {
  user: ImportedUserData;
};

const OrderForm = ({user} : OrderFormProps) => {
  const navigate = useNavigate();
  const [formData, setData] = useState<OrderForm>({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    city: '',
    postalCode: '',
    street: '',
    apartmentNumber: '',
    phone: '',
  });

  const handleBack = () => {
    navigate('/order');
  };

  const handleNext = () => {
    navigate('/order/summary');
  };

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...formData,
      [name.trim()]: value,
    });
  };

  return (
    <Container>
      <Typography variant='section-title' color='light'>
        Form
      </Typography>
      <form>
        <Box>
          <InputWithLabel
            label={'Name'}
            name={'firstName'}
            type={'text'}
            placeholder={'Your first name'}
            color={'light'}
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'Last Name'}
            name={'lastName'}
            type={'text'}
            placeholder={'Your last name'}
            color={'light'}
            value={formData.lastName}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'Email'}
            name={'email'}
            type={'email'}
            placeholder={'Your email'}
            color={'light'}
            value={formData.email}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'City'}
            name={'city'}
            type={'text'}
            placeholder={'Your city'}
            color={'light'}
            value={formData.city}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'Postal Code'}
            name={'postalCode'}
            type={'text'}
            placeholder={'00-000'}
            color={'light'}
            value={formData.postalCode}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'Street'}
            name={'street'}
            type={'text'}
            placeholder={'Street'}
            color={'light'}
            value={formData.street}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'Apartment/house number'}
            name={'apartmentNumber'}
            type={'text'}
            placeholder={'Number'}
            color={'light'}
            value={formData.apartmentNumber}
            onChange={handleChange}
          />
          <InputWithLabel
            label={'Phone'}
            name={'phone'}
            type={'tel'}
            placeholder={'000-000-000'}
            color={'light'}
            value={formData.phone}
            onChange={handleChange}
          />
        </Box>
      </form>
      <FormActions>
        <Button variant='button-text-light' onClick={handleBack}>
          Back
        </Button>
        <Button variant='primary-light' onClick={handleNext}>
          Summary
        </Button>
      </FormActions>
    </Container>
  );
};

export default OrderForm;
