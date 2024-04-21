import React from "react";
import { useSelector } from "react-redux";
import BasketCart from "./BasketCart/BasketCart";

const Basket = () => {
  const  {basket}  = useSelector((s) => s.basketSlice);
  console.log(basket);
  return (
    <div id="">
      <div className="container">
        <div className="">
          {basket.map((el) => <BasketCart el={el}/>)}
        </div>
      </div>
    </div>
  );
};

export default Basket;
