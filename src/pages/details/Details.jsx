import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import img1 from "../../images/popular/product-8-1.jpg";
import img2 from "../../images/popular/product-4-1.jpg";
import img3 from "../../images/popular/product-2-1.jpg";
import Slider from "react-slick";
const Details = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };
  const [urlimg, setUrlimg] = useState(img1);
  const [bigSizeimg, setBigSizeimg] = useState([1500, 1500]);
  const [smlSizeimg, setSmlSizeimg] = useState([150, 150]);
  const [isActive, setIsActive] = useState(2);

  const activeMe = (index) => {
    setIsActive(index);
  };
  return (
    <>
      <section className="detailPage">
        <div
          className="listingPage"
          style={{
            borderBottom: "1px solid rgb(0,0,0,0.1)",
            marginBottom: "20px",
            marginTop: "10px",
            padding: "0px",
          }}
        >
          <div className="container-fluid">
            <ul className="list list-inline breadCrumb2 breadCrumb3">
              <li className="list-inline-item">
                <Link style={{ color: "#45d56b" }}>Home</Link> /
              </li>
              <li className="list-inline-item">
                <Link style={{ color: "#45d56b" }}>Shop</Link> /
              </li>
              <li className="list-inline-item">
                <Link>Product Details</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-fluid detailsContainer">
          <div className="row pt-3 pb-3">
            <div className="col-md-9 leftPart">
              <div className="row">
                {/* product Zoom */}
                <div className="col-md-5">
                  <div className="productZoom">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={2}
                      src={`${urlimg}?im=Resize=(${bigSizeimg[0]},${smlSizeimg[1]})`}
                    />
                  </div>
                  <Slider {...settings} className="zoomSlider">
                    <div className="item">
                      <img
                        src={img1}
                        className="w-100"
                        onClick={() => setUrlimg(img1)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src={img2}
                        className="w-100"
                        onClick={() => setUrlimg(img2)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src={img1}
                        className="w-100"
                        onClick={() => setUrlimg(img1)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src={img3}
                        className="w-100"
                        onClick={() => setUrlimg(img3)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src={img2}
                        className="w-100"
                        onClick={() => setUrlimg(img2)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src={img3}
                        className="w-100"
                        onClick={() => setUrlimg(img3)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src={img2}
                        className="w-100"
                        onClick={() => setUrlimg(img2)}
                      />
                    </div>
                  </Slider>
                </div>

                {/* product Info */}
                <div className="col-md-7 productInfo">
                  <h2>Seeds of Change Organic Quinoa, Brown, & Red Rice</h2>
                  <div className="d-flex align-items-center mb-4">
                    <Rating
                      name="half-rating-read"
                      defaultValue={3.5}
                      precision={0.5}
                      readOnly
                    />
                    <span className="text-light"> (30 Review)</span>
                  </div>
                  <div className="priceSec d-flex align-items-center mb-3">
                    <span className="text-g  priceLarge">$38</span>
                    <div
                      className="d-flex flex-column"
                      style={{ marginLeft: "12px" }}
                    >
                      <span className="text-org">26% Off</span>
                      <span className="text-light">$56</span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis cupiditate eaque commodi. Autem deleniti ipsum
                    accusantium quas, odio, hic in tenetur odit temporibus quos,
                    atque veniam. A sequi doloribus voluppe.
                  </p>

                  <div className="productSize d-flex align-items-center">
                    <span>Size / Weight:</span>
                    <ul className="list list-inline">
                      <li className="list-inline-item">
                        <Link
                          className={`tag ${isActive === 0 ? "active" : ""}`}
                          onClick={() => activeMe(0)}
                        >
                          50g
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          className={`tag ${isActive === 1 ? "active" : ""}`}
                          onClick={() => activeMe(1)}
                        >
                          60g
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          className={`tag ${isActive === 2 ? "active" : ""}`}
                          onClick={() => activeMe(2)}
                        >
                          70g
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          className={`tag ${isActive === 3 ? "active" : ""}`}
                          onClick={() => activeMe(3)}
                        >
                          80g
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          className={`tag ${isActive === 4 ? "active" : ""}`}
                          onClick={() => activeMe(4)}
                        >
                          85g
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 rightPart"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
