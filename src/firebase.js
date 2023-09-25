// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

// Method
import {getFirestore} from "firebase/firestore"


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
initializeApp(firebaseConfig);

// Export Method
export const db = getFirestore()