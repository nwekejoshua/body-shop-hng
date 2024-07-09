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

      <div className="flex justify-around items-center p-4">
      <button className="text-orange-500" onClick={() => navigate("/")}>Continue Shopping</button>
      <div className="text-right">
        <div className="mb-1 space-x-10">
          <span className="font-semibold">Subtotal</span> <span>₦40,000</span>
        </div>
        <div className="mb-1 space-x-20">
          <span className="font-semibold">V.A.T</span> <span>₦0.00</span>
        </div>
        <hr className="my-2" />
        <div className="mb-1 space-x-[60px]">
          <span className="font-semibold">Total</span> <span>₦40,000</span>
        </div>
        <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded" onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
    </div>
  );
}

export default Cart;
