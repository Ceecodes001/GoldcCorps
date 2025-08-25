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
  const [isMounted, setIsMounted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    // Set mounted state for animations
    setIsMounted(true);
    
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
        wallets,
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
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading Profile...</p>
      </div>
    );

  return (
    <div className="profile-page">
      <div className={`profile-container ${isMounted ? 'mounted' : ''}`}>
        <h1 className="profile-title">Complete Your Profile</h1>

        <form onSubmit={handleSave} className="profile-form">
          <div className="form-grid">
            {["fullName", "username"].map((field, i) => (
              <div key={field} className={`form-group animated-item`} style={{ animationDelay: `${i * 0.1}s` }}>
                <input
                  name={field}
                  type="text"
                  placeholder={field === "fullName" ? "Full Name *" : "Username *"}
                  value={form[field]}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            ))}

            <div className="form-group animated-item" style={{ animationDelay: '0.2s' }}>
              <input
                name="location"
                type="text"
                placeholder="Location"
                value={form.location}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            
            <div className="form-group animated-item" style={{ animationDelay: '0.3s' }}>
              <label className="input-label">Date of Birth *</label>
              <input
                name="dob"
                type="date"
                value={form.dob}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group animated-item" style={{ animationDelay: '0.4s' }}>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number *"
                value={form.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group animated-item" style={{ animationDelay: '0.5s' }}>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group animated-item" style={{ animationDelay: '0.6s' }}>
              <input
                name="occupation"
                type="text"
                placeholder="Occupation"
                value={form.occupation}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            
            <div className="form-group full-width animated-item" style={{ animationDelay: '0.7s' }}>
              <textarea
                name="bio"
                placeholder="Bio (Tell us about yourself)"
                value={form.bio}
                onChange={handleChange}
                rows={3}
                className="form-textarea"
              ></textarea>
            </div>

            <div className="wallet-section full-width animated-item" style={{ animationDelay: '0.8s' }}>
              <h3 className="wallet-title">Wallet Addresses</h3>
              {["btcWallet", "ethWallet", "usdtWallet"].map((wallet, i) => (
                <div key={wallet} className="form-group">
                  <input
                    name={wallet}
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
                    className="form-input"
                  />
                </div>
              ))}
            </div>

            {error && <div className="error-message full-width animated-item">{error}</div>}
            {success && <div className="success-message full-width animated-item">{success}</div>}

            <div className="form-actions full-width animated-item" style={{ animationDelay: '0.9s' }}>
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={saving || !isValid()}
              >
                {saving ? (
                  <>
                    <span className="btn-spinner"></span>
                    Saving...
                  </>
                ) : "Save Profile"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <style jsx>{`
        /* Profile Page Styles */
        .profile-page {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
          padding: 16px;
          padding-top: 60px;
        }

        .profile-container {
          background: white;
          border-radius: 20px;
          padding: 24px;
          width: 100%;
          max-width: 600px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
        }

        .profile-container.mounted {
          opacity: 1;
          transform: translateY(0);
        }

        .profile-title {
          text-align: center;
          margin-bottom: 24px;
          font-weight: 700;
          font-size: 24px;
          color: #2c3e50;
          position: relative;
          padding-bottom: 12px;
        }

        .profile-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520);
          border-radius: 2px;
        }

        .profile-form {
          width: 100%;
        }

        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.5s ease forwards;
        }

        .animated-item {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.5s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .full-width {
          width: 100%;
        }

        .input-label {
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .form-input, .form-select, .form-textarea {
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid #e1e5e9;
          background: #f8f9fa;
          font-size: 16px;
          transition: all 0.3s ease;
          font-family: inherit;
          width: 100%;
          box-sizing: border-box;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: #3498db;
          background: white;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
          transform: translateY(-2px);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .wallet-section {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e1e5e9;
        }

        .wallet-title {
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 12px;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e1e5e9;
        }

        .btn-primary {
          padding: 12px 24px;
          background: linear-gradient(90deg, #FFD700 0%, #DAA520 100%);
          color: #2c3e50;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 120px;
          justify-content: center;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .btn-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid #2c3e50;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .btn-secondary {
          padding: 12px 24px;
          background: white;
          color: #2c3e50;
          border: 1px solid #bdc3c7;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .error-message {
          padding: 12px 16px;
          background: #f8d7da;
          color: #721c24;
          border-radius: 8px;
          border: 1px solid #f5c6cb;
          text-align: center;
          margin: 8px 0;
          animation: shake 0.5s ease;
        }

        .success-message {
          padding: 12px 16px;
          background: #d4edda;
          color: #155724;
          border-radius: 8px;
          border: 1px solid #c3e6cb;
          text-align: center;
          margin: 8px 0;
          animation: pulse 0.5s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #FFD700;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }

        /* Responsive Styles */
        @media (max-width: 640px) {
          .profile-page {
            padding: 12px;
            padding-top: 40px;
            align-items: flex-start;
          }

          .profile-container {
            padding: 20px;
            border-radius: 16px;
          }

          .profile-title {
            font-size: 22px;
            margin-bottom: 20px;
          }

          .form-grid {
            gap: 12px;
          }

          .form-input, .form-select, .form-textarea {
            padding: 10px 14px;
            font-size: 16px; /* Prevents zoom on iOS */
          }

          .form-actions {
            flex-direction: column-reverse;
            gap: 10px;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            text-align: center;
            padding: 14px;
          }

          .wallet-section {
            margin-top: 12px;
            padding-top: 12px;
          }
        }

        @media (max-width: 400px) {
          .profile-container {
            padding: 16px;
          }

          .profile-title {
            font-size: 20px;
          }

          .form-input, .form-select, .form-textarea {
            padding: 12px; /* Larger touch targets */
          }
        }

        /* Prevent zoom on iOS input focus */
        @media screen and (max-width: 767px) {
          input, select, textarea {
            font-size: 16px !important;
          }
        }

        /* Height adjustments for very small screens */
        @media (max-height: 600px) {
          .profile-page {
            padding-top: 20px;
            padding-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Profile;