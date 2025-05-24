import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Cart({ cart }) {
  const [_, dispatch] = useContext(CartContext);
  const { id, name, size, color, price, quantity } = cart;

  const handleAddSingleItemInCart = () => {
    dispatch({ type: "AddSingleItemInCart", payload: id });
  };

  const handleRemoveSingleItemInCart = () => {
    dispatch({ type: "RemoveSingleItemFromCart", payload: id });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: "RemoveFromCart", payload: id });
  };
  return (
    <div className="flex-grow">
      <div className="flex justify-between">
        <h3 className="font-medium">{name}</h3>
        <span className="text-red-500 text-sm" onClick={handleRemoveFromCart}>
          ×
        </span>
      </div>
      <p className="text-sm text-gray-500">{size}</p>
      <p className="text-sm text-gray-500">{color}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="font-bold">{price}</p>
        <div className="flex items-center space-x-2">
          <button
            className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
            onClick={handleRemoveSingleItemInCart}
          >
            −
          </button>
          <span className="text-sm">{quantity}</span>
          <button
            className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
            onClick={handleAddSingleItemInCart}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
