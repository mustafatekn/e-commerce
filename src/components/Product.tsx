export default function Product() {
    return (
        <div className="bg-white rounded-md px-1 py-2 shadow-sm w-52 space-y-3">
            <div className="h-[200px] bg-slate-400 mx-auto" />
            <div className="text-primary-blue font-bold">15.000 ₺</div>
            <div className="font-bold">iPhone 13 Pro Max 256Gb</div>
            <button type="button" className="bg-primary-blue block w-full px-1 py-2 rounded-md text-white font-bold">Add to Cart</button>
        </div>
    )
}
