import {Outlet, Navigate} from "react-router-dom";

import useAuthStatus from "../hooks/useAuthStatus";

// Import Spinner component
import Spinner from "./Spinner";

export default function PrivateRoute() {
    // const loggedIn = false
    // Import loggedIn and checkingStatus
    const {loggedIn, checkingStatus} = useAuthStatus()

    // Checking authentication status.
    if (checkingStatus) {
        return <Spinner/>
    }
    return loggedIn ? <Outlet/> : <Navigate to="/sign-in"/>
}