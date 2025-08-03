import React from 'react'
import RegisterForm  from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import StoreList from "../components/StoreList";
import ProductForm from "../components/ProductForm";
import { Route,Routes, BrowserRouter,Link } from "react-router-dom"; 
import Home from '../components/Home';

const AllRoute = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={< Home />}></Route>  
      <Route path="/register" element={< RegisterForm />}></Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/stores" element={<StoreList />}></Route>
      <Route path="/add-product" element={<ProductForm />}></Route>
      <Route path="/loginForm" element={<LoginForm />}></Route>
      <Route path="/registerForm" element={<RegisterForm />}></Route>
    </Routes>
    </div>
  )
}

export default AllRoute
