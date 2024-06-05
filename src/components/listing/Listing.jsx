import { HouseOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import Product from "../product/Product";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Listing = (props) => {
  const buttonWidth = "60px";
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openDropDown2, setOpenDropDown2] = useState(false);
  const [data, setData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(3);
  const [currentId, setCurrentId] = useState();

  const { id } = useParams();
  var itemsData = [];

  useEffect(() => {
    itemsData = [];
    if (props.data.length !== 0) {
      props.data.forEach((item) => {
        //page == single cat
        if (props.single === true) {
          if (item.cat_name.toLowerCase() === id.toLowerCase()) {
            item.items.forEach((item_) => {
              item_.products.forEach((product) => {
                itemsData.push({
                  ...product,
                  parentCatName: item.cat_name,
                  subCatName: item_.cat_name,
                });
              });
            });
          }
        } else {
          //page == double cat
          item.items.forEach((item_) => {
            if (
              item_.cat_name.split(" ").join("-").toLowerCase() ===
              id.split(" ").join("-").toLowerCase()
            ) {
              item_.products.forEach((product) => {
                itemsData.push({
                  ...product,
                  parentCatName: item.cat_name,
                  subCatName: item_.cat_name,
                });
              });
            }
          });
        }
      });
    }

    const list2 = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );
    setData(list2);
    window.scrollTo(0, 0);
  }, [id, props.data, props.single]);

  const filterByBrand = (keyword) => {
    itemsData = [];
    if (props.data.length !== 0) {
      props.data.forEach((item) => {
        //page == single cat
        if (props.single === true) {
          item.items.forEach((item_) => {
            item_.products.forEach((product) => {
              if (product.brand.toLowerCase() === keyword.toLowerCase()) {
                itemsData.push({
                  ...product,
                  parentCatName: item.cat_name,
                  subCatName: item_.cat_name,
                });
              }
            });
          });
        } else {
          //page == double cat
          item.items.forEach((item_) => {
            if (
              item_.cat_name.split(" ").join("-").toLowerCase() ===
              id.split(" ").join("-").toLowerCase()
            ) {
              item_.products.forEach((product) => {
                if (product.brand.toLowerCase() === keyword.toLowerCase()) {
                  itemsData.push({
                    ...product,
                    parentCatName: item.cat_name,
                    subCatName: item_.cat_name,
                  });
                }
              });
            }
          });
        }
      });
    }

    const list2 = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );
    setData(list2);
    window.scrollTo(0, 0);
  };

  const filterByPrice = (minValue, maxValue) => {
    itemsData = [];
    if (props.data.length !== 0) {
      props.data.forEach((item) => {
        //page == single cat
        if (props.single === true) {
          if (id === item.cat_name.toLowerCase()) {
            item.items.forEach((item_) => {
              item_.products.forEach((product) => {
                let price = parseInt(
                  product.price.toString().replace(/,/g, "")
                );
                if (minValue <= price && maxValue >= price) {
                  itemsData.push({
                    ...product,
                    parentCatName: item.cat_name,
                    subCatName: item_.cat_name,
                  });
                }
              });
            });
          }
        } else {
          item.items.forEach((item_) => {
            if (
              item_.cat_name.split(" ").join("-").toLowerCase() ===
              id.split(" ").join("-").toLowerCase()
            ) {
              item_.products.forEach((product) => {
                let price = parseInt(
                  product.price.toString().replace(/,/g, "")
                );
                if (minValue <= price && maxValue >= price) {
                  itemsData.push({
                    ...product,
                    parentCatName: item.cat_name,
                    subCatName: item_.cat_name,
                  });
                }
              });
            }
          });
        }
      });
    }

    const list2 = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );
    setData(list2);
  };

  const filterByRating = (keyword) => {
    itemsData = [];
    if (props.data.length !== 0) {
      props.data.forEach((item) => {
        //page == single cat
        if (props.single === true) {
          if (item.cat_name.toLowerCase() === id.toLowerCase()) {
            item.items.forEach((item_) => {
              item_.products.forEach((product) => {
                if (product.rating === keyword) {
                  itemsData.push({
                    ...product,
                    parentCatName: item.cat_name,
                    subCatName: item_.cat_name,
                  });
                }
              });
            });
          }
        } else {
          item.items.forEach((item_) => {
            if (
              item_.cat_name.split(" ").join("-").toLowerCase() ===
              id.split(" ").join("-").toLowerCase()
            ) {
              item_.products.forEach((product) => {
                if (product.rating === keyword) {
                  itemsData.push({
                    ...product,
                    parentCatName: item.cat_name,
                    subCatName: item_.cat_name,
                  });
                }
              });
            }
          });
        }
      });
    }

    const list2 = itemsData.filter(
      (item, index) => itemsData.indexOf(item) === index
    );
    setData(list2);
    window.scrollTo(0, 0);
  };

  return (
    <div className="listingPage">
      <div className="container-fluid">
        <div className="breadCrumb">
          <h1 style={{ textTransform: "capitalize" }}>
            {sessionStorage.getItem("cat")}
          </h1>
          <ul className="list list-inline">
            <li className="list-inline-item">
              <Link to="/">
                <HouseOutlined /> Home
              </Link>
            </li>

            {sessionStorage.getItem("cat") && (
              <li className="list-inline-item">
                <Link
                  to={`/cat/${sessionStorage.getItem("cat").toLowerCase()}`}
                  style={{ textTransform: "capitalize" }}
                >
                  <ArrowForwardIosIcon style={{ fontSize: "18px" }} />{" "}
                  {sessionStorage.getItem("cat")}
                </Link>
              </li>
            )}

            {props.single === false && id && (
              <li className="list-inline-item">
                <Link
                  to={`/cat/${sessionStorage
                    .getItem("cat")
                    ?.toLowerCase()}/${id.toLowerCase()}`}
                  style={{ textTransform: "capitalize" }}
                >
                  <ArrowForwardIosIcon style={{ fontSize: "18px" }} /> {id}
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="listingData">
          <div className="row">
            <div className="col-md-3 sideBarWrapper">
              {/* sidebar component */}
              <SideBar
                data={props.data}
                currentCatData={data}
                filterByBrand={filterByBrand}
                filterByPrice={filterByPrice}
                filterByRating={filterByRating}
              />
            </div>

            <div className="col-md-9 rightContent homeSection">
              <div className="topStrip d-flex align-items-center">
                <p className="mb-0 mt-0">
                  We found <span className="text-success">{data.length}</span>{" "}
                  items for you!
                </p>

                <div className="d-flex align-items-center MarginAuto">
                  <div className="tab_ position-relative">
                    <Button
                      className="btn_"
                      onClick={() => setOpenDropDown(!openDropDown)}
                    >
                      Show : 50 <KeyboardArrowDownIcon />
                    </Button>
                    {openDropDown && (
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
                    {openDropDown2 && (
                      <ul className="accountDropDownMenu">
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setOpenDropDown2(false)}
                          >
                            Featured
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setOpenDropDown2(false)}
                          >
                            Price: Less to High
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setOpenDropDown2(false)}
                          >
                            Price: High to Less
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setOpenDropDown2(false)}
                          >
                            Release Date
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setOpenDropDown2(false)}
                          >
                            Avg. Rating
                          </Button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="product-row pl-4 pr-3 pt-0">
                {data.length !== 0 &&
                  data.map((item, index) => (
                    <div className="item" key={index}>
                      <Product item={item} tag={item.type} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
