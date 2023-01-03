import Button from 'components/Atoms/Button/Button';
import Icon from 'components/Atoms/Icon/Icon';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { MouseEventHandler, useContext } from 'react';
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

const QuantityPanel = styled.div`
  width: 24px;
  & > button {
    background: ${(props) => props.theme?.palette.light};
    color: ${(props) => props.theme?.palette.secondary};
    cursor: pointer;
    border: none;
    padding: 2px 3px;
    &: hover {
      background: ${(props) => props.theme?.palette.primary};
    }
  }
  & > button:first-child {
    border-bottom: 1px solid ${(props) => props.theme?.palette.secondary};
  }
`;

type ButtonWithInputProps = {
  value: number;
  onIncrement?: MouseEventHandler<HTMLButtonElement>;
  onDecrement?: MouseEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ButtonWithInput = ({ value, onIncrement, onDecrement, onClick}: ButtonWithInputProps) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledDiv>
      <Button variant='secondary-dark' size={'sm'} onClick={onClick}>
        {Icon({ name: 'basket', size: 17, isActive: false })}
        Add to order
      </Button>
      <StyledInput type='number' value={value} />
      <QuantityPanel theme={theme}>
        <button onClick={onIncrement}>
          {Icon({ name: 'arrow-up', size: 13, isActive: false })}
        </button>
        <button onClick={onDecrement}>
          {Icon({ name: 'arrow-down', size: 13, isActive: false })}
        </button>
      </QuantityPanel>
    </StyledDiv>
  );
};

export default ButtonWithInput;
