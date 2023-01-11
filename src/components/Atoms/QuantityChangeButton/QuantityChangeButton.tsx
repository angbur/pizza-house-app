import { MouseEventHandler, useContext } from 'react';
import styled from 'styled-components';
import Icon from 'components/Atoms/Icon/Icon';
import { ThemeContext } from 'components/Theme/ThemeContext';

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

type QuantityButtonProps = {
  onIncrement?: MouseEventHandler<HTMLButtonElement>;
  onDecrement?: MouseEventHandler<HTMLButtonElement>;
};

const QuantityChangeButton = ({ onDecrement, onIncrement }: QuantityButtonProps) => {
  const theme = useContext(ThemeContext);
  return (
    <QuantityPanel theme={theme}>
      <button onClick={onIncrement}>{Icon({ name: 'arrow-up', size: 14, isActive: true })}</button>
      <button onClick={onDecrement}>
        {Icon({ name: 'arrow-down', size: 14, isActive: true })}
      </button>
    </QuantityPanel>
  );
};

export default QuantityChangeButton;
