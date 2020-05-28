import styled from 'styled-components';

export const Header = styled.header`
  padding: 0 auto;
  text-align: center;
  background-color: #008aff;
  color: white;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
`;

export const A = styled.a`
  position: relative;
  margin: 20px auto;
  padding-bottom: 8px;
  text-decoration: none;
  outline: none;
  text-transform: uppercase;
  color: #fff;
  font-family: poppins, sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  transition: color 300ms linear;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    border-radius: 4px;
    background-color: #ff9c8e;
    width: 0;
    transition: width 0.1s linear;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
  &:focus:after {
    width: 100%;
    left: 0;
  }
`;
export const H1 = styled.h1`
  margin: 0 auto;
  font-family: poppins, sans-serif;
`;

export const P = styled.p`
  font-family: poppins, sans-serif;
`;

export const Main = styled.main`
  padding: 35px 85px;
`;
