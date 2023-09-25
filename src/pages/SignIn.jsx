// Import images
import keyImage from "../images/login_key.jpg"

// Import Libraries
import {Link, useNavigate} from "react-router-dom";

// Import Hooks
import {useState} from "react";

// Import Components
import OAuth from "../components/OAuth";

// Import Icons
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"

export default function SignIn() {
    // ---------------------------------------------------------------------------------- HOOK - showPassword ----------
    const [showPassword, setShowPassword] = useState(false)

    // -------------------------------------------------------------------------------------- HOOK - formData ----------
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    // -------------------------------------------------------------------------------------- HOOK - navigate ----------
    const navigate = useNavigate();

    // ------------------------------------------------------------------------------- DESTRUCTURE - formData ----------
    const { email, password} = formData

    // ---------------------------------------------------------------------------------- FUNCTION - onChange ----------
    function onChange(event){
        setFormData((prevState)=> ({
            ...prevState, [event.target.id]: event.target.value,
        }))
    }

    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>

            {/* ------------------------------------------------------------------------------ DIV - MAIN ---------- */}
            <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">

                {/* ------------------------------------------------------------------------- IMAGE - Key ---------- */}
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img src={keyImage} alt="key" className="w-full rounded-2xl"/>
                </div>

                {/* -------------------------------------------------------------------------- DIV - FORM ---------- */}
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                    {/* ---------------------------------------------------------------------------- FORM ---------- */}
                    <form>
                        {/* --------------------------------------------------------------- INPUT - EMAIL ---------- */}
                        <input
                            type="email"
                            id="email"
                            autoComplete="off"
                            placeholder="Email address"
                            value={email}
                            onChange={onChange}
                            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                        />

                        {/* ------------------------------------------------------------ INPUT - PASSWORD ---------- */}
                        <div className="relative mb-6">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoComplete="off"
                                placeholder="Password"
                                value={password}
                                onChange={onChange}
                                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                            />

                            {/* ------------------------------------------------------ SHOW/HIDE PASSWORD ---------- */}
                            {showPassword ? (
                                <AiFillEyeInvisible
                                    className="absolute right-3 top-3 text-xl cursor-pointer"
                                    onClick={()=>setShowPassword(prevState => !prevState)}
                                />
                            ) : (
                                <AiFillEye
                                    className="absolute right-3 top-3 text-xl cursor-pointer"
                                    onClick={()=>setShowPassword(prevState => !prevState)}
                                />
                            )}
                        </div>


                        {/* ------------------------------------------------------------------------------- LINKS ---------- */}
                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className="mb-6">
                                Don't have a account?
                                <Link
                                    className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                                    to="/sign-up"
                                >
                                    Register
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                                    to="/forgot-password"
                                >
                                    Forgot password?
                                </Link>
                            </p>
                        </div>

                        {/* ------------------------------------------------------------ BUTTON - SIGN IN ---------- */}
                        <button
                            className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
                        >
                            Sign in
                        </button>

                        {/* -------------------------------------------------------------- PARAGRAPH - OR ---------- */}
                        <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                            <p className="text-center font-semibold mx-4">OR</p>
                        </div>

                        {/* ----------------------------------------------------------- COMPONENT - OAuth ---------- */}
                        <OAuth/>
                    </form>
                </div>


            </div>
        </section>
    )
}

