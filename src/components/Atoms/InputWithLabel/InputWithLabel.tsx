import { ColorVariants } from 'components/Theme/theme.types';
import { ThemeContext } from 'components/Theme/ThemeContext';
import { ComponentPropsWithoutRef, CSSProperties, useContext } from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
  & > p {
    max-width: 300px;
  }
`;

type LabelProps = {
  label: string;
  color: ColorVariants;
  helperText?: string;
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
      <input
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
      />
      <Typography variant='paragraph' color='danger'>
        {props.helperText && props.helperText}
      </Typography>
    </Box>
  );
};

export default InputWithLabel;
