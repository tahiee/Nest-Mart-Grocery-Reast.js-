import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const QuantityBox = () => {
    const [InputRef, setinputRef] = useState(1);

  const plusOne = () => {
    setinputRef(InputRef + 1);
  };

  const minusOne = () => {
    setinputRef(InputRef - 1);
  };
  return (
    <>
      <div className="addCartSection pt-3 pb-3 d-flex align-items-center">
        <div className="counterSection">
          <input type="number" value={InputRef} />
          <span className="arrow plus" onClick={plusOne}>
            <KeyboardArrowUpIcon />
          </span>
          <span className="arrow minus" onClick={minusOne}>
            <KeyboardArrowDownIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default QuantityBox;
