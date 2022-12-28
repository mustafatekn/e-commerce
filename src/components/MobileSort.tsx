import { useAppDispatch, useAppSelector } from "../store";
import { toggleSort } from "../store/features/productSlice";
import Sort from "./Sort";

export default function MobileSort() {
    const dispatch = useAppDispatch();
    const showSort = useAppSelector(state => state.products.showSort);

    if (!showSort) return <></>
    return (
        <div className="bg-white w-64 absolute top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md block lg:hidden" onClick={() => dispatch(toggleSort())}>
            <button className="block ml-auto text-primary-blue">x</button>
            <Sort />
        </div>
    )
}
