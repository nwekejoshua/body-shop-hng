import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function Product(props) {
  const { productName, price, productImage, rating } = props.data;
  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className="text-primary-50 text-[24px] flex">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="text-primary-50 text-[24px] flex">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="text-primary-50 text-[24px] flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="text-primary-50 text-[24px] flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="text-primary-50 text-[24px] flex">
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
    <div className=" rounded-xl max-w-[400px] lg:hover:scale-110 transition ease-in-out duration-300">
      <div>
        <img src={productImage} alt={productName} className="bg-primary-500"/>
      </div>
      <div className="space-y-2 py-5">
        <div className="flex justify-between font-semibold">
          <h2>{productName}</h2>
          <p>₦{price}</p>
        </div>
        <div className="flex justify-between">
          <div>{generateRating(rating)}</div>
          <p>Add to Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
