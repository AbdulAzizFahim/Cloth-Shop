import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const options = [
  { id: 1, text: "Newest" },
  { id: 2, text: "Most Popular" },
  { id: 3, text: "Price: Low to High" },
  { id: 4, text: "Price: High to Low" },
];

export default function ProductOptions() {
  const [_, dispatch] = useContext(CartContext);

  const handleOptionChange = (option) => {
    switch (option) {
      case "Most Popular":
      case "Newest":
      case "Price: Low to High":
      case "Price: High to Low": {
        dispatch({ type: "Sort", payload: option });
        break;
      }
      default: {
        new Error("Error in Product Options");
      }
    }
  };
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">Your Products</h2>
      <div className="flex items-center space-x-2">
        <span className="text-sm">Sort by:</span>
        <select
          className="border rounded-md px-2 py-1 text-sm"
          onChange={(e) => {
            handleOptionChange(e.target.value);
          }}
        >
          {options.map((option) => (
            <option key={option.id} value={option.text}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
