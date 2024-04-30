import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../components/header/Header'
import Home from '../pages/home/Home'
import Listing from "../components/listing/Listing";
import Footer from "../components/footer/Footer";
import About from '../pages/about/About'
import NotFount from "../components/notFound/NotFount";
import Details from "../pages/details/Details";

const RouterConfig = () => {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact={true} path='/' element={<Home/>}/>
          <Route exact={true} path='/listing' element={<Listing/>}/>
          <Route exact={true} path='/about' element={<About/>}/>
          <Route exact={true} path='/details' element={<Details/>}/>
          <Route exact={true} path='/404' element={<NotFount/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

  );
};

export default RouterConfig;
