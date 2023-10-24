# Task 1 - Project Setup
## Task 1a - Create Project repo
01. Create an EMPTY Project on GitHub \
    **NOTE**: DO NOT add Readme File

## Task 1b - Create App
01. Run the NPX CREATE APP command
    ```
    npx create-react-app gh-mcsd6-project
    ```
02. Update .gitignore file to ignore .idea folder
    ```
    .idea
    ```
03. Add the new App to the empty repo. Run the following commands.
    ```
    git remote add origin git@github.com:delafuent3/gh-mcsd6-project.git
    git branch -M master
    git push -u origin master
    ```

## Task 1c - Create Project on GitHub
01. Go to the "Projects" tab and click "New project" button.
02. Update the "Project name" and click create
03. To create an "Issue", enter a Title, then click the DropDown arrow in the far left, click "Convert to issue"
04. When prompt, select the Repo where the code for the task will be stored
05. Assign responsible for the task (Assignees)

    
## Task 1d - Clean Up default Project
01. Create git branch
    ```
    git checkout -b task/01_project_setup
    ```
02. Delete unnecessary files
    ```
    ./public/logo192.png
    ./public/logo512.png
    ./src/App.css
    ./src/App.test.js
    ./src/logo.svg
    ```

03. Clean references for the deleted files
    ```
    ./public/manifest.json for logo files
    
    ./src/App.js for App.css and logo.svg
    ```

04. Clean up ./src/App.js
    ```
    function App() {
        return (
            <>
                <h1>MCSD6 - Project</h1>
            </>
        );
    }
    
    export default App;    
    ```

05. Commit changes
06. Create pull request
07. In the PR -> Development section, link the PR to the corresponding task

## Task 1e - Integrate Tailwind CSS
Run commands in the project folder



01. Install Tailwind CSS in the project
    ```
    npm install -D tailwindcss postcss autoprefixer
    ```
02. Initialize Tailwind CSS. This will create "tailwind.config.js"
    ```
    npx tailwindcss init
    ```
03. Configure template paths. Update "tailwind.config.js" file
    ```
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    ```
04. Add Tailwind directives to ./src/index.css (Replace the content with the following code)
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
05. Start Development server (if running) and IDE to update Intellisense 
06. Commit changes and merge PR.


# XXXXXXXXXXXXXXXXXXXXXXXXXX

# Task 2 - Pages and Routes
01. Create branch
    ```
    git checkout -b task/023_pages_and_routes
    ```

01. Install React Router package
    ```
    npm install react-router react-router-dom
    ```
02. Create a folder to host all the pages "./src/pages" and create the following files.
    ```
    ./src/pages/ForgotPassword.jsx
    ./src/pages/Home.jsx
    ./src/pages/Offers.jsx
    ./src/pages/Profile.jsx
    ./src/pages/SignIn.jsx
    ./src/pages/SignUp.jsx
    ```
03. Add the following content to ALL the files. Update \<FUNCTION_NAME> with file name and Label accordingly
    ```
    export default function <FUNCTION_NAME>(){
        return (
            <div> <LABEL> </div>
        )
    }
    ```
04. Add Routes for the different pages. In App.js:
    01. Import necessary libraries
        ```
        // Import Route libraries
        import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
        ```
    02. Import Pages. In App.js add:
        ```
        // Import Pages
        import ForgotPassword from "./pages/ForgotPassword";
        import Home from "./pages/Home";
        import Offers from "./pages/Offers";
        import Profile from "./pages/Profile";
        import SignIn from "./pages/SignIn";
        import SignUp from "./pages/SignUp";
        ```
    03. Update App function with the following content
        ```
        function App() {
            return (
                <>
                    <Router>
                        <Routes>
                            <Route path="/forgot-password" element={<ForgotPassword/>}/>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/offers" element={<Offers/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/sign-in" element={<SignIn/>}/>
                            <Route path="/sign-up" element={<SignUp/>}/>
                        </Routes>
                    </Router>
                </>
        
            );
        }
        ```

05. Commit changes, create PR, link PR to task and merge PR.

# XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


# Task 3 - Header Component
01. Create branch
    ```
    git checkout -b task/03_header_component
    ```


## Task 3a - Create Header
01. Create ./src/components folder
02. Inside components create Header.jsx, with the following initial content
    ```
    export default function Header() {
        return (
            <div>Header</div>
        )
    }
    ```
03. Import the Header component into App.js
    ```
    // Import Components
    import Header from "./components/Header";
    ```


04. Add the Header bellow the Router component.
    ```
            <Router>
                <Header />
                
                <Routes>  
    ```

05. Commit changes, create PR, link PR to task.



## Task 3b - Add Logo and Menu Items to the header
01. Add logo to the Header
    01. Create folder ./src/images and add the image containing the logo
    02. In the Header, import the image from images folder
        ```
        // Import images
        import logo from "../images/header_logo.jpg"
        ```
    03. In the Header component, inside the DIV tag, add a HEADER tag
        ```
        <div>
            <header>
                
            </header>
        </div>
        ```
    04. Inside the HEADER tag, add a DIV tag to host the logo, and add the imported image there 
        ```
            return (
                <div>
                    <header>
                        {/* ---------- LOGO ---------- */}
                        <div>
                            <img src={logo} alt="Logo"/>
                        </div>
                    </header>
                </div>
            )
        ```

02. Add Menu items to the Header in a different div element
    ```
                {/* ---------- MENU ---------- */}
                <div>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Offers
                        </li>
                        <li>
                            Sign In
                        </li>
                    </ul>
                </div>

    ```

03. Commit changes.

## Task 3c - Add CSS component (Header.jsx)
01. Add CSS to the header and FULL header
    01. Style the logo 
        ```
        className="h-5 cursor-pointer"
        ```
        - h-5: Height of 20px
        - cursor-pointer: change cursor when hovering over the logo
        
    02. Add the Following classes to the header tag
        ```
        className="flex justify-between items-center px-3 max-w-6xl mx-auto"
        ```
    02. Format the Menu items. Add the Following classes to the \<ul> object
        ```
        className="flex space-x-10"
        ```
    03. Add bottom shadow to the full header. Add the following tags to the parent \<div>
        ```
        className="bg-white border-b shadow-sm sticky top-0 z-40"
        ```

    04. Commit changes.
    
02. Apply style to the menu items
    01. Import useLocation hook
        ```
        import {useLocation} from "react-router";
        ```
        
    02. Initialize hook in a variable
        ```
        const location = useLocation()
        ```
        
    03. Add pathMatchRoute function
        ```
        function pathMatchRoute(route){
            if(route === location.pathname) {
                return true
            }
        }
        ```        
    04. Add the following classes to List Items \<li>
        NOTE: Some javasctipt will be inserted in the className element, so, use curly braces and backticks for the className `{``}`
        ```
        // Home
        className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent" }`}
        
        // Offers
        className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/offers") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent" }`}
        
        // SignIn
        className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${pathMatchRoute("/sign-in") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent" }`}
        ```

    05. Commit changes.

03. Add Navigation Functionality to Menu Items
    01. Import useNavigate hook
        ```
        import {useNavigate} from "react-router";
        ```
        
    02. Initialize hook in a variable
        ```
        const navigate = useNavigate()
        ```
        
    03. Add onClick event to img
        ```
        onClick={()=>navigate("/")}  
        ```
    04. Add onClick event to list items respectively
        ```
        onClick={()=>navigate("/")}
        onClick={()=>navigate("/offers")}
        onClick={()=>navigate("/sign-in")}
        ```

    05. Commit changes, create PR, link PR to task and merge PR.










# Task 4 - Create SignIn Page
01. Create branch
    ```
    git checkout -b task/04_sign_in_page
    ```

## Task 4a - Add CSS for all the pages in the application
01. Add the following CSS to the bottom of the index.css file
    ```
    body{
        background-color: rgb(240, 253, 244);
    }
    ```

01. Apply CSS to SignIn Header. In SignIn.jsx file add the following code. (Initial template)
    ```
    export default function SignIn(){
        return (
            <section>
                <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
            </section>
        )
    }
    ```

03. Commit changes, create PR, link PR to task and merge PR.


## Task 4b - Add Key image and Form
01. In the sign in page, import the image from ./src/images
    ```
    // Import images
    import keyImage from "../images/login_key.jpg"
    ```
02. under the H1 object, add nested DIV, and add the imported image
    ```
        <div>
            <div>
                <img src={keyImage} alt="key"/>
            </div>
        </div>
    ```
03. Add a second nested DIV, to hold the form
    ```
        <div>
            <form>
                {/* ---------- INPUT - EMAIL ---------- */}
                <input type="email"/>
            </form>
        </div>
    ```
    
04. Bellow the EMAIL INPUT object, add a DIV object that will hold the INPUT PASSWORD and all its logic
    ```
        {/* ---------- INPUT - PASSWORD ---------- */}
        <div>
            <input
                type="password"
            />
        </div>
    ```

05. Import LINK library
    ```
    import {Link} from "react-router-dom";
    ```

06. Add another DIV to hold "Don't have an account", Register and Forgot Password Links
    ```
            {/* ---------- LINKS ---------- */}
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
    ```

07. Bellow the DIV for the links, add a button object (Sign In Button)
    ```
    {/* ---------- BUTTON - SIGN IN ---------- */}
    <button>
        Sign in
    </button>
    ```

08. Bellow the Sign In button, add another DIV, holding the Paragraph with the OR label
    ```
    {/* ---------- PARAGRAPH - OR ---------- */}
    <div>
        <p>OR</p>
    </div>
    ```

09. Commit changes.



## Task 4c - Add CSS to main DIV and Image
01. Add the following classes to the DIV holding the IMG object
    ```
    className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6"
    ```

02. Add the following classes to the IMG object
    ```
    className="w-full rounded-2xl"
    ```
    
03. Add the following classes to the MAIN DIV object
    ```
    className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto"
    ```

04. Commit changes.


## Task 4d - Add CSS to FORM DIV and INPUT objects
01. Add the following classes to the DIV FORM tag
    ```
    className="w-full md:w-[67%] lg:w-[40%] lg:ml-20"
    ```

02. Add the Following CSS to the DIV holding the INPUT PASSWORD
    ```
    className="relative mb-6"
    ```

03. Add the following attributes and CSS to the PASSWORD INPUT
    ```
    id="email"
    autoComplete="off"
    placeholder="Email address"
    className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
    ```
    
04. Add the following attributes and CSS to the PASSWORD INPUT
    ```
    id="password"
    autoComplete="off"
    placeholder="Password"
    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
    ```

05. Commit changes.



## Task 4e - Add CSS to LINKS (Register, Forgot password), SIGN IN button and OR label
01. Add the following classes to the DIV holding the "Register" and "Forgot Password" \<p>
    ```
    className="flex justify-between whitespace-nowrap text-sm sm:text-lg"
    ```

02. Add the following CSS to the \<p> element containing the Register Link
    ```
    className="mb-6"
    ```
    
03. Add the following CSS to the "Register" LINK element
    ```
    className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
    ```

04. Add the following CSS to the SIGN IN button
    ```
    className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" 
    ```

05. Add the following CSS to the DIV Containing the \<p> element (OR)
    ```
    className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300"
    ```

06. Add the following CSS to the \<p> element containing OR label
    ```
    className="text-center font-semibold mx-4"
    ```

07. Commit changes, merge PR.


























# Task 6 - Add OAuth Component
01. Create branch
    ```
    git checkout -b task/06_oauth_component
    ```
## Task 6a - Create OAuth component and add it to sign in page
01. Add the file OAuth.jsx to the ./src/components folder. Add the following template
    ```
    export default function OAuth() {
        return (
            <div>OAuth</div>
        )
    }
    ```

02. Import the new component inside the SignIn Page
    ```
    // Import Components
    import OAuth from "../components/OAuth";
    ```

03. Add the component to the page, under the DIV element that holds the OR label.
    ```
                            <p className="text-center font-semibold mx-4">OR</p>
                        </div>

                        {/* ----------------------------------------------------------- COMPONENT - OAuth ---------- */}
                        <OAuth/>
                    </form>
    ```

04. Commit changes, create PR, link PR to ISSUE in project.


## Task 6b - Create button(OAuth component)
01. Replace DIV element with a button element
    ```
    export default function OAuth() {
        return (
            <button>
                Continue with Google
            </button>
        )
    }
    ```

02. Install react-icons module
    ```
     npm install react-icons
    ```

02. Import Google icon from react-icons library
    ```
    // Import Google icon from react-icons
    import {FcGoogle} from "react-icons/fc";
    ```

03. Add Google icon to button
    ```
        <button>
            <FcGoogle/>
            Continue with Google
        </button>
    ```



## Task 6c - Apply CSS to Button (OAuth component)
01. Add the following CSS to the button
    ```
    className="bg-red-700 flex w-full items-center justify-center text-white px-7  py-3 uppercase font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
    ```

02. Add the following CSS to the logo
    ```
    className="text-2xl bg-white rounded-full mr-2"
    ```

03. Commit changes, merge branch, close PR.
























# Task 5 - Sign Up Page
01. Create branch
    ```
    git checkout -b task/06_oauth_component
    ```

Since Sign In and Sign Up page are pretty similar:
01. Copy all the content from SignIn to SignUp file

02. Update the function name from SignIn to SignUp
    ```
    export default function SignUp() {
    ```

03. Update the Header to Sign Up
    ```
    <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
    ```

04. At the start of the form, add a INPUT element for the name.
    ```
    {/* ---------------------------------------------------------------- INPUT - NAME ---------- */}
    <input
        type="text"
        id="name"
        autoComplete="off"
        placeholder="Full Name"
        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
    />
    ```

05. Update LINKS
FROM:
    ```
    Don't have a account?
    ```
TO:
    ```
    Have an Account?
    ```
AND, FROM  
    ```
    Register
    ```
TO
    ```
    Sign in
    ```

06. Update button label from Sign in to Sign up


07. Commit changes, create PR, link PR to ISSUE, merge PR.
























# Task 7 - Forgot Password Page
01. Create branch
    ```
    git checkout -b task/06_forgot_password_page
    ```


Since Sign In and Sign Up page are pretty similar:
01. Copy all the content from SignIn to ForgotPassword file

02. Update the function name from SignIn to SignUp
    ```
    export default function ForgotPassword() {
    ```

03. Update the Header to Sign Up
    ```
    <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
    ```

04. Delete the PASSWORD input

05. Update link "Forgot Password?" to "Sign in instead"

06. Update button from "SIGN IN" to "SEND RESET PASSWORD"

07. Commit changes, create PR, link PR to ISSUE, merge PR.










# XXXXXXXX TASK 8 XXXXXXXXXXXXXXX
# Task 8 - Add show password functionality


01. Create branch
    ```
    git checkout -b task/08_show_password_icon
    ```

## Task 8a - showPassword - Sign In page
SIGN IN PAGE
01. Import Icons from react-icons
    ```
    // Import Icons
    import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
    ```

02. Import useState Hook
    ```
    import {useState} from "react";
    ```

03. Create a useState hook for the showPassword variable, initialized as FALSE
    ```
    // ---------- HOOK - showPassword ----------
    const [showPassword, setShowPassword] = useState(false)
    ```

04. Update password input TYPE
FROM
    ```
    type="password"
    ```
TO
    ```
    type={showPassword ? "text" : "password"}
    ```

05. In the DIV Containing the password INPUT, add the following IF Statement
This will add ICONs and it will call the function showPassword on the onClick event
    ```
    {/* ------------------------------------------------------ SHOW/HIDE PASSWORD ---------- */}
    {showPassword ? (
        <AiFillEyeInvisible
            onClick={()=>setShowPassword(prevState => !prevState)}
        />
    ) : (
        <AiFillEye
            onClick={()=>setShowPassword(prevState => !prevState)}
        />
    )}
    ```

06. Add the following CSS to both icons
    ```
    className="absolute right-3 top-3 text-xl cursor-pointer"
    ```

07. Commit changes, create PR, link PR to ISSUE.












## Task 8b - showPassword - Sign Up page
01. Import Icons from react-icons
    ```
    // Import Icons
    import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
    ```

02. Import useState Hook
    ```
    // Import Hooks
    import {useState} from "react";
    ```

03. Create a useState hook for the showPassword variable, initialized as FALSE
    ```
    // ---------- HOOK - showPassword ----------
    const [showPassword, setShowPassword] = useState(false)
    ```

04. Update password input TYPE
FROM
    ```
    type="password"
    ```
TO
    ```
    type={showPassword ? "text" : "password"}
    ```

05. In the DIV Containing the password INPUT, add the following IF Statement
This will add ICONs and it will call the function showPassword on the onClick event
    ```
    {/* ------------------------------------------------------ SHOW/HIDE PASSWORD ---------- */}
    {showPassword ? (
        <AiFillEyeInvisible
            onClick={()=>setShowPassword(prevState => !prevState)}
        />
    ) : (
        <AiFillEye
            onClick={()=>setShowPassword(prevState => !prevState)}
        />
    )}
    ```

06. Add the following CSS to both icons
    ```
    className="absolute right-3 top-3 text-xl cursor-pointer"
    ```

07. Commit changes, merge PR.






















# XXXXXXXX TASK 10 XXXXXXXXXXXXXXX
# Task 10 - Capture FORM data


01. Create branch
    ```
    git checkout -b task/10_capture_form_data
    ```
## Task 10a - Form data SignIn Page
01. Create useState hook for formData
    ```
    // -------------------------------------------------------------------------------------- HOOK - formData ----------
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    ```

02. Destructure formData object.
    ```
    // ---------- DESTRUCTURE - formData ----------
    const { email, password} = formData
    ```

03. Add VALUE attribute to email and password INPUT elements
After destructuring the formData, email and password variables can be used.
    ```
    value={email}
    
    value={password}
    ```

04. Add the function to handle the onChange event and capture the data
    ```
    // ---------- FUNCTION - onChange ----------
    function onChange(event){
        setFormData((prevState)=> ({
            ...prevState, [event.target.id]: event.target.value,
        }))
    }
    ```

05. Add the onChange event handler attribute to the email and password INPUT elements
    ```
    onChange={onChange}
    ```

06. Commit changes, create PR, link PR to ISSUE.

## Task 10b - Form data SignUp Page
01. Create useState hook for formData
    ```
    // -------------------------------------------------------------------------------------- HOOK - formData ----------
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    ```

02. Destructure formData object.
    ```
    // ---------- DESTRUCTURE - formData ----------
    const { name, email, password } = formData;
    ```

03. Add VALUE attribute to email and password INPUT elements
After destructuring the formData, email and password variables can be used.
    ```
    value={name}
    
    value={email}
    
    value={password}
    ```

04. Add the function to handle the onChange event and capture the data
    ```
    // ---------- FUNCTION - onChange ----------
    function onChange(event){
        setFormData((prevState)=> ({
            ...prevState, [event.target.id]: event.target.value,
        }))
    }
    ```

05. Add the onChange event handler attribute to the email and password INPUT elements
    ```
    onChange={onChange}
    ```

06. Commit changes

















## Task 10c - Form data ForgotPassword page

01. Import useState Hook
    ```
    // Import Hooks
    import {useState} from "react";
    ```

02. Create useState hook for formData
    ```
    // -------------------------------------------------------------------------------------- HOOK - formData ----------
    const [email, setEmail] = useState("");
    ```

03. Add VALUE attribute to email and password INPUT elements
After destructuring the formData, email and password variables can be used.
    ```
    value={email}
    ```

04. Add the function to handle the onChange event and capture the data
    ```
    // ---------- FUNCTION - onChange ----------
    function onChange(e) {
        setEmail(e.target.value);
    }
    ```

05. Add the onChange event handler attribute to the email INPUT elements
    ```
    onChange={onChange}
    ```

06. Commit changes, merge PR.























# Task 9 - Add Navigate Functionality to Pages
01. Create branch
    ```
    git checkout -b task/09_navigate_functionality
    ```


Task 9a - Navigate functionality on SignIn page
01. Import the Link Hook (If not imported already)
    ```
    // Import Libraries
    import {Link} from "react-router-dom";
    ```

02. Add "to" parameter to the link objects
Register
    ```
    to="/sign-up"
    ```

Forgot Password
    ```
    to="/forgot-password"
    ```

03. Commit changes, create PR, link PR to ISSUE, merge PR.



## Task 9b - Navigate functionality on SignUp page

01. Add "to" parameter to the link objects
Sign in
    ```
    to="/sign-in"
    ```

Forgot Password
    ```
    to="/forgot-password"
    ```

03. Commit changes.



## Task 9c - Navigate functionality on ForgotPassword page

01. Add "to" parameter to the link objects
Register
    ```
    to="/sign-up"
    ```

Sign in instead
    ```
    to="/sign-in"
    ```

03. Commit changes, merge PR.







# Task 14 - Create Firebase Project
01. Go to `https://firebase.google.com/`

02. Login with Google Account

03. Click "Go to console" (top right corner) 

04. Click "Create Project"

05. Add a project name, (MCSD6 for this example)
NOTE: Project ID mcsd6fb

06. Accept terms
    Disable Google Analytics


07. Create Project

08. Click Continue when prompted, this will redirect to PROJECT DASHBOARD









# Task 11 - Install Firebase
01. Create branch
    ```
    git checkout -b task/11_install_firebase
    ```

02. Add app to Firebase. Select webapp

03. Click register app.

04. Install Firebase
    ```
    npm install firebase
    ```

05. Create the file ./src/firebase.js, and paste the following content (Custom content given by Firebase for the registered app)
    ```
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyB85TbbLAuKvp8sjn_FTa2uo0VxZNKldtc",
    authDomain: "mcsd6-app.firebaseapp.com",
    projectId: "mcsd6-app",
    storageBucket: "mcsd6-app.appspot.com",
    messagingSenderId: "848702702249",
    appId: "1:848702702249:web:3077213215ae242eee5fb8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    ```

06. Import getFirestore method in firestore.js file
    ```
    import {getFirestore} from "firebase/firestore"
    ```
    
07. Export method as db
    ```
    export const db = getFirestore()
    ```
    
08. Commit changes, create PR, link PR to ISSUE, merge PR.








# Task 19 - Initialize Authentication
01. In Firebase project dashboard, go to "Build" and select authentication
02. Click "Get started"
03. Click "Add a new provider"
04. For the first authentication method, select "Email/Password"
05. Click "Enable" switch.
06. Click "Save" button 
07. For Google authentication, click "Add new provider"
08. From "Additional providers", select "Google" 
09. Click "Enable" switch.
10. Update "Public-facing name for project"
11. Select "Support emil for project"
12. Click "Save"



# Task 21 - Initialize Database
01. In Firebase project dashboard, go to "Build" and select "Firestore Database"
02. Click "Create Database"
03. Select "Start in production mode" and click "Next"
04. Select "Cloud Firestore Location" and click "Enable" 
05. Once the database has been created, update the access rules with the following configuration
    ```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        // Listings
        match /listings/{listing} {
            allow read;
          allow create: if request.auth != null && request.resource.data.imgUrls.size() < 7;
            allow delete: if resource.data.userRef == request.auth.uid;
          allow update: if resource.data.userRef == request.auth.uid;
        }
       
        // Users
        match /users/{user} {
            allow read;
            allow create;
            allow update: if request.auth.uid == user
        }
      }
    }
    ```

06. To apply the rules, click "Publish". 


# Task 20 - Initialize Database
01. In Firebase project dashboard, go to "Build" and select "Storage"
02. Click "Get Started"
03. Select "Start in production mode" and click "Next"
04. Select "Cloud Firestore Location" and click "Done" 
05. Once the bucket has been created, update the access rules with the following configuration
    ```
    rules_version = '2';
    service firebase.storage {
      match /b/{bucket}/o {
        match /{allPaths=**} {
          allow read;
          allow write: if
          request.auth != null &&
          request.resource.size < 2 * 1024 * 1024 && //2MB
          request.resource.contentType.matches('image/.*')
        }
      }
    }
    ```

06. To apply the rules, click "Publish". 







































# Task 15 - Add authentication SignUp page
01. Create branch
    ```
    git checkout -b task/15_authentication_signup_page
    ```

02. Install React Toastify
    ```
    npm install react-toastify
    ```

03. In App.js, import ToastContainer
    ```
    import { ToastContainer } from "react-toastify";
    ```

04. In App.js, import Toastify CSS.
    ```
    import "react-toastify/dist/ReactToastify.css";
    ```

05. Add Toastify configuration to App.js
    ```
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
    ```


06. In SignUp component, import Toast
    ```
    // Import - Toastify
    import {toast} from "react-toastify";
    ```

07. In SignUp, Import OAuth
    ```
    // Import OAuth, createUserWithEmailAndPassword and updateProfile
    import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
    ```

08. Import Firebase db
    ```
    // Import Firebase db
    import { db } from "../firebase";
    ```

09. Import serverTimestamp, doc and setDoc
    ```
    // Import from Firestore
    import { serverTimestamp, doc, setDoc } from "firebase/firestore"
    ```

10. Import useNavigate hook
    ```
    import {useNavigate} from "react-router-dom";
    ```

11. Initialize useNavigate hook
    ```
    const navigate = useNavigate();
    ```

12. Create onSubmit Function
    ```
    // ---------------------------------------------------------------------------------- FUNCTION - onSubmit ----------
    async function onSubmit(e) {
        e.preventDefault()

        try {
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)

            // Update displayName
            await updateProfile(auth.currentUser, {
                displayName: name
            })

            const user = userCredential.user

            // TODO: Fix - Add content from one object to another
            // const formDataCopy = { ...formData };
            // delete formDataCopy.password;
            // formDataCopy.timestamp = serverTimestamp();

            const formDataCopy = {
                name: formData.name,
                email: formData.email,
                timestamp: serverTimestamp()
            }

            // Save Data in database
            await setDoc(doc(db, "users", user.uid), formDataCopy);

            navigate("/")
        } catch (error) {
            toast.error(error.code)
        }
    }
    ```

13. Add onSubmit event to the form
    ```
    onSubmit={onSubmit}
    ```

14. Add submit type to the Sign Up button
    ```
    type="submit"
    ```

15. Commit changes, create PR, link PR to ISSUE, merge PR.









# Task 27 - Add authentication ContinueWithGoogle
01. Create branch
    ```
    git checkout -b task/27_google_authentication
    ```

07. Open OAuth Component

02. Import getAuth, GoogleAuthProvider and signInWithPopup methods
    ```
    import {getAuth, GoogleAuthProvider} from "firebase/auth"
    ```

03. Import toastify
    ```
    import {toast} from "react-toastify";
    ```

04. Import doc, getDoc, serverTimestamp and setDoc methods
    ```
    import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
    ```

05. Import db from firebase
    ```
    import { db } from "../firebase";
    ```
06. Import useNavigate hook
    ```
    // import useNavigate hook
    import {useNavigate} from "react-router-dom";
    ```



07. Initialize useNavigate hook
    ```
    // ---------- HOOK - useNavigate ----------
    const navigate = useNavigate();
    ```

08. Add onGoogleClick Function
    ```
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
    ```

09. Add onClick event to the button, with the function onGoogleClick
    ```
    onClick={onGoogleClick}
    ```

10. Change the type of the button to "button" (By default, buttons are submit)
    ```
    type="button"
    ```
    
11. Commit changes, create PR, link PR to ISSUE, merge PR.





















# Task 25 - Add authentication SignIn page
01. Create branch
    ```
    git checkout -b o
    ```


02. Open SignIn component.

03. Import methods from firebase
    ```
    // Import Firebase methods
    import {signInWithEmailAndPassword, getAuth} from "firebase/auth"
    ```

04. Import Toast method
    ```
    // Import Toastify
    import {toast} from "react-toastify";
    ```

05. Add onSubmit function
    ```
    // ---------- FUNCTION - onSubmit ----------
    async function onSubmit(e) {
        e.preventDefault() // Prevents the page to refresh

        try {
            // Initialize auth
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            if (userCredential.user) {
                navigate("/")
            }


        } catch (error) {
            toast.error(error.code)
        }
    }
    ```

05. Add on submit attribute
    ```
    onSubmit={onSubmit}
    ```
    
06. Commit changes, create PR, link PR to ISSUE, merge PR.

























# Task 26 - Add authentication ForgotPassword page
01. Create branch
    ```
    git checkout -b task/26_google_authentication_forgot_password
    ```

02. Import getAuth and sendPass
    ```
    import { getAuth, sendPasswordResetEmail } from "firebase/auth";
    ```

03. Import toastify
    ```
    // Import toastify
    import {toast} from "react-toastify";
    ```

03. Add onSubmit Function
    ```
    
    ```

04. Add onSubmit attribute to the form
    ```
    onSubmit={onSubmit}
    ```





















# Task 16 - Profile page
01. Create branch
    ```
    git checkout -b task/16_profile_page
    ```

02. Start with this template
    ```
    export default function Profile(){
        return (
            <>
            </>
        )
    }
    ```

03. Import useState hook
    ```
    import {useState} from "react";
    ```

04. Add code and CSS
    ```
    import {useState} from "react";
    export default function Profile(){
    
        // Initialize formData
        const [formData, useFormData] = useState({
            name: "Claudio",
            email: "delafuente@outlook.com.au"
        })
    
        // Destructure formData
        const {name, email} = formData
    
        return (
            <>
                <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
                    <h1 className="text-3xl text-center mt-6 font-bold px-3">My Profile</h1>
                    <div className="w-full md:w-[50%] mt-6">
                        <form>
                            {/* INPUT - Name*/}
                            <input
                                type="text" id="name" value={name} disabled
                                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
                            />
    
    
                            {/* INPUT - email */}
                            <input
                                type="email" id="email" value={email} disabled
                                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
                            />
    
                            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
                                <p className="flex items-center">
                                    Do you want to change your name?
                                    <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer" >Edit</span>
                                </p>
    
                                <p className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer">
                                    Sign out
                                </p>
                            </div>
                        </form>
                    </div>
                </section>
            </>
        )
    }    
    ```


05. Commit changes, create PR, link PR to issue, merge PR






































# Task 30 - Profile page - OAuth - PT1 - Dynamic user name
01. Create branch
    ```
    git checkout -b task/30_profile_page_oauth_pt1
    ```


02. Import getAuth
    ```
    import {getAuth} from "firebase/auth";
    ```

02. Initialize getAuth
    ```
    // Initialize getAuth
    const auth = getAuth()
    ```


04. Update formData




NOTE: so far there is an error, page is rendering before getting the information about the logged in user

05. Inside ./src/components create PrivateRoute.jsx
    ```
    export default function PrivateRoute() {
    }
    ```

06. Import Outlet and Navigate from react-router-dom
    ```
    import {Outlet, Navigate} from "react-router-dom";
    ```

07. Initialize loggedIn variable (as false for testing)
If this variable is false, the function PrivateRoute will redirect to sign-in page
    ```
    const loggedIn = false
    ```

08. Conditional return for logged in/guest users
    ```
    return loggedIn ? <Outlet /> : <Navigate to="/sign-in"/>
    ```

09. In App.js, import PrivateRoute component
    ```
    import PrivateRoute from "./components/PrivateRoute";
    ```
    
10. Add the PrivateRoute component inside the Routes Component
    ```
    <Route path="/profile" element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile/>}/>
    </Route>
    ```

Now, since loggedIn is false, following if statement from step 08, internet browser will be redirected to /sign-in

11. Create custom hook to get authentication status from firebase
12. Create a new folder ./src/hooks
13. Inside ./src/hooks, create useAuthStatus.jsx file, with the following content
    ```
    export default function useAuthStatus() {
        return(
            <div>useAuthStatus</div>
        )
    }
    ```

14. Import useEffect and useState hooks from react
    ```
    import { useEffect, useState } from "react";
    ```

15. Import getAuth and onAuthStateChange methods from firebase
    ```
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    ```

16. Initialize loggedIn variable as false
    ```
    const [loggedIn, setLoggedIn] = useState(false)
    ```

17. Initialize checkingStatus variable as true. This variable will give time to render information from Firebase (Will be used for loading effect)
    ```
    const [checkingStatus, setCheckingStatus] = useState(true)
    ```

18. Add useEffect hook, to return a function
19. In the function returned by useEffect, initialize getAuth
    ```
    const auth = getAuth()
    ```

20. Also, add the function onAuthStateChanged, and pass auth (Information about logged in user)
This function will check if the user is loggedin, if so, it will set the loggedIn variable to true, and the checkingStatus to false, to stop the loading effect
    ```
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
            }
            setCheckingStatus(false)
        })
    
21. Return loggedIn and checkingStatus variables
    ```
    return { loggedIn, checkingStatus }
    ```

22. Import custom hook
    ```
    import useAuthStatus from "../hooks/useAuthStatus";
    ```
    
23. Import loggedIn and checkingStatus from the custom hook
    ```
    const { loggedIn, checkingStatus} = useAuthStatus()
    ```

24. Validate checkingStatus. return a header
    ```
    if(checkingStatus){
        return <h3>Loading...</h3>
    }
    ```

25. Commit changes, create PR, link PR to issue, merge PR















# Task 29 - Profile page - SignOut
01. Create branch
    ```
    git checkout -b task/29_profile_page_sign_out
    ```
02. In Profile component, import useNavigate hook
    ```
    import {useNavigate} from "react-router-dom";
    ```

03. Initialize useNavigate hook
    ```
    // ---------- HOOK - useNavigate ----------
    const navigate = useNavigate()
    ```

04. In Profile component, add onLogout function
    ```

    ```

05. Add onClick attribute to Sign Out \<p>
    ```
    onClick={onLogout}
    ```




















# Task 23 - Dynamic Header
01. Create branch
    ```
    git checkout -b task/23_dynamic_header
    ```

02. Open Header component.
03. Import useState and useEffect hooks
    ```
    import {useState, useEffect} from "react";
    ```

04. Initialize useState hook
    ```
    const [ pageState, setPageState] = useState("Sign In")
    ```

05. Update Sign In \<p> to the pageState hook
    ```
    {pageState}
    ```

06. Update CSS for Sign In (JS Code)
From
    ```
    ${pathMatchRoute("/sign-in") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent" }
    ```
To
    ```
    ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent" }
    ```

07. In the Header component, update the navigate to for Sign In link, onClick event to "/profile"
    ```
    onClick={()=>navigate("/profile")}
    ```

08. Import getAuth and onAuthStateChanged methods
    ```
    import {getAuth, onAuthStateChanged} from "firebase/auth";
    ```

09. Initialize getAuth
    ```
    const auth = getAuth()
    ```

10. Initialize useEffect
    ```
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setPageState('Profile')
            }else{
                setPageState('Sign in')
            }
        })
    }, [])
    ```

11. Commit changes, create PR, link PR to issue, merge PR












































# Task 28 - Profile page - Edit Functionality
01. Create branch
    ```
    git checkout -b task/28_profile_page_edit
    ```

02. Import Taostify
    ```
    // Import - tastify
    import {toast} from "react-toastify";
    ```

03. Import db from Firebase configuration
    ```
    // Import db from Firebase
    import {db} from "../firebase";
    ```

04. Import doc module from Firestore
    ```
    // Import - Firestore
    import {doc, updateDoc} from "firebase/firestore";
    ```

05. Initialize state for changeDetail variable as false
    ```
    // ---------- HOOK - useState - changeDetail ----------
    const [ changeDetail, setChangeDetail] = useState(false)
    ```
    
06. Add onChange function
    ```
    // ---------- FUNCTION - onChange ----------
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState, [e.target.id]: e.target.value
        }))
    }
    ```

07. Add onSubmit function


08. Add onClick event to Edit link \<span> to set changeDetail hook to the opposite state
    ```
    onClick={() => setChangeDetail((prevState) => !prevState)}
    ```

09. Change "Edit" to conditional display depending on the changeDetail value
    ```
    {changeDetail ? "Apply Change" : "Edit"}
    ```

10. Update the INPUT element disabled attribute to be conditional, depending on the value of changeDetail
    ```
    disabled={!changeDetail}
    ```

11. Add the onChange attribuute to the INPUT elements, with the onChange function
    ```
    onChange={onChange}
    ```

12. Update CSS for INPUT element - name. (Make it dynamic)
FROM
    ```
    className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
    ```
TO
    ```
    className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`}
    ```

13. Add onSubmit function to onClick event in Apply Changes and update onClick event
    ```
    onClick={() => {
        changeDetail && onSubmit();
        setChangeDetail((prevState) => !prevState)
    }}
    ```

14. Commit changes, create PR, link PR to issue, merge PR
























# Task 24 - Spinner Component (Loading Effect)
01. Create branch
    ```
    git checkout -b task/24_spinner_component
    ```

02. In the folder .src/components create the file Spinner.jsx, with the following initial template.
    ```
    export default function Spinner() {
        return (
            <div>
                <div>
                </div>
            </div>
        )
    }
    ```

03. Go to loading.io website and choose image. Configure and download to the folder ./src/assets/svg

04. Import the image in the Spinner component.
    ```
    // Import - Images
    import spinner from "../assets/svg/spinner.svg"
    ```


05. Add the image to the inner DIV element
    ```
    <div>
        <img
            src={spinner}
            alt="Loading..."
        />
    </div>
    ```

06. Add CSS styling
    ```
    className="h-24"
    ```

07. Import the Spinner component in the PrivateRoute component
    ```
    // Import Spinner component
    import Spinner from "./Spinner";
    ```

08. In the PrivateRoute component, replace the Loading header with the Spinner component.
    ```
    return <Spinner/>
    ```

09. Add CSS for the spinner in Spinner.jsx, main DIV element.
    ```
    className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-40"
    ```

10. Commit changes, create PR, link PR to issue, merge PR















# Task 37 - Create item button
01. Create branch
    ```
    git checkout -b task/37_create_item_button
    ```


02. Import Link element from react-router-dom
    ```
    // Import - HOOKS
    import {Link, useNavigate} from "react-router-dom";
    ```


03. Import home icon from react-icons
    ```
    // Import - Icon
    import  {FcHome} from "react-icons/fc";
    ```



04. In the profile page, after the form, add a button with a Link element and the home icon
    ```
    <button type="submit">
        <Link>
            <FcHome/>
            Sell or rent your home
        </Link>
    </button>
    ```

05. Add CSS to button
    ```
    className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
    ```

09. Add CSS to the Link element
    ```
    className="flex justify-center items-center"
    ```
    
10. Add CSS to the icon
    ```
    className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2"
    ```

11. Commit changes, create PR, link PR to issue, merge PR









# Task 31 - Listing Page UI
01. Create branch
    ```
    git checkout -b task/31_listing_page_ui
    ```

02. Create file ./src/pages/CreateListing.jsx with the following starting template
    ```
    export default function CreateListing(){
        return (
            <div>CreateListing</div>
        )
    }
    ```

03. In App.js, import CreateListing page
    ```
    import CreateListing from "./pages/CreateListing";
    ```
04. And add the route
    ```
    <Route path="/create-listing" element={<CreateListing/>}/>
    ```

05. In CreateListing page, add a dummy onChange function
    ```
    function onChange () {}
    ```

05. Add Main header. Replace DIV element with MAIN element
    ```
        <main>
            <h1>Create a Listing</h1>
        </main>
    ```

06. Add CSS to H1 element from the previous step
    ```
    className="text-3xl text-center mt-6"
    ```

07. Add CSS to MAIN element
    ```
    className="max-w-md px-2 mx-auto"
    ```

07. Bellow the H1 element add a form with the elements





10. Add CSS to \<p> Sell/Rent
    ```
    className="text-lg mt-6 font-semibold"
    ```

11. Add CSS to Sell and Rent buttons