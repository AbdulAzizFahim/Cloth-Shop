import { useContext } from "react";
import BagSvg from "../svg/BagSvg";
import ProfileSvg from "../svg/ProfileSvg";
import SearchSvg from "../svg/SearchSvg";
import { CartContext } from "../../contexts/CartContext";

export default function NavFunctions() {
  const [data, dispatch] = useContext(CartContext);

  const handleSearchOnChange = (text) => {
    dispatch({ type: "Searchbar", payload: text });
  };
  return (
    <div className="flex items-center space-x-4">
      <div className="relative hidden md:block w-64">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
          value={data.searchText}
          onChange={(e) => {
            handleSearchOnChange(e.target.value);
          }}
        />
        <span className="absolute right-3 top-2">
          <SearchSvg />
        </span>
      </div>
      <BagSvg />
      <ProfileSvg />
    </div>
  );
}
