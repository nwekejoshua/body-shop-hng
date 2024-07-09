import { useState, useEffect, useRef } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="pt-6 pb-3 px-10 md:px-20 bg-white bg-opacity-50 bg-cover bg-center h-[80vh] bg-no-repeat bg-[url('./assets/imagebg.png')]">
      <div className="flex justify-between items-center border-b border-primary-50 pb-5">
        <div className="font-normal font-space text-[20px] lg:text-3xl text-center pb-4 sm:pb-0 text-primary-50">
          <Link to="/">Body Shop</Link>
        </div>

        <div className="hidden lg:flex gap-[20px] text-black font-normal text-[17px]">
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
            <div className="hover:text-primary-50 cursor-pointer">Accessories</div>
          </Link>
        </div>

        <div className="hidden md:flex text-white place-items-center gap-4">
          <div className="w-full sm:w-[300px] md:w-[100%] relative">
            <input
              className="border-primary-50 bg-transparent border-[2px] text-black p-2 px-4 rounded-full w-[257px] h-[39px]"
              type="text"
              placeholder=""
              name='search'
            />
            <BsSearch
              className="absolute right-0 top-0 mr-3 mt-3 text-primary-50"
              size={16}
            />
          </div>

          {/* <div className="relative">
            <FiHeart className="bg-primary-50 rounded-3xl p-[10px]" size={40} />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              1
            </div>
          </div> */}

          <div className="relative">
            <Link to="/cart">
              <FaShoppingCart className="bg-primary-50 rounded-3xl p-[10px]" size={40} />
            </Link>
            <div className="bg-[#F08000] rounded-full absolute top-0 right-0 w-[15px] h-[15px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              
            </div>
          </div>
        </div>

        <div className="flex gap-x-3">
          <button onClick={toggleMobileMenu} className="lg:hidden rounded-lg text-primary-50 focus:ring-1">
            <RxHamburgerMenu size={25} />
          </button>
          <div className="relative md:hidden">
            <Link to="/cart">
              <FaShoppingCart className="bg-primary-50 rounded-3xl p-[10px] text-white" size={40} />
            </Link>
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              3
            </div>
          </div>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className={`lg:hidden absolute top-0 left-0 w-full bg-white p-4 z-50 shadow-md transition-transform transform ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-8 text-black font-normal text-[20px] lg:text-[17px] ">
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
            <div className="hover:text-primary-50 cursor-pointer">Accessories</div>
          </Link>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="mt-4 text-primary-50 hover:text-primary-100 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Navbar;
