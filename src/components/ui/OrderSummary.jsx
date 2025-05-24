import { useContext } from "react";
import PriceSvg from "../svg/PriceSvg";
import { CartContext } from "../../contexts/CartContext";

export default function OrderSummary() {
  const [data] = useContext(CartContext);

  const price = data.carts.reduce(
    (prev, curr) => curr.price * curr.quantity + prev,
    0
  );
  
  const discountedPrice = (20 / 100) * price;
  const finalPrice = price - discountedPrice + 15;
  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${price}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Discount (-20%)</span>
          <span>-${discountedPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">$15</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>${finalPrice}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Add promo code"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm placeholder:pl-2"
          />
          <span className="absolute left-1 top-2.5">
            <PriceSvg />
          </span>
        </div>
        <button className="bg-black text-white rounded-md px-4 py-2 text-sm hover: cursor-pointer">
          Apply
        </button>
      </div>

      <a
        href="#"
        className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
      >
        Go to Checkout
        <span className="inline-block ml-2">→</span>
      </a>
    </div>
  );
}
