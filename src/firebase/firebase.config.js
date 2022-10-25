// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFEkA8K9cz689_HeIGfsYOsb69AoKShAw",
    authDomain: "learning-spree.firebaseapp.com",
    projectId: "learning-spree",
    storageBucket: "learning-spree.appspot.com",
    messagingSenderId: "888101286191",
    appId: "1:888101286191:web:936c298774e039831431da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;