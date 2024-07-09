import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
    const navigate = useNavigate();


  return (
        <div className="-mt-[60vh]">
        <h1 className="text-[25px] md:text-[27px] font-bold text-center pt-5   bg-white">Checkout</h1>
    <div className="md:flex bg-white p-5 md:px-20 justify-around font-inter ">
      <div className="w-full md:w-1/2">
      <div>
          <p className="font-semibold text-xl mb-2">Contact Information</p>
          <div className="mb-4">
            <p className="mb-2">Name</p>
            <input
              className="border-gray-300 rounded-md border-2 p-2 w-full h-12"
              type="text"
              placeholder="John Doe"
              name="name"
            />
          </div>
          <div className="flex mb-4 space-x-4">
            <div className="w-1/2">
              <p className="mb-2">Phone Number</p>
              <input
                className="border-gray-300 rounded-md border-2 p-2 w-full h-12"
                type="text"
                placeholder="08123457892"
                name="phone"
              />
            </div>
            <div className="w-1/2">
              <p className="mb-2">Email</p>
              <input
                className="border-gray-300 rounded-md border-2 p-2 w-full h-12"
                type="text"
                placeholder="john.doe@example.com"
                name="email"
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="mb-2">Address</p>
            <input
              className="border-gray-300 rounded-md border-2 p-2 w-full h-12"
              type="text"
              placeholder="6391 Elgin St. Celina, Delaware 10299"
              name="address"
            />
          </div>
          
        </div>
        <div className="border-t-2 border-b-2 py-4 mb-4">
          <p className="font-semibold text-lg mb-2">Shipping Method</p>
          <div>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio text-orange-500" name="shipping"  />
              <span className="ml-2">Free Regular Shipping</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio text-orange-500" name="paidshipping" />
              <span className="ml-2">Paid Shipping</span>
            </label>
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl mb-2">Payment Details</p>
          <div className="mb-4">
            <p className="mb-2">Card Name</p>
            <input
              className="border-gray-300 rounded-md border-2 p-2 w-full h-12"
              type="text"
              placeholder="John Doe"
              name="name"
            />
          </div>
          <div className="mb-4">
            <p className="mb-2">Card Number</p>
            <input
              className="border-gray-300 rounded-md border-2 p-2 w-full h-12"
              type="text"
              placeholder="0000 0000 0000 0000"
              name="cardnumber"
            />
          </div>
          <div className="flex mb-4 space-x-4">
            <div className="w-1/2">
              <p className="mb-2">Expiry Date</p>
              <input
                className="border-gray-300 rounded-md border-2 p-2 w-full h-12"
                type="text"
                placeholder="mm/dd/yy"
                name="date"
              />
            </div>
            <div className="w-1/2">
              <p className="mb-2">CVV</p>
              <input
                className="border-gray-300 rounded-md border-2 p-2 w-full h-12"
                type="text"
                placeholder="123"
                name="cvv"
              />
            </div>
          </div>
        </div>
        <button onClick={() => {
            toast.success('Order Received Successfully!');
            setTimeout(() => {
                toast.success('Returning To Home Page!');
            }, 1000);

            setTimeout(() => {
                navigate("/");
              }, 2000);
            
}} className="bg-orange-500 text-white w-full py-3 rounded-lg text-center md:mb-4 font-semibold">
          Proceed to Pay
        </button>
      </div>
      <div className="w-full md:w-1/3 mt-10 md:mt-[68px] mx-auto  max-w-[408px] ">
        <div className="bg-white border-gray-300 border-[1px]  p-6 rounded-lg space-y-10">
            <div>
                <h1 className="font-semibold text-[22px]">Order Summary</h1>
            </div>
          <div className="flex justify-between mb-4 ">
            <p>Price of Items</p>
            <p>₦40,000</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Discount</p>
            <p>₦0,000</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>VAT</p>
            <p>₦0,000</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Shipping</p>
            <p className="text-[#F08000]">Free</p>
          </div>
          <div className="flex justify-between font-semibold text-xl">
            <p>Total</p>
            <p>₦40,000</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Checkout;
