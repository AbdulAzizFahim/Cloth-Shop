import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Product({ productData }) {
  const [_, dispatch] = useContext(CartContext);
  const { id, imgSrc, name, numberOfStars, quantity, totalQuantity, price } =
    productData;

  const handleAddToCart = () => {
    dispatch({ type: "AddToCarts", payload: id });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: "RemoveFromCart", payload: id });
  };

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={imgSrc}
          alt="Gradient Graphic T-shirt"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
              {StartSpans(numberOfStars)}
              <span className="text-gray-300">★</span>
            </div>
            <span className="text-xs text-gray-500 ml-1">
              {numberOfStars}/5
            </span>
          </div>
          <span className="text-xs text-gray-700">({quantity} pcs left)</span>
        </div>
        <p className="font-bold">${price} </p>
        {quantity !== totalQuantity && (
          <button
            className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </button>
        )}

        {quantity == totalQuantity && (
          <button
            className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

function StartSpans(num) {
  const spans = [];
  for (let i = 0; i < num; i++) {
    spans.push(<span key={i}>★</span>);
  }
  return spans;
}
