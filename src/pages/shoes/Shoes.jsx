import { MdKeyboardArrowDown } from "react-icons/md"; 
import { BsFilterLeft } from "react-icons/bs"; 
import { PRODUCTS } from "../../products";
import Product from "../shop/Product";

function Shoes() {
  return (
    <div className="bg-white md:px-20 px-4 py-5   font-inter">
        

      <div className="-mt-[70vh]">
      <div className="flex flex-col items-center ">
        <h1 className="text-[28px] font-bold text-center ">Shoes</h1>
        <p className="text-[16px] mt-3 font-normal">Explore our range of footwears</p>
      </div>

      <div className="flex justify-between items-center py-3 ">
        <div className="bg-[#F08000] p-2 rounded-lg flex gap-2 items-center text-white">
            <BsFilterLeft />
            <p>Filter</p>
        </div>
        <div className="flex gap-2 items-center bg-[#F08000] text-white p-2 rounded-lg"> 
            <p>Sort By</p>
            <MdKeyboardArrowDown />
        </div>
      </div>

      <div className="px-2 pt-16 grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20  xl:gap-y-10">
        {PRODUCTS.map((product, index) => (
            <Product data={product} key={index} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Shoes;
