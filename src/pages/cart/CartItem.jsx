import { AiOutlinePlusSquare } from "react-icons/ai"; 
import { AiOutlineMinusSquare } from "react-icons/ai"; 
import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const formattedNumber = new Intl.NumberFormat("en-US").format(price);
  const { removeFromCart } = useContext(ShopContext);

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    toast.error("Removed from Cart!")

  } 

  return (
    <div className="font-inter bg-white rounded-[12px] w-[80%] mx-auto border-gray-300 border-[1px]  p-2 md:flex items-center justify-between mb-3">
      <div className="flex">
        <img
          src={productImage}
          alt={productName}
          className="w-[131px] rounded-xl"
        />
        <div className="space-y-2 p-5 bg-white rounded-xl">
        <div className="flex flex-col justify-between font-semibold">
          <h2>{productName}</h2>
          <p className="text-[12px]">Comfortable and durable casual shoe</p>
        </div>
      </div>
      </div>
      
      <div className="flex items-center gap-x-2">
        <button><AiOutlineMinusSquare /></button>
        <p>3</p>
        <button><AiOutlinePlusSquare className="text-[#991E66]" /></button>
      </div>
      <div className="flex items-center font-bold">
        <p>₦{formattedNumber}</p>
      <div className="">
        <p
          onClick={handleRemoveFromCart}
          className="cursor-pointer hover:text-primary-50"
        >
          <MdDeleteForever size={32} />
        </p>
      </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
