import { HouseOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import Product from "../product/Product";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Listing = () => {
  const buttonWidth = "60px";
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openDropDown2, setOpenDropDown2] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="listingPage">
        <div className="container-fluid">
          <div className="breadCrumb">
            <h1>Snack</h1>
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Link to={"/"}>
                  <HouseOutlined /> Home{" "}
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={""}>
                  <ArrowForwardIosIcon style={{ fontSize: "18px" }} /> Shop
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={""}>
                  <ArrowForwardIosIcon style={{ fontSize: "18px" }} /> Snack
                </Link>
              </li>
            </ul>
          </div>

          <div className="listingData">
            <div className="row">
              <div className="col-md-3 sideBarWrapper">
                <SideBar />
              </div>

              <div className="col-md-9 rightContent homeSection">
                <div className="topStrip d-flex align-items-center">
                  <p className="mb-0 mt-0">
                    We found <span className="text-success">20 </span>items for
                    you!
                  </p>

                  <div className="d-flex align-items-center MarginAuto">
                    <div className="tab_ position-relative">
                      <Button
                        className="btn_"
                        onClick={() => setOpenDropDown(!openDropDown)}
                      >
                        Show : 50 <KeyboardArrowDownIcon />
                      </Button>
                      {openDropDown !== false && (
                        <ul className="accountDropDownMenu">
                          <li>
                            <Button
                              className="align-items-center"
                              onClick={() => setOpenDropDown(false)}
                            >
                              50
                            </Button>
                          </li>
                          <li>
                            <Button
                              className="align-items-center"
                              onClick={() => setOpenDropDown(false)}
                            >
                              100
                            </Button>
                          </li>
                          <li>
                            <Button
                              className="align-items-center"
                              onClick={() => setOpenDropDown(false)}
                            >
                              150
                            </Button>
                          </li>
                          <li>
                            <Button
                              className="align-items-center"
                              onClick={() => setOpenDropDown(false)}
                            >
                              200
                            </Button>
                          </li>
                          <li>
                            <Button className="align-items-center">All</Button>
                          </li>
                        </ul>
                      )}
                    </div>
                    <div className="tab_ ml-3 position-relative">
                      <Button
                        className="btn_"
                        onClick={() => setOpenDropDown2(!openDropDown2)}
                      >
                        Sort by: Featured <KeyboardArrowDownIcon />
                      </Button>
                      {openDropDown2 !== false && (
                        <ul className="accountDropDownMenu">
                          <li>
                            <Button className="align-items-center" onClick={() => setOpenDropDown2(false)}>
                              Featured
                            </Button>
                          </li>
                          <li>
                            <Button className="align-items-center" onClick={() => setOpenDropDown2(false)}>
                              Price: Less to High
                            </Button>
                          </li>
                          <li>
                            <Button className="align-items-center" onClick={() => setOpenDropDown2(false)}>
                              Price: High to Less
                            </Button>
                          </li>
                          <li>
                            <Button className="align-items-center" onClick={() => setOpenDropDown2(false)}>
                              Release Date
                            </Button>
                          </li>
                          <li>
                            <Button className="align-items-center" onClick={() => setOpenDropDown2(false)}>
                              Avg. Rating
                            </Button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <div className="product-row pl-4 pr-3 pt-0">
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                  <div className="item">
                    <Product buttonWidth={buttonWidth} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
