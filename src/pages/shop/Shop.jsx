import { PRODUCTS } from "../../products";
import Product from "./Product";

function Shop() {
  return (
    <div className="bg-primary-300 md:px-20 px-4 py-5">
        

      <div className="flex flex-col items-center ">
        <h1 className="text-[28px] md:text-[36px] font-bold text-center">Shop From Body Shop</h1>
        <p className="text-[20px] mt-3 font-normal">Explore from our Catalog</p>
      </div>

      <div className="px-2 pt-16 grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20  xl:gap-y-10">
        {PRODUCTS.map((product, index) => (
            <Product data={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
