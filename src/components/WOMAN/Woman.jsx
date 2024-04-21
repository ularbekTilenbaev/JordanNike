import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryProduct } from '../../redux/AddProductSlice';
import BuyCart from '../BuyNow/BuyCart/BuyCart';

const Woman = () => {
    const {categoryWoman} = useSelector((s) => s.addProductSlice)
    console.log(categoryWoman);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(categoryProduct())
    },[])
    return (
        <div id='Woman'>
            <div className="cotainer">
                <div className="flex items-center justify-center mx-auto flex-wrap gap-[90px]">
                    {
                    categoryWoman.map((el) => <BuyCart el={el}/>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Woman;