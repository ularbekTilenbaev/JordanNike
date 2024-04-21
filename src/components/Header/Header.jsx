import React from 'react';
import logo from '../../assets/img/logos.svg'
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import "../../assets/style/Header.css"



const Header = () => {
    return (
        <div id='header' className='py-[10px] sticky top-0'>
            <div className="container">
                <div className=" flex items-center justify-between ">
                    <img src={logo} alt="img" />
                 <div className='text-white flex gap-[5pc] font-black text-2xl tracking-[3px] m-10 '>
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/man"}>MAN</Link>
                    <Link to={"/woman"}>WOMAN</Link>
                    <Link to={"/kids"}>KIDS</Link>
                    <Link to={"/sale"}>SALE</Link>
                 </div>
                 <div className='flex text-white text-3xl gap-[15px]'>

                    <a>
                 <CiSearch />
                    </a>

                    <Link to={"/basket"}>
                 <SlBasket />
                    </Link>
                 </div>


                </div>
            </div>
            
        </div>
    );
};

export default Header;