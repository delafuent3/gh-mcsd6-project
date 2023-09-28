import {useState} from "react";

import {getAuth, updateProfile} from "firebase/auth";

// Import - HOOKS
import {Link, useNavigate} from "react-router-dom";

// Import - tastify
import {toast} from "react-toastify";

// Import db from Firebase (Local Configuration)
import {db} from "../firebase";

// Import - Firestore
import {doc, updateDoc} from "firebase/firestore";

// Import - Icon
import  {FcHome} from "react-icons/fc";

export default function Profile() {
    // ----------------------------------------------------------------------------------- Initialize getAuth ----------
    const auth = getAuth()

    // ----------------------------------------------------------------------------------- HOOK - useNavigate ----------
    const navigate = useNavigate()

    // Initialize formData
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    })

    // ----------------------------------------------------------------------- HOOK - useState - changeDetail ----------
    const [changeDetail, setChangeDetail] = useState(false)

    // --------------------------------------------------------------------------------- Destructure formData ----------
    const {name, email} = formData

    // -------------------------------------------------------------------------  ------- FUNCTION - onLogout ----------
    function onLogout() {
        auth.signOut()
        navigate("/")
    }

    // ---------------------------------------------------------------------------------- FUNCTION - onChange ----------
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState, [e.target.id]: e.target.value
        }))
    }

    // ---------------------------------------------------------------------------------- Function - onSubmit ----------
    async function onSubmit() {
        try{
            // Check if logged in displayName has changed
            if(auth.currentUser.displayName !== name){
                // Update display name in firebase authentication
                await updateProfile(auth.currentUser, {
                    displayName: name
                })

                // Update name in firestore
                // Create docReference - Parameters -> Database, Collection name,
                const docRef = doc(db, "users", auth.currentUser.uid)

                // Update document in Database
                await updateDoc(docRef, {
                    name
                })
            }
            // Alert Successful change
            toast.success("Profile details updated")

        } catch (error) {
            toast.error("Could not update the profile details")
        }
    }

    return (
        <>
            <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
                <h1 className="text-3xl text-center mt-6 font-bold px-3">My Profile</h1>
                <div className="w-full md:w-[50%] mt-6">
                    <form>
                        {/* INPUT - Name*/}
                        <input
                            type="text"
                            id="name"
                            value={name}
                            disabled={!changeDetail}
                            onChange={onChange}
                            className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`}
                        />


                        {/* INPUT - email */}
                        <input
                            type="email"
                            id="email"
                            value={email}
                            disabled
                            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
                        />

                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
                            <p className="flex items-center">
                                Do you want to change your name?
                                <span
                                    className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                                    // onClick={() => setChangeDetail((prevState) => !prevState)}
                                    onClick={() => {
                                        changeDetail && onSubmit();
                                        setChangeDetail((prevState) => !prevState)
                                    }}
                                >
                                    {changeDetail ? "Apply Change" : "Edit"}
                                </span>
                            </p>

                            <p
                                onClick={onLogout}
                                className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer"
                            >
                                Sign out
                            </p>
                        </div>
                    </form>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
                    >
                        <Link
                            to="/create-listing"
                            className="flex justify-center items-center"
                        >
                            <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2"
                            />
                            Sell or rent your home
                        </Link>
                    </button>
                </div>
            </section>
        </>
    )
}