import { CiShoppingBasket } from "react-icons/ci";
import { AiOutlineSearch  } from "react-icons/ai";
import {HiOutlineShoppingCart} from "react-icons/hi"
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive"

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <AiOutlineSearch  />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>AA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <CiShoppingBasket  >
              <HiOutlineShoppingCart />
            </CiShoppingBasket>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  padding-bottom: 15px;
  ${mobile({height: "50px"})}
  
  `

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
   ${mobile({ padding: "10px 0px" })}
  
 
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
 
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
 
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}`
 
export default Navbar;