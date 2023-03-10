// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0qAVxOEq5J6vPxW7Krz11pTeu4E9blQo",
  authDomain: "tag-project-df772.firebaseapp.com",
  projectId: "tag-project-df772",
  storageBucket: "tag-project-df772.appspot.com",
  messagingSenderId: "161274633839",
  appId: "1:161274633839:web:baf86b005c2e5d73bf779a",
  measurementId: "G-RKZKPWF8GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider} ;