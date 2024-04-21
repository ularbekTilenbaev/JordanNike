import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [],
    categoryMan:[],
    categoryWoman:[],
    categoryKids:[],
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
         
    }
});


export const { addProduct, categoryProduct, categoryWoman,categoryKids } = addProductSlice.actions;
export default addProductSlice.reducer;

