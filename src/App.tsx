import { Header } from "./styles/components/Header/Header";
import { ProductsList } from "./styles/components/ProductsList/ProductsList";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Header></Header>
      <ProductsList />
      <GlobalStyles />
    </>
  );
}

export default App;
