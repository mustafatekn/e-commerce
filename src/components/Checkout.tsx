import { useAppSelector } from "../store"
import { CartItem } from "../types"

export default function Checkout() {
    const cart = useAppSelector(state => state.products.cart);

    const calculateTotalPrice = () => {
        let total = 0;
        cart.forEach((item: CartItem) => {
            total += parseInt(item.product.price) * item.quantity
        })
        return total;
    }

    return (
        <div className="my-2 w-64">
            <small className="text-slate-500">Checkout</small>
            <div className="shadow-md bg-white px-5 py-4 my-2 space-y-2">
                <div className="mb-1">Total Price: <span className="text-primary-blue font-bold">{calculateTotalPrice()} ₺</span></div>
                <button type="button" className="bg-primary-blue text-white w-full rounded-md py-1">Checkout</button>
            </div>
        </div>
    )
}
