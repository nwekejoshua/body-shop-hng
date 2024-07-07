import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import PropTypes from 'prop-types';


function CartItem(props) {
    const { id, productName, price, productImage } = props.data;
    const { removeFromCart } = useContext(ShopContext);

    return (
        <div className="bg-primary-500 rounded-[12px] ">
      <div>
        <img
          src={productImage}
          alt={productName}
          className=" w-full rounded-xl"
        />
      </div>
      <div className="space-y-2 p-5 bg-white rounded-xl">
        <div className="flex justify-between font-semibold">
          <h2>{productName}</h2>
          <p>₦{price}</p>
        </div>
        <div className="">
          <p onClick={() => removeFromCart(id)} className="cursor-pointer hover:text-primary-50">Remove from Cart</p>
        </div>
      </div>
    </div>
    )


}

CartItem.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      productImage: PropTypes.string.isRequired,
    }).isRequired,
  };

export default CartItem
