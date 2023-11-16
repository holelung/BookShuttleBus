// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJO2oDJJ0UpEKlEIOa5BFjiWfnHhFum-8",
  authDomain: "halogen-oxide-380406.firebaseapp.com",
  databaseURL: "https://halogen-oxide-380406-default-rtdb.firebaseio.com/",
  projectId: "halogen-oxide-380406",
  storageBucket: "halogen-oxide-380406.appspot.com",
  messagingSenderId: "957679418247",
  appId: "1:957679418247:web:907cf200c4f224f9ceb122",
  measurementId: "G-YLZ8WDQRHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

