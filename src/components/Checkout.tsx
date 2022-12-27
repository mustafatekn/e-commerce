import { useCalculateTotalPrice } from "../hooks/useCalculateTotalPrice";

export default function Checkout() {
    const totalPrice = useCalculateTotalPrice();

    return (
        <div className="my-2 w-64">
            <small className="text-slate-500">Checkout</small>
            <div className="shadow-md bg-white px-5 py-4 my-2 space-y-2">
                <div className="mb-1">Total Price: <span className="text-primary-blue font-bold">{totalPrice} ₺</span></div>
                <button type="button" className="bg-primary-blue text-white w-full rounded-md py-1">Checkout</button>
            </div>
        </div>
    )
}
