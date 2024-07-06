import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import  Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';


function App() {
  return (
    <div className='px-20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wears' />
          <Route path='/shoes' />
          <Route path='/bags' />
          <Route path='/accesories' />
        </Routes>
      </Router>
    </div>
  );
}

export default App
