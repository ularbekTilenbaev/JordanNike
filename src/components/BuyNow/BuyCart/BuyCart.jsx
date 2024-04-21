import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../redux/AddBasket";

const BuyCart = ({ el }) => {
  const dispatch = useDispatch();


  return (
    <div id="cart">
      <div className="container">
        <div className="">
          <div className="max-w-[400px] bg-white border border-gray-100 rounded-lg shadow h-[600px] m-5 mt-10">
            <a href="#">
              <Zoom>
                <img
                  className="p-8 rounded-t-lg w-full"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCart;
