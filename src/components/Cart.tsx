import { useAppDispatch, useAppSelector } from "../store"
import { decrementQuantity, incrementQuantity } from "../store/features/productSlice";
import { CartItem } from "../types";

export default function Cart() {
  const cart = useAppSelector(state => state.products.cart);
  const dispatch = useAppDispatch();

  const handleIncrement = (cartItem: CartItem) => {
    dispatch(incrementQuantity(cartItem));
  }

  const handleDecrement = (cartItem: CartItem) => {
    dispatch(decrementQuantity(cartItem));
  }

  return (
    <div className="my-2 md:w-48 lg:w-56 xl:w-64">
      <small className="text-slate-500">Cart</small>
      <div className="shadow-md bg-white px-5 py-2 my-2 space-y-2">
        {cart.length > 0 ? cart.map((item: CartItem, index: number) => (
          <div className="flex justify-between items-center" key={index}>
            <div className="flex flex-col">
              <span className="text-xs xl:text-base">{item.product.name}</span>
              <small className="text-primary-blue font-bold">{item.product.price} ₺</small>
            </div>
            <div className="flex items-center">
              <button className="w-5 h-5 xl:h-7 xl:w-7 bg-slate-200 rounded-sm" type="button" onClick={() => handleDecrement(item)}>-</button>
              <span className="w-5 h-5 xl:h-7 xl:w-7 bg-primary-blue text-white text-sm flex items-center justify-center">{item.quantity}</span>
              <button className="w-5 h-5 xl:h-7 xl:w-7 bg-slate-200 rounded-sm" type="button" onClick={() => handleIncrement(item)}>+</button>
            </div>
          </div>
        )) : (
          <div className="h-20">
            <span className="text-sm text-gray-500">Your cart is empty.</span>
          </div>
        )}
      </div>
    </div>
  )
}
