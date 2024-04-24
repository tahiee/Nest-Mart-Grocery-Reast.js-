import React from "react";
import HomeSlider from "./slideer/Slider";
import "./home.css";
import CatSlider from "../../components/catSlider/CatSlider";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import PopularBanner from "../../images/banner4.jpg";
import Slider from "react-slick";
import sliderimg1 from "../../images/popular/product-8-1.jpg";
const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
  };
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
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product tag="null" />
            </div>
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product tag="null" />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product tag="null" />
            </div>
            <div className="item">
              <Product tag="null" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
          </div>
        </div>
      </section>

      <section className="homeSection productSlider02 pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
            <ul className="list list-inline filterTab">
              <li className="list-inline-item">
                <a className="cursor">Featured</a>
              </li>
              <li className="list list-item">
                <a className="cursor">Popular</a>
              </li>
              <li className="list list-item">
                <a className="cursor">New Added</a>
              </li>
            </ul>
          </div>

          <br />

          <div className="row">
            <div className="col-sm-3 p-0">
              <img src={PopularBanner} className="popularSliderImg" />
            </div>

            <div className="col-md-9 p-0">
              <Slider {...settings} className="productSlider">
                <div className="item">
                <Product tag="new" />
                </div>
                <div className="item">
                <Product tag="hot" />
                </div>
                <div className="item">
                <Product tag="sale" />
                </div>
                <div className="item">
                <Product tag="best" />
                </div>
                <div className="item">
                <Product tag="null" />
                </div>
                <div className="item">
                <Product tag="hot" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
