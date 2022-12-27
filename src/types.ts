import { ReactNode } from "react";

export interface IDefaultLayoutProps {
  children: ReactNode;
}

export interface IProductCardProps{
    product: Product
}

export interface ProductState {
  products: Product[];
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
