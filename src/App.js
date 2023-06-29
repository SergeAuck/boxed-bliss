import logo from "./assets/Logo-bb.png";
import { Navbar, Sidebar, Footer } from "./components/";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Cart,
  Error,
  Products,
  SingleProduct,
  Checkout,
  Home,
  PrivateRoute,
} from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
