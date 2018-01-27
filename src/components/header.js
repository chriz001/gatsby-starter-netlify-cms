import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Header = styled.div`
  display: flex;
  padding: 25px;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: block;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  border-bottom: 0;
  font-weight: 500;
  padding: 8px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const NavItem = styled(Link)`
  color: ${props => props.theme.colors.text};
  border-bottom: 0;
  padding: 8px;
  &:hover {
    color: ${props => props.theme.colors.textHover};
  }
`;

export default () => (
  <Header>
    <Logo to="/">Logo</Logo>
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about/">About</NavItem>
      <NavItem to="/products/">Products</NavItem>
    </Nav>
  </Header>
);
