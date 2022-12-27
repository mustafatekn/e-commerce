import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product, ProductState } from "../../types";

const initialState: ProductState = {
  products: [],
  brands: [],
  models: [],
  cart: [],
  searchedProducts: [],
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
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cart = action.payload;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const index = state.cart.findIndex(
        (i: CartItem) => i.product.id === action.payload.id
      );
      if (index === -1)
        state.cart.push({ product: action.payload, quantity: 1 });
      else ++state.cart[index].quantity;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementQuantity: (state, action: PayloadAction<CartItem>) => {
      const index = state.cart.findIndex(
        (i: CartItem) => i.product.id === action.payload.product.id
      );
      ++state.cart[index].quantity;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action: PayloadAction<CartItem>) => {
      const index = state.cart.findIndex(
        (i: CartItem) => i.product.id === action.payload.product.id
      );
      if (state.cart[index].quantity === 1) {
        const filteredCart = state.cart.filter(
          (i: CartItem) => i.product.id !== action.payload.product.id
        );
        state.cart = [...filteredCart];
      } else --state.cart[index].quantity;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setSearchedProducts: (state, action: PayloadAction<String>) => {
      state.searchedProducts = state.products.filter((product: Product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const {
  setProducts,
  setBrands,
  setModels,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  setCart,
  setSearchedProducts
} = productSlice.actions;
export default productSlice.reducer;
