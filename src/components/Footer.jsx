import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-[#C80001] text-white font-space font-normal ">
      <div className="px-20 py-20">
        <div className=" lg:flex justify-between mx-auto">
          <div className="text-center">
            <div className="font-space  text-white text-[34px] ">Body Shop</div>
            <div className="flex text-[#C80001] gap-5 py-[32px] justify-center">
              <BsFacebook className="bg-white rounded-3xl p-[10px]" size={40} />
              <BsInstagram
                className="bg-white  rounded-3xl p-[10px]"
                size={40}
              />
              <BsTwitter className="bg-white rounded-3xl p-[10px]" size={40} />
            </div>
          </div>
          <div className="flex flex-col  gap-y-2 justify-between">
            <p className=" font-normal text-[24px] ">Contact Us</p>
            <div className="flex gap-2 items-center text-[16px]">
              <FiMapPin size={20}/>
              <p> 2, Ilerin Street, Lagos, Nigeria</p>
            </div>
            <div className="flex gap-2 items-center text-[16px]">
              <AiOutlineMail size={20} />
              <p>info@bodyshop.org </p>
            </div>
            <div className="flex gap-2 items-center text-[16px]">
              <AiOutlinePhone size={20} />
              <p> 08141552442</p>
            </div>
          </div>
          <div className="">
            <p className="text-[24px] font-normal ">Subscribe to our newsletter</p>
            <p className="py-5">Enter your email for more updates</p>
            <input
              className="border-white border-[1px] p-2 px-4 bg-white placeholder:text-[#C80001] w-[100%]  rounded-md h-[50px]"
              type="text"
              placeholder="Enter your Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
