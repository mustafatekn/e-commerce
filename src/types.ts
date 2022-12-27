import { ReactNode } from "react";

export interface IDefaultLayoutProps {
  children: ReactNode;
}

export interface IProductCardProps{
    product: Product
}

export interface IBoxProps{
    type: string
}

export interface ProductState {
  products: Product[]
  brands: String[]
  models: String[]
}

export interface Products{
    data: {
        products: Product[]
    }
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