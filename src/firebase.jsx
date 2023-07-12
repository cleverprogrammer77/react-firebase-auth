// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdbMGb4Kq4f2_kDQbNZJfS_Qmdi4-OvsY",
  authDomain: "fir-auth-fe036.firebaseapp.com",
  projectId: "fir-auth-fe036",
  storageBucket: "fir-auth-fe036.appspot.com",
  messagingSenderId: "86137860244",
  appId: "1:86137860244:web:2c4f2236b0aab0b71cc481",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
