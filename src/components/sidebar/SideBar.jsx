import React, { useEffect, useState } from "react";
import img1 from "../../images/all-in/fruits.png";
import img2 from "../../images/all-in/clothing.png";
import img3 from "../../images/all-in/wines.png";
import img4 from "../../images/all-in/backing.png";
import img5 from "../../images/all-in/fruits.png";
import BannerImg from "../../images/banner4.jpg";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "react-bootstrap";
import { FilterAltOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  function valuetext(value) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState([200, 8000]);

  const handleChange = (event, newValue) => {
    props.filterByPrice(minValue[0], maxValue[1]);
    setValue(newValue);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [totalLength, setTotalLength] = useState([]);

  var catLength = 0;
  var lengthArray = [];
  useEffect(() => {
    props.data.length !== 0 &&
      props.data.map((item, index) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            catLength += item_.products.length;
          });
        lengthArray.push(catLength);
        catLength = 0;
      });
    const list2 = lengthArray.filter(
      (item, index) => lengthArray.indexOf(item) === index
    );
    setTotalLength(list2);
  }, []);

  return (
    <>
      <div className="SideBar">
        <div className="card border-0 shadow">
          <h3>Category</h3>
          <div className="cardList">
            {props.data.length !== 0 &&
              props.data.map((item, index) => {
                return (
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
                        <img
                          src={img3}
                          width={30}
                          alt={`${item.cat_name} icon`}
                        />
                      </span>
                      <h4
                        className="mb-0 ml-3 mr-3"
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                      >
                        {item.cat_name}
                      </h4>
                      <span
                        className="d-flex align-items-center rounded-circle ml-auto"
                        style={{ marginLeft: "auto" }}
                      >
                        {totalLength[index]}
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>

        <div className="card border-0 shadow mt-4">
          <h3>Fill Up The Price</h3>
          <br />
          <Slider
            min={1}
            step={1}
            max={10000}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="success"
          />
          <div className="d-flex pt-2 pb-2 RangePrice">
            <span>
              From: <strong className="text-success">Rs: {value[0]}</strong>
            </span>
            <span className="RangePriceSpanMargin">
              To: <strong className="text-success">Rs: {value[1]}</strong>
            </span>
          </div>

          <div className="filters">
            <h5>Color</h5>
            <ul className="list list-inline">
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                Black (10)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Red (22)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Blue (56)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Brown (32)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Gray (6)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Orange (16)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Blue (56)
              </li>
            </ul>
          </div>

          <div className="filters mb-0">
            <h5>Item Conditions</h5>
            <ul className="list list-inline">
              <li>
                {" "}
                <Checkbox {...label} color="success" />
                New (1506)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Refunished (22)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Used (6)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Refunished (32)
              </li>
              <li>
                <Checkbox {...label} color="success" /> New (6)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Old (16)
              </li>
              <li>
                <Checkbox {...label} color="success" /> OnlyYours (56)
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <Button className="btn btn-g" style={{ border: "black" }}>
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
    </>
  );
};

export default SideBar;
