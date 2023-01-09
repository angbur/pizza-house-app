import Button from 'components/Atoms/Button/Button';
import InputWithLabel from 'components/Atoms/InputWithLabel/InputWithLabel';
import Typography from 'components/Atoms/Typography/Typography';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const OrderForm = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/order');
  };

  const handleNext = () => {
    navigate('/order/summary');
  };

  return (
    <Container>
      <Typography variant='section-title' color='light'>
        Form
      </Typography>
      <form>
        <Box>
          <InputWithLabel label={'Name'} type={'text'} placeholder={'Your name'} color={'light'} />
          <InputWithLabel
            label={'Email'}
            type={'email'}
            placeholder={'Your email'}
            color={'light'}
          />
          <InputWithLabel label={'City'} type={'text'} placeholder={'Your city'} color={'light'} />
          <InputWithLabel
            label={'Postal Code'}
            type={'text'}
            placeholder={'00-000'}
            color={'light'}
          />
          <InputWithLabel label={'Street'} type={'text'} placeholder={'Street'} color={'light'} />
          <InputWithLabel
            label={'Apartment/house number'}
            type={'text'}
            placeholder={'Number'}
            color={'light'}
          />
          <InputWithLabel
            label={'Phone'}
            type={'tel'}
            placeholder={'000-000-000'}
            color={'light'}
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
