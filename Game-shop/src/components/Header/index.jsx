import React, { useState } from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #03282F;
  padding: 20px;
  color: white;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #00FF7A;
  font-size: 1.5em;
  cursor: pointer;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  input {
    padding: 5px;
    border: none;
    border-radius: 3px;
    width: 300px;
    margin: 0 10px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #0D3840;
  padding: 5px;
  border-radius: 4px;
  border: none;
`;

const CartIcon = styled.div`
  color: #00FF7A;
  font-size: 1.5rem;
  margin-left: 10px;
`;

const MenuContainer = styled.div`
  text-align: center;
  background-color:  #03282F;
  color: white;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  padding: ${({ isOpen }) => (isOpen ? '10px 0' : '0')};

`;

const MenuItem = styled.a`
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: #00FF7A;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <HeaderContainer>
        <MenuButton onClick={toggleMenu}>
          <FaBars />
        </MenuButton>
        <SearchBar>
          <SearchInput type="text" placeholder="Busque seu jogo..." />
        </SearchBar>
        <CartIcon>
          <FaShoppingCart />
        </CartIcon>
      </HeaderContainer>
      <MenuContainer isOpen={isMenuOpen}>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">Dashboard</MenuItem>
        <MenuItem href="#">Agenda</MenuItem>
        <MenuItem href="#">Configurações</MenuItem>
        <MenuItem href="#">Conta</MenuItem>
      </MenuContainer>
    </>
  );
};

export default Header;
