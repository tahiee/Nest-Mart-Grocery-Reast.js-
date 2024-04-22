import React from "react";
import HomeSlider from "./slideer/Slider";
import "./home.css";
import CatSlider from "../../components/catSlider/CatSlider";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banner />

      <section className="homeSection">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popula Products</h2>
            <ul className="list list-inline filterTab">
              <li className="list-inline-item">
                <a className="cursor">All</a>
              </li>
              <li className="list list-item">
                <a className="cursor">Milk & Daries</a>
              </li>
              <li className="list list-item">
                <a className="cursor">Pet Foods</a>
              </li>
              <li className="list list-item">
                <a className="cursor">Meats</a>
              </li>
              <li className="list list-item">
                <a className="cursor">Vegatables</a>
              </li>
              <li className="list list-item">
                <a className="cursor">Cofees & Tea</a>
              </li>
              <li className="list list-item">
                <a className="cursor">Fruits</a>
              </li>
            </ul>
          </div>

          <div className="row product-row">
            <div className="item">
              <Product tag='hot'/>
            </div>
            <div className="item">
              <Product tag='new'/>
            </div>
            <div className="item">
              <Product tag='best'/>
            </div>
            <div className="item">
              <Product tag='null'/>
            </div>
            <div className="item">
              <Product tag='sale'/>
            </div>
            <div className="item">
              <Product tag='null'/>
            </div>
            <div className="item">
              <Product tag='best'/>
            </div>
            <div className="item">
              <Product tag='null'/>
            </div>
            <div className="item">
              <Product tag='null'/>
            </div>
            <div className="item">
              <Product tag='new'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
