import { useAppDispatch, useAppSelector } from "../store"
import { addSelectedModel, filterProducts, removeSelectedModel, setSearchedModels } from "../store/features/productSlice";
import { useState } from 'react';

export default function Models() {
  const [searchText, setSearchText] = useState("");
  const models = useAppSelector(state => state.products.models);
  const searchedModels = useAppSelector(state => state.products.searchedModels);
  const dispatch = useAppDispatch();

  return (
    <div className="my-2 md:w-48 lg:w-56 xl:w-64 text-sm xl:text-base">
      <small className="text-slate-500">Model</small>
      <div className="shadow-md bg-white py-2 my-2 pl-3">
        <div className="relative flex items-center flex-1 pr-3">
          <input type="text" className="bg-slate-50 inline-block w-full px-7 py-1 rounded-sm my-1 border-none" placeholder="Search" onChange={(e) => {
            setSearchText(e.target.value)
            dispatch(setSearchedModels(e.target.value))
          }} />
          <svg role="img" className="w-4 h-4 inline-block absolute left-2">
            <use xlinkHref="/assets/sprite.svg#search" />
          </svg>
        </div>
        <div className="overflow-y-scroll custom-scrollbar h-48">
          {searchText ? searchedModels.map((model: String, index: number) => (
            <div key={index}><input type="checkbox" className="border-primary-blue accent-white focus:ring-transparent" onChange={(e) => {
              if (e.target.checked) {
                dispatch(addSelectedModel(model))
                dispatch(filterProducts())
              } else {
                dispatch(removeSelectedModel(model))
                dispatch(filterProducts())
              }
            }} /><label className="ml-2">{model}</label></div>
          )) : models.length > 0 && models.map((model: String, index: number) => (
            <div key={index}><input type="checkbox" className="border-primary-blue accent-white focus:ring-transparent" onChange={(e) => {
              if (e.target.checked) {
                dispatch(addSelectedModel(model))
                dispatch(filterProducts())
              } else {
                dispatch(removeSelectedModel(model))
                dispatch(filterProducts())
              }
            }} /><label className="ml-2">{model}</label></div>
          ))}
        </div>
      </div>
    </div>
  )
}
