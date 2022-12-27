import { useEffect } from "react";
import Brands from "../components/Brands";
import Cart from "../components/Cart";
import Model from "../components/Model";
import ProductCard from "../components/ProductCard";
import Sort from "../components/Sort";
import DefaultLayout from "../layouts/DefaultLayout";
import { getProducts } from "../services/productService";
import { useAppDispatch, useAppSelector } from "../store";
import { setProducts } from "../store/features/productSlice";
import { Product } from "../types";

export default function Products() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.products);

  useEffect(() => {
    (async () => {
      try {
        const products = await getProducts();
        dispatch(setProducts(products.data));
      } catch (error) {
        console.log(error);
      }
    })();
    //eslint-disable-next-line
  }, [])
  return (
    <DefaultLayout>
      <div className="container mx-auto pt-5">
        <div className="flex">
          <div className="w-60">
            <Sort />
            <Brands />
            <Model />
          </div>
          <div className="grid grid-cols-3 flex-1 gap-y-5">
            {products.length > 0 && products.map((product: Product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <div className="w-60">
            <Cart />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
