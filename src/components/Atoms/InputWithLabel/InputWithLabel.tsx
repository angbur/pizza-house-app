import { ColorVariants } from 'components/Theme/theme.types';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { ComponentPropsWithoutRef, CSSProperties, useContext } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  & > input {
    background: ${(props) => props.theme?.palette.light};
    border: 1px solid ${(props) => props.theme?.palette.secondary};
    &:focus-visible {
      outline: none;
    }
    padding: 0.625rem;
    border-radius: 8px;
    width: 300px;
  }
`;

type LabelProps = {
  label: string;
  color: ColorVariants;
};

const InputWithLabel = (props: ComponentPropsWithoutRef<'input'> & LabelProps) => {
  const theme = useContext(ThemeContext);

  const colorStyles: CSSProperties = {
    color: theme.palette[props.color],
  };

  return (
    <Box theme={theme}>
      <label htmlFor={props.id} style={{ ...colorStyles }}>
        {props.label}
      </label>
      <input id={props.id} placeholder={props.placeholder} type={props.type} />
    </Box>
  );
};

export default InputWithLabel;
