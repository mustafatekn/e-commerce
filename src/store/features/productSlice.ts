import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "../../types";

const initialState: ProductState = {
  products: [],
  brands: [],
  models: [],
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
  },
});

export const { setProducts, setBrands, setModels } = productSlice.actions;
export default productSlice.reducer;
