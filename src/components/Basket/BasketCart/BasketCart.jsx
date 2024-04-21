import React, { useState } from "react";

const BasketCart = ({ el }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;  
  }

  return (
    <div className="container">
      <div className="m-auto">
      <a
        href="#"
        className="flex flex-col items-center m-10 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={el.img}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {" "}
            {el.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            ${el.price}
          </p>
        </div>
        <button onClick={()=> handleDelete()} type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Удалить</button>
      </a>

    </div>
    </div>
    
  );
};

export default BasketCart;
