// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZUJbGdV9-WN5MmMqdSe5rRvPbBEwoeec",
  authDomain: "fir-react-007.firebaseapp.com",
  projectId: "fir-react-007",
  storageBucket: "fir-react-007.appspot.com",
  messagingSenderId: "858298867415",
  appId: "1:858298867415:web:736b38f677c81b4a729a92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);