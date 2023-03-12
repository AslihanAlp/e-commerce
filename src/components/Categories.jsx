import styled from "styled-components"
import {categories} from "../data"
import CategoryItem from "./CategoryItem"

function Categories() {
  return (
   <Container>
    {categories.map(item=>(
        <CategoryItem item ={item}/>
    ))}
   </Container>

  )
}

const Container = styled.div`
    display: flex;
    padding: 20px;
`
export default Categories