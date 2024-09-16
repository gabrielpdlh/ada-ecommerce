import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  padding: 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain;
`

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.rem;
  margin-top: 1rem;

  min-height: 3rem;
`

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 1rem;
`

export const Review = styled.span`
  display: flex;

  font-size: 0.7rem;

  svg {
    font-size: 1rem;
  }
`

export const Price = styled.strong``

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  margin-top: 1rem;
` 

export const AddToCartButton = styled.button`
border: none;
border-radius: 5px;
height:40px;
width: 100%;
background-color: blue;
color:white;
justify-content: center;

display: flex;
align-items: center;
gap: 0.3rem;
font-size: 0.8rem;
`