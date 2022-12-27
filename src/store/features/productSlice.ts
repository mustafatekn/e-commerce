import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product, ProductState } from "../../types";

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
      state.cart.push({ product: action.payload, quantity: 1 });
    },
    incrementQuantity : (state, action:PayloadAction<CartItem>) => {
        const index = state.cart.findIndex((i:CartItem) => i.product.id === action.payload.product.id);
        if(index === -1) return;
        ++state.cart[index].quantity;
    }
  },
});

export const { setProducts, setBrands, setModels, addToCart, incrementQuantity } =
  productSlice.actions;
export default productSlice.reducer;
