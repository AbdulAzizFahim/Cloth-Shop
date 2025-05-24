import Navbar from "../ui/Navbar";
import NavFunctions from "../ui/Navfunctions";
import ShopName from "../ui/ShopName";

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <ShopName />
        <Navbar />
        <NavFunctions />
      </div>
    </header>
  );
}
