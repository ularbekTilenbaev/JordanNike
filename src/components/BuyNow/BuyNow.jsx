
import React from 'react';
import { useSelector } from 'react-redux';
import BuyCart from './BuyCart/BuyCart';

const BuyNow = () => {
    const { product } = useSelector(state => state.addProductSlice);

    return (
        <div id='buynow'>
            <div className="container">
                <div className="flex items-center justify-center mx-auto flex-wrap  gap-[90px]">
                    {product.map((el, index) => (
                        <BuyCart key={index} el={el} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuyNow;
