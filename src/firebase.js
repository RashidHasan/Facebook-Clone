import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBp6XZlkmdwh3jYULCXkGmE88ab6MJn82k",
  authDomain: "fb-clone-92d34.firebaseapp.com",
  projectId: "fb-clone-92d34",
  storageBucket: "fb-clone-92d34.appspot.com",
  messagingSenderId: "810428029718",
  appId: "1:810428029718:web:644a52a6a0f0c764624e37",
});

const auth = getAuth();
const provider = new FacebookAuthProvider();

export { auth, provider };
