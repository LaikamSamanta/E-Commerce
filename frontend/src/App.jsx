import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/common/Home";
import Shop from "./components/common/Shop";
import Product from "./components/common/Product";
import Cart from "./components/common/Cart";
import Checkout from "./components/common/Checkout";
import Login from "./components/admin/Login";
import Dashboard from "./components/admin/Dashboard";
import { ToastContainer } from 'react-toastify';
import { AdminRequireAuth } from "./components/admin/AdminRequireAuth";
import { default as ShowCategories } from "./components/admin/category/Show";
import { default as CreateCategory } from "./components/admin/category/Create";
import { default as EditCategory } from "./components/admin/category/Edit";


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

        <Route path="/admin/categories" element={
          <AdminRequireAuth>
            <ShowCategories></ShowCategories>
          </AdminRequireAuth>
        } />

        <Route path="/admin/categories/create" element={
          <AdminRequireAuth>
            <CreateCategory></CreateCategory>
          </AdminRequireAuth>
        } />

        <Route path="/admin/categories/edit/:id" element={
          <AdminRequireAuth>
            <EditCategory></EditCategory>
          </AdminRequireAuth>
        } />

      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
