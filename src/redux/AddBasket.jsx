import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket:[],
};

 const basketSlice = createSlice({
  name: "ADD_BASKET",
  initialState,
  reducers: {
    addToBasket(state, action) {
      state.basket = [...state.basket, action.payload];
      
    },
  },
});

export const { addToBasket  } = basketSlice.actions;
export default basketSlice.reducer;
