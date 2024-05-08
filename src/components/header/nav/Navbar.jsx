import React, { useEffect, useState } from "react";
import "./nav.css";
import { Button } from "@mui/material";
import {
  GridView,
  HeadphonesOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import MegaImgt from "../../../images/360_F_712724773_cFHfl8fvajfRJntpVHI2o4kI3ram9ZbE.jpg";

const Navbar = (props) => {
  const [navData, setnavData] = useState([]);

  useEffect(() => {
    console.log(props.data);
    setnavData(props.data);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="nav d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row position-relative">
            <div className="col-sm-3 part1 d-flex align-items-center">
              <Button className="bg-g text-white catTab Nav-Cat-Res-Hide">
                <Link
                  to={"/404"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <GridView />
                  &nbsp; Browes All Cateogories
                  <KeyboardArrowDown />
                </Link>
              </Button>
            </div>

            <div className="col-sm-7 part2 position-static">
              <nav>
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <Button>
                      <Link to={"/"}>Home</Link>
                    </Button>
                  </li>

                  {/* Conductions of nav 3 elements groceries , electronic & fashion starts */}
                  {navData.length !== 0 &&
                    navData.map((item, index) => {
                      return (
                        <li className="list-inline-item" key={index}>
                          <Button>
                            <Link to={`/cat/${item.cat_name?.toLowerCase()}`}>
                              {item.cat_name}
                            </Link>
                          </Button>

                          {/* dropdown starts */}

                          {item.items.length !== 0 && (
                            <div className="dropDown_Menu">
                              <ul>
                                {item.items.map((item_, index_) => {
                                  return (
                                    <li key={index_}>
                                      <Button>
                                        <Link
                                          to={`/cat/${item.cat_name?.toLowerCase()}/${item_.cat_name
                                            .replace(/\s/g, "-")
                                            .toLowerCase()}`}
                                        >
                                          {item_.cat_name}
                                        </Link>
                                      </Button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}

                          {/* dropdown ends */}
                        </li>
                      );
                    })}

                  {/* Conductions of nav 3 elements groceries , electronic & fashion ends */}

                  {/* <li className="list-inline-item">
                    <Button>
                      <Link to={"/about"}>About</Link>
                    </Button>
                  </li> */}

                  {/* Vendor Li start */}
                  {/* <li className="list-inline-item">
                    <Button>
                      <Link>Vendor</Link>
                      <KeyboardArrowDown />
                    </Button>

                    <div className="dropDown_Menu">
                      <ul>
                        <li>
                          <Button>
                            <Link to={"/about"}>About</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>Contact</Link>
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                  {/* vendor li ends */}

                  <li className="list-inline-item">
                    <Button>
                      <Link>Shop</Link>
                      <KeyboardArrowDown />
                    </Button>
                    <div className="dropDown_Menu">
                      <ul>
                        <li>
                          <Button>
                            <Link to={"/"}>Shop</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/details"}>Product Details</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/listing"}>Listing</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/404"}>404 Pages</Link>
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Mega Menu */}

                  <li className="list-inline-item position-static">
                    <Button>
                      <Link>Mega Menu</Link>
                      <KeyboardArrowDown />
                    </Button>
                    <div className="dropDown_Menu megaMenu w-100">
                      <div className="row">
                        <div className="col">
                          <h4 className="text-g">Fruites & Vegetabels</h4>
                          <ul className="mt-3 mb-0">
                            <li>
                              <Link to="">Meat & Poultry</Link>
                            </li>
                            <li>
                              <Link to="">Fresh Vegetables</Link>
                            </li>
                            <li>
                              <Link to="">Herbs & Seasonings </Link>
                            </li>
                            <li>
                              <Link to="">Cuts & Sprouts</Link>
                            </li>
                            <li>
                              <Link to="">Exotis Fruits & Veggies</Link>
                            </li>
                            <li>
                              <Link to="">Packges & Products</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          <h4 className="text-g">Breakfast & Dairy</h4>
                          <ul className="mt-3 mb-0">
                            <li>
                              <Link to="">Meat & Poultry</Link>
                            </li>
                            <li>
                              <Link to="">Fresh Vegetables</Link>
                            </li>
                            <li>
                              <Link to="">Herbs & Seasonings </Link>
                            </li>
                            <li>
                              <Link to="">Cuts & Sprouts</Link>
                            </li>
                            <li>
                              <Link to="">Exotis Fruits & Veggies</Link>
                            </li>
                            <li>
                              <Link to="">Packges & Products</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          <h4 className="text-g">Meat & Seafood</h4>
                          <ul className="mt-3 mb-0">
                            <li>
                              <Link to="">Meat & Poultry</Link>
                            </li>
                            <li>
                              <Link to="">Fresh Vegetables</Link>
                            </li>
                            <li>
                              <Link to="">Herbs & Seasonings </Link>
                            </li>
                            <li>
                              <Link to="">Cuts & Sprouts</Link>
                            </li>
                            <li>
                              <Link to="">Exotis Fruits & Veggies</Link>
                            </li>
                            <li>
                              <Link to="">Packges & Products</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          <img src={MegaImgt} className="mt-3 mb-0" />
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* mega menu ends */}
                  <li className="list-inline-item">
                    <Button>
                      <Link>Blog</Link>
                      <KeyboardArrowDown />
                    </Button>
                    <div className="dropDown_Menu">
                      <ul>
                        <li>
                          <Button>
                            <Link to={"/about"}>Blogs</Link>
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>Pages</Link>
                      <KeyboardArrowDown />
                    </Button>

                    <div className="dropDown_Menu">
                      <ul>
                        <li>
                          <Button>
                            <Link to={"/about"}>About</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>Contact</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>My Account</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>Login</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>Register</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>Forget Passowrd</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>Rest Password</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>Privacy policy</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>Purchase Guide</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>Teams & Services</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to={"/about"}>404 Pages</Link>
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>Contact</Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-sm-2 part3 d-flex aligin-items-center">
              <div className="phNu d-flex aligin-items-center">
                <span>
                  <HeadphonesOutlined />
                </span>
                <div className="info ml-3">
                  <h3 className="text-g mb-0">305-2095951</h3>
                  <p className="mb-0">24/7 Support Center </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
