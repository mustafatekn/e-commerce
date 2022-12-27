import { useAppDispatch } from "../store";
import { addToCart } from "../store/features/productSlice";
import { IProductCardProps, Product } from "../types";

export default function ProductCard(props: IProductCardProps) {
    const { product } = props;
    const dispatch = useAppDispatch();

    const handleClick = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="bg-white rounded-md p-2 shadow-md space-y-3">
            <img src={product.image} className="h-[200px] bg-slate-400 mx-auto object-cover object-center" alt={product.name} />
            <div className="text-primary-blue font-bold">{product.price} ₺</div>
            <div className="font-bold text-sm">{product.name}</div>
            <button type="button" className="bg-primary-blue block w-full px-1 py-2 rounded-md text-white font-bold" onClick={() => handleClick(product)}>Add to Cart</button>
        </div>
    )
}
