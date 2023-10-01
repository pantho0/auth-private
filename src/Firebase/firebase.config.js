// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkNhVOiUB49JqqX5Fdfxdqm1vgEDMJvXw",
  authDomain: "auth-private-cf637.firebaseapp.com",
  projectId: "auth-private-cf637",
  storageBucket: "auth-private-cf637.appspot.com",
  messagingSenderId: "19481593380",
  appId: "1:19481593380:web:fdb149109ca1e7174dfab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;