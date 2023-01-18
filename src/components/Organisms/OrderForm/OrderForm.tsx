import Button from 'components/Atoms/Button/Button';
import InputWithLabel from 'components/Atoms/InputWithLabel/InputWithLabel';
import Typography from 'components/Atoms/Typography/Typography';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCreateOrderMutation } from 'services/order';
import { selectUserId } from 'store/userSlice';
import styled from 'styled-components';
import { OrderItem } from 'types/Order';
import {
  removeAllOrder,
  selectListOfOrderItems,
  selectSumOfOrder,
} from '../../Pages/Order/orderSlice';
import OrderList from '../OrderList/OrderList';
import OrderSummary from '../OrderSummary/OrderSummary';
import { ImportedUserData } from './useUserData';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
  & > h2 {
    margin: 2rem 0 4rem 0;
  }
  margin: 2rem;
  margin-bottom: 10rem;
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
  @media (max-width: 560px) {
    flex-direction: column-reverse;
  }
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 2rem;
  gap: 1rem;
  @media (max-width: 766px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 3rem;
  margin: 4rem;
  @media (max-width: 560px) {
    flex-direction: column-reverse;
    margin-bottom: 10rem;
  }
`;

type OrderForm = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  postalCode: string;
  street: string;
  houseNumber: string;
  phone: string;
};

type OrderFormProps = {
  user: ImportedUserData;
};

const OrderForm = ({ user }: OrderFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId: string = useAppSelector(selectUserId);
  const orderList: OrderItem[] = useAppSelector(selectListOfOrderItems);
  const sum: number = useAppSelector(selectSumOfOrder);
  const [isValidable, setValidation] = useState<boolean>(false);
  const [formData, setData] = useState<OrderForm>({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    city: '',
    postalCode: '',
    street: '',
    houseNumber: '',
    phone: '',
  });
  const [createOrder] = useCreateOrderMutation();

  const handleBack = () => {
    navigate('/order');
  };

  const handleSubmit = () => {
    for (const value in formData) {
      if (formData[value as keyof typeof formData].length < 1) {
        toast.error('Please fill in the missing fields');
        setValidation(false);
        break;
      } else {
        setValidation(true);
      }
    }
  };

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...formData,
      [name.trim()]: value,
    });
  };

  const handleCancel = () => {
    dispatch(removeAllOrder());
    navigate('/');
  };

  const handleEdit = () => {
    setValidation((prev) => !prev);
  };

  const handleOrder = async () => {
    const order: Omit<OrderItem, '_id'>[] = [];

    for (const element of orderList) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { _id, ...rest } = element;
      order.push({ ...rest });
    }

    const requestData = {
      user: userId,
      order: order,
      deliveryAddress: formData,
      total: sum,
    };

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const order = await createOrder(requestData).unwrap();
      dispatch(removeAllOrder());
      toast.success('Order sent!');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Typography variant='section-title' color='light'>
        {isValidable ? 'Summary' : 'Form'}
      </Typography>
      {!isValidable ? (
        <>
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
                error={!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,50}$/.test(formData.firstName.trim())}
              />
              <InputWithLabel
                label={'Last Name'}
                name={'lastName'}
                type={'text'}
                placeholder={'Your last name'}
                color={'light'}
                value={formData.lastName}
                onChange={handleChange}
                error={!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,50}$/.test(formData.lastName.trim())}
              />
              <InputWithLabel
                label={'Email'}
                name={'email'}
                type={'email'}
                placeholder={'Your email'}
                color={'light'}
                value={formData.email}
                onChange={handleChange}
                error={
                  !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                    formData.email.trim(),
                  )
                }
              />
              <InputWithLabel
                label={'City'}
                name={'city'}
                type={'text'}
                placeholder={'Your city'}
                color={'light'}
                value={formData.city}
                onChange={handleChange}
                error={
                  !/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]{3,20}$/.test(
                    formData.city.trim(),
                  )
                }
              />
              <InputWithLabel
                label={'Postal Code'}
                name={'postalCode'}
                type={'text'}
                placeholder={'00-000'}
                color={'light'}
                value={formData.postalCode}
                onChange={handleChange}
                error={!/^\d{2}((-?)\d{3})$/.test(formData.postalCode.trim())}
              />
              <InputWithLabel
                label={'Street'}
                name={'street'}
                type={'text'}
                placeholder={'Street'}
                color={'light'}
                value={formData.street}
                onChange={handleChange}
                error={!/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,40}$/.test(formData.street.trim())}
              />
              <InputWithLabel
                label={'House / apartment number '}
                name={'houseNumber'}
                type={'text'}
                placeholder={'Number'}
                color={'light'}
                value={formData.houseNumber}
                onChange={handleChange}
                error={formData.houseNumber.trim().length === 0}
              />
              <InputWithLabel
                label={'Phone'}
                name={'phone'}
                type={'tel'}
                placeholder={'000-000-000'}
                color={'light'}
                value={formData.phone}
                onChange={handleChange}
                error={!/^\d{3}(-?)\d{3}(-?)\d{3}$/.test(formData.phone.trim())}
              />
            </Box>
          </form>
          <FormActions>
            <Button variant='button-text-light' onClick={handleBack}>
              Back
            </Button>
            <Button variant='primary-light' onClick={handleSubmit}>
              Summary
            </Button>
          </FormActions>
        </>
      ) : (
        <>
          <SummaryContainer>
            <OrderSummary data={formData} onClick={handleEdit} />
            <OrderList />
          </SummaryContainer>
          <StyledDiv>
            <Button variant='button-text-light' onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant='primary-light' onClick={handleOrder}>
              Order now
            </Button>
          </StyledDiv>
        </>
      )}
    </Container>
  );
};

export default OrderForm;
