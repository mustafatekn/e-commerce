import Search from "./Search"

export default function Navbar() {
    return (
        <nav className="bg-primary-blue py-1">
            <div className="container mx-auto text-white flex items-center">
                <div className="text-3xl w-60">Eteration</div>
                <Search />
                <div className="w-60">example</div>
            </div>
        </nav>
    )
}
