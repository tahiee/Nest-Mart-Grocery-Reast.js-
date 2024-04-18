import React, { useState } from "react";
import "../selectDrop/selectDrop.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Key } from "@mui/icons-material";

const SelectDrop = ({ data, placeholder, icon }) => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectIndex, setselectIndex] = useState(0);
  const [selectItem, setselectItem] = useState(placeholder);

  const [listData, setListData] = useState(data);
  const [listData2, setListData2] = useState(data);
  const theOpener = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const closeSelects = (index, name) => {
    setselectIndex(index);
    setisOpenSelect(false);
    setselectItem(name);
  };
  const myListData = (e) => {
    const keyword = e.target.value.toLowerCase();
    const list = listData2.filter((item) => {
      return item.toLowerCase().includes(keyword);
    });
    const list2 = list.filter((item, index) => list.indexOf(item) === index);
    setListData(list2);
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
        <div className="selectDrop cursor position-relative">
          {icon}

          <span className="openSelector" onClick={theOpener}>
            {selectItem.length > 14
              ? selectItem.substr(0, 14) + "..."
              : selectItem}{" "}
            <ExpandMoreIcon className="downArrow" />
          </span>

          {isOpenSelect === true && (
            <div className="select">
              <div className="searchField">
                <input
                  type="text"
                  placeholder="Search here..."
                  onChange={myListData}
                />
              </div>

              <ul className="searchResult">
                {listData.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => closeSelects(index, item)}
                      className={`${selectIndex === index ? "active" : ""}`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </>
  );
};

export default SelectDrop;
