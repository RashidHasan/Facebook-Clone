import React, { useState } from "react";
import "./CSS/login.css";
import { auth, provider } from "./firebase";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        if (
          result &&
          result.credential &&
          result.credential.accessToken &&
          result.user
        ) {
          var credential = result.credential;
          const photoURL = `${result.user.photoURL}?access_token=${credential.accessToken}`;

          dispatch({
            type: "SET_USER",
            user: {
              displayName: result.user.displayName,
              photoURL: photoURL,
            },
          });
        } else {
          console.error("Invalid result object:", result);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login__wrapper">
      <div className="login">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
          alt="Facebook Logo"
        />
        <h2>Sign in with Facebook</h2>
        <button onClick={signIn}>Login with Facebook</button>
      </div>
    </div>
  );
}
export default Login;
