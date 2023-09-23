// Import images
import logo from "../images/header_logo.jpg"

// Import Hooks
import {useLocation} from "react-router";
import {useNavigate} from "react-router";

export default function Header() {
    // ------------------------------------------------------------------------------------------------ HOOKS ----------
    const location = useLocation();
    const navigate = useNavigate();

    // ---------------------------------------------------------------------------- FUNCTION - pathMatchRoute ----------
    function pathMatchRoute(route){
        if(route === location.pathname) {
            return true
        }
    }

    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-40">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
                {/* -------------------------------------------------------------------------------- LOGO ---------- */}
                <div>
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-5 cursor-pointer"
                        onClick={()=>navigate("/")}
                    />
                </div>

                {/* -------------------------------------------------------------------------------- MENU ---------- */}
                <div>
                    <ul className="flex space-x-10">
                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent" }`}
                            onClick={()=>navigate("/")}
                        >
                            Home
                        </li>

                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/offers") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent" }`}
                            onClick={()=>navigate("/offers")}
                        >
                            Offers
                        </li>

                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/sign-in") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent" }`}
                            onClick={()=>navigate("/sign-in")}
                        >
                            Sign In
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}