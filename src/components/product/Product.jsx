import React from "react";
import "./product.css";
import Product1 from "../../images/popular/product-1-1.jpg";
import Product2 from "../../images/popular/product-2-1.jpg";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <>
      <div className="productThumb">
        <div className="imgWrapper">
          <span>10%</span>
          <img src={Product1} className="w-100" />
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
              <AddShoppingCartIcon  className="addshopicon"/>
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
