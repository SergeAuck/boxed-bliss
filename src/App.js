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
  AuthWrapper,
} from "./pages/";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
