import React, { useState } from "react";
import { addProduct } from "../../redux/AddProductSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addproduct = () => {
  const [productImg, setProductImg] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCotegory] = useState("");

  const dispatch = useDispatch();

  const messengError = () =>
    toast.error("🦄 Заполните пустые ячейки таблицы !!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const messengSuccess = () =>
    toast.success("🦄 Товар успешно добавлен !!!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const createProduct = () => {
    if (
      productImg.trim() === "" ||
      productName.trim() === "" ||
      productPrice.trim() === ""
    ) {
      return messengError();
    } else {
      let newProduct = {
        id: Date.now(),
        img: productImg,
        name: productName,
        price: productPrice,
        category: productCategory,
      };
      console.log(newProduct);

      setProductImg("");
      setProductName("");
      setProductPrice("");
      messengSuccess();
      return dispatch(addProduct(newProduct));
    }
  };

  return (
    <div id="AddPro">
      <div className="container">
        <div className=" w-[50%] flex items-center justify-center flex-col mx-auto mt-[100px]">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tex"
              onChange={(e) => setProductImg(e.target.value)}
              value={productImg}
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product IMG
            </label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tex"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product NAME
            </label>
          </div>

          <div className=" flex items-center justify-between w-full">
            <div class="relative z-0 w-[100%] mb-5 group">
              <input
                type="tex"
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Product PRICE
              </label>
            </div>
            <select
              onChange={(e) => setProductCotegory(e.target.value)}
              className=" bg-black text-[#0000ff] text-xl outline-none"
            >
              <option value="" selected>
                Category:
              </option>
              <option value="man">MAN</option>
              <option value="woman">WOMAN</option>
              <option value="kids">KIDS</option>
            </select>
          </div>
        </div>

        <div>
          <button
            onClick={() => createProduct()}
            type="submit"
            class="w-[20%] flex items-center justify-center mt-10 mx-auto px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Addproduct;
