// Import images
import keyImage from "../images/login_key.jpg"

// Import Libraries
import {Link} from "react-router-dom";

export default function SignIn() {
    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>

            {/* ------------------------------------------------------------------------------ DIV - MAIN ---------- */}
            <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">

                {/* ------------------------------------------------------------------------------- IMAGE ---------- */}
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
                            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                        />

                        {/* ------------------------------------------------------------ INPUT - PASSWORD ---------- */}
                        <div>
                            <input
                                type="password"
                                id="password"
                                autoComplete="off"
                                placeholder="Password"
                                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                            />
                        </div>

                    </form>
                </div>

                {/* ------------------------------------------------------------------------------- LINKS ---------- */}
                <div>
                    <p>
                        Don't have a account?
                        <Link>
                            Register
                        </Link>
                    </p>
                    <p>
                        <Link>
                            Forgot password?
                        </Link>
                    </p>
                </div>

                {/* -------------------------------------------------------------------- BUTTON - SIGN IN ---------- */}
                <button>
                    Sign in
                </button>

                {/* ---------------------------------------------------------------------- PARAGRAPH - OR ---------- */}
                <div>
                    <p>OR</p>
                </div>
            </div>
        </section>
    )
}

