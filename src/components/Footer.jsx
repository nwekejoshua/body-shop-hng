import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
function Footer() {
  return (
    <div className="bg-primary-50 text-white font-space font-normal">
      <div className="px-20 py-20">
        <div className="lg:flex justify-between">
          <div className="">
            <div className="font-space  text-white text-[34px] ">Body Shop</div>
            <div className="flex text-primary-50 gap-5 py-[32px]">
              <BsFacebook className="bg-white rounded-3xl p-[10px]" size={40} />
              <BsInstagram
                className="bg-white  rounded-3xl p-[10px]"
                size={40}
              />
              <BsTwitter className="bg-white rounded-3xl p-[10px]" size={40} />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <p className=" font-normal text-[24px] ">Contact Us</p>
            <div className="flex gap-2 items-center text-[16px]">
              <FiMapPin size={20}/>
              <p> 2, Ilerin Stree, Lagos, Nigeria</p>
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
          <div>
            <p>Subscribe to our newsletter</p>
            <p>Enter your email for more updates</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
