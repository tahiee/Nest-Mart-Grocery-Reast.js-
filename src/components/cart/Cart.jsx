import React, { useState } from "react";
import "./cart.css";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { Link } from "react-router-dom";
import Img1 from "../../images/popular/product-3-1.jpg";
import Img2 from "../../images/popular/product-4-1.jpg";
import Img3 from "../../images/popular/product-6-1.jpg";
import Rating from "@mui/material/Rating";
import { Button } from "react-bootstrap";
import Quantity from "../quantityBox/Quantity";
const Cart = () => {
  return (
    <>
      <div
        className="listingPage"
        style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
          marginTop: "10px",
          padding: "0px",
        }}
      >
        <div className="container-fluid">
          <ul className="list list-inline breadCrumb2 breadCrumb3">
            <li className="list-inline-item">
              <Link to={"/"}>Home </Link>/
            </li>
            <li className="list-inline-item">
              <Link className="text-capitalize">Shop </Link>/
            </li>
            <li className="list-inline-item">
              <Link className="text-capitalize">Cart</Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="CartSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="d-flex align-items-center w-100">
                <div className="left">
                  <h1 className="hd md-0">Your Cart</h1>
                  <p>
                    There are <span className="text-g">3</span> Products in your
                    Cart
                  </p>
                </div>

                <span
                  className="clearCart d-flex align-items-center"
                  style={{
                    marginLeft: "auto",
                    cursor: "pointer",
                  }}
                >
                  <RestoreFromTrashIcon />
                  Clear Cart
                </span>
              </div>

              <div className="cartWrapper mt-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead style={{background:"red"}}>
                      <tr>
                        <th>Products</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center ">
                            <div className="img">
                              <img
                                src={Img1}
                                alt="cartImg1"
                                className="w-100"
                              />
                            </div>
                            <div
                              className="info"
                              style={{
                                paddingLeft: "1.2rem",
                                alignItems: "center",
                              }}
                            >
                              <Link>
                                <h4 style={{ fontSize: "18px" }}>
                                  Veggies Pops Supper Snacks
                                </h4>
                              </Link>
                              <div className="d-flex align-items-center">
                                <Rating
                                  name="half-rating-read"
                                  value={4.5}
                                  precision={0.5}
                                  readOnly
                                  style={{ fontSize: "18px" }}
                                />
                                <span
                                  className="text-light"
                                  style={{ marginLeft: "5px" }}
                                >
                                  (4.6)
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span style={{ fontSize: "20px", fontWeight: "500" }}>
                            $3.51
                          </span>
                        </td>
                        <td>
                          {/* quantityBox */}
                          <Quantity />
                        </td>
                        <td>
                          <span
                            className="text-g"
                            style={{ fontWeight: "700", fontSize: "22px" }}
                          >
                            $3.51
                          </span>
                        </td>
                        <td>
                          <span className="cursor">
                            <RestoreFromTrashIcon />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center ">
                            <div className="img">
                              <img
                                src={Img2}
                                alt="cartImg1"
                                className="w-100"
                              />
                            </div>
                            <div
                              className="info"
                              style={{
                                paddingLeft: "1.2rem",
                                alignItems: "center",
                              }}
                            >
                              <Link>
                                <h4 style={{ fontSize: "18px" }}>
                                  Veggies Pops Supper Snacks
                                </h4>
                              </Link>
                              <div className="d-flex align-items-center">
                                <Rating
                                  name="half-rating-read"
                                  value={4.5}
                                  precision={0.5}
                                  readOnly
                                  style={{ fontSize: "18px" }}
                                />
                                <span
                                  className="text-light"
                                  style={{ marginLeft: "5px" }}
                                >
                                  (4.6)
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span style={{ fontSize: "20px", fontWeight: "500" }}>
                            $4.81
                          </span>
                        </td>
                        <td>
                          {/* quantity box */}
                          <Quantity />
                        </td>
                        <td>
                          <span
                            className="text-g"
                            style={{ fontWeight: "700", fontSize: "22px" }}
                          >
                            $4.81
                          </span>
                        </td>
                        <td>
                          <span className="cursor">
                            <RestoreFromTrashIcon />
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center ">
                            <div className="img">
                              <img
                                src={Img3}
                                alt="cartImg1"
                                className="w-100"
                              />
                            </div>
                            <div
                              className="info"
                              style={{
                                paddingLeft: "1.2rem",
                                alignItems: "center",
                              }}
                            >
                              <Link>
                                <h4 style={{ fontSize: "18px" }}>
                                  Veggies Pops Supper Snacks
                                </h4>
                              </Link>
                              <div className="d-flex align-items-center">
                                <Rating
                                  name="half-rating-read"
                                  value={4.5}
                                  precision={0.5}
                                  readOnly
                                  style={{ fontSize: "18px" }}
                                />
                                <span
                                  className="text-light"
                                  style={{ marginLeft: "5px" }}
                                >
                                  (4.6)
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span style={{ fontSize: "20px", fontWeight: "500" }}>
                            $2.51
                          </span>
                        </td>
                        <td>
                          {/* qunatity box */}
                          <Quantity />
                        </td>
                        <td>
                          <span
                            className="text-g"
                            style={{ fontWeight: "700", fontSize: "22px" }}
                          >
                            $2.51
                          </span>
                        </td>
                        <td>
                          <span className="cursor">
                            <RestoreFromTrashIcon />
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-md-5 pl-5 cartRightBox">
              <div className="card p-4">
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0 text-light">Subtotal</h5>
                  <h4
                    className=""
                    style={{ marginLeft: "auto", marginBottom: "0px" }}
                  >
                    <span className="text-g">$12.51</span>
                  </h4>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0 text-light">Shipping</h5>
                  <h4
                    className=""
                    style={{ marginLeft: "auto", marginBottom: "0px" }}
                  >
                    <span className="">Free</span>
                  </h4>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0 text-light">Estimate for</h5>
                  <h4
                    className=""
                    style={{ marginLeft: "auto", marginBottom: "0px" }}
                  >
                    <span className="">Pakistan</span>
                  </h4>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h5 className="mb-0 text-light">Total</h5>
                  <h4
                    className=""
                    style={{ marginLeft: "auto", marginBottom: "0px" }}
                  >
                    <span className="text-g">$32.51</span>
                  </h4>
                </div>
                <Button className="btn-g btn-lg">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
