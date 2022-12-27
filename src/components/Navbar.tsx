import Search from "./Search"
import { useCalculateTotalPrice } from "../hooks/useCalculateTotalPrice"

export default function Navbar() {
    const totalPrice = useCalculateTotalPrice();
    return (
        <nav className="bg-primary-blue py-1">
            <div className="container mx-auto text-white flex items-center">
                <div className="text-3xl w-60">Eteration</div>
                <Search />
                <div className="w-64">{totalPrice} ₺</div>
            </div>
        </nav>
    )
}
