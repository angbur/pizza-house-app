import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 138px;
  border-bottom: 2px solid ${(props) => props.theme.palette.light};
  background: ${(props) => props.theme.palette.light};
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  & .header_logo {
    flex: 40%;
    display: flex;
    justify-content: flex-start;
    @media (max-width: 768px) {
      flex: 20%;
    }
  }
  & .header_title {
    flex: 20%;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const HeaderActions = styled.div`
  flex: 40%;
  display: flex;,
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-right: 2rem;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex: 80%;
    gap: 2rem;
  }
  & button.header_actions_button--desktop {
    @media (max-width: 460px) {
      display: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  & img {
    position: relative;
    top: 2px;
    margin-right: 0.5rem;
  }
`;

export const DropdownContainerMobile = styled.div`
  display: none;
  @media (max-width: 460px) {
    display: block;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  position: absolute;
  right: 10px;
  background-color: #fff;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 1rem;
  & > a {
    padding: 1rem;
    text-decoration: none;
    display: block;
  }
  & img {
    position: relative;
    top: 2px;
    margin-right: 0 10px;
  }
`;
