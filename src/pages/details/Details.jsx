import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import img1 from "../../images/popular/product-8-1.jpg";
import img2 from "../../images/popular/product-4-1.jpg";
import img3 from "../../images/popular/product-2-1.jpg";
import img4 from "../../images/popular/product-9-1.jpg";
import img5 from "../../images/popular/product-7-1.jpg";
import Slider from "react-slick";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";

import SideBar from "../../components/sidebar/SideBar";
const Details = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const [urlimg, setUrlimg] = useState(img1);
  const [isActive, setIsActive] = useState(2);
  const [InputRef, setinputRef] = useState(1);
  const sliderRef = useRef();

  const [activeTab, setActiveTab] = useState(2);
  const activeMe = (index) => {
    setIsActive(index);
  };

  const plusOne = () => {
    setinputRef(InputRef + 1);
  };

  const minusOne = () => {
    setinputRef(InputRef - 1);
  };

  const handleClickSlideImage = (index, imgUrl) => {
    sliderRef.current.slickGoTo(index);
    setUrlimg(imgUrl);
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

        <div className="container detailsContainer pt-3 pb-3">
          <div className="row">
            {/* product Zoom */}
            <div className="col-md-5">
              <div className="productZoom">
                <InnerImageZoom
                  zoomType="hover"
                  zoomScale={2}
                  src={`${urlimg}`}
                />
              </div>
              <Slider {...settings} className="zoomSlider" ref={sliderRef}>
                {[
                  { src: img1, index: 0 },
                  { src: img2, index: 1 },
                  { src: img3, index: 2 },
                  { src: img4, index: 3 },
                  { src: img1, index: 4 },
                  { src: img5, index: 5 },
                ].map((item) => (
                  <div className="item" key={item.index}>
                    <img
                      src={item.src}
                      className="w-100"
                      onClick={() =>
                        handleClickSlideImage(item.index, item.src)
                      }
                    />
                  </div>
                ))}
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

              <div className="addCartSection pt-3 pb-3 d-flex align-items-center">
                <div className="counterSection">
                  <input type="number" value={InputRef} />
                  <span className="arrow plus" onClick={plusOne}>
                    <KeyboardArrowUpIcon />
                  </span>
                  <span className="arrow minus" onClick={minusOne}>
                    <KeyboardArrowDownIcon />
                  </span>
                </div>
                <Button className="btn-g btn-lg addTourchBtn">
                  <ShoppingCartOutlinedIcon style={{ marginRight: "5px" }} />
                  Add to Cart
                </Button>
                <Button
                  className=" btn-lg addTourchBtn btn-border"
                  style={{ marginLeft: "5px" }}
                >
                  <FavoriteBorderOutlinedIcon />
                </Button>
                <Button
                  className=" btn-lg addTourchBtn btn-border"
                  style={{ marginLeft: "5px" }}
                >
                  <CompareArrowsRoundedIcon />
                </Button>
              </div>
            </div>
          </div>

          <div className="card mt-5 p-5 detailsPageTab">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button className={`${activeTab === 0 && 'active'}`} onClick={() => setActiveTab(0)}>Description</Button>
                </li>
                <li className="list-inline-item">
                  <Button className={`${activeTab === 1 && 'active'}`} onClick={() => setActiveTab(1)}>
                    Additional Info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button className={`${activeTab === 2 && 'active'}`} onClick={() => setActiveTab(2)}>Reviews (3)</Button>
                </li>
              </ul>
            </div>

            <br />

            {activeTab === 0 && (
              <div className="tabContent  1">
                <p>
                  Uninhibited carnally hired played in whimpered dear gorilla
                  koala depending and much yikes off far quetzal goodness and
                  from for grimaced goodness unaccountably and meadowlark near
                  unblushingly crucial scallop tightly neurotic hungrily some
                  and dear furiously this apart.
                </p>
                <p>
                  Spluttered narrowly yikes left moth in yikes bowed this that
                  grizzly much hello on spoon-fed that alas rethought much
                  decently richly and wow against the frequent fluidly at
                  formidable acceptably flapped besides and much circa far over
                  the bucolically hey precarious goldfinch mastodon goodness
                  gnashed a jellyfish and one however because
                </p>
                <br />
                <hr />
                <h2>Packaging & Delivery</h2>
                <p>
                  Less lion goodness that euphemistically robin expeditiously
                  bluebird smugly scratched far while thus cackled sheepishly
                  rigid after due one assenting regarding censorious while
                  occasional or this more crane went more as this less much amid
                  overhung anathematic because much held one exuberantly sheep
                  goodness so where rat wry well concomitantly.
                </p>
                <p>
                  Scallop or far crud plain remarkably far by thus far iguana
                  lewd precociously and and less rattlesnake contrary caustic
                  wow this near alas and next and pled the yikes articulate
                  about as less cackled dalmatian in much less well jeering for
                  the thanks blindly sentimental whimpered less across
                  objectively fanciful grimaced wildly some wow and rose jeepers
                  outgrew lugubrious luridly irrationally attractively
                  dachshund.
                </p>
                <br />
                <hr />
                <h2>Suggested Use</h2>
                <p style={{ margin: "0px" }}>
                  <strong style={{ color: "red" }}>
                    Refrigeration not necessary.
                  </strong>
                </p>
                <p style={{ margin: "0px" }}>
                  <strong style={{ color: "red" }}>Stir before serving.</strong>
                </p>
                <hr />
                <br />
                <h2>Other Ingredients</h2>
                <p style={{ margin: "0px" }}>
                  <strong style={{ color: "red" }}>
                    Organic raw pecans, organic raw cashews..
                  </strong>
                </p>
                <p style={{ margin: "0px" }}>
                  <strong style={{ color: "red" }}>
                    This butter was produced using a LTG (Low Temperature
                    Grinding) process
                  </strong>
                </p>
              </div>
            )}

            {activeTab === 1 && (
              <div className="tabContent  2">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Stand Up
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          35″L x 24″W x 37-45″H(front to back wheel)
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Folded (w/o wheels)
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          32.5″L x 18.5″W x 16.5″H
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Folded (w/ wheels)
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          32.5″L x 24″W x 18.5″H
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Door Pass Through
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          24
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Frame
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          Aluminum
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Weight (w/o wheels)
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          20 LBS
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Weight Capacity
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          60 LBS
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Width
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          24″
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Handle height (ground to handle)
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          37-45″
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Wheels
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          12″ air / wide track slick tread
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Seat back height
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          25″
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Color
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          Black, Blue, Red, White
                        </td>
                      </tr>
                      <tr>
                        <td class="text-sm font-semibold text-red-500 brightness-110 py-2.5  border border-gray-200 px-5">
                          Size
                        </td>
                        <td class="border border-gray-200 py-2.5 px-5  text-sm text-gray-6 00">
                          M, S
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="tabContent  3">
                <div className="row">
                  <div className="col-md-8">
                    <h4>Customer questions & answers</h4>
                    <br />
                    <div className="card p-4 reviewsCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img src="https://nest-grocery.vercel.app/assets/author/author-3.png" />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold">
                          Seiana
                        </span>
                      </div>
                      <div className="info" style={{ paddingLeft: "10px" }}>
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2022 at 3:12 pm
                          </h5>
                          <div style={{ marginLeft: "auto" }}>
                            <Rating
                              name="half-rating-read"
                              defaultValue={3.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Praesentium eius provident aliquid, vel
                          inventore deserunt corrupti ratione esse dolor ducimus
                          enim iste reprehenderit rem voluptas optio ipsum
                          placeat distinctio deleniti, quos sunt sequi porro
                          animi!
                        </p>
                      </div>
                    </div>
                    <div
                      className="card p-4 reviewsCard flex-row"
                      style={{ marginLeft: "40px" }}
                    >
                      <div className="image">
                        <div className="rounded-circle">
                          <img src="https://nest-grocery.vercel.app/assets/author/author-4.png" />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold">
                          Sara
                        </span>
                      </div>
                      <div className="info" style={{ paddingLeft: "10px" }}>
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2022 at 3:12 pm
                          </h5>
                          <div style={{ marginLeft: "auto" }}>
                            <Rating
                              name="half-rating-read"
                              defaultValue={3.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Praesentium eius provident aliquid, vel
                          inventore deserunt corrupti ratione esse dolor ducimus
                          enim iste reprehenderit rem voluptas optio ipsum
                          placeat distinctio deleniti, quos sunt sequi porro
                          animi!
                        </p>
                      </div>
                    </div>
                    <div className="card p-4 reviewsCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img src="https://nest-grocery.vercel.app/assets/author/author-2.png" />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold">
                          Seiana
                        </span>
                      </div>
                      <div className="info" style={{ paddingLeft: "10px" }}>
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2022 at 3:12 pm
                          </h5>
                          <div style={{ marginLeft: "auto" }}>
                            <Rating
                              name="half-rating-read"
                              defaultValue={3.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Praesentium eius provident aliquid, vel
                          inventore deserunt corrupti ratione esse dolor ducimus
                          enim iste reprehenderit rem voluptas optio ipsum
                          placeat distinctio deleniti, quos sunt sequi porro
                          animi!
                        </p>
                      </div>
                    </div>

                    <form action="" className="reviewCommentSection">
                      <h2>Add a Review</h2>

                      <div className="form-group">
                        <textarea
                          cols="100"
                          rows="5"
                          placeholder="Write a Comment:"
                          className="form-control"
                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <Button className="btn-g">Submint</Button>
                    </form>
                  </div>

                  <div className="col-md-4">
                    <h4>Customer reviews</h4>

                    <div className="d-flex align-items-center">
                      <Rating
                        name="half-rating-read"
                        defaultValue={5.0}
                        precision={5.2}
                        readOnly
                      />
                      <strong className="ml-3">4.8 out of 5</strong>
                    </div>
                    <br />
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3" style={{ marginRight: "10px" }}>
                        5 star
                      </span>
                      <div
                        className="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "75%", height: "20px" }}
                        >
                          70%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3" style={{ marginRight: "10px" }}>
                        4 star
                      </span>
                      <div
                        className="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "65%", height: "20px" }}
                        >
                          65%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3" style={{ marginRight: "10px" }}>
                        3 star
                      </span>
                      <div
                        className="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "55%", height: "20px" }}
                        >
                          55%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3" style={{ marginRight: "10px" }}>
                        2 star
                      </span>
                      <div
                        className="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "35%", height: "20px" }}
                        >
                          35%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3" style={{ marginRight: "10px" }}>
                        1 star
                      </span>
                      <div
                        className="progress"
                        style={{ width: "85%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "25%", height: "20px" }}
                        >
                          25%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
