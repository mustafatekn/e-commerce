import { useAppSelector } from "../store"

export default function Model() {
  const models = useAppSelector(state => state.products.models);

  return (
    <div className="my-2 w-64">
      <small className="text-slate-500">Model</small>
      <div className="shadow-md bg-white py-2 my-2 pl-3">
        <div className="relative flex items-center flex-1 pr-3">
          <input type="text" className="bg-slate-50 inline-block w-full px-7 py-1 rounded-sm my-1" placeholder="Search" />
          <svg role="img" className="w-4 h-4 inline-block absolute left-2">
            <use xlinkHref="/assets/sprite.svg#search" />
          </svg>
        </div>
        <div className="overflow-y-scroll custom-scrollbar h-48">
          {models.length > 0 && models.map((model: String, index: number) => (
            <div key={index}><input type="checkbox" /><label className="ml-2">{model}</label></div>
          ))}
        </div>

      </div>
    </div>
  )
}
