import React from "react";
import "./footer.css";
import Icon1for from "../../images/all-in/icon-1.png";
import Icon2for from "../../images/all-in/icon-2.png";
import Icon3for from "../../images/all-in/icon-3.png";
import Icon4for from "../../images/all-in/icon-4.png";
import Icon5for from "../../images/all-in/icon-5.png";
import MainLogo from "../../images/logo.png";
import { Link } from "react-router-dom";
import {
  CallMadeOutlined,
  CallToAction,
  EmailOutlined,
  FacebookOutlined,
  HeadphonesOutlined,
  Instagram,
  LocationOnOutlined,
  Twitter,
  WatchLaterOutlined,
  YouTube,
} from "@mui/icons-material";
import playStoreimg from "../../images/google-play.jpg";
import appStoreimg from "../../images/app-store.jpg";
import Paymentimg from "../../images/payment-method.png";
import CallIcon from "@mui/icons-material/Call";
import TockriPersonImg from '../../images/newsletter.png'
import NewLetter from "../../components/newsLetter/NewLetter";
const Footer = () => {
  return (
    <>
    <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>Stay home & get your daily <br /> needs from our shop</h2>
              <p>Start You'r Daily Shopping with Nest Mart</p>
              <br /><br />
              <NewLetter/>
            </div>
            <div className="img">
              <img src={TockriPersonImg} className="w-100" />
            </div>
          </div>
        </div>
      </section> 

      <div className="footerWrapper">
        <div className="footerbox">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <img src={Icon1for} />

                  <div className="info">
                    <h4>Best price & Offers</h4>
                    <p>Order $50 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <img src={Icon2for} />

                  <div className="info">
                    <h4>Free delivery</h4>
                    <p>Order $50 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <img src={Icon3for} />

                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>Order $50 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <img src={Icon4for} />

                  <div className="info">
                    <h4>Wide assortment</h4>
                    <p>Order $50 or more</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <img src={Icon5for} />

                  <div className="info">
                    <h4>Easy returns</h4>
                    <p>Order $50 or more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <Link>
                  {" "}
                  <img src={MainLogo} />
                </Link>{" "}
                <br />
                <br />
                <p>Awesome grocery store website template</p>
                <p>
                  <LocationOnOutlined /> <strong>Address:</strong> 5171W
                  Campbell Ave Kent, utah 53127 United States
                </p>
                <p>
                  <HeadphonesOutlined /> <strong>Call Us:</strong> (+305) -
                  2095951XX
                </p>
                <p>
                  <EmailOutlined /> <strong>Email:</strong>{" "}
                  tahirkhanji007@gmail.com
                </p>
                <p>
                  <WatchLaterOutlined /> <strong>Hours:</strong> 10:00 - 18:00,
                  Mon - Sat
                </p>
              </div>

              <div className="col-md-6 part2">
                <div className="row">
                  <div className="col">
                    <h3>Company</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link>About us</Link>{" "}
                      </li>
                      <li>
                        <Link>Delivery Information</Link>{" "}
                      </li>
                      <li>
                        <Link>Privacy Policy</Link>{" "}
                      </li>
                      <li>
                        <Link>Terms & Conditions</Link>{" "}
                      </li>
                      <li>
                        <Link>Contact Us</Link>{" "}
                      </li>
                      <li>
                        <Link>Support Center</Link>{" "}
                      </li>
                      <li>
                        <Link>Careers</Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Account</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link>Sign In</Link>{" "}
                      </li>
                      <li>
                        <Link>View Cart</Link>{" "}
                      </li>
                      <li>
                        <Link>My Wishlist</Link>{" "}
                      </li>
                      <li>
                        <Link>Track My Order</Link>{" "}
                      </li>
                      <li>
                        <Link>Help Ticket</Link>{" "}
                      </li>
                      <li>
                        <Link>Shipping Details</Link>{" "}
                      </li>
                      <li>
                        <Link>Compare products</Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Corporate</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link>Become a Vendor</Link>{" "}
                      </li>
                      <li>
                        <Link>Affiliate Program</Link>{" "}
                      </li>
                      <li>
                        <Link>Farm Business</Link>{" "}
                      </li>
                      <li>
                        <Link>Farm Careers</Link>{" "}
                      </li>
                      <li>
                        <Link>Our Suppliers</Link>{" "}
                      </li>
                      <li>
                        <Link>Accessibility</Link>{" "}
                      </li>
                      <li>
                        <Link>Promotions</Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Popular</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link>Milk & Flavoured Milk</Link>{" "}
                      </li>
                      <li>
                        <Link>Butter and Margarine</Link>{" "}
                      </li>
                      <li>
                        <Link>Eggs Substitutes</Link>{" "}
                      </li>
                      <li>
                        <Link>Marmalades</Link>{" "}
                      </li>
                      <li>
                        <Link>Sour Cream and Dips</Link>{" "}
                      </li>
                      <li>
                        <Link>Tea & Kombucha</Link>{" "}
                      </li>
                      <li>
                        <Link>Cheese</Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 part3">
                <h3>Install App</h3>
                <p>From App Store of Google Play</p>
                <div className="d-flex">
                  <Link>
                    {" "}
                    <img src={playStoreimg} width={150} />
                  </Link>
                  <Link>
                    {" "}
                    <img src={appStoreimg} className="mx-2" width={150} />
                  </Link>
                </div>
                <br />
                <br />
                <p className="d-block">Secured Payment Gateway</p>
                <Link>
                  {" "}
                  <img src={Paymentimg} className="mx-2" width={150} />
                </Link>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <hr />

              <div className="row lastStrip">
                <div className="col-md-3 ml-4">
                  <p>
                    ©2024 Nest - React template.
                    <br />
                    All rights reserved.
                  </p>
                </div>

                <div className="col-md-6 d-flex">
                  <div className="d-flex align-items-center FooterMarginAuto">
                    <div className="phNu d-flex aligin-items-center mx-5">
                      <span>
                        <CallIcon />
                      </span>
                      <div className="info ml-3">
                        <h3 className="text-g mb-0">305-2095951</h3>
                        <p className="mb-0">Working 8:00 - 22:00 </p>
                      </div>
                    </div>

                    <div className="phNu d-flex aligin-items-center mx-5">
                      <span>
                        <CallIcon />
                      </span>
                      <div className="info ml-3">
                        <h3 className="text-g mb-0">305-2095951</h3>
                        <p className="mb-0">24/7 Support Center </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 part3">
                  <div className="officalPart3">
                    <div className="d-flex align-items-center">
                      <h5>Follow Us</h5>
                      <ul className="list list-inline">
                        <li className="list-inline-item">
                          <Link>
                            <FacebookOutlined />
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link>
                            <Twitter />{" "}
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link>
                            <Instagram />
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link>
                            <YouTube />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
