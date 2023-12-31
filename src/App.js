// Import Libraries
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Import Pages
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Listing from "./pages/Listing";

// Import Components
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

// COMPONENT - ToastContainer
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Category from "./pages/Category";


function App() {
    return (
        <>
            <Router>
                {/* ------------------------------------------------------------------ COMPONENT - HEADER ---------- */}
                <Header/>
                {/* ------------------------------------------------------------------------------ ROUTES ---------- */}
                <Routes>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route
                        path="/category/:categoryName/:listingId"
                        element={<Listing/>}
                    />
                    <Route path="/" element={<Home/>}/>
                    <Route path="/offers" element={<Offers/>}/>
                    <Route path="/profile" element={<PrivateRoute/>}>
                        <Route path="/profile" element={<Profile/>}/>
                    </Route>
                    <Route path="/category/:categoryName" element={<Category />} />

                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    {/*<Route path="/create-listing" element={<CreateListing/>}/>*/}
                    <Route path="create-listing" element={<PrivateRoute/>}>
                        <Route path="/create-listing" element={<CreateListing/>}/>
                    </Route>
                    <Route path="edit-listing" element={<PrivateRoute/>}>
                        <Route path="/edit-listing/:listingId" element={<EditListing/>}/>
                    </Route>
                </Routes>
            </Router>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>

    );
}

export default App;
