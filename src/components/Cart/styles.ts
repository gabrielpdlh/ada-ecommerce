/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

interface ContainerProps {
  showCart: boolean;
}

// Define uma função para filtrar props válidas
const filterProps = (prop: string) => isPropValid(prop);

export const Container = styled('div', {
  shouldForwardProp: filterProps,
})<ContainerProps>`
  display: ${({ showCart }) => (showCart ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: ${({ showCart }) => (showCart ? '0' : '-350px')};
  
  width: 350px;
  background-color: white;
  height: 100vh;

  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: right 0.3s;
`;


export const Tile = styled.h1``

export const CartProductsList = styled.ul `
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CartProductItem = styled.li``

export const CartTotal = styled.strong``

