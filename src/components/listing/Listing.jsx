import { HouseOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import Product from '../product/Product'

const Listing = () => {
  
    const buttonWidth = '60px';

    return (
    <>
        <div className="listingPage">
            <div className="container-fluid">
                <div className="breadCrumb">
                    <h1>Snack</h1>
                    <ul className="list list-inline">
                        <li className="list-inline-item">
                            <Link to={"/"}><HouseOutlined/> Home </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to={''}>Shop</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to={''}>Snack</Link>
                        </li>
                    </ul>
                </div>



                <div className="listingData">
                    <div className="row">
                        <div className="col-md-3 sideBarWrapper">
                        <SideBar/>
                        </div>


                        <div className="col-md-9 rightContent homeSection">

                            <div className="topStrip d-flex aligin-items-center">
                                <p className="mb-0 mt-0">We found <span className="text-success">20 </span>items for you!</p>
                            </div>
                            <div className="product-row pl-4 pr-3 pt-0">
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                                <div className="item">
                                    <Product buttonWidth={buttonWidth}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Listing;
