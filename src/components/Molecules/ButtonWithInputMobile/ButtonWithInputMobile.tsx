import Button from 'components/Atoms/Button/Button';
import Icon from 'components/Atoms/Icon/Icon';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import styled, { CSSProperties } from 'styled-components';

const StyledInput = styled.input`
  font-family: 'Source Sans Pro';
  font-size: 1rem;
  font-weight: 400;
  width: 40px;
  height: 43px;
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
  width: 100%;
  & > button {
    border-radius: 8px 0 0 8px;
  }
  & > input[type='number']::-webkit-inner-spin-button,
  & > input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    -os-appearance: none;
  }
  & > input[type='number'] {
    -moz-appearance: textfield;
  }
  @media (min-width: 545px) {
    display: none;
  }
`;

type ButtonWithInputMobileProps = {
  value: number;
  onIncrement?: MouseEventHandler<HTMLButtonElement>;
  onDecrement?: MouseEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  withRemove: boolean;
};

const ButtonWithInputMobile = ({
  value,
  onIncrement,
  onDecrement,
  onClick,
  onChange,
  withRemove,
}: ButtonWithInputMobileProps) => {
  const buttonStyles: CSSProperties = {
    border: 'none',
    maxWidth: '80px',
    maxHeight: '80px',
    borderRadius: '0',
  };
  return (
    <StyledDiv className={'quantity-button-mobile'}>
      <Button variant='primary-light' size={'md'} onClick={onIncrement} style={{ ...buttonStyles }}>
        {Icon({ name: 'plus', size: 20, isActive: false })}
      </Button>
      <StyledInput type='number' value={value} onChange={onChange} style={{ ...buttonStyles }} />
      <Button variant='primary-light' size={'md'} onClick={onDecrement} style={{ ...buttonStyles }}>
        {Icon({ name: 'minus', size: 20, isActive: false })}
      </Button>
      {withRemove && (
        <Button
          variant='primary-light'
          size={'md'}
          onClick={onClick}
          style={{ ...buttonStyles, borderLeft: '1px solid white' }}
        >
          {Icon({ name: 'trash', size: 20, isActive: false })}
        </Button>
      )}
    </StyledDiv>
  );
};

export default ButtonWithInputMobile;
