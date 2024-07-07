import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import PropTypes from 'prop-types';


function Product(props) {
  const { id, productName, price, productImage, rating } = props.data;
  const { addToCart } = useContext(ShopContext);
  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className="text-primary-50 text-[22px] flex">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="text-primary-50 text-[22px] flex">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="text-primary-50 text-[22px] flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="text-primary-50 text-[22px] flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="text-primary-50 text-[22px] flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
    }
  };
  return (
    <div className="bg-primary-500 rounded-[12px] lg:hover:scale-110 transition ease-in-out duration-300">
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
        <div className="flex justify-between">
          <div>{generateRating(rating)}</div>
          <p onClick={() => addToCart(id)} className="cursor-pointer text-[#426B69] hover:text-primary-50 text-[12px]">Add to Cart</p>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      productImage: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Product;
