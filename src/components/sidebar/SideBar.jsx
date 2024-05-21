import React, { useEffect, useState } from "react";
import img3 from "../../images/all-in/wines.png";
import BannerImg from "../../images/banner4.jpg";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "react-bootstrap";
import { FilterAltOutlined } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { Radio } from "@mui/material";

const SideBar = (props) => {
  const [value, setValue] = useState([10, 60000]);
  const [value2, setValue2] = useState(0);
  const [brandFilters, setBrandFilters] = useState([]);
  const [ratingsArr, setRatings] = useState([]);
  const [totalLength, setTotalLength] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    if (props.data.length !== 0) {
      const lengthArr = props.data.map((item) => {
        let catLength = 0;
        if (item.items.length !== 0) {
          item.items.forEach((item_) => {
            catLength += item_.products.length;
          });
        }
        return catLength;
      });

      const uniqueLengths = Array.from(new Set(lengthArr));
      setTotalLength(uniqueLengths);
    }
  }, [props.data]);

  useEffect(() => {
    if (props.currentCatData.length !== 0) {
      const brands = props.currentCatData.map((item) => item.brand);
      const ratings = props.currentCatData.map((item) =>
        parseFloat(item.rating)
      );

      const uniqueBrands = Array.from(new Set(brands));
      const uniqueRatings = Array.from(new Set(ratings));

      setBrandFilters(uniqueBrands);
      setRatings(uniqueRatings);
    }
  }, [props.currentCatData, id]);

  useEffect(() => {
    if (props.currentCatData.length !== 0) {
      const maxPrice = Math.max(
        ...props.currentCatData.map((item) =>
          parseInt(item.price.toString().replace(/,/g, ""))
        )
      );
      setValue2(maxPrice);
    }
  }, [props.currentCatData]);

  useEffect(() => {
    filterByPrice(value[0], value[1]);
  }, [value]);

  const filterByBrand = (keyword) => {
    props.filterByBrand(keyword);
  };

  const filterByRating = (keyword) => {
    props.filterByRating(parseFloat(keyword));
  };

  const filterByPrice = (minValue, maxValue) => {
    props.filterByPrice(minValue, maxValue);
  };

  return (
    <div className="SideBar">
      {/* Category */}
      <div className="card border-0 shadow">
        <h3>Category</h3>
        <div className="cardList">
          {props.data.length !== 0 &&
            props.data.map((item, index) => (
              <Link
                to={`/cat/${item.cat_name.toLowerCase()}`}
                key={index}
                style={{
                  textDecoration: "none",
                  textTransform: "capitalize",
                  color: "black",
                }}
              >
                <div className="cardItem d-flex align-items-center mt-2">
                  <span className="cardImg">
                    <img src={img3} width={30} alt={`${item.cat_name} icon`} />
                  </span>
                  <h4
                    className="mb-0 ml-3 mr-3"
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                  >
                    {item.cat_name}
                  </h4>
                  <span className="d-flex align-items-center rounded-circle ml-auto" style={{ marginLeft: "auto" }}>
                    {totalLength[index]}
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="card border-0 shadow mt-4">
        <h3>Fill Up The Price</h3>
        <br />
        <RangeSlider
          color="success"
          value={value}
          onInput={setValue}
          min={10}
          max={60000}
          step={5}
        />
        <div className="d-flex pt-2 pb-2 RangePrice">
          <span>
            From: <strong className="text-success">Rs: {value[0]}</strong>
          </span>
          <span className="RangePriceSpanMargin">
            To: <strong className="text-success">Rs: {value[1]}</strong>
          </span>
        </div>

        {/* Filter by Brand */}
        <div className="filters pt-5">
          <h5>Filter By Brand</h5>
          <ul className="mb-0">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {brandFilters.length !== 0 &&
                brandFilters.map((item, index) => (
                  <li key={index}>
                    <FormControlLabel
                      value={item}
                      control={<Radio onChange={() => filterByBrand(item)} />}
                      label={item}
                    />
                  </li>
                ))}
            </RadioGroup>
          </ul>
        </div>

        {/* Filter by Rating */}
        <div className="filters pt-0">
          <h5>Filter By Ratings</h5>
          <ul>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {ratingsArr.length !== 0 &&
                ratingsArr.map((item, index) => (
                  <li key={index}>
                    <FormControlLabel
                      value={item}
                      control={<Radio onChange={() => filterByRating(item)} />}
                      label={item}
                    />
                  </li>
                ))}
            </RadioGroup>
          </ul>
        </div>

        <div className="d-flex">
          <Button
            className="btn btn-g"
            style={{ border: "black" }}
            onClick={() => context.openFilters()}
          >
            <FilterAltOutlined /> Filter
          </Button>
        </div>
      </div>
      <img
        src={BannerImg}
        style={{
          marginTop: "30px",
          borderRadius: "10px",
          width: "100%",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default SideBar;
