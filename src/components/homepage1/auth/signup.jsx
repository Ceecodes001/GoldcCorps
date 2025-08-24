import React, { useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../../firebase.js';
import HEADER from '../head/header';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";
import './auth.css';

const Signup = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        createdAt: new Date(),
        wallets: [] // start empty
      });

      // ✅ Add flag to prevent global redirect override
      sessionStorage.setItem("newSignup", "true");

      navigate("/profile"); // Always profile after signup
    } catch (err) {
      console.error("Signup error:", err.message);
      setError("Signup failed. Try again.");
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName: user.displayName || "",
        email: user.email,
        createdAt: new Date(),
        wallets: []
      }, { merge: true });

      sessionStorage.setItem("newSignup", "true");
      navigate("/profile");
    } catch (err) {
      console.error("Google signup error:", err.message);
      setError("Google signup failed. Try again.");
    }
  };

  return (
    <div className='body'>
      <HEADER />
      <div className="page">
        <h1 className="h1">Signup</h1>
        <form onSubmit={handleSignup} className="signup-form">
          <input className="input" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          <input className="input" required type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your name" />
          <input className="input" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          <button type="submit" className="btn btn1">Sign Up</button>
          <button type="button" className="google-btn" onClick={handleGoogleSignup}>
            <FcGoogle className="google-icon" /> Signup with Google
          </button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
          {error && <span className="error-text">{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
