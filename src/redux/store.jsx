import { configureStore } from "@reduxjs/toolkit";
import addProductReducer from "./AddProductSlice";
import basketSlice from "./AddBasket";

export const store = configureStore({
  reducer: {
    addProductSlice: addProductReducer,
    basketSlice: basketSlice,
  },
});
