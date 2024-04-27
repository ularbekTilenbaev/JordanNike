import React, { useState } from "react";
import { useSelector } from "react-redux";
import BasketCart from "./BasketCart/BasketCart";
import Slider from "react-slick";
import axios from "axios";
import logo from "../../assets/img/03-05-45-320_512.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Basket = () => {
  const { basket } = useSelector((s) => s.basketSlice);
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(basket);
  const error = () => {
    toast.error("🦄 Заполните пустые ячейки !!!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const success = () => {
    toast.success("🦄 Продук успешно отправлен !!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  async function submitFromTelegram() {
    if (user.trim() === "" || phone.trim() === "5") {
      error();
    } else {
      setTimeout(() => {
        axios.post(url_api, userDate);
        setLoading(false);
      }, 1500);
      success();
      const my_id = "-1002145332721";
      const token = "6303546971:AAEbWSHVYLM5uqMeh8t41gI5EgdH4BUAIRA";
      const url_api = `https://api.telegram.org/bot${token}/sendMessage`;
      
      const userDate = {
        chat_id: my_id,
        parse_model: "html",
        text: `Заказ: 🍑 \n name:${user} \n ${phone}`,
      }
      setUser("");
      setLoading(true);
      setPhone("");
    }
  };

  return (
    <div className="container">
      <div className="">
        <div className="">
          <Slider {...settings}>
            {basket.map((el) => (
              <BasketCart el={el} />
            ))}
          </Slider>
        </div>
        <div className="">
          {loading ? <img src={logo} alt="img" className=" mx-auto" /> : null}

          <div class="relative z-0 w-full mb-5 group">
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
        </div>

        <center>
          <button
            onClick={() => submitFromTelegram()}
            type="button"
            class="text-white bg-gradient-to-br w-[150px]  from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-1xl px-5 py-2.5 text-center me-2 mb-2"
          >
            Submit
          </button>
        </center>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Basket;
