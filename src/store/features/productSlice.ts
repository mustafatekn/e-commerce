import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "../../types";

const initialState: ProductState = {
  products: [],
  brands: []
};

export const productSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setBrands: (state, action) => {
        state.brands = action.payload;
    }
  },
});

export const { setProducts, setBrands } = productSlice.actions;
export default productSlice.reducer;
