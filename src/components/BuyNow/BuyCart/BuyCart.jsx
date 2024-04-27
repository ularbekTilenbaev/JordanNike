import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../redux/AddBasket";
import { useNavigate } from "react-router-dom";

const BuyCart = ({ el }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { basket } = useSelector((s) => s.basketSlice);
  const someBasket = basket.some((some) => some.id === el.id);
  return (
    <div id="cart">
      <div className="container">
        <div className="max-w-[400px] relative bg-white border border-gray-200 rounded-lg shadow h-[550px] m-5 mt-10">
          <a href="#">
            <Zoom>
              <img
                className=" z-10 rounded-t-lg w-[550px] h-[380px]"
                src={el.img}
                alt="product image"
              />
            </Zoom>
          </a>
          <div className="px-5 pb-5">
            <div className=" flex items-center justify-between">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {el.name}
                </h5>
              </a>
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {el.category}
                </h5>
              </a>
            </div>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 ">
                  ${el.price}
                </span>
                 
              {!someBasket ? (
                <button
                  onClick={() => dispatch(addToBasket(el))}
                  className="
              text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
              py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800"
                >
                  Add to basket
                </button>
              ) : (
                <button
                  onClick={() => nav("/basket")}
                  className="
              text-white hover:bg-blue-800 focus:ring-4 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
              py-2.5 text-center bg-yellow-700
              dark:focus:ring-blue-800"
                >
                  Go to basket
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCart;
