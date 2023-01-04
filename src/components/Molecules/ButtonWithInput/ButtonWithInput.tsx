import Button from 'components/Atoms/Button/Button';
import Icon from 'components/Atoms/Icon/Icon';
import QuantityChangeButton from 'components/Atoms/QuantityChangeButton/QuantityChangeButton';
import { MouseEventHandler } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  font-family: 'Source Sans Pro';
  font-size: 1rem;
  font-weight: 400;
  width: 40px;
  height: 42px;
  text-align: center;
  &:focus-visible {
    outline: none;
  }
  border-radius: 0;
  border: none;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > button {
    border-radius: 8px 0 0 8px;
  }
  & > input[type='number']::-webkit-inner-spin-button,
  & > input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

type ButtonWithInputProps = {
  value: number;
  onIncrement?: MouseEventHandler<HTMLButtonElement>;
  onDecrement?: MouseEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ButtonWithInput = ({ value, onIncrement, onDecrement, onClick }: ButtonWithInputProps) => {
  return (
    <StyledDiv>
      <Button variant='secondary-dark' size={'sm'} onClick={onClick}>
        {Icon({ name: 'basket', size: 17, isActive: false })}
        Add to order
      </Button>
      <StyledInput type='number' value={value} />
      <QuantityChangeButton onIncrement={onIncrement} onDecrement={onDecrement} />
    </StyledDiv>
  );
};

export default ButtonWithInput;
