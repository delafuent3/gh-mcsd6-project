// Import images
import logo from "../images/header_logo.jpg"

export default function Header() {
    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-40">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
                {/* -------------------------------------------------------------------------------- LOGO ---------- */}
                <div>
                    <img src={logo} alt="Logo" className="h-5 cursor-pointer"/>
                </div>

                {/* -------------------------------------------------------------------------------- MENU ---------- */}
                <div>
                    <ul className="flex space-x-10">
                        <li>
                            Home
                        </li>
                        <li>
                            Offers
                        </li>
                        <li>
                            Sign In
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}