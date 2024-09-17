import { render } from "@testing-library/react";
import { Cart } from "./Cart";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Cart > Unit tests", () => {
  render(
    <Provider store={store}>
      <Cart showCart={true} />
    </Provider>
  );
});
