
const Checkout = () => {
  return (
    <div className="md:flex bg-white p-10 justify-around font-inter -mt-[60vh]">
      <div className="w-full md:w-1/2">
        <h1 className="font-semibold text-3xl mb-4">Checkout</h1>
        <p className="font-semibold text-xl mb-2">Shipping Address</p>
        <div className="font-normal text-lg mb-4 flex justify-between">
          <p>10, Gbeleyi Street, off Pipeline<br /> bus-stop, Lagos State, Nigeria</p>
          <p className="text-orange-500 cursor-pointer">Edit</p>
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
              <input type="radio" className="form-radio text-orange-500" name="shipping" />
              <span className="ml-2">Paid Shipping</span>
            </label>
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl mb-2">Payment Details</p>
          <div className="mb-4">
            <p className="mb-2">Card Name</p>
            <input
              className="border-gray-300 border-2 p-2 w-full h-12"
              type="text"
              placeholder="John Doe"
              name="name"
            />
          </div>
          <div className="mb-4">
            <p className="mb-2">Card Number</p>
            <input
              className="border-gray-300 border-2 p-2 w-full h-12"
              type="text"
              placeholder="0000 0000 0000 0000"
              name="cardnumber"
            />
          </div>
          <div className="flex mb-4 space-x-4">
            <div className="w-1/2">
              <p className="mb-2">Expiry Date</p>
              <input
                className="border-gray-300 border-2 p-2 w-full h-12"
                type="text"
                placeholder="mm/dd/yy"
                name="dateCard"
              />
            </div>
            <div className="w-1/2">
              <p className="mb-2">CVV</p>
              <input
                className="border-gray-300 border-2 p-2 w-full h-12"
                type="text"
                placeholder="123"
                name="cvv"
              />
            </div>
          </div>
        </div>
        <button className="bg-orange-500 text-white w-full py-3 rounded-lg text-center font-semibold">
          Continue
        </button>
      </div>
      <div className="w-full md:w-1/3 mt-10 md:mt-0 ">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-10">
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
            <p>Free</p>
          </div>
          <div className="flex justify-between font-semibold text-xl">
            <p>Total</p>
            <p>₦40,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
