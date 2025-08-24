import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from '../../../firebase.js';
import HEADER from '../head/header';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";
import './auth.css';

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isProfileComplete = (data) => {
    return (
      data &&
      typeof data.fullName === "string" &&
      data.fullName.trim().length > 1 &&
      Array.isArray(data.wallets) &&
      data.wallets.length > 0
    );
  };

  const redirectAfterLogin = async (user) => {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    const data = userSnap.exists() ? userSnap.data() : {};

    if (isProfileComplete(data)) {
      navigate("/dashboard");
    } else {
      navigate("/profile");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await redirectAfterLogin(user);
    } catch (err) {
      console.error("Login error:", err.message);
      setError("Login failed. Check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user doc exists
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        // First time login, create user doc with empty wallets
        await setDoc(userRef, {
          fullName: user.displayName || "",
          email: user.email,
          createdAt: new Date(),
          wallets: []
        });
      }

      await redirectAfterLogin(user);
    } catch (err) {
      console.error("Google login error:", err.message);
      setError("Google login failed. Try again.");
    }
  };

  return (
    <div className='body'>
      <HEADER />
      <div className="page">
        <h1 className="h1">Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input className="input" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          <input className="input" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          <button type="submit" className="btn btn1">Login</button>
          <button type="button" className="google-btn" onClick={handleGoogleLogin}>
            <FcGoogle className="google-icon" /> Login with Google
          </button>
          <p>Don't have an account? <Link to="/signup">Signup</Link></p>
          {error && <span className="error-text">{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
