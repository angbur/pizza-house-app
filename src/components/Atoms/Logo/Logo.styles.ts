import styled from 'styled-components';

export const LogoBox = styled.div`
  height: 138px;
  background: ${(props) => props.theme?.palette.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114px;
  cursor: pointer;
`;
