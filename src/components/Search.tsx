import { useAppDispatch } from "../store"
import { setSearchedProducts } from "../store/features/productSlice";

export default function Search() {
    const dispatch = useAppDispatch();

    return (
        <div className="relative flex items-center flex-1 ml-10">
            <input type="text" className="bg-white inline-block w-80 px-7 py-1 text-black" placeholder="Search" onChange={(e) => dispatch(setSearchedProducts(e.target.value))} />
            <svg role="img" className="w-4 h-4 inline-block absolute left-2">
                <use xlinkHref="/assets/sprite.svg#search" />
            </svg>
        </div>
    )
}
