import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Navbar from "../components/Navbar";
import { IDefaultLayoutProps } from "../types";

export default function DefaultLayout({ children }: IDefaultLayoutProps) {
    return (
        <div className="bg-primary-white flex flex-col min-h-screen">
            <Navbar />
            <div className="container mx-auto pt-5 flex">
                {children}
                <div>
                    <Cart />
                    <Checkout />
                </div>
            </div>
        </div>
    )
}
