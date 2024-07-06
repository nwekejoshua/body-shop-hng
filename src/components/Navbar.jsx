import { FiHeart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" py-6 px-2 ">
      <div className="sm:flex justify-around items-center border-b border-primary-50 pb-5">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-primary-50">
          <Link to="/"> Body Shop </Link>
        </div>

        <div className="hidden lg:flex gap-[50px] text-black font-normal text-[16px]">
          <Link to="/">
            <div className="hover:text-primary-50 cursor-pointer">Home</div>
          </Link>
          <Link to="wears">
            <div className="hover:text-primary-50 cursor-pointer">Wears</div>
          </Link>
          <Link to="shoes">
            <div className="hover:text-primary-50 cursor-pointer">Shoes</div>
          </Link>
          <Link to="bags">
            <div className="hover:text-primary-50 cursor-pointer">Bags</div>
          </Link>
          <Link to="accesories">
            <div className="hover:text-primary-50 cursor-pointer">Accesories</div>
          </Link>

        </div>

        <div className="hidden lg:flex text-primary-50 place-items-center  gap-4">
          <div className="w-full sm:w-[300px] md:w-[100%] relative">
            <input
              className="border-primary-50 border-[2px] p-2 px-4 rounded-full w-[257px] h-[39px]"
              type="text"
              placeholder=""
            />
            <BsSearch
              className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
              size={16}
            />
          </div>

          <div className="relative text-[30px]">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

          <div className="relative text-[30px]">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
