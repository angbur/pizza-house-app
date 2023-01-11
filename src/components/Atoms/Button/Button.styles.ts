import styled from 'styled-components';

const BaseButton = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Source Sans Pro';
  line-height: 1.4;
  border-radius: 8px;
  cursor: pointer;
  background: none;
  border: none;
  transition: 3ms;
  letter-spacing: 1px;
  transition: 0.2s all;
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
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
  background: ${(props) => props.theme?.palette.light};
  border: 2px solid ${(props) => props.theme?.palette.light};
  color: ${(props) => props.theme?.palette.secondary};
  &:hover {
    background: ${(props) => props.theme?.palette.primary};
    border-color: ${(props) => props.theme?.palette.primary};
  }
  & > img {
    position: relative;
    top: 3px;
  }
`;

export const TextButtonWithoutHover = styled(BaseButton)`
  color: ${(props) => props.theme?.palette.secondary};
  &:active {
    box-shadow: none;
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
  &:active {
    transform: none;
    box-shadow: none;
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
  &:active {
    transform: none;
    box-shadow: none;
  }
`;
