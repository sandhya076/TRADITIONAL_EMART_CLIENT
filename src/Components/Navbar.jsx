import React from "react";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


  const Container = styled.div`
    height: 70px;
    background-color: white;
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
  `;
  const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
  `;
  const Input = styled.input`
    border: none;
  `;
  const Center = styled.div`
    flex: 1;
  `;
  const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: flex-end;
  `;
  const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
  `;
  function Navbar() {
    const quantity = useSelector(state=>state.cart.quantity)
    console.log(quantity)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search
              style={{
                color: "gray",
                fontSize: "16px",
              }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>TRADITIONAL EMART</Logo>
        </Center>
        <Right>
         <Link to = "/register"> <MenuItems>REGISTER</MenuItems></Link>
          
          <Link to = "/login"><MenuItems>LOGIN</MenuItems></Link>
          <Link to = "/cart">
          
          <MenuItems>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItems>
          </Link>
          
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
