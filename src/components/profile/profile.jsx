import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Profile state
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    location: "",
    dob: "",
    phone: "",
    gender: "",
    occupation: "",
    bio: "",
    btcWallet: "",
    ethWallet: "",
    usdtWallet: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        navigate("/login");
        return;
      }
      setUser(u);

      try {
        const ref = doc(db, "users", u.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          // Extract separate wallet addresses from the 'wallets' array
          const btcWallet = data.wallets ? data.wallets.find(w => w.type === 'btc')?.address || "" : "";
          const ethWallet = data.wallets ? data.wallets.find(w => w.type === 'eth')?.address || "" : "";
          const usdtWallet = data.wallets ? data.wallets.find(w => w.type === 'usdt')?.address || "" : "";

          setForm((prev) => ({ 
            ...prev, 
            ...data, 
            btcWallet,
            ethWallet,
            usdtWallet
          }));
        }
      } catch (e) {
        console.error("Failed to load profile:", e);
        setError("Failed to load profile. Please try again.");
      } finally {
        setLoading(false);
      }
    });

    return () => unsub();
  }, [navigate]);

  const isValid = () =>
    form.fullName.trim().length > 1 &&
    form.username.trim().length > 1 &&
    form.phone.trim().length >= 10 &&
    form.dob;

  const handleSave = async (e) => {
    e.preventDefault();
    if (!user) return;

    if (!isValid()) {
      setError("Please fill in all required fields.");
      return;
    }

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const ref = doc(db, "users", user.uid);

      // Create the wallets array from the form state
      const wallets = [];
      if (form.btcWallet) wallets.push({ type: 'btc', address: form.btcWallet });
      if (form.ethWallet) wallets.push({ type: 'eth', address: form.ethWallet });
      if (form.usdtWallet) wallets.push({ type: 'usdt', address: form.usdtWallet });

      const dataToSave = {
        ...form,
        email: user.email,
        wallets, // This is the fix!
        updatedAt: serverTimestamp(),
      };

      // Remove individual wallet fields from the data to save
      delete dataToSave.btcWallet;
      delete dataToSave.ethWallet;
      delete dataToSave.usdtWallet;
          
      const existingData = (await getDoc(ref)).data();
      if (!existingData?.createdAt) {
        dataToSave.createdAt = serverTimestamp();
      }

      await setDoc(ref, dataToSave, { merge: true });
      setSuccess("Profile updated successfully!");
      setTimeout(() => navigate("/dashboard"), 1200);
    } catch (e) {
      console.error("Save failed:", e);
      setError("Could not save profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.spinner}></div>
        <p>Loading Profile...</p>
      </div>
    );

  return (
    <div style={styles.body}>
      <div style={styles.page}>
        <h1 style={styles.h1}>Complete Your Profile</h1>

        <form onSubmit={handleSave} style={styles.form}>
          {["fullName", "username"].map((field) => (
            <input
              key={field}
              name={field}
              style={styles.input}
              type="text"
              placeholder={field === "fullName" ? "Full Name" : "Username"}
              value={form[field]}
              onChange={handleChange}
              required
            />
          ))}

          <input
            name="location"
            style={styles.input}
            type="text"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
          />
          <input
            name="dob"
            style={styles.input}
            type="date"
            value={form.dob}
            onChange={handleChange}
          />
          <input
            name="phone"
            style={styles.input}
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            style={styles.select}
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            name="occupation"
            style={styles.input}
            type="text"
            placeholder="Occupation"
            value={form.occupation}
            onChange={handleChange}
          />
          <textarea
            name="bio"
            style={styles.textarea}
            placeholder="Bio (Tell us about yourself)"
            value={form.bio}
            onChange={handleChange}
            rows={3}
          ></textarea>

          {["btcWallet", "ethWallet", "usdtWallet"].map((wallet) => (
            <input
              key={wallet}
              name={wallet}
              style={styles.input}
              type="text"
              placeholder={
                wallet === "btcWallet"
                  ? "BTC Wallet Address"
                  : wallet === "ethWallet"
                  ? "ETH Wallet Address"
                  : "USDT Wallet Address"
              }
              value={form[wallet]}
              onChange={handleChange}
            />
          ))}

          {error && <span style={styles.errorText}>{error}</span>}
          {success && <span style={styles.successText}>{success}</span>}

          <button
            type="submit"
            style={{
              ...styles.btn,
              opacity: saving || !isValid() ? 0.6 : 1,
              cursor: saving || !isValid() ? "not-allowed" : "pointer",
            }}
            disabled={saving || !isValid()}
          >
            {saving ? "Saving…" : "Save Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  body: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f9fafc 0%, #eaeaea 100%)",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
  },
  page: {
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "2rem",
    width: "100%",
    maxWidth: "700px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
    border: "1px solid rgba(255, 215, 0, 0.4)",
  },
  h1: {
    textAlign: "center",
    marginBottom: "1.5rem",
    fontWeight: "700",
    fontSize: "2rem",
    color: "#1c1c1c",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
  },
  input: {
    padding: "0.85rem 1rem",
    borderRadius: "12px",
    border: "1px solid rgba(0,0,0,0.1)",
    background: "#fff",
    fontSize: "1rem",
    outline: "none",
  },
  textarea: {
    gridColumn: "span 2",
    padding: "1rem",
    borderRadius: "12px",
    border: "1px solid rgba(0,0,0,0.1)",
    background: "#fff",
    minHeight: "80px",
    resize: "vertical",
  },
  select: {
    padding: "0.85rem 1rem",
    borderRadius: "12px",
    border: "1px solid rgba(0,0,0,0.1)",
    background: "#fff",
  },
  btn: {
    gridColumn: "span 2",
    padding: "1rem",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg, #FFD700 0%, #FFC107 100%)",
    fontWeight: "700",
    fontSize: "1.2rem",
    color: "#181818",
    boxShadow: "0 6px 20px rgba(255, 215, 0, 0.3)",
    transition: "all 0.3s ease",
  },
  errorText: {
    gridColumn: "span 2",
    color: "#ff4d4d",
    textAlign: "center",
  },
  successText: {
    gridColumn: "span 2",
    color: "#28a745",
    textAlign: "center",
  },
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #ddd",
    borderTop: "4px solid #FFD700",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default Profile;