import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "../../types";

const initialState: ProductState = {
  products: [],
  brands: [],
  models: [],
  cart: [],
};

export const productSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setBrands: (state, action: PayloadAction<String[]>) => {
      state.brands = action.payload;
    },
    setModels: (state, action: PayloadAction<String[]>) => {
      state.models = action.payload;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
  },
});

export const { setProducts, setBrands, setModels, addToCart } = productSlice.actions;
export default productSlice.reducer;
