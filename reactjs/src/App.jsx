import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/custom.scss';
import { Navbar } from './components/navbar/navbar';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Banner from './components/banner/banner';
import Error from './components/Error404/error';
import ItemDetailContainer from './components/itemdetailcontainer/itemdetailcontainer';
import { CartProvider } from './context/context';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import Nosotros from './components/nosotros/nosotros';
import Footer from './components/footer/footer';



function App() {
    return (
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/productos/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <FooterRenderer />
        </BrowserRouter>
      </CartProvider>
    );
  }
  
  function FooterRenderer() {
    const location = useLocation();
    const shouldShowFooter = location.pathname === '/' || location.pathname === '/nosotros';
  
    return shouldShowFooter ? <Footer /> : null;
  }
  
  export default App;
