import { ProductCard } from "../ProductCard/ProductCard";
import {products} from "../../../data/products"

import * as S from "./styles";

export const ProductsList: React.FC = () => {
  return (
    <div>
      <S.Container>
        { products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </S.Container>
    </div>
  );
};
