import ProductOptions from "../ui/ProductOptions";
import Products from "./Products";
import OrderSummary from "../ui/OrderSummary";
import Carts from "./Carts";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function MainContent() {
  const [data] = useContext(CartContext);

  return (
    <>
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductOptions />
            <Products />
          </div>
          {data.carts.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
                <Carts />
                <OrderSummary />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
