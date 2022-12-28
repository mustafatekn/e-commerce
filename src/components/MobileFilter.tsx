import { useAppDispatch, useAppSelector } from "../store"
import { toggleFilter } from "../store/features/productSlice";
import Brands from "./Brands";
import Models from "./Models";

export default function MobileFilter() {
    const dispatch = useAppDispatch();
    const showFilter = useAppSelector(state => state.products.showFilter);

    if (!showFilter) return <></>
    return (
        <div className="bg-white w-64 absolute top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md block lg:hidden" onClick={() => dispatch(toggleFilter())}>
            <button className="block ml-auto text-primary-blue">x</button>
            <Brands />
            <Models />
        </div>
    )
}
