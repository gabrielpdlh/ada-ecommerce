import { Product } from "../../data/products";

// Estado inicial e tipagem
interface CartState {
  cart: Product[]
}

const initialState: CartState = {
  cart: [],
}

// Tipagem das ações
type CartAction =
  | { type: 'cart/add-product', payload: Product }
  | { type: 'cart/remove-product', payload: Product }

// Função reducer
export function cartReducer(state = initialState, action: CartAction): CartState {
  switch (action.type) {
    case 'cart/add-product':
      return {
        ...state,
        cart: [...state.cart, action.payload] // Adiciona produto ao carrinho
      }
      
    case 'cart/remove-product':
      // Verificação para evitar problemas com `undefined`
      if (!action.payload || !action.payload.id) {
        return state; // Retorna o estado atual caso o payload seja inválido
      }

      // Filtra o produto que será removido
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(product => product.id !== productToRemove.id);

      return {
        ...state,
        cart: cartFiltered,
      }
      
    default:
      return state;
  }
}
