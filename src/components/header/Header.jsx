import React, { useEffect, useState } from "react";
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
import {
  FavoriteBorderOutlined,
  LoginOutlined,
  MapOutlined,
  Person2Outlined,
  SettingsAccessibility,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Navbar from "./nav/Navbar";

const Header = () => {
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

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row align-items-center ">
            <div className="col-sm-2">
              <img src={Logo} />
            </div>

            {/* headerSearch start */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <SelectDrop
                  data={categoire}
                  placeholder={"All Cateogories"}
                  icon={false}
                />

                <div className="search">
                  <input type="text" placeholder="Search Your Items..." />
                  <img src={searchIcon} className="searchIcon cursor" />
                </div>
              </div>
            </div>
            {/* headerSearch End */}

            <div className="col-sm-5 d-flex align-items-center">
              <div className="ml-auto d-flex align-items-center">
                <div className="countryWrapper">
                  <SelectDrop
                    data={countryList}
                    placeholder={"Your Location"}
                    icon={<LocationOnIcon style={{ opacity: "0.5" }} />}
                  />
                </div>

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
                      <span>
                        {" "}
                        <img src={IconCart} />
                        <span className="badge bg-success rounded-circle">
                          2
                        </span>
                        Cart
                      </span>
                    </li>
                    <li className="list-inline-items">
                      <span onClick={() => setOpenDropDown(!openDropDown)}>
                        <img src={IconAccount} />
                        Account
                      </span>
                      {openDropDown !== false && (
                        <ul className="accountDropDownMenu">
                          <li>
                            <Button className="align-item-center">
                              {" "}
                              <Person2Outlined /> My Account
                            </Button>{" "}
                          </li>
                          <li>
                            <Button className="align-item-center">
                              <MapOutlined /> Order Tracking
                            </Button>{" "}
                          </li>
                          <li>
                            <Button className="align-item-center">
                              <FavoriteBorderOutlined /> My Cart List
                            </Button>{" "}
                          </li>
                          <li>
                            <Button className="align-item-center">
                              <SettingsAccessibility /> Settings
                            </Button>{" "}
                          </li>
                          <li>
                            <Button className="align-item-center">
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
        <Navbar />
      </header>
    </>
  );
};

export default Header;
