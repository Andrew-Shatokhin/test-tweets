import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Layout = styled.div`
  height: 100vh;
  padding-top: 20px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: red;
`;
export const StyledLink = styled(NavLink)`
  margin: 0 20px 0 20px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: #5736a3;
  }
`;
