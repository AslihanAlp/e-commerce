import {IoMdSend} from "react-icons/io"
import styled from "styled-components"
import { mobile } from "../responsive";

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your e-mail"/>
            <Button>
                <IoMdSend />
            </Button>
        </InputContainer>
    </Container>
  )
}

const Container = styled.div `
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`
const Title = styled.h1 `
    font-size: 70px;
    margin-bottom: 20px
`
const Description = styled.div `
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 300;
    ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div `
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`
const Input = styled.input `
    border: none;
    flex:8;
    padding-left: 20px
`
const Button = styled.button `
    flex:1;
    border: none;
    background-color: teal;
    color: white
`
export default Newsletter