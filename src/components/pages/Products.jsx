import { useContext } from "react";
import Product from "../ui/Product";
import { CartContext } from "../../contexts/CartContext";

export default function Products() {
  const [data] = useContext(CartContext);
  return (
    <div className="product-grid">
      {data.products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
}
