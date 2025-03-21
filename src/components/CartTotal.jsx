import Link from "next/link";
import { CountContext } from "../context/CountContext";
import { useContext } from "react";
import { TbCurrencyNaira } from "react-icons/tb";

export default function CartTotal() {
  const { cart } = useContext(CountContext);


  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex items-end flex-col">
      <h1 className="text-background font-bold text-2xl">Cart Summary</h1>
      <div className="flex items-center gap-28 text-textColors mt-6 mb-12">
        <p>Item's total:</p>
        <div className="flex items-center">
          <p className="text-xl">
            <TbCurrencyNaira />
          </p>
          <p>{totalPrice.toFixed(2)}</p>{" "}
        </div>
        {/* To ensure the price is shown with two decimal points */}
      </div>
      <div className="flex items-center gap-28">
        <Link href="/signIn" className="uppercase bg-background text-white py-4 px-10 rounded-full font-semibold flex items-center mb-14">
          CheckOut(<TbCurrencyNaira className="text-xl" />{totalPrice.toFixed(2)})
        </Link>
      </div>
    </div>
  );
}
