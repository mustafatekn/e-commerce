import { Link } from "react-router-dom";
import Search from "./Search"
import { useCalculateTotalPrice } from "../hooks/useCalculateTotalPrice"

export default function Navbar() {
    const totalPrice = useCalculateTotalPrice();
    return (
        <nav className="bg-primary-blue py-1">
            <div className="container mx-auto text-white flex items-center">
                <Link to="/" className="text-3xl w-60">Eteration</Link>
                <Search />
                <div className="w-64 flex items-center">
                    <div>{totalPrice} ₺</div>
                    <svg role="img" className="w-5 h-5 inline-block text-white ml-3">
                        <use xlinkHref="/assets/sprite.svg#user" />
                    </svg>
                    User
                </div>

            </div>
        </nav>
    )
}
