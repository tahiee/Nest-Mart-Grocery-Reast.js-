import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

const CatSlider = (props) => {
  const [allData, setAllData] = useState([]);
  const [totalLength, setTotalLength] = useState([]);
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
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode:true,
  };

  var catLength = 0;
  var lengthArray = [];
  useEffect(() => {
    allData.length !== 0 &&
      allData.map((item, index) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            catLength += item_.products.length;
          });
        lengthArray.push(catLength);
        catLength = 0;
      });
    const list = lengthArray.filter(
      (item, index) => lengthArray.indexOf(item) === index
    );
    setTotalLength(list);
  }, []);
  
  useEffect(() => {
    setAllData(props.data)
  }, [props.data])

  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Categories</h2>
          <Slider {...settings} className="cat_Slider_Main">
            {allData.length !== 0 &&
              allData.map((item, index) => {
                // console.log(item);
                return (
                  <div className="item" key={index}>
                    <Link to={`/cat/${item.cat_name?.toLowerCase()}`}>
                      <div
                        className="info"
                        style={{ background: itemsbg[index] }}
                      >
                        <img src={item.image} style={{ width: "80px" }} />
                        <h5 className="text-capitalize">{item.cat_name}</h5>
                        <p>{totalLength[index]}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            {/* {itemsbg.length !== 0 &&
              itemsbg.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="info" style={{ background: item }}>
                      <img src={itme1} alt={`Cat ${index + 1}`} />
                      <h5>Vegetables</h5>
                      <p>6 Items</p>
                    </div>
                  </div>
                );
              })} */}

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
