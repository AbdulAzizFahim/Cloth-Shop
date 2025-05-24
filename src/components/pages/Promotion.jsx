const promotionData = {
  msg: "Sign up and get 20% off to your first order.",
  actionMsg: "Sign Up Now",
};

export default function Promotion() {
  return (
    <div className="bg-black text-white py-2 px-4 text-center text-sm relative">
      <p>
        {promotionData.msg}
        <a href="#" className="underline font-medium">
          {promotionData.actionMsg}
        </a>
      </p>
      <button className="absolute right-4 top-2 text-white">×</button>
    </div>
  );
}
