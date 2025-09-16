import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/common/Home";
import Shop from "./components/common/Shop";
import Product from "./components/common/Product";
import Cart from "./components/common/Cart";
import Checkout from "./components/common/Checkout";
import Login from "./components/admin/Login";
import Dashboard from "./components/admin/Dashboard";
import { ToastContainer, toast } from 'react-toastify';
import { AdminRequireAuth } from "./components/admin/AdminRequireAuth";


function App() {
  return (
    <>
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={
          <AdminRequireAuth>
            <Dashboard />
          </AdminRequireAuth>
        } />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
