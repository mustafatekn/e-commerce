import { useEffect, useState } from "react";
import Brands from "../components/Brands";
import MobileCart from "../components/MobileCart";
import MobileFilter from "../components/MobileFilter";
import MobileSort from "../components/MobileSort";
import Models from "../components/Models";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import Sort from "../components/Sort";
import DefaultLayout from "../layouts/DefaultLayout";
import { getProducts } from "../services/productService";
import { useAppDispatch, useAppSelector } from "../store";
import { setBrands, setModels, setProducts } from "../store/features/productSlice";
import { Product } from "../types";

export default function Products() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const products = useAppSelector(state => state.products.products);
  const searchedProducts = useAppSelector(state => state.products.searchedProducts);
  const productsPerPage = 16;
  const totalProductCount = searchedProducts.length > 0 ? searchedProducts.length : products.length;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = searchedProducts.length > 0 ? searchedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ) : products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const dispatch = useAppDispatch();
  const selectedBrands = useAppSelector(state => state.products.selectedBrands);
  const selectedModels = useAppSelector(state => state.products.selectedModels);
  const filteredProducts = useAppSelector(state => state.products.filteredProducts);

  useEffect(() => {
    (async () => {
      try {
        const products = await getProducts();
        dispatch(setProducts(products.data));
        const brands: String[] = [];
        const models: String[] = [];
        products.data.forEach((product: Product) => {
          if (!brands.includes(product.brand)) brands.push(product.brand)
          if (!models.includes(product.model)) models.push(product.model);
        })
        dispatch(setBrands(brands));
        dispatch(setModels(models));
      } catch (error) {
        console.log(error);
      }
    })();
    //eslint-disable-next-line
  }, [])

  return (
    <DefaultLayout>
      <MobileCart/>
      <MobileFilter/>
      <MobileSort/>
      <div className="hidden lg:block">
        <Sort />
        <Brands />
        <Models />
      </div>
      <div className="w-full px-10 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-1 gap-6 lg:mx-6">
          {(selectedBrands.length > 0 || selectedModels.length > 0) ? filteredProducts.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          )) : currentProducts.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        {currentProducts.length > 0 && <Pagination currentPage={currentPage} setCurrentPage={(currentPage: number) => setCurrentPage(currentPage)} productsPerPage={productsPerPage} totalProductCount={totalProductCount} />}
      </div>
    </DefaultLayout>
  )
}
