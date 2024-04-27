import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket:JSON.parse(localStorage.getItem("basket"))||[],
};

 const basketSlice = createSlice({
  name: "ADD_BASKET",
  initialState,
  reducers: {
    addToBasket(state, action) {
     localStorage.setItem(
      "basket",
      JSON.stringify([...state.basket, action.payload])
      );
      state.basket = [...state.basket, action.payload];
      
    },
  },
});

export const { addToBasket  } = basketSlice.actions;
export default basketSlice.reducer;
