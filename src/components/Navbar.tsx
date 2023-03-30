import { Link } from "react-router-dom";
import Search from "./Search"
import { useCalculateTotalPrice } from "../hooks/useCalculateTotalPrice"
import { useAppDispatch } from "../store";
import { toggleCart, toggleFilter, toggleSort } from "../store/features/productSlice";

export default function Navbar() {
    const totalPrice = useCalculateTotalPrice();
    const dispatch = useAppDispatch();

    return (
        <>
            <nav className="bg-primary-blue py-1 hidden lg:block">
                <div className="container md:mx-auto text-white flex items-center">
                    <Link to="/" className="text-lg md:text-xl xl:text-3xl w-auto md:w-28 lg:w-56 xl:w-64 ml-6 lg:ml-0">E-commerce</Link>
                    <Search />
                    <div className="lg:w-56 xl:w-64 flex items-center">
                        <div>{totalPrice} ₺</div>
                        <svg role="img" className="w-5 h-5 inline-block text-white ml-3">
                            <use xlinkHref="/assets/sprite.svg#user" />
                        </svg>
                        User
                    </div>
                </div>
            </nav>

            <nav className="bg-primary-blue py-1 block lg:hidden px-5">
                <div className="container mx-auto text-white flex items-center justify-between lg:justify-around">
                    <Link to="/" className="text-lg md:text-xl xl:text-3xl">E-commerce</Link>
                    <div className="flex items-center">
                        <button type="button" className="flex items-center" onClick={() => dispatch(toggleSort())}><svg role="img" className="w-5 h-5 inline-block text-white ml-3" fill="white">
                            <use xlinkHref="/assets/sprite.svg#sort" />
                        </svg></button>
                        <button type="button" className="flex items-center" onClick={() => dispatch(toggleFilter())}><svg role="img" className="w-5 h-5 inline-block text-white ml-3" fill="white">
                            <use xlinkHref="/assets/sprite.svg#filter" />
                        </svg></button>
                        <button type="button" className="flex items-center" onClick={() => dispatch(toggleCart())}><svg role="img" className="w-5 h-5 inline-block text-white ml-3" fill="white">
                            <use xlinkHref="/assets/sprite.svg#cart" />
                        </svg></button>
                    </div>
                </div>
            </nav>
        </>

    )
}
