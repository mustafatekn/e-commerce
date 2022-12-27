export default function Sort() {
  return (
    <div className="my-2 w-64">
      <small className="text-slate-500">Sort By</small>
      <div className="shadow-md bg-white px-5 py-2 my-2">
        <div><input type="radio" /><label className="ml-2">Old to new</label></div>
        <div><input type="radio" /><label className="ml-2">New to old</label></div>
        <div><input type="radio" /><label className="ml-2">Price high to low</label></div>
        <div><input type="radio" /><label className="ml-2">Price low to high</label></div>
      </div>
    </div>
  )
}
