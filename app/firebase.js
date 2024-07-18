// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq9CqwtwrO7Pv4uCYjUaOmH5EEcliDnho",
  authDomain: "netflix-project-1bf0e.firebaseapp.com",
  projectId: "netflix-project-1bf0e",
  storageBucket: "netflix-project-1bf0e.appspot.com",
  messagingSenderId: "692256515363",
  appId: "1:692256515363:web:0271b060c6a6ed24f11896",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
