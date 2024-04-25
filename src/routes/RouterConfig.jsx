import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../components/header/Header'
import Home from '../pages/home/Home'
import Listing from "../components/listing/Listing";
import Footer from "../components/footer/Footer";
import About from '../pages/about/About'

const RouterConfig = () => {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact={true} path='/' element={<Home/>}/>
          <Route exact={true} path='/listing' element={<Listing/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

  );
};

export default RouterConfig;
