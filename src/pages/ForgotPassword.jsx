// Import images
import keyImage from "../images/login_key.jpg"

// Import Libraries
import {Link} from "react-router-dom";

// Import Components
import OAuth from "../components/OAuth";

// Import Hooks
import {useState} from "react";

// Import toastify
import {toast} from "react-toastify";

// Import firebase methods
import {getAuth, sendPasswordResetEmail} from "firebase/auth";

export default function ForgotPassword() {
    // -------------------------------------------------------------------------------------- HOOK - formData ----------
    const [email, setEmail] = useState("");

    // ---------------------------------------------------------------------------------- FUNCTION - onChange ----------
    function onChange(e) {
        setEmail(e.target.value);
    }

    // ---------- FUNCTION - onSubmit ----------
    // TODO: Fix non existing email validation (Doesnt catch error)
    async function onSubmit(e) {
        e.preventDefault()

        try {
            // Initialize getAuth
            const auth = getAuth()

            console.log(JSON.stringify("### Auth ### " + auth))
            console.log("### Email ###" + email)

            // Pass credentials to function
            await sendPasswordResetEmail(auth, email)

            toast.success("Email was sent")

        } catch (error) {
            toast.error("Couldnt sent reset password link")
        }
    }



    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>

            {/* ------------------------------------------------------------------------------ DIV - MAIN ---------- */}
            <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">

                {/* ------------------------------------------------------------------------------- IMAGE ---------- */}
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img src={keyImage} alt="key" className="w-full rounded-2xl"/>
                </div>

                {/* -------------------------------------------------------------------------- DIV - FORM ---------- */}
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                    {/* ---------------------------------------------------------------------------- FORM ---------- */}
                    <form onSubmit={onSubmit}>
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

                        {/* ----------------------------------------------------------------------- LINKS ---------- */}
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
                                    to="/sign-in"
                                >
                                    Sign in instead
                                </Link>
                            </p>
                        </div>

                        {/* ------------------------------------------------------------ BUTTON - SIGN IN ---------- */}
                        <button
                            className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
                        >
                            Send reset password
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

