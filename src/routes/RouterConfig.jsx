import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Listing from "../components/listing/Listing";
import Footer from "../components/footer/Footer";
import About from "../pages/about/About";
import NotFount from "../components/notFound/NotFount";
import Details from "../pages/details/Details";
import axios from "axios";

const RouterConfig = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData("http://localhost:3000/productData");
  }, []);

  const getData = async (url) => {
    try {
      await axios.get(url).then((res) => {
        // console.log(res.data);
        setProductData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    productData.length !== 0 && (
      <BrowserRouter>
        <Header data={productData} />
        <Routes>
          <Route exact={true} path="/" element={<Home  data={productData}/>} />
          <Route
            exact={true}
            path="/cat/:id"
            element={<Listing data={productData} single={true} />}
          />
          <Route
            exact={true}
            path="/cat/:id/:id"
            element={<Listing data={productData} single={false} />}
          />
          <Route exact={true} path="/about" element={<About />} />
          <Route exact={true} path="/product/details" element={<Details />} />
          <Route exact={true} path="/404" element={<NotFount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  );
};

export default RouterConfig;
