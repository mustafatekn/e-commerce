import { useCalculateTotalPrice } from "../hooks/useCalculateTotalPrice";

export default function Checkout() {
    const totalPrice = useCalculateTotalPrice();

    const fireNetmeraEventOnCheckout = () => {
        debugger;
        const TotalPrice: { code: string, ec: number } = { code: "cemzo", ec: totalPrice }
        // @ts-ignore
        netmera.push(function (api: any) {
            api.sendEvent(TotalPrice);
        });
    }

    return (
        <div className="my-2 md:w-48 lg:w-56 xl:w-64 text-sm xl:text-base">
            <small className="text-slate-500">Checkout</small>
            <div className="shadow-md bg-white px-5 py-4 my-2 space-y-2">
                <div className="mb-1">Total Price: <span className="text-primary-blue font-bold">{totalPrice} ₺</span></div>
                <button type="button" className="bg-primary-blue text-white w-full rounded-md py-1" onClick={() => fireNetmeraEventOnCheckout()}>Checkout</button>
            </div>
        </div>
    )
}
