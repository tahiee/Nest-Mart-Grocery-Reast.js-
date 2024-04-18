import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../components/header/Header'
import Home from '../pages/home/Home'
import About from '../pages/about/About'

const RouterConfig = () => {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>

  );
};

export default RouterConfig;
