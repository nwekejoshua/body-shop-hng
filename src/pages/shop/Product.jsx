import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import toast from "react-hot-toast";


function Product(props) {
  const { id, productName, price, productImage, rating } = props.data;
  const formattedNumber = new Intl.NumberFormat('en-US').format(price);


  const { addToCart } = useContext(ShopContext);
  const [isAdded, setIsAdded] = useState(false);


  const handleAddToCart = () => {
    addToCart(id); // Call the addToCart function from context
    toast.success('Added to Cart!')

    // Toggle the text to 'Added to Cart' and reset after a delay
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000); // Reset after 2 seconds (example)
  };

  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className="text-[#C80001] text-[22px] flex">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="text-[#C80001] text-[22px] flex">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="text-[#C80001] text-[22px] flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="text-[#C80001] text-[22px] flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="text-[#C80001] text-[22px] flex">
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
    <div className="bg-[#D2D3CD] rounded-[12px] lg:hover:scale-110 transition ease-in-out duration-300">
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
          <p>₦{formattedNumber}</p>
        </div>
        <div className="flex justify-between">
          <div>{generateRating(rating)}</div>
          <p onClick={handleAddToCart} className="cursor-pointer text-[#F08000] hover:text-[#C80001] text-[12px]">
      {isAdded ? 'Added to Cart' : 'Add to Cart'}
    </p>          
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
