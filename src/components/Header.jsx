// Import images
import logo from "../images/header_logo.jpg"

export default function Header() {
    return (
        <div>
            <header>
                {/* -------------------------------------------------------------------------------- LOGO ---------- */}
                <div>
                    <img src={logo} alt="Logo"/>
                </div>

                {/* -------------------------------------------------------------------------------- MENU ---------- */}
                <div>
                    <ul>
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