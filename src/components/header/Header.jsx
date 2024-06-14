import React, { useEffect, useRef, useState } from "react";
import Logo from "../../images/logo.svg";
import searchIcon from "../../images/search.png";
import "./header.css";
import SelectDrop from "../selectDrop/SelectDrop";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconCopare from "../../images/icon-compare.svg";
import Iconheart from "../../images/icon-heart.svg";
import IconCart from "../../images/icon-cart.svg";
import IconAccount from "../../images/icon-user.svg";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  ArrowBack,
  FavoriteBorderOutlined,
  LoginOutlined,
  MapOutlined,
  Person2Outlined,
  SearchOffOutlined,
  SettingsAccessibility,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Navbar from "./nav/Navbar";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [categoire, setcategoris] = useState([
    "Milks & Dairies",
    "Wines & Drinks",
    "Clothings & Beauty",
    "Fresh SeaFood",
    "Pets Food & Toys",
    "Fast Food",
    "Baking Materials",
    "Vegetables",
    "Frest Foods",
    "read & Jucies",
    "Fresh SeaFood",
  ]);

  const [openDropDown, setOpenDropDown] = useState(false);
  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);
  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item, index) => {
            // console.log(res.data.data);
            countryList.push(item.country);
            // console.log(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const HeaderRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 70) {
        HeaderRef.current.classList.add("fixed");
      } else {
        HeaderRef.current.classList.remove("fixed");
      }
    });
  }, []);
  const [isopenSearch, setOpenSearch] = useState(false);
  const InputSearchRef = useRef();
  const doOpenSearch = () => {
    setOpenSearch(true);
    InputSearchRef.current.focus();
    // console.log('doopenserch working')
  };
  return (
    <>
      <div className="headerWrapper" ref={HeaderRef}>
        <header>
          <div className="container-fluid">
            <div className="row ">
              <div className="col-sm-2 d-flex align-items-center ResPart1">
                <Link to="/">
                  <img src={Logo} style={{ height: "60px", width: "190px" }} />
                </Link>
                {windowWidth < 992 && (
                  <div
                    className="d-flex align-items-center"
                    style={{ marginLeft: "auto" }}
                  >
                    {/* Location when width 992 */}
                    {windowWidth < 992 && (
                      <div
                        className="countryWrapper"
                        style={{ marginRight: "5px" }}
                      >
                        <SelectDrop
                          data={countryList}
                          placeholder={"Your Location"}
                          icon={<LocationOnIcon style={{ opacity: "0.5" }} />}
                        />
                      </div>
                    )}
                    {/* end Location when width 992 */}

                    <div
                      className="NavbarToggle"
                      style={{ marginRight: "5px" }}
                      onClick={doOpenSearch}
                    >
                      <SearchOutlinedIcon />
                    </div>
                    <div className="NavbarToggle">
                      <MenuIcon />
                    </div>
                  </div>
                )}
              </div>

              {/* headerSearch start */}
              <div className="col-sm-5 ResPart2" style={{ paddingTop: "7px" }}>
                <div
                  className={`headerSearch d-flex align-items-center ${
                    isopenSearch === true ? "open" : ""
                  }`}
                >
                  {/* Added back arrow */}
                  {windowWidth < 992 && (
                    <div
                      className="CloseSearch"
                      onClick={() => {
                        setOpenSearch(false);
                      }}
                    >
                      <ArrowBack />{" "}
                    </div>
                  )}
                  {/* End back arrow */}

                  <SelectDrop
                    data={categoire}
                    placeholder={"All Cateogories"}
                    icon={false}
                  />

                  <div className="search">
                    <input
                      type="text"
                      placeholder="Search Your Items..."
                      ref={InputSearchRef}
                    />
                    <img src={searchIcon} className="searchIcon cursor" />
                  </div>
                </div>
              </div>
              {/* headerSearch End */}

              <div className="col-sm-5 d-flex align-items-center ResPart3">
                <div className="ml-auto d-flex align-items-center">
                  <div className="countryWrapper w-100">
                    <SelectDrop
                      data={countryList}
                      placeholder={"Your Location"}
                      icon={<LocationOnIcon style={{ opacity: "0.5" }} />}
                    />
                  </div>

                  {/*  */}
                  <ClickAwayListener onClickAway={() => setOpenDropDown(false)}>
                    <ul className="list list-inline mb-0 headerTabs">
                      <li className="list-inline-items">
                        <span>
                          {" "}
                          <img src={IconCopare} />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          Compare
                        </span>
                      </li>
                      <li className="list-inline-items">
                        <span>
                          {" "}
                          <img src={Iconheart} />
                          <span className="badge bg-success rounded-circle">
                            5
                          </span>
                          WishList
                        </span>
                      </li>
                      <li className="list-inline-items">
                        <Link to={"/cart"}>
                          <span>
                            {" "}
                            <img src={IconCart} />
                            <span className="badge bg-success rounded-circle">
                              2
                            </span>
                            Cart
                          </span>
                        </Link>
                      </li>
                      <li className="list-inline-items">
                        <span onClick={() => setOpenDropDown(!openDropDown)}>
                          <img src={IconAccount} />
                          Account
                        </span>
                        {openDropDown !== false && (
                          <ul className="accountDropDownMenu">
                            <li>
                              <Button className="align-items-center">
                                {" "}
                                <Person2Outlined /> My Account
                              </Button>{" "}
                            </li>
                            <li>
                              <Button className="align-items-center">
                                <MapOutlined /> Order Tracking
                              </Button>{" "}
                            </li>
                            <li>
                              <Button className="align-items-center">
                                <Link to={"/cart"}>
                                <FavoriteBorderOutlined /> My Cart List
                                </Link>
                              </Button>{" "}
                            </li>
                            <li>
                              <Button className="align-items-center">
                                <SettingsAccessibility /> Settings
                              </Button>{" "}
                            </li>
                            <li>
                              <Button className="align-items-center">
                                <LoginOutlined /> Login
                              </Button>{" "}
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </ClickAwayListener>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navbar data={props.data} />
      </div>
      <div className="afterHeader"></div>
    </>
  );
};

export default Header;
