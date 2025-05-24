import Header from "./components/pages/Header";
import MainContent from "./components/pages/MainContent";
import Newsletter from "./components/pages/Newsletter";
import Promotion from "./components/pages/Promotion";
import Footer from "./components/pages/Footer";
import { useImmerReducer } from "use-immer";
import { CartReducer } from "./reducers/CartReducer";
import productData from "./data/productData";
import { CartContext } from "./contexts/CartContext";

export default function App() {
  const [state, dispatch] = useImmerReducer(CartReducer, {
    products: [...productData],
    carts: [],
    searchText: "",
  });

  return (
    <>
      <Promotion />
      <CartContext.Provider value={[state, dispatch]}>
        <Header />
        <MainContent />
      </CartContext.Provider>
      <Newsletter />
      <Footer />
    </>
  );
}
