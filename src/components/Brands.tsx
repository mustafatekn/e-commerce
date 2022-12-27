export default function Brands() {
  return (
    <div className="my-2 w-64">
      <small className="text-slate-500">Brands</small>
      <div className="shadow-md bg-white px-5 py-2 my-2">
        <div className="relative flex items-center flex-1">
          <input type="text" className="bg-slate-50 inline-block w-full px-7 py-1 rounded-sm my-1" placeholder="Search" />
          <svg role="img" className="w-4 h-4 inline-block absolute left-2">
            <use xlinkHref="/assets/sprite.svg#search" />
          </svg>
        </div>
        <div><input type="checkbox" /><label className="ml-2">Old to new</label></div>
        <div><input type="checkbox" /><label className="ml-2">New to old</label></div>
        <div><input type="checkbox" /><label className="ml-2">Price high to low</label></div>
        <div><input type="checkbox" /><label className="ml-2">Price low to high</label></div>
      </div>
    </div>
  )
}
