import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 100px;
  display: flex;
  justify-content: space-between;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  // background-color: #F4F4F4;
  @media screen and (max-width: 768px) {
    bottom: 0;
    position: fixed;
    width: 100%;
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-right: 20px;
  // background-color: #F4F4F4;
  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  
  // background-color: #F4F4F4;
  back
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
    // background-color: #F4F4F4;
  }
`;