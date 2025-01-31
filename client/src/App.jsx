import Buynow from "./components/Buynow/Buynow";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Maincomp from "./components/home/Maincomp";
import Newnav from "./components/newnavbar/Newnav";
import Sign_in from "./components/signup_sign/Sign_in";
import SignUp from "./components/signup_sign/SignUp";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<Sign_in />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
