import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc, updateDoc, collection, addDoc, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaUser,
  FaChartBar,
  FaCog,
  FaWallet,
  FaBitcoin,
  FaEthereum,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
  FaPlusSquare,
  FaMinusSquare,
  FaHistory,
  FaUserPlus,
  FaCoins,
  FaUpload,
  FaReceipt
} from "react-icons/fa";

// Constants for reusable data
const GOLD_PLANS = [
  {
    id: 1,
    name: "BEGINNERS PLAN",
    percentProfit: "5%",
    price: 19900,
    duration:"7 days",
    intrest:"$200",
    description: "Perfect for beginners starting with gold investment"
  },
  {
    id: 2,
    name: "MASTERS PLAN",
    percentProfit: "30%",
    duration: "14 days",
    price: 999999,
    intrest:"$20,000",
    description: "Ideal for consistent wealth accumulation"
  },
  {
    id: 3,
    name: "PREMIUM PLAN",
    percentProfit: "50%",
    price: 1000000,
    intrest:"Unlimited for 30 days",
    description: "For serious investors building a substantial portfolio"
  }
];

const DEPOSIT_ADDRESS = "T9zZ4oxBJNiNxaVF2sdjLrjE4KeZkqzkiv";

// Styles as a JavaScript object (CSS-in-JS)
const styles = {
  // Main Layout
  dashboardContainer: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    "@media (maxWidth: 768px)": {
      flexDirection: "column",
    },
  },
  // Sidebar
  sidebar: {
    width: "250px",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
    "@media (maxWidth: 768px)": {
      width: "100%",
      position: "fixed",
      bottom: 0,
      left: 0,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "10px 0",
      zIndex: 100,
    },
  },
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    paddingBottom: "20px",
    "@media (maxWidth: 768px)": {
      display: "none",
    },
  },
  goldText: {
    fontSize: "2rem",
    fontWeight: "bold",
    background:
      "linear-gradient(90deg, #FFD700, #DAA520, #B8860B, #FFD700)",
    backgroundSize: "300% 300%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "goldShimmer 4s ease infinite",
    letterSpacing: "2px",
    margin: "0",
  },
  "@keyframes goldShimmer": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  navList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    flex: 1,
    "@media (maxWidth: 768px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
    },
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px 15px",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "background-color 0.2s",
    "&:hover": {
      backgroundColor: "#34495e",
    },
    "& svg": {
      marginRight: "10px",
    },
    "@media (maxWidth: 768px)": {
      flexDirection: "column",
      fontSize: "12px",
      padding: "5px",
      "& svg": {
        marginRight: "0",
        marginBottom: "5px",
      },
    },
  },
  navItemActive: {
    backgroundColor: "#34495e",
    fontWeight: "bold",
    color: "#FFD700",
  },
  logoutBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 15px",
    cursor: "pointer",
    backgroundColor: "#e74c3c",
    borderRadius: "8px",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#c0392b",
    },
    "@media (maxWidth: 768px)": {
      marginTop: "0",
      padding: "10px 20px",
      fontSize: "12px",
    },
  },
  // Main Content Area
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    "@media (maxWidth: 768px)": {
      padding: "20px",
      paddingBottom: "80px",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "15px",
  },
  title: {
    fontSize: "2rem",
    color: "#2c3e50",
    margin: 0,
  },
  userInfo: {
    fontSize: "1rem",
    color: "#7f8c8d",
  },
  contentArea: {
    flex: 1,
  },
  overviewContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  metric: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "10px 0",
  },
  subtext: {
    color: "#7f8c8d",
  },
  sectionCard: {
    gridColumn: "1 / -1",
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  cryptoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  cryptoCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    border: "1px solid #eee",
  },
  positiveChange: {
    color: "#27ae60",
    fontWeight: "bold",
  },
  negativeChange: {
    color: "#c0392b",
    fontWeight: "bold",
  },
  activityList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  activityIcon: {
    marginRight: "10px",
    color: "#2ecc71",
  },
  activityTime: {
    fontSize: "0.8rem",
    color: "#95a5a6",
    marginLeft: "auto",
  },
  // Profile Section Styles
  profileContainer: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  profileGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "20px",
  },
  profileCard: {
    padding: "15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    border: "1px solid #eee",
  },
  bioCard: {
    padding: "15px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    border: "1px solid #eee",
    marginBottom: "20px",
  },
  walletInfo: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    border: "1px solid #eee",
  },
  walletList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    "& li": {
      marginBottom: "8px",
    },
  },
  link: {
    color: "#3498db",
    cursor: "pointer",
    textDecoration: "underline",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  // Settings Section Styles
  settingsContainer: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  },
  settingsCard: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    border: "1px solid #eee",
  },
  settingItem: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  btnPrimary: {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#2980b9",
    },
  },
  btnSecondary: {
    padding: "10px 20px",
    backgroundColor: "#ecf0f1",
    color: "#34495e",
    border: "1px solid #bdc3c7",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#bdc3c7",
    },
  },
  successMessage: {
    color: "#2ecc71",
    display: "flex",
    alignItems: "center",
  },
  errorMessage: {
    color: "#e74c3c",
    display: "flex",
    alignItems: "center",
  },
  
  // Gold Plans
  goldPlansContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "30px"
  },
  goldPlanCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    border: "2px solid #FFD700",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
    }
  },
  selectedPlan: {
    border: "3px solid #D4AF37",
    backgroundColor: "#FFF9C4"
  },
  planTitle: {
    fontSize: "1.5rem",
    color: "#D4AF37",
    margin: "10px 0"
  },
  planPrice: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#2c3e50",
    margin: "10px 0"
  },
  planDescription: {
    color: "#7f8c8d",
    margin: "10px 0"
  },
  
  // Deposit Section
  depositAddress: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    border: "1px solid #eee",
    margin: "20px 0",
    textAlign: "center",
    wordBreak: "break-all"
  },
  qrCode: {
    maxWidth: "200px",
    margin: "15px auto",
    display: "block"
  },
  
  // Upload Section
  uploadArea: {
    border: "2px dashed #3498db",
    borderRadius: "8px",
    padding: "30px",
    textAlign: "center",
    margin: "20px 0",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#e8f4fd"
    }
  },
  uploadInput: {
    display: "none"
  },
  previewImage: {
    maxWidth: "100%",
    maxHeight: "300px",
    marginTop: "15px",
    borderRadius: "8px"
  },
  
  // Transaction Status
  statusIndicator: {
    display: "inline-flex",
    alignItems: "center",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    marginLeft: "10px"
  },
  statusPending: {
    backgroundColor: "#FFF3CD",
    color: "#856404"
  },
  statusCompleted: {
    backgroundColor: "#D4EDDA",
    color: "#155724"
  },
  statusProcessing: {
    backgroundColor: "#CCE5FF",
    color: "#004085"
  },
};

// Component for the Profile section
const ProfileSection = ({ user }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        }
      }
      setLoading(false);
    };
    fetchProfileData();
  }, [user]);

  if (loading) {
    return <div style={styles.loading}>Loading profile...</div>;
  }

  return (
    <div style={styles.profileContainer}>
      <h2 style={styles.sectionTitle}>User Profile</h2>
      <div style={styles.profileGrid}>
        <div style={styles.profileCard}>
          <strong>Full Name:</strong>{" "}
          <span>{profileData.fullName || "N/A"}</span>
        </div>
        <div style={styles.profileCard}>
          <strong>Email:</strong> <span>{user.email}</span>
        </div>
        <div style={styles.profileCard}>
          <strong>Username:</strong>{" "}
          <span>{profileData.username || "N/A"}</span>
        </div>
        <div style={styles.profileCard}>
          <strong>Phone:</strong> <span>{profileData.phone || "N/A"}</span>
        </div>
        <div style={styles.profileCard}>
          <strong>Location:</strong>{" "}
          <span>{profileData.location || "N/A"}</span>
        </div>
        <div style={styles.profileCard}>
          <strong>Occupation:</strong>{" "}
          <span>{profileData.occupation || "N/A"}</span>
        </div>
      </div>
      <div style={styles.bioCard}>
        <strong>Bio:</strong>
        <p>{profileData.bio || "No bio provided."}</p>
      </div>
      <div style={styles.walletInfo}>
        <h3>Wallet Addresses</h3>
        {profileData.wallets && profileData.wallets.length > 0 ? (
          <ul style={styles.walletList}>
            {profileData.wallets.map((wallet, index) => (
              <li key={index}>
                <strong>{wallet.type.toUpperCase()}:</strong> {wallet.address}
              </li>
            ))}
          </ul>
        ) : (
          <p>
            No wallet addresses saved.{" "}
            <span
              style={styles.link}
              onClick={() => navigate("/profile")}
            >
              Add them now.
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

// Component for the Settings section
const SettingsSection = ({ user }) => {
  const [resetStatus, setResetStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async () => {
    if (!user || !user.email) {
      setResetStatus("error");
      return;
    }

    setLoading(true);
    setResetStatus(null);

    try {
      await sendPasswordResetEmail(auth, user.email);
      setResetStatus("success");
    } catch (error) {
      console.error("Password reset error:", error);
      setResetStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.settingsContainer}>
      <div style={styles.settingsCard}>
        <h2 style={styles.sectionTitle}>Account Settings</h2>
        <div style={styles.settingItem}>
          <h3>Password & Security</h3>
          <p>Request a password reset link to be sent to your email.</p>
          <button
            style={styles.btnPrimary}
            onClick={handlePasswordReset}
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
          {resetStatus === "success" && (
            <span style={styles.successMessage}>
              <FaCheckCircle style={{ marginRight: "5px" }} /> Password reset
              email sent! Check your inbox.
            </span>
          )}
          {resetStatus === "error" && (
            <span style={styles.errorMessage}>
              <FaExclamationCircle style={{ marginRight: "5px" }} /> Failed to
              send reset email. Please try again.
            </span>
          )}
        </div>
      </div>
      <div style={styles.settingsCard}>
        <h2 style={styles.sectionTitle}>Other Settings</h2>
        <div style={styles.settingItem}>
          <p>Customize your account preferences here.</p>
          <button
            style={styles.btnSecondary}
            onClick={() => alert("This feature is coming soon!")}
          >
            Update Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

// Component for the Deposit section
const DepositSection = ({ user, updateBalance }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [depositConfirmed, setDepositConfirmed] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setDepositConfirmed(false);
    setTransactionSuccess(false);
    setReceiptData(null);
  };

  const handleConfirmDeposit = () => {
    setDepositConfirmed(true);
  };

  const handleSubmitReceipt = async () => {
    if (!selectedPlan) return;
    setUploading(true);

    try {
      // Prepare transaction data
      const now = new Date();
      const transactionData = {
        userId: user.uid,
        type: "deposit",
        amount: selectedPlan.price,
        percentProfit: selectedPlan.percentProfit,
        plan: selectedPlan.name,
        intrest: selectedPlan.intrest,
        duration: selectedPlan.duration,
        description: selectedPlan.description,
        status: "completed",
        timestamp: now
      };

      // Store transaction in Firestore
      await addDoc(collection(db, "transactions"), transactionData);

      // Update user balance
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const currentBalance = userDoc.data().balance || 0;
        const currentGold = userDoc.data().goldBalance || 0;
        const goldToAdd = parseFloat(selectedPlan.percentProfit);

        await updateDoc(userRef, {
          balance: currentBalance + selectedPlan.price,
          goldBalance: currentGold + goldToAdd
        });

        updateBalance(currentBalance + selectedPlan.price, currentGold + goldToAdd);
      }

      // Generate receipt data
      setReceiptData({
        plan: selectedPlan.name,
        amount: selectedPlan.price,
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        status: "Successful"
      });

      setTransactionSuccess(true);
      setSelectedPlan(null);
      setDepositConfirmed(false);
    } catch (error) {
      alert("There was an error processing your transaction. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>Purchase Gold</h2>
      {transactionSuccess && receiptData ? (
        <div>
          <h3>Transaction Successful!</h3>
          <div style={{ background: "#f9f9f9", padding: 20, borderRadius: 8, margin: "20px 0" }}>
            <h4>Receipt</h4>
            <p><strong>Plan:</strong> {receiptData.plan}</p>
            <p><strong>Amount Deposited:</strong> ${receiptData.amount}</p>
            <p><strong>Date:</strong> {receiptData.date}</p>
            <p><strong>Time:</strong> {receiptData.time}</p>
            <p><strong>Status:</strong> <span style={{ color: "#27ae60" }}>{receiptData.status}</span></p>
          </div>
        </div>
      ) : !selectedPlan ? (
        <>
          <p>Select a gold plan to purchase:</p>
          <div style={styles.goldPlansContainer}>
            {GOLD_PLANS.map(plan => (
              <div
                key={plan.id}
                style={{
                  ...styles.goldPlanCard,
                  ...(selectedPlan?.id === plan.id ? styles.selectedPlan : {})
                }}
                onClick={() => handlePlanSelect(plan)}
              >
                <FaCoins size={36} color="#D4AF37" />
                <h3 style={styles.planTitle}>{plan.name}</h3>
                <p style={styles.planPrice}>${plan.price} USD</p>
                <p style={styles.planDescription}><strong>Profit:</strong> {plan.percentProfit} of Pure Gold</p>
                <p style={styles.planDescription}><strong>Interest:</strong> {plan.intrest}</p>
                <p style={styles.planDescription}><strong>Duration:</strong> {plan.duration}</p>
                <p style={styles.planDescription}>{plan.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : !depositConfirmed ? (
        <>
          <h3>Selected Plan: {selectedPlan.name}</h3>
          <p>Please send exactly <strong>${selectedPlan.price} USDT</strong> to the following address:</p>
          <div style={styles.depositAddress}>
            <p><strong>USDT Address (TRC20):</strong></p>
            <p>{DEPOSIT_ADDRESS}</p>
            <p><small>Network: TRON (TRC20)</small></p>
          </div>
          <p>After completing your transfer, click the button below to confirm and generate your receipt.</p>
          <button
            onClick={handleConfirmDeposit}
            disabled={uploading}
          >
            I've Sent the Payment
          </button>
          <button
            style={{ ...styles.btnSecondary, marginLeft: "10px" }}
            onClick={() => setSelectedPlan(null)}
          >
            Choose Different Plan
          </button>
        </>
      ) : (
        <>
          <h3>Confirm Deposit</h3>
          <p>Click the button below to complete your transaction and generate your receipt.</p>
          <button
            style={styles.btnPrimary}
            onClick={handleSubmitReceipt}
            disabled={uploading}
          >
            {uploading ? "Processing..." : "Complete Transaction"}
          </button>
        </>
      )}
    </div>
  );
};

// Component for Withdraw Section
const WithdrawSection = ({ user, balance, goldBalance, updateBalance }) => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawType, setWithdrawType] = useState("usd");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleWithdraw = async () => {
    if (!withdrawAmount || !destinationAddress) {
      setMessage({ text: "Please fill all fields", type: "error" });
      return;
    }

    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      setMessage({ text: "Please enter a valid amount", type: "error" });
      return;
    }

    if (withdrawType === "usd" && amount > balance) {
      setMessage({ text: "Insufficient USD balance", type: "error" });
      return;
    }

    if (withdrawType === "gold" && amount > goldBalance) {
      setMessage({ text: "Insufficient gold balance", type: "error" });
      return;
    }

    setProcessing(true);

    try {
      // Create withdrawal transaction record
      const transactionData = {
        userId: user.uid,
        type: "withdrawal",
        amount: withdrawType === "usd" ? amount : amount * 300, // Assuming 1g gold = $300
        percentProfit: withdrawType === "gold" ? `${amount}g` : "0g",
        status: "pending",
        destinationAddress: destinationAddress,
        timestamp: new Date()
      };

      await addDoc(collection(db, "transactions"), transactionData);

      // Update user balance
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const currentBalance = userDoc.data().balance || 0;
        const currentGold = userDoc.data().goldBalance || 0;

        await updateDoc(userRef, {
          balance: withdrawType === "usd" ? currentBalance - amount : currentBalance,
          goldBalance: withdrawType === "gold" ? currentGold - amount : currentGold
        });

        updateBalance(
          withdrawType === "usd" ? currentBalance - amount : currentBalance,
          withdrawType === "gold" ? currentGold - amount : currentGold
        );
      }

      setMessage({ 
        text: "Withdrawal request submitted successfully! It will be processed within 24 hours.", 
        type: "success" 
      });
      
      // Reset form
      setWithdrawAmount("");
      setDestinationAddress("");

    } catch (error) {
      console.error("Error processing withdrawal:", error);
      setMessage({ text: "There was an error processing your withdrawal. Please try again.", type: "error" });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>Withdraw Funds</h2>
      
      <div style={{ marginBottom: "20px" }}>
        <p>Available Balance: <strong>${balance} USD</strong> | <strong>{goldBalance}g Gold</strong></p>
      </div>

      <div style={{ display: "grid", gap: "15px" }}>
        <div>
          <label htmlFor="withdraw-type">Withdraw Type:</label>
          <select 
            id="withdraw-type"
            value={withdrawType} 
            onChange={(e) => setWithdrawType(e.target.value)}
            style={{ padding: "10px", width: "100%", borderRadius: "5px", border: "1px solid #ddd" }}
          >
            <option value="usd">USD</option>
            <option value="gold">Gold</option>
          </select>
        </div>

        <div>
          <label htmlFor="withdraw-amount">
            Amount to Withdraw {withdrawType === "gold" ? "(in grams)" : ""}:
          </label>
          <input
            id="withdraw-amount"
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder={withdrawType === "usd" ? "Enter USD amount" : "Enter gold amount in grams"}
            style={{ padding: "10px", width: "100%", borderRadius: "5px", border: "1px solid #ddd" }}
          />
        </div>

        <div>
          <label htmlFor="destination-address">Destination Address:</label>
          <input
            id="destination-address"
            type="text"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
            placeholder="Enter your wallet address"
            style={{ padding: "10px", width: "100%", borderRadius: "5px", border: "1px solid #ddd" }}
          />
        </div>

        {message.text && (
          <div style={message.type === "success" ? styles.successMessage : styles.errorMessage}>
            {message.type === "success" ? 
              <FaCheckCircle style={{ marginRight: "5px" }} /> : 
              <FaExclamationCircle style={{ marginRight: "5px" }} />}
            {message.text}
          </div>
        )}

        <button
          style={styles.btnPrimary}
          onClick={handleWithdraw}
          disabled={processing}
        >
          {processing ? "Processing..." : "Request Withdrawal"}
        </button>
      </div>

      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
        <h4>Withdrawal Information:</h4>
        <ul>
          <li>USD withdrawals are processed within 24 hours</li>
          <li>Gold withdrawals are converted to USD at current market rates</li>
          <li>Minimum withdrawal amount: $50 USD or 1g Gold</li>
          <li>Network fees may apply</li>
        </ul>
      </div>
    </div>
  );
};

// Component for History Section
const HistorySection = ({ user }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    
    const q = query(
      collection(db, "transactions"),
      where("userId", "==", user.uid),
      orderBy("timestamp", "desc")
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const transactionsData = [];
      querySnapshot.forEach((doc) => {
        transactionsData.push({ id: doc.id, ...doc.data() });
      });
      setTransactions(transactionsData);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [user]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return styles.statusCompleted;
      case "processing":
        return styles.statusProcessing;
      default:
        return styles.statusPending;
    }
  };

  if (loading) {
    return <div style={styles.sectionCard}>Loading transaction history...</div>;
  }

  return (
    <div style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>Transaction History</h2>
      
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ padding: "12px", textAlign: "left" }}>Type</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Amount</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Gold</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Date</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px" }}>
                  {transaction.type === "deposit" ? 
                    <FaPlusSquare style={{ color: "#27ae60", marginRight: "5px" }} /> : 
                    <FaMinusSquare style={{ color: "#e74c3c", marginRight: "5px" }} />
                  }
                  {transaction.type}
                  {transaction.plan && ` (${transaction.plan})`}
                </td>
                <td style={{ padding: "12px" }}>${transaction.amount}</td>
                <td style={{ padding: "12px" }}>{transaction.percentProfit || "N/A"}</td>
                <td style={{ padding: "12px" }}>
                  {transaction.timestamp?.toDate().toLocaleDateString()}
                </td>
                <td style={{ padding: "12px" }}>
                  <span style={{...styles.statusIndicator, ...getStatusStyle(transaction.status)}}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Component for Referral Section
const ReferralSection = () => {
  return (
    <div style={styles.sectionCard}>
      <h2 style={styles.sectionTitle}>Referral Program</h2>
      <p>
        Refer your friends and earn rewards! Share your unique referral link
        below.
      </p>
      <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", border: "1px dashed #ccc" }}>
        <strong>Your Referral Link:</strong>
        <p style={{ overflowWrap: "break-word", marginTop: "5px", color: "#3498db" }}>
          https://yourwebsite.com/refer/YOUR-UNIQUE-CODE
        </p>
        <button style={styles.btnPrimary} onClick={() => navigator.clipboard.writeText("https://yourwebsite.com/refer/YOUR-UNIQUE-CODE")}>
          Copy Link
        </button>
      </div>
    </div>
  );
};

// Dashboard Main Component
const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [balance, setBalance] = useState(0);
  const [goldBalance, setGoldBalance] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        
        // Fetch user data
        const docRef = doc(db, "users", u.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData(data);
          setBalance(data.balance || 0);
          setGoldBalance(data.goldBalance || 0);
        }
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const updateBalance = (newBalance, newGoldBalance) => {
    setBalance(newBalance);
    setGoldBalance(newGoldBalance);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  if (!user || !userData) {
    return <div style={styles.loading}>Loading...</div>;
  }

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div style={styles.overviewContainer}>
            <div style={styles.card}>
              <h3>Account Balance</h3>
              <p style={styles.metric}>${balance.toLocaleString()}</p>
              <p style={styles.subtext}>Available USD</p>
            </div>
            <div style={styles.card}>
              <h3>Gold Holdings</h3>
              <p style={styles.metric}>{goldBalance}g</p>
              <p style={styles.subtext}>Pure Gold</p>
            </div>
            <div style={styles.card}>
              <h3>Total Value</h3>
              <p style={styles.metric}>${(balance + (goldBalance * 300)).toLocaleString()}</p>
              <p style={styles.subtext}>Based on current gold prices</p>
            </div>

            <div style={styles.sectionCard}>
              <h2 style={styles.sectionTitle}>Recent Activity</h2>
              <ul style={styles.activityList}>
                <li><FaCheckCircle style={styles.activityIcon} /> Account created <span style={styles.activityTime}>1 week ago</span></li>
                {balance > 0 && (
                  <li><FaCheckCircle style={styles.activityIcon} /> Deposit of ${balance} <span style={styles.activityTime}>Recently</span></li>
                )}
                {goldBalance > 0 && (
                  <li><FaCheckCircle style={styles.activityIcon} /> Purchased {goldBalance}g of gold <span style={styles.activityTime}>Recently</span></li>
                )}
              </ul>
            </div>
          </div>
        );
      case "deposit":
        return <DepositSection user={user} updateBalance={updateBalance} />;
      case "withdraw":
        return <WithdrawSection user={user} balance={balance} goldBalance={goldBalance} updateBalance={updateBalance} />;
      case "history":
        return <HistorySection user={user} />;
      case "referral":
        return <ReferralSection />;
      case "profile":
        return <ProfileSection user={user} />;
      case "settings":
        return <SettingsSection user={user} />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <FaWallet size={24} style={{ marginRight: "10px" }} />
          <h2 style={styles.goldText}>MyWallet</h2>
        </div>
        <ul style={styles.navList}>
          <li
            style={{ ...styles.navItem, ...(activeSection === "dashboard" ? styles.navItemActive : {}) }}
            onClick={() => setActiveSection("dashboard")}
          >
            <FaChartBar /> Dashboard
          </li>
          <li
            style={{ ...styles.navItem, ...(activeSection === "deposit" ? styles.navItemActive : {}) }}
            onClick={() => setActiveSection("deposit")}
          >
            <FaPlusSquare /> Buy Gold
          </li>
          <li
            style={{ ...styles.navItem, ...(activeSection === "withdraw" ? styles.navItemActive : {}) }}
            onClick={() => setActiveSection("withdraw")}
          >
            <FaMinusSquare /> Withdraw
          </li>
          <li
            style={{ ...styles.navItem, ...(activeSection === "history" ? styles.navItemActive : {}) }}
            onClick={() => setActiveSection("history")}
          >
            <FaHistory /> History
          </li>
          <li
            style={{ ...styles.navItem, ...(activeSection === "referral" ? styles.navItemActive : {}) }}
            onClick={() => setActiveSection("referral")}
          >
            <FaUserPlus /> Referral
          </li>
          <li
            style={{ ...styles.navItem, ...(activeSection === "profile" ? styles.navItemActive : {}) }}
            onClick={() => setActiveSection("profile")}
          >
            <FaUser /> Profile
          </li>
          <li
            style={{ ...styles.navItem, ...(activeSection === "settings" ? styles.navItemActive : {}) }}
            onClick={() => setActiveSection("settings")}
          >
            <FaCog /> Settings
          </li>
        </ul>
        <div style={styles.logoutBtn} onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </div>
      </div>
      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={styles.title}>
            {activeSection === "dashboard" ? "Dashboard" : 
             activeSection === "deposit" ? "Buy Gold" : 
             activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
          </h1>
          <span style={styles.userInfo}>
            Balance: <strong>${balance}</strong> | Gold: <strong>{goldBalance}g</strong>
          </span>
        </div>
        <div style={styles.contentArea}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;