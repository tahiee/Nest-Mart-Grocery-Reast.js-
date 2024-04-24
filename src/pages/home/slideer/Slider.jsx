import React from "react";
import "./slider.css";
import Slider from "react-slick";
import sliderimg1 from "../../../images/slider-1.png";
import sliderimg2 from "../../../images/slider-2.png";
import NewLetter from "../../../components/newsLetter/NewLetter";
import '../../../components/newsLetter/newletter.css'
const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <section className="homeSlider">
        <div className="container-fluid position-relative">
          <Slider {...settings} className="home_slider-main">
            <div className="item">
              <img src={sliderimg1} className="w-100" />
              <div className="info">
                <h2 className="mb-4">
                  Don't Miss amazing <br />
                  grocery deals
                </h2>
                <p>Sign up for the Daily newsLetter</p>
              </div>
            </div>
            <div className="item">
              <img src={sliderimg2} className="w-100" />
              <div className="info">
                <h2 className="mb-4">
                  Fresh Vegetables <br />
                  Big Discounts
                </h2>
                <p>Save upto 50% off on your first Order.</p>
              </div>
            </div>
          </Slider>
          <NewLetter/>
        </div>
      </section>
    </>
  );
};

export default HomeSlider;
