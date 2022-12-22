import styled from 'styled-components';

const BaseButton = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.4;
  border-radius: 8px;
  cursor: pointer;
  background: none;
  border: none;
  transition: 3ms;
`;

export const PrimaryLightButton = styled(BaseButton)`
  background: ${(props) => props.theme?.palette.primary};
  border: 1px solid ${(props) => props.theme?.palette.primary};
  color: ${(props) => props.theme?.palette.light};
  &:hover {
    background: ${(props) => props.theme?.palette.primaryDark};
  }
`;

export const PrimaryDarkButton = styled(BaseButton)`
  background: ${(props) => props.theme?.palette.secondary};
  border: 2px solid ${(props) => props.theme?.palette.secondary};
  color: ${(props) => props.theme?.palette.light};
  &:hover {
    background: ${(props) => props.theme?.palette.light};
    color: ${(props) => props.theme?.palette.secondary};
    border: 2px solid ${(props) => props.theme?.palette.secondary};
  }
`;

export const SecondaryLightButton = styled(BaseButton)`
  border: 2px solid ${(props) => props.theme?.palette.primary};
  color: ${(props) => props.theme?.palette.primary};
  &:hover {
    background: ${(props) => props.theme?.palette.primary};
    color: ${(props) => props.theme?.palette.secondary};
  }
`;

export const SecondaryDarkButton = styled(BaseButton)`
  border: 2px solid ${(props) => props.theme?.palette.secondary};
  color: ${(props) => props.theme?.palette.secondary};
  &:hover {
    background: ${(props) => props.theme?.palette.primary};
    border: 2px solid ${(props) => props.theme?.palette.primary};
  }
`;

const BaseTextButton = styled(BaseButton)`
  position: relative;
  display: inline-block;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const TextLightButton = styled(BaseTextButton)`
  color: ${(props) => props.theme?.palette.primary};
  &::after {
    background-color: ${(props) => props.theme?.palette.primary};
  }
`;

export const TextDarkButton = styled(BaseTextButton)`
  color: ${(props) => props.theme?.palette.secondary};
  &::after {
    background-color: ${(props) => props.theme?.palette.secondary};
  }
`;

export const IconButton = styled(BaseButton)`
  color: ${(props) => props.theme?.palette.secondary};
  scale: 200%;
`;
