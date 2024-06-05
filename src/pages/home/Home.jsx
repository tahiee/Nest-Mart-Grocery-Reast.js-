import React, { useContext, useEffect, useRef, useState } from "react";
import HomeSlider from "./slideer/Slider";
import "./home.css";
import CatSlider from "../../components/catSlider/CatSlider";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import PopularBanner from "../../images/banner4.jpg";
import Slider from "react-slick";
import TopProducts from "./topProducts/TopProducts";
import img1 from "../../images/thumbnail-1.jpg";
import img2 from "../../images/thumbnail-2.jpg";
import img3 from "../../images/thumbnail-3.jpg";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [prodData, setProdData] = useState([]);
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
    if (prodData.length !== 0) {
      prodData.forEach((item) => {
        if (item.items.length !== 0) {
          item.items.forEach((item_) => {
            catArr.push(item_.cat_name);
          });
        }
      });

      const list2 = catArr.filter(
        (item, index) => catArr.indexOf(item) === index
      );
      setcatArray(list2);
      setActiveTabs(list2[0]);
      window.scrollTo(0, 0);
    }
  }, [prodData]);

  useEffect(() => {
    const arr = [];
    setActiveData(arr);
    if (prodData.length !== 0) {
      prodData.forEach((item) => {
        item.items.forEach((item_) => {
          if (item_.cat_name === activeTabs) {
            if (item_.products.length !== 0) {
              item_.products.forEach((product) => {
                arr.push({
                  ...product,
                  parentCatName: item.cat_name,
                  subCatName: item_.cat_name,
                });
              });
              setActiveData(arr);
              setTimeout(() => {
                setIsLoadingProducts(false);
              }, 1000);
            }
          }
        });
      });
    }
  }, [activeTabs, prodData]);

  const bestSellerArray = [];
  useEffect(() => {
    if (prodData.length !== 0) {
      prodData.forEach((item) => {
        if (item.cat_name === "Electronics") {
          if (item.items.length !== 0) {
            item.items.forEach((item_) => {
              if (item_.products.length !== 0) {
                item_.products.forEach((productItem) => {
                  bestSellerArray.push(productItem);
                });
              }
            });
          }
        }
      });
    }
    setgetbestseller(bestSellerArray);
  }, [prodData]);

  useEffect(() => {
    setProdData(props.data);
  }, [props.data]);

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
                catArray.map((cat, index) => (
                  <li className="list list-inline-item" key={index}>
                    <a
                      className={`cursor text-capitalize ${
                        activeTabIndex === index ? "act" : ""
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
                ))}
            </ul>
          </div>

          <div className="row product-row">
            {activeData.length !== 0 &&
              activeData.map((item, index) => (
                <div className="item" key={index}>
                  <Product tag={item.type} item={item} />
                </div>
              ))}
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
              <img
                src={PopularBanner}
                className="popularSliderImg"
                alt="Popular Banner"
              />
            </div>

            <div className="col-md-9 p-0">
              <Slider {...settings} className="productSlider">
                {getBestSeller.length !== 0 &&
                  getBestSeller.map((item, index) => (
                    <div className="item" key={index}>
                      <Product tag={item.type} item={item} />
                    </div>
                  ))}
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
