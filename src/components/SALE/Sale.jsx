import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductSlice, saleProduct } from '../../redux/AddProductSlice';
import BuyCart from '../BuyNow/BuyCart/BuyCart';

const Sale = () => {
    const {sale} = useSelector((s)=>s.addProductSlice)
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(saleProduct())
},[])
    return (
        <div id=''>
            <div className="container">
                <div className="flex items-center justify-center mx-auto flex-wrap  gap-[90px]">
                    {
                    sale.map((el) => <BuyCart el={el} /> )
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Sale;