import React, { useEffect, useState } from "react";
import "./product.css";
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
  const [productData, setproductData] = useState();

  useEffect(() => {
    setproductData(props.item);
    // console.log({props})
  }, [props.item]);

  return (
    <>
      <div className="productThumb">
        {productData?.tag !== null && productData?.tag !== undefined && (
          <span className={`badge ${productData.tag}`}>{productData.tag}</span>
        )}

        {productData !== undefined && (
          <>
            <Link to={`/product/${productData.id}`}>
              <div className="imgWrapper">
                <div className="p-4">
                  <img
                    src={productData.catImg + "?im=Resize=(420,420)"}
                    className="w-100"
                  />
                </div>
                <div className="overLay tranisition">
                  <ul>
                    <li>
                      <Tooltip title="WishList" placement="top-start">
                        <Link className="cursor">
                          <FavoriteBorderOutlined />
                        </Link>
                      </Tooltip>
                    </li>
                    <li>
                      <Tooltip title="Compare" placement="top">
                        <Link className="cursor">
                          <CompareArrowsOutlined />
                        </Link>
                      </Tooltip>
                    </li>
                    <li>
                      <Tooltip title="Quick View" placement="top-end">
                        <Link className="cursor" style={{ border: "none" }}>
                          <RemoveRedEyeOutlined />
                        </Link>
                      </Tooltip>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>

            <div className="info">
              <span className="d-block CatName">{productData.brand}</span>
              <h4 className="title">
                <Link>{productData.productName.substr(0, 30) + "..."} </Link>
              </h4>
              <Rating
                name="half-rating-read"
                defaultValue={productData.rating}
                precision={0.5}
                readOnly
              />
              <span className="brand d-block text-g">
                By <Link className="text-g">{productData.brand}</Link>
              </span>
              <div className="d-flex align-items-center ">
                <div className="d-flex align-items-center w-100">
                  <span className="price text-g" style={{ fontWeight: "800" }}>
                    Rs: {productData.price}
                  </span>
                  <span className="oldPrice" style={{ marginLeft: "auto" }}>
                    Rs: {productData.oldPrice}
                  </span>
                </div>
              </div>
              <Button
                className="w-100 bg-g brand-Button mt-3"
                style={{ width: props.buttonWidth }}
              >
                <AddShoppingCartIcon className="addshopicon" />
                Add
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
