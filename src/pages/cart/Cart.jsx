import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <div className="bg-white font-inter">
      <div className="">
      <div className="flex flex-col px-20">
        <h1 className="text-[28px] md:text-[32px] font-bold  -mt-[55vh]">Shopping Cart</h1>
        <p className="text-[16px] mt-3 font-normal">You have four Items in your cart</p>
      </div>
      <div className="-mt-[40vh]  md:px-20 px-3 pt-16 ">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={index} />;
          }
        })}
      </div>
      </div>

      <div className="flex justify-around">
        <div className="flex gap-x-4 text-[22px] font-semibold">
        <p>Total</p>
        <p>$40,0000</p>
        </div>
      </div>

      <div className="flex justify-around gap-x-3 py-3">
        <div className=" text-[#F08000] rounded-md p-3 cursor-pointer" onClick={() => navigate("/")}>Continue Shopping</div>
        <div className="bg-[#F08000]  text-center text-white  p-3 cursor-pointer">Checkout</div>
      </div>
    </div>
  );
}

export default Cart;
