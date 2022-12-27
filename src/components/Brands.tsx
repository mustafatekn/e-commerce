import { useAppSelector } from "../store"

export default function Brands() {
  const brands = useAppSelector(state => state.products.brands);

  return (
    <div className="my-2 w-64">
      <small className="text-slate-500">Brands</small>
      <div className="shadow-md bg-white px-5 py-2 my-2 h-48 overflow-scroll">
        <div className="relative flex items-center flex-1">
          <input type="text" className="bg-slate-50 inline-block w-full px-7 py-1 rounded-sm my-1" placeholder="Search" />
          <svg role="img" className="w-4 h-4 inline-block absolute left-2">
            <use xlinkHref="/assets/sprite.svg#search" />
          </svg>
        </div>
        {brands.length > 0 && brands.map((brand: String, index: number) => (
          <div key={index}><input type="checkbox" /><label className="ml-2">{brand}</label></div>
        ))}
      </div>
    </div>
  )
}
