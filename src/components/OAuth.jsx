// Import Google icon from react-icons
import {FcGoogle} from "react-icons/fc";

export default function OAuth() {
    return (
        <button className="bg-red-700 flex w-full items-center justify-center text-white px-7  py-3 uppercase font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded">
            <FcGoogle className="text-2xl bg-white rounded-full mr-2"/>
            Continue with Google
        </button>
    )
}