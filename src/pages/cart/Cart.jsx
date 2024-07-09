import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <div className="bg-white font-inter -mt-[60vh]">
      <div className="bg-white">
      <div className="flex flex-col items-center px-20 bg-white">
        <h1 className="text-[25px] md:text-[27px] font-bold pt-5">Shopping Cart</h1>
        <p className="text-[16px] mt-3 font-normal">You have four Items in your cart</p>
      </div>
      <div className=" md:px-20 px-3 pt-16 ">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={index} />;
          }
        })}
        
      </div>
      </div>


      <div className="px-5 md:w-2/3 mt-10 md:mt-[68px] mx-auto   ">
        <div className="bg-white border-gray-300 border-[1px]  p-6 rounded-lg font-semibold space-y-5">

          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p>₦40,000</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>V.A.T</p>
            <p>₦0.00</p>
          </div>
          <div className="flex justify-between font-semibold text-xl">
            <p>Total</p>
            <p>₦40,000</p>
          </div>
        </div>
      </div>


      <div className="flex flex-col item  md:flex-row justify-around md:items-center p-4 px-20 gap-y-3">
      <button className="text-orange-500 w-full md:w-[40%] border-orange-500 border rounded px-4 py-2" onClick={() => navigate("/")}>Continue Shopping</button>
      <button className="bg-orange-500 w-full md:w-[40%] text-white py-2 px-4 rounded" onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
    </div>
    </div>
  );
}

export default Cart;
