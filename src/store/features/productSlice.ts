import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product, ProductState } from "../../types";

const initialState: ProductState = {
  products: [],
  brands: [],
  models: [],
  cart: [],
  searchedProducts: [],
  searchedBrands: [],
  searchedModels: [],
  selectedBrands: [],
  selectedModels: [],
  filteredProducts: [],
  showCart: false,
  showFilter: false
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
    setSearchedBrands: (state, action: PayloadAction<String>) => {
      state.searchedBrands = state.brands.filter((brand: String) =>
        brand.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setSearchedModels: (state, action: PayloadAction<String>) => {
      state.searchedModels = state.models.filter((brand: String) =>
        brand.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    sortProducts: (state, action: PayloadAction<String>) => {
      switch (action.payload) {
        case "lowToHigh":
          state.products.sort(
            (a: Product, b: Product) => parseInt(a.price) - parseInt(b.price)
          );
          state.searchedProducts.sort(
            (a: Product, b: Product) => parseInt(a.price) - parseInt(b.price)
          );
          break;
        case "highToLow":
          state.products.sort(
            (a: Product, b: Product) => parseInt(b.price) - parseInt(a.price)
          );
          state.searchedProducts.sort(
            (a: Product, b: Product) => parseInt(b.price) - parseInt(a.price)
          );
          break;
        case "newToOld":
          state.products.sort((a: Product, b: Product) =>
            a.createdAt > b.createdAt ? 1 : -1
          );
          state.searchedProducts.sort((a: Product, b: Product) =>
            a.createdAt > b.createdAt ? 1 : -1
          );
          break;
        case "oldToNew":
          state.products.sort((a: Product, b: Product) =>
            b.createdAt > a.createdAt ? 1 : -1
          );
          state.searchedProducts.sort((a: Product, b: Product) =>
            b.createdAt > a.createdAt ? 1 : -1
          );
          break;
      }
    },
    addSelectedBrand: (state, action: PayloadAction<String>) => {
      if (!state.selectedBrands.includes(action.payload))
        state.selectedBrands.push(action.payload);
    },
    removeSelectedBrand: (state, action: PayloadAction<String>) => {
      state.selectedBrands = state.selectedBrands.filter(
        (i) => i !== action.payload
      );
    },
    addSelectedModel: (state, action: PayloadAction<String>) => {
      if (!state.selectedModels.includes(action.payload))
        state.selectedModels.push(action.payload);
    },
    removeSelectedModel: (state, action: PayloadAction<String>) => {
      state.selectedModels = state.selectedModels.filter(
        (i) => i !== action.payload
      );
    },
    filterProducts: (state) => {
      if (state.searchedProducts.length > 0) {
        state.filteredProducts = state.searchedProducts.filter(
          (product: Product) =>
            state.selectedBrands.includes(product.brand) &&
            state.selectedModels.includes(product.model)
        );
      } else {
        if (
          state.selectedBrands.length > 0 &&
          state.selectedModels.length > 0
        ) {
          state.filteredProducts = state.products.filter(
            (product: Product) =>
              state.selectedModels.includes(product.model) ||
              state.selectedBrands.includes(product.brand)
          );
        } else if (
          !(state.selectedBrands.length > 0) &&
          state.selectedModels.length > 0
        ) {
          state.filteredProducts = state.products.filter((product: Product) =>
            state.selectedModels.includes(product.model)
          );
        } else if (
          state.selectedBrands.length > 0 &&
          !(state.selectedModels.length > 0)
        ) {
          state.filteredProducts = state.products.filter((product: Product) =>
            state.selectedBrands.includes(product.brand)
          );
        }
      }
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    toggleFilter: (state) => {
      state.showFilter = !state.showFilter
    }
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
  setSearchedProducts,
  setSearchedBrands,
  setSearchedModels,
  sortProducts,
  addSelectedBrand,
  removeSelectedBrand,
  addSelectedModel,
  removeSelectedModel,
  filterProducts,
  toggleCart,
  toggleFilter
} = productSlice.actions;
export default productSlice.reducer;
