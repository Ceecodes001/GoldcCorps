import React, { useState, useEffect } from 'react';

const RealtimeGoldPrice = () => {
  const [goldPrice, setGoldPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Note: For a real application, you would use an actual API key and a more robust fetching strategy.
  // This example uses a mock data fetch.
  const fetchGoldPrice = async () => {
    setLoading(true);
    setError(null);
    try {
      // Mock API call to simulate fetching data
      const response = await new Promise(resolve => setTimeout(() => {
        const mockPrice = (1900 + Math.random() * 100).toFixed(2);
        resolve({
          ok: true,
          json: () => Promise.resolve({ success: true, price: mockPrice, timestamp: Date.now() / 1000 })
        });
      }, 1000));

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.success) {
        setGoldPrice(data.price);
        setLastUpdated(new Date(data.timestamp * 1000).toLocaleTimeString());
      } else {
        throw new Error('API request failed');
      }
    } catch (e) {
      setError('Failed to fetch gold price.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gold-price-container">
      <div className="gold-price-card">
        <header className="gold-price-header">
          <h1 className="header-text">Real-time Gold Price</h1>
          <p className="subtitle">XAU (Gold) in USD per Troy Ounce</p>
        </header>

        <main className="gold-price-main">
          {loading && (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <span>Loading...</span>
            </div>
          )}

          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && goldPrice !== null && (
            <div className="price-display">
              <p className="price-label">Current Price:</p>
              <p className="price-value">${goldPrice}</p>
              <p className="last-updated">Last updated: {lastUpdated}</p>
            </div>
          )}
        </main>
      </div>
      <style jsx>{`
        :root {
          --gold: #FFD700;
          --white: #FFFFFF;
          --light-gold: #FFF5E0;
          --dark-gold: #B8860B;
          --text-color: #333;
        }

        .gold-price-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, var(--white), var(--light-gold));
          font-family: 'Arial', sans-serif;
          color: var(--text-color);
          padding: 20px;
          box-sizing: border-box;
        }

        .gold-price-card {
          background-color: var(--white);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--light-gold);
          max-width: 500px;
          width: 100%;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .gold-price-header {
          padding-bottom: 20px;
          border-bottom: 2px solid var(--light-gold);
        }

        .header-text {
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--dark-gold);
          margin: 0;
          animation: soft-glow 3s infinite ease-in-out;
        }

        .subtitle {
          font-size: 1rem;
          color: #666;
          margin-top: 5px;
        }

        .gold-price-main {
          margin-top: 20px;
        }

        .loading-spinner, .error-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 150px;
          font-size: 1.2rem;
          color: var(--dark-gold);
        }

        .spinner {
          border: 4px solid rgba(255, 215, 0, 0.2);
          border-top: 4px solid var(--gold);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin-bottom: 10px;
        }

        .error-message {
          color: #D32F2F;
          background-color: #FFCDD2;
          padding: 15px;
          border-radius: 10px;
          border: 1px solid #EF9A9A;
        }

        .price-display {
          background-color: var(--light-gold);
          padding: 30px;
          border-radius: 10px;
          border: 1px solid var(--gold);
        }

        .price-label {
          font-size: 1.2rem;
          color: var(--text-color);
          margin: 0;
        }

        .price-value {
          font-size: 4rem;
          font-weight: bold;
          color: var(--dark-gold);
          margin: 10px 0;
        }

        .last-updated {
          font-size: 0.9rem;
          color: #888;
        }

        /* Animations */
        @keyframes soft-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(255, 215, 0, 0.3); }
          50% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.6); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default RealtimeGoldPrice;