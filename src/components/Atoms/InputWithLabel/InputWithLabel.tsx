import { ThemeContext } from 'components/Theme/ThemeContext';
import { ComponentPropsWithoutRef, useContext } from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    & > label {
        color: ${(props) => props.theme?.palette.light};
    }
    & > input {
        background: ${(props) => props.theme?.palette.light};
        &:focus-visible {
            outline: none;
        };
        padding: 0.625rem;
        border-radius: 8px;
        border: none;
        width: 300px;
    }
`;

type LabelProps = {
    label: string;
};

const InputWithLabel = (props: ComponentPropsWithoutRef<'input'> & LabelProps) => {
    const theme = useContext(ThemeContext);
    return (
        <Box theme={theme}>
            <label htmlFor={props.id}>
                {props.label}
            </label>
            <input id={props.id} placeholder={props.placeholder}/>
        </Box>
    )
};

export default InputWithLabel;