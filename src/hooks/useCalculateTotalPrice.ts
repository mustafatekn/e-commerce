import { useAppSelector } from "../store";
import { CartItem } from "../types";

export const useCalculateTotalPrice = () => {
  const cart = useAppSelector((state) => state.products.cart);

  let total = 0;
  cart.forEach((item: CartItem) => {
    total += parseInt(item.product.price) * item.quantity;
  });
  return total;
};
