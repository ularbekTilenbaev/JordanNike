import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [],
    categoryMan:[],
    categoryWoman:[],
    categoryKids:[],
    sale:[]
};

export const addProductSlice = createSlice({
    name: "ADD_PRODUCT",
    initialState,
    reducers: {
        addProduct(state, action) {
            state.product = [...state.product, action.payload];
            localStorage.setItem("product", JSON.stringify(state.product)); 
        },
        categoryProduct( state,){
            state.categoryMan = state.product.filter((el) => el.category === "man");
            state.categoryWoman = state.product.filter((el) => el.category === "woman");
            state.categoryKids = state.product.filter((el) => el.category === "kids");
        },
        saleProduct(state,action) {
        let filterSale = state.product.filter((el)=> el.price >= 300)
        state.sale = filterSale.map((el) =>{
        return{...el, oldPrice: el.price, price: el.price - el.price / 100 * 30}
        })
        }
    }
});


export const { addProduct, categoryProduct, categoryWoman,categoryKids, saleProduct, oldPrice } = addProductSlice.actions;
export default addProductSlice.reducer;

