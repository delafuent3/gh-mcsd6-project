import {Outlet, Navigate} from "react-router-dom";

import useAuthStatus from "../hooks/useAuthStatus";

export default function PrivateRoute() {
    // const loggedIn = false
    // Import loggedIn and checkingStatus
    const {loggedIn, checkingStatus} = useAuthStatus()

    // Checking authentication status.
    if (checkingStatus) {
        return <h3>Loading...</h3>
    }
    return loggedIn ? <Outlet/> : <Navigate to="/sign-in"/>
}