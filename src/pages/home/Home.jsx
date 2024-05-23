import React, { useEffect, useRef, useState } from "react";
import HomeSlider from "./slideer/Slider";
import "./home.css";
import CatSlider from "../../components/catSlider/CatSlider";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import PopularBanner from "../../images/banner4.jpg";
import Slider from "react-slick";
import sliderimg1 from "../../images/popular/product-8-1.jpg";
import TopProducts from "./topProducts/TopProducts";
import img1 from "../../images/thumbnail-1.jpg";
import img2 from "../../images/thumbnail-2.jpg";
import img3 from "../../images/thumbnail-3.jpg";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [prodData, setProdData] = useState(props.data);
  const [catArray, setcatArray] = useState([]);
  const [activeTabs, setActiveTabs] = useState();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeData, setActiveData] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  const [getBestSeller, setgetbestseller] = useState([]);
  const productRow = useRef();

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

  const catArr = [];

  useEffect(() => {
    prodData.length !== 0 &&
      prodData.map((item) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            catArr.push(item_.cat_name);
          });
      });

    const list2 = catArr.filter(
      (item, index) => catArr.indexOf(item) === index
    );
    setcatArray(list2);

    setActiveTabs(list2[0]);

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    var arr = [];
    setActiveData(arr);
    prodData.length !== 0 &&
      prodData.map((item, index) => {
        item.items.map((item_, index_) => {
          if (item_.cat_name === activeTabs) {
            {
              item_.products.length !== 0 &&
                item_.products.map((product) => {
                  arr.push({
                    ...product,
                    parentCatName: item.cat_name,
                    subCatName: item_.cat_name,
                  });
                });

              setActiveData(arr);
              setTimeout(() => {
                setIsLoadingProducts(false);
              }, [1000]);
            }
          }
        });
      });
  }, [activeTabs, activeData]);

  // fetch best seller data from db.json
  const bestSellerArray = [];
  useEffect(() => {
    {
      prodData.length !== 0 &&
        prodData.map((item) => {
          if (item.cat_name === "Electronics") {
            item.items.length !== 0 &&
              item.items.map((item_) => {
                item_.produts !== 0 &&
                  item_.products.map((productItem, Index) => {
                    bestSellerArray.push(productItem);
                  });
              });
          }
        });
    }
    setgetbestseller(bestSellerArray);
  }, []);

  return (
    <>
      <HomeSlider />
      <CatSlider data={prodData} />
      <Banner />

      <section className="homeSection">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popular Products</h2>
            <ul className="list list-inline filterTab">
              {catArray.length !== 0 &&
                catArray.map((cat, index) => {
                  return (
                    <li className="list list-inline-item">
                      <a
                        className={`cursor text-capitalize 
                                                ${
                                                  activeTabIndex === index
                                                    ? "act"
                                                    : ""
                                                }`}
                        onClick={() => {
                          setActiveTabs(cat);
                          setActiveTabIndex(index);
                          setIsLoadingProducts(true);
                        }}
                      >
                        {cat}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="row product-row">
            {activeData.length !== 0 &&
              activeData.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <Product tag={item.type} item={item} />
                  </div>
                );
              })}
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
                {getBestSeller.length !== 0 &&
                  getBestSeller.map((item, index) => {
                    return (
                      <div className="item" key={index}>
                        <Product tag={item.type} item={item} />
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="TopProductSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="Top Selling" img={img1} />
            </div>

            <div className="col">
              <TopProducts title="Trending Products" img={img2} />
            </div>

            <div className="col">
              <TopProducts title="Recently Added" img={img1} />
            </div>

            <div className="col">
              <TopProducts title="Top Rated" img={img3} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
