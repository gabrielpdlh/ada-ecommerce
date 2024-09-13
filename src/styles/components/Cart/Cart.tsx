import * as S from './styles'

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({
  showCart
}) => {
  return(
    <S.Container showCart={showCart}>
      <S.Tile>Carrinho</S.Tile>
    </S.Container>
  )
}