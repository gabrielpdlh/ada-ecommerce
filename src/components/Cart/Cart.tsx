import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";
import { CiSquareRemove } from "react-icons/ci";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Tile>Carrinho</S.Tile>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
            <button
              onClick={() =>
                dispatch({ type: "cart/remove-product", payload: product })
              }
            >{<CiSquareRemove />}</button>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>

      <S.CartTotal>TOTAL: ${total}</S.CartTotal>
    </S.Container>
  );
};
