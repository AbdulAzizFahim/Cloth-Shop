import BagSvg from "../svg/BagSvg";
import ProfileSvg from "../svg/ProfileSvg";
import SearchSvg from "../svg/SearchSvg";

export default function NavFunctions() {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative hidden md:block w-64">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
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
