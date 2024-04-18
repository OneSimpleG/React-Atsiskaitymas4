// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhFi96-KqQwlvJIwIwKGBdOf_EsSNU_cc",
  authDomain: "react-atsiskaitymas4.firebaseapp.com",
  projectId: "react-atsiskaitymas4",
  storageBucket: "react-atsiskaitymas4.appspot.com",
  messagingSenderId: "32405702716",
  appId: "1:32405702716:web:9c6538a0c74e4b39a49b39",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
