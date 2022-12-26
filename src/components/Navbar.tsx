export default function Navbar() {
    return (
        <nav className="bg-primary-blue py-1">
            <div className="container mx-auto text-white flex items-center">
                <div className="text-3xl w-60">Eteration</div>
                <div className="relative flex items-center flex-1">
                    <input type="text" className="bg-white inline-block w-80 px-7 py-1" placeholder="Search" />
                    <svg role="img" className="w-4 h-4 inline-block absolute left-2">
                        <use xlinkHref="/assets/sprite.svg#search" />
                    </svg>
                </div>
                <div className="w-60">example</div>
            </div>
        </nav>
    )
}
