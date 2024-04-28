import React from "react";
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

const SideBar = () => {
  function valuetext(value) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState([10, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="SideBar">
        <div className="card border-0 shadow">
          <h3>Category</h3>
          <div className="cardList">
            <div className="cardItem d-flex align-items-center mt-0">
              <span className="cardImg">
                <img src={img1} width={30} />
              </span>
              <h4
                className="mb-0 ml-3 mr-3"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Milk & Daries
              </h4>
              <span
                className="d-flex align-items-center rounded-circle ml-auto"
                style={{ marginLeft: "auto" }}
              >
                7
              </span>
            </div>
            <div className="cardItem d-flex align-items-center">
              <span className="cardImg">
                <img src={img2} width={30} />
              </span>
              <h4
                className="mb-0 ml-3 mr-3"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Clothing
              </h4>
              <span
                className="d-flex align-items-center rounded-circle ml-auto"
                style={{ marginLeft: "auto" }}
              >
                12
              </span>
            </div>
            <div className="cardItem d-flex align-items-center">
              <span className="cardImg">
                <img src={img3} width={30} />
              </span>
              <h4
                className="mb-0 ml-3 mr-3"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Pet Foods
              </h4>
              <span
                className="d-flex align-items-center rounded-circle ml-auto"
                style={{ marginLeft: "auto" }}
              >
                1
              </span>
            </div>
            <div className="cardItem d-flex align-items-center">
              <span className="cardImg">
                <img src={img4} width={30} />
              </span>
              <h4
                className="mb-0 ml-3 mr-3"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Baking Material
              </h4>
              <span
                className="d-flex align-items-center rounded-circle ml-auto"
                style={{ marginLeft: "auto" }}
              >
                16
              </span>
            </div>
            <div className="cardItem d-flex align-items-center">
              <span className="cardImg">
                <img src={img5} width={30} />
              </span>
              <h4
                className="mb-0 ml-3 mr-3"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Fresh Fruits
              </h4>
              <span
                className="d-flex align-items-center rounded-circle ml-auto"
                style={{ marginLeft: "auto" }}
              >
                0
              </span>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow mt-4">
          <h3>Fill Up The Price</h3>
          <br />
          <Slider
            min={1}
            step={1}
            max={1000}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="success"
          />
          <div className="d-flex pt-2 pb-2 RangePrice">
            <span>
              From: <strong className="text-success">${value[0]}</strong>
            </span>
            <span className="RangePriceSpanMargin">
              To: <strong className="text-success">${value[1]}</strong>
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
            <FilterAltOutlined/> Filter
          </Button>
          </div>
        </div>
        <img src={BannerImg} style={{marginTop:"30px", borderRadius:"10px", width:"100%", cursor:"pointer"}} />
      </div>
    </>
  );
};

export default SideBar;
