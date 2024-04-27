import React from "react";
import logoBg from "../../assets/img/bg with shoe edited in photoshop.png";
import logo2 from "../../assets/img/kross.png";
import { useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Home = () => {
  const nav = useNavigate();
  return (
    <div
      id="home"
      style={{
        background: `url("${logoBg}")no-repeat center/cover`,
        height: "90vh",
      }}
    >
      <div className="container">
        <div className="">
          <div className="flex items-center justify-between pt-[700px]">
            <div className="">
              <h2 className="text-white text-2xl font black">
                CHOOSE COLOR : {""}
              </h2>
              <Zoom>
                <img src={logo2} alt="img" className="flex ml-[-80px]" />
              </Zoom>
            </div>
            <div className=" flex text-2xl gap-10 ml-[-9pc]">
              <button
                onClick={() => nav("/addProduct")}
                className="bg-white text-black py-[10px] px-[30px]"
              >
                ADD TO CART
              </button>
              <button
                onClick={() => nav("/buynow")}
                className="bg-black text-white py-[10px] px-[30px] border-2 border-inherit"
              >
                BUY NOW
              </button>
            </div>
            <div className="">
              <h2 className="text-white text-2xl font black ">INSPIRATION</h2>
              <p className="text-white text-[15px]">
                Inspired by the design of the latest Air Jordan game shoe,{""}
                <br /> the Jordan Jumpman 2021 helps up-and-coming players {""}
                <br /> level up their game. flex items-center justify-between
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
