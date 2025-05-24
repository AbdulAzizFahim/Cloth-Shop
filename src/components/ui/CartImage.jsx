export default function CartImage({ cart }) {
  const { name, imgSrc } = cart;
  return (
    <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
      <img src={imgSrc} alt={name} className="h-full w-auto object-cover" />
    </div>
  );
}
