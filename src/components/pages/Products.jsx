import { useContext } from "react";
import Product from "../ui/Product";
import { CartContext } from "../../contexts/CartContext";

export default function Products() {
  const [data] = useContext(CartContext);

  const productsToShow =
    data.searchText?.trim() !== ""
      ? data.products.filter((product) =>
          product.name.toLowerCase().includes(data.searchText.toLowerCase())
        )
      : data.products;

  const hasDataToShow = productsToShow && productsToShow.length > 0;

  return (
    <div className="product-grid">
      {hasDataToShow ? (
        productsToShow.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
}
