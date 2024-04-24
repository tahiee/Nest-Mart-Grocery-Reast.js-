import React from "react";
import "./topProduct.css";
import { Link } from "react-router-dom";
// import img1 from '../../../images/thumbnail-1.jpg'
import Rating from "@mui/material/Rating";

const TopProducts = (props) => {
  return (
    <>
      <div className="TopSellingbox">
        <h3>{props.title}</h3>
        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
            <img src={props.img} className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link>
              <h4>Nestle Orignal Coffee-Mate Coffee Center</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={4.5}
              readOnly
              size="small"
            />
            <div className="d-flex align-items-center">
              <span className="price text-g ">$28.33</span>
              <span className="oldPrice">$33.33</span>
            </div>
          </div>
        </div> 
        
    
        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
            <img src={props.img} className="w-100" />
            </Link>
          </div>
          <div className="info px-3">
            <Link>
              <h4>Nestle Orignal Coffee-Mate Coffee Center</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={4.5}
              readOnly
              size="small"
            />
            <div className="d-flex align-items-center">
              <span className="price text-g ">$28.33</span>
              <span className="oldPrice">$33.33</span>
            </div>
          </div>
        </div>
        

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
            <img src={props.img} className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link>
              <h4>Nestle Orignal Coffee-Mate Coffee Center</h4>
            </Link>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={4.5}
              readOnly
              size="small"
            />
            <div className="d-flex align-items-center">
              <span className="price text-g ">$28.33</span>
              <span className="oldPrice">$33.33</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProducts;
