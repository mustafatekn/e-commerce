import { useAppSelector } from "../store"
import { CartItem } from "../types";

export default function Cart() {
  const cart = useAppSelector(state => state.products.cart);

  return (
    <div className="my-2 w-64">
      <small className="text-slate-500">Cart</small>
      <div className="shadow-md bg-white px-5 py-2 my-2 space-y-2">
        {cart.length > 0 && cart.map((item: CartItem) => (
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span>{item.product.name}</span>
              <small className="text-primary-blue font-bold">{item.product.price} ₺</small>
            </div>
            <div className="flex items-center">
              <button className="h-8 w-7 bg-slate-200 rounded-sm" type="button">-</button>
              <span className="bg-primary-blue text-white h-8 flex items-center px-3">1</span>
              <button className="h-8 w-7 bg-slate-200 rounded-sm" type="button">+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
