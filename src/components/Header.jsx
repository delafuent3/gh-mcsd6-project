// Import images
import logo from "../images/header_logo.jpg"

// Import Hooks
import {useLocation} from "react-router";
import {useNavigate} from "react-router";
import {useState, useEffect} from "react";

// Import - FIREBASE
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default function Header() {
    // ------------------------------------------------------------------------------------------------ HOOKS ----------
    const location = useLocation();
    const navigate = useNavigate();
    const [ pageState, setPageState] = useState("Sign In")

    // ---------- METHODS ----------
    const auth = getAuth()

    // useEffect
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setPageState('Profile')
            }else{
                setPageState('Sign in')
            }
        })
    }, [])

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
                            className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent" }`}
                            onClick={()=>navigate("/profile")}
                        >
                            {pageState}
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}