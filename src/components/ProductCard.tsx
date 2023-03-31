import { useAppDispatch } from "../store";
import { addToCart } from "../store/features/productSlice";
import { IProductCardProps, Product } from "../types";
import { Link } from "react-router-dom";

export default function ProductCard(props: IProductCardProps) {
    const { product } = props;
    const dispatch = useAppDispatch();

    const handleClick = (product: Product) => {
        dispatch(addToCart(product));
        // @ts-ignore
        netmera.push(function (api: any) {
            const AddToCart = {
                code: 'oyeqw',
                ea: product.name
            };
            api.sendEvent(AddToCart);
        });
    };

    return (
        <div className="bg-white rounded-md p-2 shadow-md space-y-3 ">
            <Link to={`/${product.id}`}><img src={product.image} className="p-1 mx-auto object-cover object-center text-sm xl:text-base" alt={product.name} /></Link>
            <div className="text-primary-blue font-bold text-sm xl:text-base">{product.price} ₺</div>
            <Link to={`/${product.id}`}><div className="font-bold text-sm ">{product.name}</div></Link>
            <button type="button" className="bg-primary-blue block w-full px-1 py-2 rounded-md text-white font-bold text-sm xl:text-base" onClick={() => handleClick(product)}>Add to Cart</button>
        </div>
    )
}
