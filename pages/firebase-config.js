// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7r9jhAVaAQONEeljNwJ1_44Jhu984xug",
  authDomain: "theatre-website.firebaseapp.com",
  projectId: "theatre-website",
  storageBucket: "theatre-website.appspot.com",
  messagingSenderId: "476193261339",
  appId: "1:476193261339:web:9c75503aaf1634336435be",
  measurementId: "G-FVGJE7M032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);