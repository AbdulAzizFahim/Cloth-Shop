const navbarItems = [
  { id: 1, value: "Shop" },
  { id: 2, value: "On Sale" },
  { id: 3, value: "New Arrivals" },
  { id: 4, value: "Brands" },
];

export default function Navbar() {
  return (
    <nav className="hidden md:flex space-x-6">
      {navbarItems.map((item) => {
        return (
          <a
            key={item.id}
            href="#"
            className="hover:text-gray-500 transition-colors"
          >
            {item.value}
          </a>
        );
      })}
    </nav>
  );
}
