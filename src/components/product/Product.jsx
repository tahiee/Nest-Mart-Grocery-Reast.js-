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
  const [productData, setproductData] = useState(props.item);

  useEffect(() => {
    // console.log({props})
    setproductData(props.item);
  }, [props.item]);

  return (
    <>
      <div className="productThumb">
        {productData?.tag && <span className={`badge ${productData.tag}`}>{productData.tag}</span>}

        {productData !== undefined && (
          <>
            <Link>
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
                        <Link
                          to="/product/details"
                          className="cursor"
                          style={{ border: "none" }}
                        >
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
                <Link>{productData.productName}</Link>
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
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <span className="price text-g" style={{ fontWeight: "800" }}>
                    Rs: {productData.price}
                  </span>
                  <span className="oldPrice">Rs: {productData.oldPrice}</span>
                </div>
                <Button
                  className="bg-g brand-Button "
                  style={{ width: props.buttonWidth }}
                >
                  <AddShoppingCartIcon className="addshopicon" />
                  Add
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
