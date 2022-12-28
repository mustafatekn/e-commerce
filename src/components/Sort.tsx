import { useState } from "react"
import { useAppDispatch } from "../store";
import { sortProducts } from "../store/features/productSlice";

export default function Sort() {
  const [sortMethod, setSortMethod] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (method:string) => {
    setSortMethod(method);
    dispatch(sortProducts(method))
  };

  return (
    <div className="my-2 md:w-48 lg:w-56 xl:w-64 text-sm xl:text-base">
      <small className="text-slate-500">Sort By</small>
      <div className="shadow-md bg-white px-5 py-2 my-2">
        <div><input type="radio" className="border-primary-blue accent-white focus:ring-transparent" onChange={(e) => e.target.checked && handleChange("oldToNew")} checked={sortMethod === 'oldToNew'} id="oldToNew" /><label htmlFor="oldToNew" className="ml-2 cursor-pointer">Old to new</label></div>
        <div><input type="radio" className="border-primary-blue accent-white focus:ring-transparent" onChange={(e) => e.target.checked && handleChange("newToOld")} checked={sortMethod === 'newToOld'} id="newToOld" /><label htmlFor="newToOld" className="ml-2 cursor-pointer">New to old</label></div>
        <div><input type="radio" className="border-primary-blue accent-white focus:ring-transparent" onChange={(e) => e.target.checked && handleChange("highToLow")} checked={sortMethod === 'highToLow'} id="highToLow" /><label htmlFor="highToLow" className="ml-2 cursor-pointer">Price high to low</label></div>
        <div><input type="radio" className="border-primary-blue accent-white focus:ring-transparent" onChange={(e) => e.target.checked && handleChange("lowToHigh")} checked={sortMethod === 'lowToHigh'} id="lowToHigh" /><label htmlFor="lowToHigh" className="ml-2 cursor-pointer">Price low to high</label></div>
      </div>
    </div>
  )
}
