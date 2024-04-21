import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { categoryProduct} from '../../redux/AddProductSlice';
import BuyCart from '../BuyNow/BuyCart/BuyCart';


const Kids = () => {
    const {categoryKids} = useSelector((s) => s.addProductSlice)
    console.log(categoryKids);
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(categoryProduct())
    },[])
    return (
        <div id='kids'>
            <div className="container">
                <div className=" flex items-center justify-center mx-auto gap-[90px]">
                    {categoryKids.map((el) => <BuyCart el={el}/>)}
                </div>
            </div>
            
        </div>
    );
};

export default Kids;