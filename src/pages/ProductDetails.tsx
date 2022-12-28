import { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { getProduct } from "../services/productService";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import { useAppDispatch } from "../store";
import { addToCart } from "../store/features/productSlice";
import MobileCart from "../components/MobileCart";
import MobileFilter from "../components/MobileFilter";
import MobileSort from "../components/MobileSort";

export default function ProductDetails() {
    const [product, setProduct] = useState<Product>();
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const handleClick = (product: Product) => {
        dispatch(addToCart(product));
    };

    useEffect(() => {
        if (!id) return;
        (async () => {
            try {
                const product = await getProduct(parseInt(id!));
                setProduct(product.data)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id])

    return (
        <DefaultLayout>
            <MobileCart />
            <MobileFilter />
            <MobileSort />
            {product &&
                <div className="bg-white shadow-md mr-6 hidden lg:block">
                    <div className="flex space-x-5 p-3">
                        <div className="w-1/2"><img src={product.image} alt={product.name} className="object-cover object-center block w-full" /> </div>
                        <div className="w-1/2 px-5">
                            <h1 className="text-2xl mt-2">{product.name}</h1>
                            <h2 className="text-xl text-primary-blue mt-1">{product.price} ₺</h2>
                            <button type="button" className="bg-primary-blue block w-full px-1 py-2 rounded-md text-white font-bold mt-5" onClick={() => handleClick(product)} >Add to Cart</button>
                            <p className="mt-5 break-before-all">{product.description}</p>
                        </div>
                    </div>
                </div>}
            {product && <div className="bg-white shadow-md mx-5 lg:hidden block">
                <div className="p-4">
                    <img src={product.image} alt={product.name} className="object-cover object-center block w-full" />
                    <h1 className="text-base sm:text-xl mt-2">{product.name}</h1>
                    <h2 className="text-sm sm:text-lg text-primary-blue mt-1">{product.price} ₺</h2>
                    <button type="button" className="bg-primary-blue block w-full px-1 py-2 rounded-md text-white font-bold mt-5" onClick={() => handleClick(product)} >Add to Cart</button>
                    <p className="mt-5 text-sm sm:text-base break-before-all">{product.description}</p>
                </div>
            </div>}
        </DefaultLayout>
    )
}
