import React from "react";
import "./product.css";
import Product1 from "../../images/popular/product-1-1.jpg";
import Product2 from "../../images/popular/product-2-1.jpg";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import {
  CompareArrowsOutlined,
  FavoriteBorderOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";

const Product = (props) => {
  return (
    <>
      <div className="productThumb">
        <span className={`badge ${props.tag}`} >{props.tag}</span>
        <div className="imgWrapper">
          <img src={Product1} className="w-100" />

          <div className="overLay tranisition">
            <ul className="">
              <li className="">
                <Tooltip title="WishList" placement="top-start">
                  <a className="cursor">
                    <FavoriteBorderOutlined />
                  </a>
                </Tooltip>
              </li>
              <li className="">
                <Tooltip title="Compare" placement="top">
                  <a className="cursor">
                    <CompareArrowsOutlined />
                  </a>
                </Tooltip>
              </li>
              <li className="">
                <Tooltip title="Quick View" placement="top-end">
                <a className="cursor" style={{ border: "none" }}>
                  <RemoveRedEyeOutlined />
                </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>

        <div className="info">
          <span className="d-block CatName">Snack</span>
          <h4 className="title">
            <Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link>
          </h4>
          <Rating
            name="half-rating-read"
            defaultValue={3.5}
            precision={0.5}
            readOnly
          />
          <span className="brand d-block text-g">
            By <Link className="text-g">NestFoods</Link>
          </span>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <span className="price text-g ">$28.33</span>
              <span className="oldPrice">$33.33</span>
            </div>
            <Button className="bg-g brand-Button ">
              <AddShoppingCartIcon className="addshopicon" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
