import { ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined } from "@mui/icons-material"
import styled from "styled-components"

function Product({item}) {
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
        
    </Container>
  )
}

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px
    `
const Circle = styled.div`

`  
const Image = styled.img`
    height: 75%

` 
const Info = styled.div`

` 
const Icon = styled.div`

`   
export default Product