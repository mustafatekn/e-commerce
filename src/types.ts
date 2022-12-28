import { ReactNode } from "react";

export interface IDefaultLayoutProps {
  children: ReactNode;
}

export interface IProductCardProps {
  product: Product;
}

export interface IBoxProps {
  type: string;
}

export interface IPaginationProps {
  productsPerPage: number;
  totalProductCount: number;
  setCurrentPage: Function;
  currentPage: number;
}

export interface ProductState {
  products: Product[];
  brands: String[];
  models: String[];
  cart: CartItem[];
  searchedProducts: Product[];
  searchedBrands: String[];
  searchedModels: String[];
  selectedBrands: String[];
  selectedModels: String[];
  filteredProducts: Product[];
  showCart: boolean
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Products {
  data: {
    products: Product[];
  };
}
export interface Product {
  createdAt: Date;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
}
