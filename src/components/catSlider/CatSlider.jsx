import React, { useState } from "react";
import Slider from "react-slick";
import "./catSlider.css";
import itme1 from "../../images/category/cat-1.png";
import itme2 from "../../images/category/cat-11.png";
import itme3 from "../../images/category/cat-12.png";
import itme4 from "../../images/category/cat-13.png";
import itme5 from "../../images/category/cat-14.png";
import itme6 from "../../images/category/cat-15.png";
import itme7 from "../../images/category/cat-2.png";
import itme8 from "../../images/category/cat-3.png";
import itme9 from "../../images/category/cat-4.png";
import itme10 from "../../images/category/cat-5.png";
import itme11 from "../../images/category/cat-9.png";

const CatSlider = () => {
  const [itemsbg, setItembg] = useState([
    "#ffeceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#ffeceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    
  ]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>
          <Slider {...settings} className="cat_Slider_Main">
            {itemsbg.length !== 0 &&
              itemsbg.map((item, index) => {
                return (
                  <div className="item">
                    <div className="info" style={{background:item}}>
                      <img src={itme1} />
                      <h5>Vegetables</h5>
                      <p>6 Items</p>
                    </div>
                  </div>
                );
              })}

            {/* <div className="item">
              <div className="info">
                <img src={itme2} />
                <h5>Peach</h5>
                <p>7 Items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={itme3} />
                <h5>Organic Kivi</h5>
                <p>6 Items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={itme4} />
                <h5>Cake & Milk</h5>
                <p>11 Item</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={itme5} />
                <h5>Coffe & Tea</h5>
                <p>8 Items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={itme6} />
                <h5>HeadPhones</h5>
                <p>18 Items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={itme7} />
                <h5>Strawberry</h5>
                <p>12 Items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={itme8} />
                <h5>Snacks</h5>
                <p>8 Items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={itme9} />
                <h5>Black plum</h5>
                <p>9 Items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={itme10} />
                <h5>Custard Apple</h5>
                <p>10 Items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src={itme11} />
                <h5>Red Apple</h5>
                <p>11 items</p>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CatSlider;
