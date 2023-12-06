'use client'
import styled from 'styled-components'

 interface ProductsProps {

 }

 const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
 `

 export default function Product(props: ProductsProps){
  return (
    <Container>
      <button>voltar</button>  
      <section>info </section>
    </Container>
  )
 }