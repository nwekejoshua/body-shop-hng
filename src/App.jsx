import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import  ShopContextProvider  from "./context/shop-context";
import Footer from "./components/Footer";
import Shoes from "./pages/shoes/Shoes";
import Wears from "./pages/wears/Wears";
import Checkout from "./pages/checkout/Checkout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Toaster
  position="top-center"
  reverseOrder={false}
/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wears" element={<Wears />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/bags" element={<Wears />} />
            <Route path="/accesories" element={<Wears />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
