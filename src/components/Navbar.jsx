import { RxHamburgerMenu } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="pt-6 pb-3 px-10 md:px-20 bg-white ">
      <div className="flex justify-between items-center border-b border-primary-50 pb-5 ">
        <div className="font-normal font-space text-[20px] lg:text-3xl text-center pb-4 sm:pb-0 text-primary-50 ">
          <Link to="/"> Body Shop </Link>
        </div>

        <div className="hidden lg:flex gap-[20px] text-black font-normal text-[16px] ">
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
            <div className="hover:text-primary-50 cursor-pointer">
              Accesories
            </div>
          </Link>
        </div>

        <div className="hidden md:flex text-white  place-items-center  gap-4">
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

          <div className="relative ">
            <FiHeart className="bg-primary-50 rounded-3xl p-[10px]" size={40} />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

          <div className="relative">
            <Link to="/cart">
              <FaShoppingCart  className="bg-primary-50 rounded-3xl p-[10px]" size={40}/>
            </Link>
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>

        <div>
          <button className="lg:hidden rounded-lg hover:bg-primary-50 focus:ring-1 ">
            <RxHamburgerMenu size={25}/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
