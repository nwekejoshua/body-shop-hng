import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="bg-primary-300 ">
      <div className="">
      <div className="flex flex-col items-center ">
        <h1 className="text-[28px] md:text-[36px] font-bold text-center -mt-[55vh]">Shopping Cart</h1>
        <p className="text-[20px] mt-3 font-normal">Clear Out your Cart</p>
      </div>
      <div className="-mt-[40vh]  px-20 pt-16 grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20  xl:gap-y-10">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={index} />;
          }
        })}
      </div>
      </div>
    </div>
  );
}

export default Cart;
