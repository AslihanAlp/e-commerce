import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"

function Products({category,filter,sort}) {
  return (
    <Container>
       {popularProducts.map(item =>(
        <Product item={item} key={item.id}/>
       ))}
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: space-between;
    
`

export default Products