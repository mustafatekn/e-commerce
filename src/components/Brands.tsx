import { useAppDispatch, useAppSelector } from "../store"
import { addSelectedBrand, filterProducts, removeSelectedBrand, setSearchedBrands } from "../store/features/productSlice";
import { useState } from 'react'
export default function Brands() {
  const [searchText, setSearchText] = useState("");
  const brands = useAppSelector(state => state.products.brands);
  const searchedBrands = useAppSelector(state => state.products.searchedBrands);

  const dispatch = useAppDispatch();

  return (
    <div className="my-2 w-64">
      <small className="text-slate-500">Brands</small>
      <div className="shadow-md bg-white pl-3 py-2 my-2">
        <div className="relative flex items-center flex-1 pr-3">
          <input type="text" className="bg-slate-50 inline-block w-full px-7 py-1 rounded-sm my-1" placeholder="Search" onChange={(e) => {
            setSearchText(e.target.value)
            dispatch(setSearchedBrands(e.target.value))
          }} />
          <svg role="img" className="w-4 h-4 inline-block absolute left-2">
            <use xlinkHref="/assets/sprite.svg#search" />
          </svg>
        </div>
        <div className="overflow-y-scroll custom-scrollbar h-48">
          {searchText ? searchedBrands.map((brand: String, index: number) => (
            <div key={index}><input type="checkbox" onChange={(e) => {
              if (e.target.checked) {
                dispatch(addSelectedBrand(brand))
                dispatch(filterProducts)
              } else {
                dispatch(removeSelectedBrand(brand))
                dispatch(filterProducts)
              }
            }} /><label className="ml-2">{brand}</label></div>
          )) : brands.length > 0 && brands.map((brand: String, index: number) => (
            <div key={index}><input type="checkbox" onChange={(e) => {
              if (e.target.checked) {
                dispatch(addSelectedBrand(brand))
                dispatch(filterProducts())
              } else {
                dispatch(removeSelectedBrand(brand))
                dispatch(filterProducts())
              }
            }} /><label className="ml-2">{brand}</label></div>
          ))}
        </div>

      </div>
    </div>
  )
}
