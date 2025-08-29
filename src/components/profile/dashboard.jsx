  import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc, updateDoc, collection, addDoc, onSnapshot, query, where, orderBy, serverTimestamp, Timestamp } from "firebase/firestore";
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
  FaTimes,
  FaCopy,
  FaCalendarAlt
} from "react-icons/fa";

// Constants for reusable data
const GOLD_PRICE_PER_GRAM = 300; // Consistent gold price assumption in USD

const GOLD_PLANS = [
  {
    id: 1,
    name: "BEGINNERS PLAN",
    profitPercent: 5,
    min: 200,
    max: 19900,
    duration: 7, // days
    description: "Perfect for beginners starting with gold investment"
  },
  {
    id: 2,
    name: "MASTERS PLAN",
    profitPercent: 30,
    min: 20000,
    max: 99999,
    duration: 14, // days
    description: "Ideal for consistent wealth accumulation"
  },
  {
    id: 3,
    name: "PREMIUM PLAN",
    profitPercent: 50,
    min: 100000,
    max: Infinity,
    duration: 30, // days
    description: "For premium investors building a substantial portfolio"
  }
];

const CRYPTO_WALLETS = [
  { type: "USDT (TRC20)", address: "T9zZ4oxBJNiNxaVF2sdjLrjE4KeZkqzkiv" },
  { type: "TRON", address: "TNyKcnXh9GhANHaCgQyRdnXGmMc72ykQFC" },
  { type: "DODGECOIN", address: "D7whXjWwZzsXqnfZdy3rSkBtvTbyefr4d4" }
];

// Component for the Profile section
const ProfileSection = ({ user }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProfileData(docSnap.data());
          } else {
            setError("Profile data not found.");
          }
        } catch (err) {
          setError("Failed to fetch profile data.");
          console.error(err);
        }
      }
      setLoading(false);
    };
    fetchProfileData();
  }, [user]);

  if (loading) {
    return <div className="loading">Loading profile...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="profile-container">
      <h2 className="section-title">User Profile</h2>
      <div className="profile-grid">
        <div className="profile-card">
          <strong>Full Name:</strong> <span>{profileData.fullName || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Email:</strong> <span>{user.email}</span>
        </div>
        <div className="profile-card">
          <strong>Username:</strong> <span>{profileData.username || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Phone:</strong> <span>{profileData.phone || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Location:</strong> <span>{profileData.location || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Occupation:</strong> <span>{profileData.occupation || "N/A"}</span>
        </div>
      </div>
      <div className="bio-card">
        <strong>Bio:</strong>
        <p>{profileData.bio || "No bio provided."}</p>
      </div>
      <button
        className="btn-primary"
        onClick={() => navigate("/edit-profile")}
      >
        Edit Profile
      </button>
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
              <FaCheckCircle style={{ marginRight: "5px" }} /> Password reset email sent! Check your inbox.
            </span>
          )}
          {resetStatus === "error" && (
            <span className="error-message">
              <FaExclamationCircle style={{ marginRight: "5px" }} /> Failed to send reset email. Please try again.
            </span>
          )}
        </div>
      </div>
      <div className="settings-card">
        <h2 className="section-title">Notification Preferences</h2>
        <div className="setting-item">
          <p>Manage how you receive updates and alerts.</p>
          <button
            className="btn-secondary"
            onClick={() => alert("Notification settings update coming soon!")}
          >
            Configure Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

// Component for the Deposit section
const DepositSection = ({ user, updateBalance }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [depositConfirmed, setDepositConfirmed] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(0); // 0: select plan, 1: enter amount, 2: select wallet, 3: confirm transfer, 4: upload and complete
  const [addressCopied, setAddressCopied] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setDepositAmount("");
    setSelectedWallet(null);
    setDepositConfirmed(false);
    setUploaded(false);
    setTransactionSuccess(false);
    setError(null);
    setStep(1);
  };

  const handleAmountSubmit = () => {
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount greater than 0");
      return;
    }
    if (amount < selectedPlan.min || (selectedPlan.max !== Infinity && amount > selectedPlan.max)) {
      setError(`Please enter a valid amount between $${selectedPlan.min} and $${selectedPlan.max === Infinity ? 'unlimited' : selectedPlan.max}`);
      return;
    }
    setError(null);
    setStep(2);
  };

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    setStep(3);
  };

  const handleConfirmTransfer = () => {
    setDepositConfirmed(true);
    setStep(4);
  };

  const processTransaction = async () => {
    if (!selectedPlan || !depositAmount) return;
    setError(null);

    try {
      const amount = parseFloat(depositAmount);
      const profitPercent = selectedPlan.profitPercent;
      const interest = (amount * profitPercent / 100).toFixed(0);
      
      // Calculate next interest payment date
      const startDate = new Date();
      const nextPaymentDate = new Date();
      nextPaymentDate.setDate(startDate.getDate() + selectedPlan.duration);
      
      const transactionData = {
        userId: user.uid,
        type: "deposit",
        amount: amount,
        profitPercent: `${profitPercent}%`,
        plan: selectedPlan.name,
        planId: selectedPlan.id,
        interest: `$${interest}`,
        duration: selectedPlan.duration,
        description: selectedPlan.description,
        status: "completed",
        timestamp: serverTimestamp(),
        startDate: Timestamp.fromDate(startDate),
        nextPaymentDate: Timestamp.fromDate(nextPaymentDate),
        interestEarned: 0,
        totalInterestEarned: 0
      };

      // Store transaction in Firestore
      await addDoc(collection(db, "transactions"), transactionData);

      // Update user balance
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const currentBalance = userDoc.data().balance || 0;
        const currentGold = userDoc.data().goldBalance || 0;
        const goldToAdd = parseFloat(interest) / GOLD_PRICE_PER_GRAM;

        await updateDoc(userRef, {
          balance: currentBalance + amount,
          goldBalance: currentGold + goldToAdd
        });

        updateBalance(currentBalance + amount, currentGold + goldToAdd);
      }

      setTransactionSuccess(true);
      setStep(0);
      setSelectedPlan(null);
      setDepositConfirmed(false);
      setUploaded(false);
    } catch (err) {
      setError("Failed to process transaction. Please try again.");
      console.error(err);
    }
  };

  const handleFileChange = async (e) => {
    if (e.target.files[0]) {
      setUploaded(true);
      await processTransaction();
    }
  };

  const handleCopyAddress = () => {
    if (selectedWallet?.address) {
      navigator.clipboard.writeText(selectedWallet.address);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2000);
    }
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Purchase Gold</h2>
      {error && (
        <span className="error-message">
          <FaExclamationCircle style={{ marginRight: "5px" }} /> {error}
        </span>
      )}
      {transactionSuccess ? (
        <div>
          <h3>Transaction Successful!</h3>
          <span className="success-message">
            <FaCheckCircle style={{ marginRight: "5px" }} /> Your deposit has been processed successfully!
          </span>
          <button
            className="btn-secondary"
            onClick={() => setTransactionSuccess(false)}
          >
            Back to Plans
          </button>
        </div>
      ) : step === 0 ? (
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
                <p className="plan-price">${plan.min}  - {plan.max === Infinity ? 'and above' : plan.max} USD</p>
                <p className="plan-description"><strong>Profit:</strong> {plan.profitPercent}% every {plan.duration} days</p>
                <p className="plan-description">{plan.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : step === 1 ? (
        <>
          <h3>Selected Plan: {selectedPlan.name}</h3>
          <div className="form-group">
            <label htmlFor="deposit-amount">Enter Deposit Amount:</label>
            <input
              id="deposit-amount"
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder={`Enter amount between $${selectedPlan.min} and $${selectedPlan.max === Infinity ? 'unlimited' : selectedPlan.max}`}
            />
          </div>
          <button className="btn-primary" onClick={handleAmountSubmit}>
            Proceed
          </button>
          <button className="btn-secondary" onClick={() => setStep(0)}>
            Back
          </button>
        </>
      ) : step === 2 ? (
        <>
          <h3>Select a Wallet</h3>
          <div className="gold-plans-container">
            {CRYPTO_WALLETS.map((wallet, index) => (
              <div
                key={index}
                className={`gold-plan-card ${selectedWallet?.type === wallet.type ? 'selected-plan' : ''}`}
                onClick={() => handleWalletSelect(wallet)}
              >
                <FaCoins size={36} color="#D4AF37" />
                <h3 className="plan-title">{wallet.type}</h3>
              </div>
            ))}
          </div>
          <button className="btn-secondary" onClick={() => setStep(1)}>
            Back
          </button>
        </>
      ) : step === 3 ? (
        <>
          <h3>Selected Plan: {selectedPlan.name}</h3>
          <p>Amount: ${depositAmount}</p>
           <p>Please send exactly <strong>${depositAmount}</strong> to the following address:</p>
          <div className="deposit-address">
            <p><strong>{selectedWallet.type} Address:</strong></p>
            <p>{selectedWallet.address}</p>
            <button className="btn-secondary" onClick={handleCopyAddress}>
              {addressCopied ? "Copied!" : "Copy Address"} <FaCopy style={{ marginLeft: "5px" }} />
            </button>
          </div>
          <p>After completing your transfer, click the button below to confirm.</p>
          <button
            className="btn-primary"
            onClick={handleConfirmTransfer}
          >
            I've Sent the Payment
          </button>
          <button
            className="btn-secondary"
            onClick={() => setStep(2)}
          >
            Choose Different Wallet
          </button>
        </>
      ) : step === 4 ? (
        <>
          <h3>Confirm Deposit</h3>
          <p>Upload a screenshot of the transaction (for verification, not stored):</p>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button className="btn-secondary" onClick={() => setStep(3)}>
            Back
          </button>
        </>
      ) : null}
    </div>
  );
};

// Component for Withdraw Section
const WithdrawSection = ({ user, balance, goldBalance, updateBalance }) => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawType, setWithdrawType] = useState("usd");
  const [destinationWallet, setDestinationWallet] = useState("");
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleWithdraw = async () => {
    setMessage({ text: "", type: "" });

    if (!withdrawAmount || !destinationWallet) {
      setMessage({ text: "Please select a wallet and enter an amount", type: "error" });
      return;
    }

    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      setMessage({ text: "Please enter a valid amount", type: "error" });
      return;
    }

    const minAmount = withdrawType === "usd" ? 50 : 1;
    if (amount < minAmount) {
      setMessage({ text: `Minimum withdrawal is $${minAmount} USD or ${minAmount}g Gold`, type: "error" });
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
      const amountInUSD = withdrawType === "usd" ? amount : amount * GOLD_PRICE_PER_GRAM;
      const transactionData = {
        userId: user.uid,
        type: "withdrawal",
        amount: amountInUSD,
        profitPercent: withdrawType === "gold" ? `${amount}g` : "0g",
        status: "pending",
        walletType: destinationWallet,
        timestamp: serverTimestamp()
      };

      await addDoc(collection(db, "transactions"), transactionData);

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
      
      setWithdrawAmount("");
      setDestinationWallet("");

    } catch (error) {
      console.error("Error processing withdrawal:", error);
      setMessage({ text: "Failed to process withdrawal. Please try again.", type: "error" });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Withdraw Funds</h2>
      
      <div className="balance-info">
        <p>Available Balance: <strong>${balance.toLocaleString()} USD</strong> | <strong>{goldBalance.toFixed(2)}g Gold</strong></p>
      </div>

      <div className="withdraw-form">
        <div className="form-group">
          <label htmlFor="withdraw-type">Withdraw Type:</label>
          <select 
            id="withdraw-type"
            value={withdrawType} 
            onChange={(e) => {
              setWithdrawType(e.target.value);
              setWithdrawAmount("");
              setDestinationWallet("");
            }}
          >
            <option value="usd">USD</option>
            <option value="gold">Gold</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="withdraw-amount">
            Amount to Withdraw {withdrawType === "gold" ? "(in grams)" : "(in USD)"}:
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
          <label htmlFor="destination-wallet">Destination Wallet:</label>
          <select
            id="destination-wallet"
            value={destinationWallet}
            onChange={(e) => setDestinationWallet(e.target.value)}
          >
            <option value="">Select a wallet</option>
            {CRYPTO_WALLETS.map((wallet, index) => (
              <option key={index} value={wallet.type}>{wallet.type}</option>
            ))}
          </select>
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
          disabled={processing || !withdrawAmount || !destinationWallet}
        >
          {processing ? "Processing..." : "Request Withdrawal"}
        </button>
      </div>

      <div className="withdrawal-info">
        <h4>Withdrawal Information:</h4>
        <ul>
          <li>Withdrawals are processed within 24 hours</li>
          <li>Gold withdrawals are converted to USD at ~${GOLD_PRICE_PER_GRAM}/g</li>
          <li>Minimum withdrawal: $50 USD or 1g Gold</li>
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
  const [error, setError] = useState(null);

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
    }, (err) => {
      setError("Failed to load transaction history.");
      console.error(err);
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

  if (error) {
    return <div className="section-card error-message">{error}</div>;
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
                <th>Profit/Output</th>
                <th>Date</th>
                <th>Next Payment</th>
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
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                    {transaction.plan && ` (${transaction.plan})`}
                  </td>
                  <td>${transaction.amount.toLocaleString()}</td>
                  <td>{transaction.interest ? `${transaction.interest} (${transaction.profitPercent})` : transaction.profitPercent || "N/A"}</td>
                  <td>
                    {transaction.timestamp?.toDate().toLocaleString()}
                  </td>
                  <td>
                    {transaction.nextPaymentDate ? (
                      <span className="next-payment">
                        <FaCalendarAlt style={{ marginRight: "5px" }} />
                        {transaction.nextPaymentDate.toDate().toLocaleDateString()}
                      </span>
                    ) : "N/A"}
                  </td>
                  <td>
                    <span className={`status-indicator ${getStatusClass(transaction.status)}`}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
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
const ReferralSection = ({ user }) => {
  const referralLink = `https://yourwebsite.com/refer/${user.uid}`;
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Referral Program</h2>
      <p>Invite friends and earn rewards! Share your unique referral link.</p>
      <div className="referral-container">
        <strong>Your Referral Link:</strong>
        <p className="referral-link">{referralLink}</p>
        <button className="btn-primary" onClick={handleCopyLink}>
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
      <div className="referral-info">
        <h4>How It Works:</h4>
        <ul>
          <li>Share your link with friends</li>
          <li>Earn 5% bonus on their first deposit</li>
          <li>Track your referrals in your dashboard</li>
        </ul>
      </div>
    </div>
  );
};

// Component for Investments Section
const InvestmentsSection = ({ user, updateBalance }) => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!user) return;
    
    const q = query(
      collection(db, "transactions"),
      where("userId", "==", user.uid),
      where("type", "==", "deposit"),
      where("status", "==", "completed"),
      orderBy("timestamp", "desc")
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const investmentsData = [];
      querySnapshot.forEach((doc) => {
        investmentsData.push({ id: doc.id, ...doc.data() });
      });
      setInvestments(investmentsData);
      setLoading(false);
    }, (err) => {
      setError("Failed to load investments.");
      console.error(err);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [user]);

  const calculateInterest = (investment) => {
    if (!investment.startDate || !investment.nextPaymentDate) return 0;
    
    const now = new Date();
    const nextPaymentDate = investment.nextPaymentDate.toDate();
    
    // Check if it's time to receive interest
    if (now >= nextPaymentDate) {
      const interestAmount = (investment.amount * parseFloat(investment.profitPercent)) / 100;
      return interestAmount;
    }
    
    return 0;
  };

  const claimInterest = async (investment) => {
    setProcessing(true);
    try {
      const interestAmount = calculateInterest(investment);
      if (interestAmount <= 0) {
        setError("No interest available to claim yet.");
        return;
      }

      // Update user balance
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const currentBalance = userDoc.data().balance || 0;
        const currentGold = userDoc.data().goldBalance || 0;
        const goldToAdd = interestAmount / GOLD_PRICE_PER_GRAM;

        await updateDoc(userRef, {
          balance: currentBalance + interestAmount,
          goldBalance: currentGold + goldToAdd
        });

        updateBalance(currentBalance + interestAmount, currentGold + goldToAdd);
      }

      // Update investment with new next payment date
      const investmentRef = doc(db, "transactions", investment.id);
      const newNextPaymentDate = new Date();
      newNextPaymentDate.setDate(newNextPaymentDate.getDate() + investment.duration);
      
      await updateDoc(investmentRef, {
        nextPaymentDate: Timestamp.fromDate(newNextPaymentDate),
        interestEarned: interestAmount,
        totalInterestEarned: (investment.totalInterestEarned || 0) + interestAmount
      });

      // Add interest transaction
      await addDoc(collection(db, "transactions"), {
        userId: user.uid,
        type: "interest",
        amount: interestAmount,
        description: `Interest from ${investment.plan}`,
        status: "completed",
        timestamp: serverTimestamp()
      });

      setError(null);
    } catch (err) {
      setError("Failed to claim interest. Please try again.");
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    return timestamp.toDate().toLocaleDateString();
  };

  if (loading) {
    return <div className="section-card">Loading investments...</div>;
  }

  if (error) {
    return <div className="section-card error-message">{error}</div>;
  }

  return (
    <div className="section-card">
      <h2 className="section-title">My Investments</h2>
      
      {investments.length === 0 ? (
        <p>No active investments yet.</p>
      ) : (
        <div className="investments-container">
          {investments.map((investment) => {
            const interestAvailable = calculateInterest(investment);
            const nextPaymentDate = investment.nextPaymentDate ? investment.nextPaymentDate.toDate() : null;
            const daysUntilPayment = nextPaymentDate ? Math.ceil((nextPaymentDate - new Date()) / (1000 * 60 * 60 * 24)) : 0;
            
            return (
              <div key={investment.id} className="investment-card">
                <div className="investment-header">
                  <h3>{investment.plan}</h3>
                  <span className="investment-amount">${investment.amount.toLocaleString()}</span>
                </div>
                
                <div className="investment-details">
                  <div className="investment-detail">
                    <span className="detail-label">Profit Rate:</span>
                    <span className="detail-value">{investment.profitPercent}</span>
                  </div>
                  
                  <div className="investment-detail">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{investment.duration} days</span>
                  </div>
                  
                  <div className="investment-detail">
                    <span className="detail-label">Start Date:</span>
                    <span className="detail-value">{formatDate(investment.startDate)}</span>
                  </div>
                  
                  <div className="investment-detail">
                    <span className="detail-label">Next Payment:</span>
                    <span className="detail-value">{formatDate(investment.nextPaymentDate)}</span>
                  </div>
                  
                  <div className="investment-detail">
                    <span className="detail-label">Days Until Payment:</span>
                    <span className="detail-value">{daysUntilPayment > 0 ? daysUntilPayment : 0}</span>
                  </div>
                  
                  <div className="investment-detail">
                    <span className="detail-label">Interest Available:</span>
                    <span className="detail-value">${interestAvailable.toFixed(2)}</span>
                  </div>
                  
                  <div className="investment-detail">
                    <span className="detail-label">Total Interest Earned:</span>
                    <span className="detail-value">${(investment.totalInterestEarned || 0).toFixed(2)}</span>
                  </div>
                </div>
                
                {interestAvailable > 0 && (
                  <button
                    className="btn-primary"
                    onClick={() => claimInterest(investment)}
                    disabled={processing}
                  >
                    {processing ? "Processing..." : "Claim Interest"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
        const userRef = doc(db, "users", u.uid);
        const unsubscribeUser = onSnapshot(userRef, (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData(data);
            setBalance(data.balance || 0);
            setGoldBalance(data.goldBalance || 0);
            setLoading(false);
          } else {
            setError("User data not found.");
            setLoading(false);
          }
        }, (err) => {
          setError("Failed to load user data.");
          console.error(err);
          setLoading(false);
        });

        return () => unsubscribeUser();
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribeAuth();
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
      setError("Failed to logout. Please try again.");
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error || !user || !userData) {
    return <div className="error-message">{error || "Failed to load dashboard."}</div>;
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
              <p className="metric">{goldBalance.toFixed(2)}g</p>
              <p className="subtext">Pure Gold</p>
            </div>
            <div className="card">
              <h3>Total Value</h3>
              <p className="metric">${(balance + (goldBalance * GOLD_PRICE_PER_GRAM)).toLocaleString()}</p>
              <p className="subtext">Based on current gold prices</p>
            </div>

            <div className="section-card">
              <h2 className="section-title">Recent Activity</h2>
              <ul className="activity-list">
                <li><FaCheckCircle className="activity-icon" /> Account created <span className="activity-time">1 week ago</span></li>
                {balance > 0 && (
                  <li><FaCheckCircle className="activity-icon" /> Deposit of ${balance.toLocaleString()} <span className="activity-time">Recently</span></li>
                )}
                {goldBalance > 0 && (
                  <li><FaCheckCircle className="activity-icon" /> Purchased {goldBalance.toFixed(2)}g of gold <span className="activity-time">Recently</span></li>
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
      case "investments":
        return <InvestmentsSection user={user} updateBalance={updateBalance} />;
      case "referral":
        return <ReferralSection user={user} />;
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
            className={`nav-item ${activeSection === "investments" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("investments");
              setMobileMenuOpen(false);
            }}
          >
            <FaCoins /> <span>My Investments</span>
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
            Balance: <strong>${balance.toLocaleString()}</strong> | Gold: <strong>{goldBalance.toFixed(2)}g</strong>
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

.btn-primary:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
  box-shadow: none;
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
  color: 7f8c8d;
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

.deposit-address button {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.next-payment {
  display: flex;
  align-items: center;
  color: #3498db;
  font-size: 14px;
}

/* Investments Section */
.investments-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

.investment-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 1px solid rgba(255,255,255,0.5);
  transition: all 0.3s ease;
}

.investment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

.investment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9ecef;
}

.investment-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 18px;
}

.investment-amount {
  font-size: 20px;
  font-weight: 700;
  color: #27ae60;
}

.investment-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.investment-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-label {
  font-weight: 600;
  color: #7f8c8d;
}

.detail-value {
  font-weight: 600;
  color: #2c3e50;
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

.referral-info {
  margin-top: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
}

.referral-info ul {
  margin: 15px 0 0 0;
  padding-left: 20px;
}

.referral-info li {
  margin-bottom: 8px;
  color: #7f8c8d;
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
  
  .investments-container {
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
  
  .investment-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
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
