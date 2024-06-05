import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Listing from "../components/listing/Listing";
import Footer from "../components/footer/Footer";
import About from "../pages/about/About";
import NotFount from "../components/notFound/NotFount";
import Details from "../pages/details/Details";
import dbJson from "../../db.json";
import axios from "axios";

const RouterConfig = (props) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // getData("http://localhost:3000/productData");
    setTimeout(() => {
      setProductData(dbJson.productData);
    }, 1000);
  }, []);

  // const getData = async (url) => {
  //   try {
  //     await axios.get(url).then((res) => {
  //       setProductData(res.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <BrowserRouter>
      <Header data={productData} />

        <Routes>
          <Route exact path="/" element={<Home data={productData} />} />
          <Route
            exact
            path="/cat/:id"
            element={<Listing data={productData} single={true} />}
          />
          <Route
            exact
            path="/cat/:id/:id"
            element={<Listing data={productData} single={false} />}
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/product/:id"
            element={<Details data={productData} />}
          />
          <Route exact path="/404" element={<NotFount />} />
        </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default RouterConfig;
