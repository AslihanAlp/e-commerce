import styled from "styled-components"
import {BsFacebook, BsInstagram, BsPinterest, BsTwitter} from "react-icons/bs"
import {FaMapMarkerAlt } from "react-icons/fa"
import {AiFillPhone, AiFillMail} from "react-icons/ai"
import { mobile } from "../responsive";

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AA.</Logo>
            <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus assumenda praesentium tempora molestias ad, non exercitationem natus ducimus quibusdam maxime.</Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <BsFacebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <BsInstagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <BsTwitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <BsPinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Wishlist</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <FaMapMarkerAlt style={{marginRight: "10px"}}/>Lorem ipsum dolor sit amet.
            </ContactItem>
            <ContactItem>
                <AiFillPhone style={{marginRight: "10px"}}/>+1 234 56 78
            </ContactItem>
            <ContactItem>
                <AiFillMail style={{marginRight: "10px"}}/>contact@gmail.com
            </ContactItem>
            <Payment src= "https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px
`
const Logo = styled.h1`
`
const Description = styled.p`
    margin: 20px 0px
`
const SocialContainer = styled.div`
    display: flex
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: #${props => props.color}
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ display: "none" })}
    
`
const Title = styled.h3`
    margin-bottom: 30px
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap:wrap


`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px

`
const Right = styled.div`
    flex:1;
    padding: 20px; 
    ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
    margin-bottom : 20px;
    display: flex;
    align-items: center
`
const Payment = styled.img`
    width: 50%
`

export default Footer;

