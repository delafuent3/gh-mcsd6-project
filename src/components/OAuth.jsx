// Import Google icon from react-icons
import {FcGoogle} from "react-icons/fc";

// Import
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {toast} from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

// import useNavigate hook
import {useNavigate} from "react-router-dom";

export default function OAuth() {

    // ---------- HOOK - useNavigate ----------
    const navigate = useNavigate();

    // --------------------------------------------- FUNCTION - onGoogleCLick ----------
    async function onGoogleClick() {

        try {
            // Initialize getAuth function
            const auth = getAuth();

            // Initialize provider
            const provider = new GoogleAuthProvider();

            // Get results from sign in with pop up
            const result = await signInWithPopup(auth, provider);

            // Get user information
            const user = result.user;

            // console.log(user)
            // Check if user exist in the database
            // Create reference
            const docRef = doc(db, "users", user.uid)

            // Get user
            const docSnap = await getDoc(docRef)

            // Check if user exist
            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }

            // Redirect to home
            navigate("/")

        } catch (error) {
            toast.error(error.code)
        }
    }


    return (
        <button
            type="button"
            onClick={onGoogleClick}
            className="bg-red-700 flex w-full items-center justify-center text-white px-7  py-3 uppercase font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
        >
            <FcGoogle className="text-2xl bg-white rounded-full mr-2"/>
            Continue with Google
        </button>
    )
}