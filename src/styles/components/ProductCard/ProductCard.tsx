import { FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";

export const ProductCard: React.FC = () => {
  return (
    <S.Card>
      <S.ProductImage
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />

      <S.ProductTitle>Título</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>4.1</S.Review>
        <S.Price>$22,4</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCartButtonWrapper>
        <S.AddToCartButton>
          Adicionar ao Carrinho
          <FiShoppingCart />
        </S.AddToCartButton>
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};
