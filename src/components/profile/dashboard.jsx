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
  FaReceipt,
  FaBars,
  FaTimes
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
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <div className="profile-container">
      <h2 className="section-title">User Profile</h2>
      <div className="profile-grid">
        <div className="profile-card">
          <strong>Full Name:</strong>{" "}
          <span>{profileData.fullName || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Email:</strong> <span>{user.email}</span>
        </div>
        <div className="profile-card">
          <strong>Username:</strong>{" "}
          <span>{profileData.username || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Phone:</strong> <span>{profileData.phone || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Location:</strong>{" "}
          <span>{profileData.location || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Occupation:</strong>{" "}
          <span>{profileData.occupation || "N/A"}</span>
        </div>
      </div>
      <div className="bio-card">
        <strong>Bio:</strong>
        <p>{profileData.bio || "No bio provided."}</p>
      </div>
      <div className="wallet-info">
        <h3>Wallet Addresses</h3>
        {profileData.wallets && profileData.wallets.length > 0 ? (
          <ul className="wallet-list">
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
              className="link"
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
    <div className="settings-container">
      <div className="settings-card">
        <h2 className="section-title">Account Settings</h2>
        <div className="setting-item">
          <h3>Password & Security</h3>
          <p>Request a password reset link to be sent to your email.</p>
          <button
            className="btn-primary"
            onClick={handlePasswordReset}
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
          {resetStatus === "success" && (
            <span className="success-message">
              <FaCheckCircle style={{ marginRight: "5px" }} /> Password reset
              email sent! Check your inbox.
            </span>
          )}
          {resetStatus === "error" && (
            <span className="error-message">
              <FaExclamationCircle style={{ marginRight: "5px" }} /> Failed to
              send reset email. Please try again.
            </span>
          )}
        </div>
      </div>
      <div className="settings-card">
        <h2 className="section-title">Other Settings</h2>
        <div className="setting-item">
          <p>Customize your account preferences here.</p>
          <button
            className="btn-secondary"
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
    <div className="section-card">
      <h2 className="section-title">Purchase Gold</h2>
      {transactionSuccess && receiptData ? (
        <div>
          <h3>Transaction Successful!</h3>
          <div className="receipt-container">
            <h4>Receipt</h4>
            <p><strong>Plan:</strong> {receiptData.plan}</p>
            <p><strong>Amount Deposited:</strong> ${receiptData.amount}</p>
            <p><strong>Date:</strong> {receiptData.date}</p>
            <p><strong>Time:</strong> {receiptData.time}</p>
            <p><strong>Status:</strong> <span className="status-success">{receiptData.status}</span></p>
          </div>
        </div>
      ) : !selectedPlan ? (
        <>
          <p>Select a gold plan to purchase:</p>
          <div className="gold-plans-container">
            {GOLD_PLANS.map(plan => (
              <div
                key={plan.id}
                className={`gold-plan-card ${selectedPlan?.id === plan.id ? 'selected-plan' : ''}`}
                onClick={() => handlePlanSelect(plan)}
              >
                <FaCoins size={36} color="#D4AF37" />
                <h3 className="plan-title">{plan.name}</h3>
                <p className="plan-price">${plan.price} USD</p>
                <p className="plan-description"><strong>Profit:</strong> {plan.percentProfit} of Pure Gold</p>
                <p className="plan-description"><strong>Interest:</strong> {plan.intrest}</p>
                <p className="plan-description"><strong>Duration:</strong> {plan.duration}</p>
                <p className="plan-description">{plan.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : !depositConfirmed ? (
        <>
          <h3>Selected Plan: {selectedPlan.name}</h3>
          <p>Please send exactly <strong>${selectedPlan.price} USDT</strong> to the following address:</p>
          <div className="deposit-address">
            <p><strong>USDT Address (TRC20):</strong></p>
            <p>{DEPOSIT_ADDRESS}</p>
            <p><small>Network: TRON (TRC20)</small></p>
          </div>
          <p>After completing your transfer, click the button below to confirm and generate your receipt.</p>
          <button
            className="btn-primary"
            onClick={handleConfirmDeposit}
            disabled={uploading}
          >
            I've Sent the Payment
          </button>
          <button
            className="btn-secondary"
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
            className="btn-primary"
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
    <div className="section-card">
      <h2 className="section-title">Withdraw Funds</h2>
      
      <div className="balance-info">
        <p>Available Balance: <strong>${balance} USD</strong> | <strong>{goldBalance}g Gold</strong></p>
      </div>

      <div className="withdraw-form">
        <div className="form-group">
          <label htmlFor="withdraw-type">Withdraw Type:</label>
          <select 
            id="withdraw-type"
            value={withdrawType} 
            onChange={(e) => setWithdrawType(e.target.value)}
          >
            <option value="usd">USD</option>
            <option value="gold">Gold</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="withdraw-amount">
            Amount to Withdraw {withdrawType === "gold" ? "(in grams)" : ""}:
          </label>
          <input
            id="withdraw-amount"
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder={withdrawType === "usd" ? "Enter USD amount" : "Enter gold amount in grams"}
          />
        </div>

        <div className="form-group">
          <label htmlFor="destination-address">Destination Address:</label>
          <input
            id="destination-address"
            type="text"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
            placeholder="Enter your wallet address"
          />
        </div>

        {message.text && (
          <div className={message.type === "success" ? "success-message" : "error-message"}>
            {message.type === "success" ? 
              <FaCheckCircle style={{ marginRight: "5px" }} /> : 
              <FaExclamationCircle style={{ marginRight: "5px" }} />}
            {message.text}
          </div>
        )}

        <button
          className="btn-primary"
          onClick={handleWithdraw}
          disabled={processing}
        >
          {processing ? "Processing..." : "Request Withdrawal"}
        </button>
      </div>

      <div className="withdrawal-info">
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

  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "status-completed";
      case "processing":
        return "status-processing";
      default:
        return "status-pending";
    }
  };

  if (loading) {
    return <div className="section-card">Loading transaction history...</div>;
  }

  return (
    <div className="section-card">
      <h2 className="section-title">Transaction History</h2>
      
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <div className="table-container">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Gold</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>
                    {transaction.type === "deposit" ? 
                      <FaPlusSquare className="icon-deposit" /> : 
                      <FaMinusSquare className="icon-withdraw" />
                    }
                    {transaction.type}
                    {transaction.plan && ` (${transaction.plan})`}
                  </td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.percentProfit || "N/A"}</td>
                  <td>
                    {transaction.timestamp?.toDate().toLocaleDateString()}
                  </td>
                  <td>
                    <span className={`status-indicator ${getStatusClass(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Component for Referral Section
const ReferralSection = () => {
  return (
    <div className="section-card">
      <h2 className="section-title">Referral Program</h2>
      <p>
        Refer your friends and earn rewards! Share your unique referral link
        below.
      </p>
      <div className="referral-container">
        <strong>Your Referral Link:</strong>
        <p className="referral-link">
          https://yourwebsite.com/refer/YOUR-UNIQUE-CODE
        </p>
        <button className="btn-primary" onClick={() => navigator.clipboard.writeText("https://yourwebsite.com/refer/YOUR-UNIQUE-CODE")}>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    return <div className="loading">Loading...</div>;
  }

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="overview-container">
            <div className="card">
              <h3>Account Balance</h3>
              <p className="metric">${balance.toLocaleString()}</p>
              <p className="subtext">Available USD</p>
            </div>
            <div className="card">
              <h3>Gold Holdings</h3>
              <p className="metric">{goldBalance}g</p>
              <p className="subtext">Pure Gold</p>
            </div>
            <div className="card">
              <h3>Total Value</h3>
              <p className="metric">${(balance + (goldBalance * 300)).toLocaleString()}</p>
              <p className="subtext">Based on current gold prices</p>
            </div>

            <div className="section-card">
              <h2 className="section-title">Recent Activity</h2>
              <ul className="activity-list">
                <li><FaCheckCircle className="activity-icon" /> Account created <span className="activity-time">1 week ago</span></li>
                {balance > 0 && (
                  <li><FaCheckCircle className="activity-icon" /> Deposit of ${balance} <span className="activity-time">Recently</span></li>
                )}
                {goldBalance > 0 && (
                  <li><FaCheckCircle className="activity-icon" /> Purchased {goldBalance}g of gold <span className="activity-time">Recently</span></li>
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
    <div className="dashboard-container">
      <div className={`sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <FaWallet size={24} className="sidebar-icon" />
          <h2 className="gold-text">MyWallet</h2>
        </div>
        <button className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)}>
          <FaTimes />
        </button>
        <ul className="nav-list">
          <li
            className={`nav-item ${activeSection === "dashboard" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("dashboard");
              setMobileMenuOpen(false);
            }}
          >
            <FaChartBar /> <span>Dashboard</span>
          </li>
          <li
            className={`nav-item ${activeSection === "deposit" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("deposit");
              setMobileMenuOpen(false);
            }}
          >
            <FaPlusSquare /> <span>Buy Gold</span>
          </li>
          <li
            className={`nav-item ${activeSection === "withdraw" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("withdraw");
              setMobileMenuOpen(false);
            }}
          >
            <FaMinusSquare /> <span>Withdraw</span>
          </li>
          <li
            className={`nav-item ${activeSection === "history" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("history");
              setMobileMenuOpen(false);
            }}
          >
            <FaHistory /> <span>History</span>
          </li>
          <li
            className={`nav-item ${activeSection === "referral" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("referral");
              setMobileMenuOpen(false);
            }}
          >
            <FaUserPlus /> <span>Referral</span>
          </li>
          <li
            className={`nav-item ${activeSection === "profile" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("profile");
              setMobileMenuOpen(false);
            }}
          >
            <FaUser /> <span>Profile</span>
          </li>
          <li
            className={`nav-item ${activeSection === "settings" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("settings");
              setMobileMenuOpen(false);
            }}
          >
            <FaCog /> <span>Settings</span>
          </li>
        </ul>
        <div className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> <span>Logout</span>
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="header-left">
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
              <FaBars />
            </button>
            <h1 className="title">
              {activeSection === "dashboard" ? "Dashboard" : 
              activeSection === "deposit" ? "Buy Gold" : 
              activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h1>
          </div>
          <span className="user-info">
            Balance: <strong>${balance}</strong> | Gold: <strong>{goldBalance}g</strong>
          </span>
        </div>
        <div className="content-area">{renderContent()}</div>
      </div>

      <style jsx>{`
      /* Dashboard Styles */
.dashboard-container {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
}

/* Sidebar */
.sidebar {
  width: 280px;
  background: linear-gradient(180deg, #2c3e50 0%, #1a2530 100%);
  color: #ecf0f1;
  padding: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0 15px rgba(0,0,0,0.1);
  position: relative;
  z-index: 100;
  overflow: hidden;
}

.sidebar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
}

.sidebar-header {
  display: flex;
  align-items: center;
  padding: 25px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  background: rgba(0,0,0,0.1);
}

.sidebar-icon {
  margin-right: 12px;
  font-size: 24px;
  color: #FFD700;
}

.gold-text {
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(90deg, #FFD700, #DAA520, #FFD700);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: goldShimmer 3s ease infinite;
  letter-spacing: 0.5px;
}

@keyframes goldShimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.nav-list {
  list-style: none;
  padding: 20px 0;
  margin: 0;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 14px 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 4px 10px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.nav-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: #FFD700;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-item:hover {
  background: rgba(255,255,255,0.05);
  transform: translateX(5px);
}

.nav-item:hover::before {
  opacity: 1;
}

.nav-item-active {
  background: linear-gradient(90deg, rgba(255,215,0,0.15) 0%, transparent 100%);
  color: #FFD700;
}

.nav-item-active::before {
  opacity: 1;
}

.nav-item svg {
  margin-right: 12px;
  font-size: 18px;
  min-width: 20px;
  transition: transform 0.3s ease;
}

.nav-item:hover svg {
  transform: scale(1.1);
}

.logout-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  cursor: pointer;
  background: linear-gradient(90deg, #e74c3c 0%, #c0392b 100%);
  margin: 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.logout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
}

.logout-btn svg {
  margin-right: 10px;
  font-size: 18px;
}

/* Mobile Menu */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: #2c3e50;
  cursor: pointer;
  margin-right: 15px;
  padding: 8px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1001;
}

.mobile-close-btn {
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  background: rgba(0,0,0,0.2);
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: white;
  box-shadow: 0 2px 15px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 90;
}

.header-left {
  display: flex;
  align-items: center;
}

.title {
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  background: linear-gradient(90deg, #2c3e50 0%, #4a6580 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.user-info {
  font-size: 14px;
  font-weight: 500;
  color: #7f8c8d;
  background: #f8f9fa;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #e9ecef;
}

.content-area {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}

/* Cards and Layout */
.overview-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  border: 1px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.metric {
  font-size: 32px;
  font-weight: 800;
  color: #2c3e50;
  margin: 15px 0;
  background: linear-gradient(90deg, #2c3e50 0%, #4a6580 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtext {
  color: #7f8c8d;
  font-size: 14px;
  font-weight: 500;
}

.section-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.06);
  margin-bottom: 30px;
  border: 1px solid #f1f3f4;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #2c3e50;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #FFD700, #DAA520);
  border-radius: 3px;
}

/* Profile Section */
.profile-container {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.06);
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 25px;
}

.profile-card {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #3498db;
}

.bio-card {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #27ae60;
  margin-bottom: 25px;
}

.wallet-info {
  padding: 25px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  border: 1px solid #e9ecef;
}

.wallet-list {
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
}

.wallet-list li {
  margin-bottom: 12px;
  padding: 12px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  color: #3498db;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.link:hover {
  color: #2980b9;
  text-decoration: underline;
}

/* Settings Section */
.settings-container {
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.settings-card {
  padding: 25px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  border: 1px solid #f1f3f4;
}

.setting-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Buttons */
.btn-primary {
  padding: 12px 24px;
  background: linear-gradient(90deg, #3498db 0%, #2980b9 100%);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.btn-secondary {
  padding: 12px 24px;
  background: white;
  color: #2c3e50;
  border: 1px solid #bdc3c7;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 14px;
}

.btn-secondary:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* Messages */
.success-message {
  color: #27ae60;
  display: flex;
  align-items: center;
  margin-top: 12px;
  padding: 10px 15px;
  background: #d4edda;
  border-radius: 8px;
  border: 1px solid #c3e6cb;
}

.error-message {
  color: #e74c3c;
  display: flex;
  align-items: center;
  margin-top: 12px;
  padding: 10px 15px;
  background: #f8d7da;
  border-radius: 8px;
  border: 1px solid #f5c6cb;
}

/* Gold Plans */
.gold-plans-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.gold-plan-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 30px 25px;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.08);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.gold-plan-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
}

.gold-plan-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  border-color: #FFD700;
}

.selected-plan {
  border-color: #D4AF37;
  background: linear-gradient(135deg, #FFF9C4 0%, #FFFDE7 100%);
  box-shadow: 0 8px 30px rgba(212, 175, 55, 0.2);
}

.plan-title {
  font-size: 20px;
  font-weight: 700;
  color: #D4AF37;
  margin: 15px 0;
}

.plan-price {
  font-size: 28px;
  font-weight: 800;
  color: #2c3e50;
  margin: 15px 0;
}

.plan-description {
  color: #7f8c8d;
  margin: 12px 0;
  line-height: 1.5;
}

/* Deposit Section */
.deposit-address {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  margin: 20px 0;
  text-align: center;
  word-break: break-all;
  font-family: 'Courier New', monospace;
}

.receipt-container {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 16px;
  margin: 25px 0;
  border: 1px solid #e9ecef;
}

.status-success {
  color: #27ae60;
  font-weight: 600;
}

/* Withdraw Section */
.balance-info {
  margin-bottom: 25px;
  padding: 15px 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
}

.withdraw-form {
  display: grid;
  gap: 20px;
  margin-bottom: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
}

.form-group input, .form-group select {
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus, .form-group select:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.withdrawal-info {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
}

.withdrawal-info ul {
  margin: 15px 0 0 0;
  padding-left: 20px;
}

.withdrawal-info li {
  margin-bottom: 8px;
  color: #7f8c8d;
}

/* History Section */
.table-container {
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-top: 20px;
}

.transactions-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
}

.transactions-table th {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #2c3e50;
  border-bottom: 1px solid #e9ecef;
}

.transactions-table td {
  padding: 16px;
  border-bottom: 1px solid #f1f3f4;
  color: #2c3e50;
}

.transactions-table tr:last-child td {
  border-bottom: none;
}

.transactions-table tr:hover {
  background: #f8f9fa;
}

.icon-deposit {
  color: #27ae60;
  margin-right: 8px;
  font-size: 16px;
}

.icon-withdraw {
  color: #e74c3c;
  margin-right: 8px;
  font-size: 16px;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.status-pending {
  background: #FFF3CD;
  color: #856404;
}

.status-completed {
  background: #D4EDDA;
  color: #155724;
}

.status-processing {
  background: #CCE5FF;
  color: #004085;
}

/* Referral Section */
.referral-container {
  padding: 25px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  border: 1px dashed #bdc3c7;
  margin-top: 25px;
  text-align: center;
}

.referral-link {
  overflow-wrap: break-word;
  margin: 15px 0;
  color: #3498db;
  font-family: 'Courier New', monospace;
  padding: 12px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

/* Activity List */
.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activity-list li {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f1f3f4;
  transition: background 0.3s ease;
}

.activity-list li:hover {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
}

.activity-icon {
  margin-right: 12px;
  color: #27ae60;
  font-size: 16px;
}

.activity-time {
  font-size: 12px;
  color: #95a5a6;
  margin-left: auto;
  background: #f1f3f4;
  padding: 4px 8px;
  border-radius: 12px;
}

/* Loading */
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 16px;
  color: #7f8c8d;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .sidebar {
    width: 250px;
  }
  
  .content-area {
    padding: 25px;
  }
}

@media (max-width: 992px) {
  .sidebar {
    width: 220px;
  }
  
  .gold-text {
    font-size: 22px;
  }
  
  .title {
    font-size: 24px;
  }
  
  .overview-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .dashboard-container {
    position: relative;
  }
  
  .sidebar {
    position: fixed;
    left: -100%;
    top: 0;
    bottom: 0;
    width: 85%;
    max-width: 320px;
    z-index: 1000;
    transition: left 0.3s ease;
    box-shadow: 5px 0 25px rgba(0,0,0,0.2);
  }
  
  .sidebar.mobile-open {
    left: 0;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .mobile-close-btn {
    display: block;
  }
  
  .header {
    padding: 15px 20px;
  }
  
  .content-area {
    padding: 20px;
  }
  
  .overview-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .settings-container {
    grid-template-columns: 1fr;
  }
  
  .gold-plans-container {
    grid-template-columns: 1fr;
  }
  
  .profile-grid {
    grid-template-columns: 1fr;
  }
  
  .title {
    font-size: 22px;
  }
  
  .user-info {
    font-size: 13px;
    padding: 6px 12px;
  }
}

@media (max-width: 576px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .header-left {
    width: 100%;
  }
  
  .content-area {
    padding: 15px;
  }
  
  .card, .section-card, .profile-container, .settings-container {
    padding: 20px;
  }
  
  .metric {
    font-size: 28px;
  }
  
  .section-title {
    font-size: 20px;
  }
  
  .gold-plan-card {
    padding: 20px 15px;
  }
  
  .plan-title {
    font-size: 18px;
  }
  
  .plan-price {
    font-size: 24px;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    margin: 5px 0;
  }
  
  .transactions-table {
    font-size: 14px;
  }
  
  .transactions-table th,
  .transactions-table td {
    padding: 12px 8px;
  }
}

/* Animation for page transitions */
.content-area > * {
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scrollbar styling */
.content-area::-webkit-scrollbar {
  width: 8px;
}

.content-area::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.content-area::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.content-area::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
      `}</style>
    </div>
  );
};

export default Dashboard;