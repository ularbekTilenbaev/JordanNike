import React from "react";

const BasketCart = ({ el }) => {
  return (
    <div className="flex items-center justify-center  mt-[90px] gap-8">
      <div class="flex flex-col items-center  w-full h-[500px]  bg-white border border-gray-1000 rounded-lg shadow md:flex-row md:max-w-7xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          class="object-cover rounded-t-lg  md:h-[550px] md: w-[550px]  p-10 md:rounded-none md:rounded-s-lg"
          src={el.img}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-5xl  font-bold tracking-tight text-green-500 dark:text-white">
            {el.name}
          </h5>
          <p class="mb-3 text-3xl font-normal text-green-500 dark:text-gray-400">
            {el.price} $
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketCart;
