import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import Cart from "../ui/Cart";
import CartImage from "../ui/CartImage";

export default function Carts() {
  const [data] = useContext(CartContext);
  return data.carts.map((cart) => (
    <div
      className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
      key={cart.id}
    >
      <CartImage cart={cart} />
      <Cart cart={cart} />
    </div>
  ));
}
