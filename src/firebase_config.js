// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8r5PXADyX3eqsmUniYV05PqKmq9Av6mY",
  authDomain: "kid-tok-d6c8d.firebaseapp.com",
  projectId: "kid-tok-d6c8d",
  storageBucket: "kid-tok-d6c8d.appspot.com",
  messagingSenderId: "77768471598",
  appId: "1:77768471598:web:02711ffe28b4681e7c5bbf",
  measurementId: "G-VR0ZFLXE6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);