// Import Libraries
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Import Pages
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// Import Components
import Header from "./components/Header";

// COMPONENT - ToastContainer
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <>
            <Router>
                {/* ------------------------------------------------------------------ COMPONENT - HEADER ---------- */}
                <Header/>
                {/* ------------------------------------------------------------------------------ ROUTES ---------- */}
                <Routes>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/offers" element={<Offers/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
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
