import React, { useState, useEffect, useRef } from 'react';
const RealtimeGoldPrice = () => {
  // State management
  const [price, setPrice] = useState(0);
  const [previousPrice, setPreviousPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState('USD');
  const [refreshInterval, setRefreshInterval] = useState(30000);
  const [priceHistory, setPriceHistory] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [threshold, setThreshold] = useState(5);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  // Refs for animations
  const priceRef = useRef();
  const chartRef = useRef();

  // Simulated API call to fetch gold price
  const fetchGoldPrice = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // In a real application, this would be an actual API call
      // Simulating API response with random price fluctuation
      const simulatedPrice = 1950 + (Math.random() * 50 - 25);
      const newPrice = parseFloat(simulatedPrice.toFixed(2));
      
      // Update price with animation
      if (priceRef.current) {
        priceRef.current.classList.add('price-updating');
        setTimeout(() => {
          setPreviousPrice(price);
          setPrice(newPrice);
          setLastUpdated(new Date());
          if (priceRef.current) {
            priceRef.current.classList.remove('price-updating');
          }
        }, 500);
      }
      
      // Update price history
      setPriceHistory(prev => {
        const newHistory = [...prev, { price: newPrice, timestamp: new Date() }];
        return newHistory.slice(-20); // Keep last 20 data points
      });
      
    } catch (err) {
      setError('Failed to fetch gold prices. Please try again later.');
      console.error('Error fetching gold price:', err);
    } finally {
      setLoading(false);
    }
  };

  // Check for significant price changes
  useEffect(() => {
    if (previousPrice && Math.abs(price - previousPrice) > threshold && notificationsEnabled) {
      // Show browser notification
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Gold Price Alert', {
          body: `Gold price has ${price > previousPrice ? 'increased' : 'decreased'} by $${Math.abs(price - previousPrice).toFixed(2)}.`
        });
      }
      
      // Visual alert
      if (priceRef.current) {
        priceRef.current.classList.add('price-alert');
        setTimeout(() => {
          if (priceRef.current) {
            priceRef.current.classList.remove('price-alert');
          }
        }, 2000);
      }
    }
  }, [price, previousPrice, threshold, notificationsEnabled]);

  // Set up interval for price updates
  useEffect(() => {
    fetchGoldPrice(); // Initial fetch
    
    const interval = setInterval(() => {
      fetchGoldPrice();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval, currency]);

  // Request notification permission
  const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        setNotificationsEnabled(permission === 'granted');
      });
    }
  };

  // Calculate price change percentage
  const calculateChange = () => {
    if (!previousPrice) return 0;
    return ((price - previousPrice) / previousPrice * 100).toFixed(2);
  };

  // Format currency based on selection
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(value);
  };

  // Render mini chart
  const renderMiniChart = () => {
    if (priceHistory.length < 2) return null;
    
    const values = priceHistory.map(item => item.price);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min;
    
    return (
      <div className="mini-chart" ref={chartRef}>
        {priceHistory.map((item, index) => {
          if (index === 0) return null;
          const height = range > 0 ? ((item.price - min) / range) * 40 : 20;
          const isUp = item.price > priceHistory[index - 1].price;
          
          return (
            <div 
              key={index}
              className={`chart-bar ${isUp ? 'chart-bar-up' : 'chart-bar-down'}`}
              style={{ height: `${height}px` }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="gold-price-tracker">
      <div className="tracker-header">
        <h2>
          <span className="gold-icon">🥇</span>
          Gold Price Tracker
        </h2>
        <div className="last-updated">
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      </div>
      
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading current gold price...</p>
        </div>
      )}
      
      {error && (
        <div className="error-state">
          <div className="error-icon">⚠️</div>
          <p>{error}</p>
          <button onClick={fetchGoldPrice} className="retry-btn">Retry</button>
        </div>
      )}
      
      {!loading && !error && (
        <>
          <div className="price-display">
            <div ref={priceRef} className="current-price">
              {formatCurrency(price)}
              {previousPrice && (
                <span className={`price-change ${price >= previousPrice ? 'positive' : 'negative'}`}>
                  {price >= previousPrice ? '↗' : '↘'} 
                  {formatCurrency(Math.abs(price - previousPrice))} 
                  ({calculateChange()}%)
                </span>
              )}
            </div>
            {renderMiniChart()}
          </div>
          
          <div className="price-history">
            <h3>Recent Trends</h3>
            <div className="history-bars">
              {priceHistory.slice(-6).map((item, index) => (
                <div key={index} className="history-bar">
                  <div className="bar-time">
                    {item.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </div>
                  <div className="bar-price">{formatCurrency(item.price)}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      
      <div className="tracker-controls">
        <div className="control-group">
          <label>Currency:</label>
          <select 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)}
            className="control-select"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
        
        <div className="control-group">
          <label>Refresh every:</label>
          <select 
            value={refreshInterval} 
            onChange={(e) => setRefreshInterval(Number(e.target.value))}
            className="control-select"
          >
            <option value={10000}>10 seconds</option>
            <option value={30000}>30 seconds</option>
            <option value={60000}>1 minute</option>
            <option value={300000}>5 minutes</option>
          </select>
        </div>
        
        <div className="control-group">
          <label>
            <input 
              type="checkbox" 
              checked={notificationsEnabled}
              onChange={requestNotificationPermission}
            />
            Price alerts
          </label>
        </div>
        
        {notificationsEnabled && (
          <div className="control-group">
            <label>Alert threshold:</label>
            <select 
              value={threshold} 
              onChange={(e) => setThreshold(Number(e.target.value))}
              className="control-select"
            >
              <option value={1}>$1.00</option>
              <option value={5}>$5.00</option>
              <option value={10}>$10.00</option>
              <option value={25}>$25.00</option>
            </select>
          </div>
        )}
      </div>
      
      <style jsx>{`
        /* Gold Price Tracker Styles */
        .gold-price-tracker {
          background: linear-gradient(135deg, #1a2a3a 0%, #2c3e50 100%);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          color: white;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          max-width: 480px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        
        .gold-price-tracker::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
        }
        
        .tracker-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .tracker-header h2 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .gold-icon {
          font-size: 1.8rem;
        }
        
        .last-updated {
          font-size: 0.85rem;
          color: #a0aec0;
        }
        
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
        }
        
        .spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255, 215, 0, 0.3);
          border-top: 3px solid #FFD700;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .error-state {
          background: rgba(220, 53, 69, 0.15);
          border: 1px solid rgba(220, 53, 69, 0.2);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          margin: 20px 0;
        }
        
        .error-icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        
        .retry-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          margin-top: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .retry-btn:hover {
          background: #bb2d3b;
          transform: translateY(-2px);
        }
        
        .price-display {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          margin: 20px 0;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 215, 0, 0.1);
        }
        
        .current-price {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 16px;
          transition: all 0.5s ease;
          background: linear-gradient(90deg, #FFD700, #DAA520, #FFD700);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShine 3s ease infinite;
        }
        
        @keyframes goldShine {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .price-updating {
          animation: pulseUpdate 0.5s ease;
        }
        
        @keyframes pulseUpdate {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .price-alert {
          animation: alertFlash 0.5s ease 4;
        }
        
        @keyframes alertFlash {
          0%, 100% { background-color: transparent; }
          50% { background-color: rgba(255, 215, 0, 0.2); }
        }
        
        .price-change {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          margin-top: 8px;
        }
        
        .price-change.positive {
          color: #48bb78;
        }
        
        .price-change.negative {
          color: #f56565;
        }
        
        .mini-chart {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 50px;
          gap: 4px;
          margin-top: 20px;
        }
        
        .chart-bar {
          width: 8px;
          border-radius: 3px 3px 0 0;
          transition: height 0.5s ease;
        }
        
        .chart-bar-up {
          background: linear-gradient(to top, #48bb78, #68d391);
        }
        
        .chart-bar-down {
          background: linear-gradient(to top, #f56565, #fc8181);
        }
        
        .price-history {
          margin: 24px 0;
        }
        
        .price-history h3 {
          font-size: 1.1rem;
          margin-bottom: 12px;
          color: #a0aec0;
        }
        
        .history-bars {
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }
        
        .history-bar {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 10px;
          text-align: center;
          flex: 1;
          min-width: 0;
          transition: transform 0.3s ease;
        }
        
        .history-bar:hover {
          transform: translateY(-5px);
          background: rgba(255, 215, 0, 0.1);
        }
        
        .bar-time {
          font-size: 0.75rem;
          color: #a0aec0;
          margin-bottom: 4px;
        }
        
        .bar-price {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .tracker-controls {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 24px;
        }
        
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .control-group label {
          font-size: 0.9rem;
          color: #a0aec0;
          font-weight: 500;
        }
        
        .control-select {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 8px 12px;
          color: white;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        
        .control-select:focus {
          outline: none;
          border-color: #FFD700;
          box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
        }
        
        .control-group:last-child:nth-child(odd) {
          grid-column: 1 / -1;
        }
        
        /* Responsive Design */
        @media (max-width: 600px) {
          .gold-price-tracker {
            padding: 20px;
            border-radius: 12px;
          }
          
          .tracker-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          
          .last-updated {
            font-size: 0.8rem;
          }
          
          .current-price {
            font-size: 2.5rem;
          }
          
          .tracker-controls {
            grid-template-columns: 1fr;
          }
          
          .history-bars {
            overflow-x: auto;
            padding-bottom: 10px;
          }
          
          .history-bar {
            min-width: 80px;
          }
        }
        
        @media (max-width: 400px) {
          .current-price {
            font-size: 2rem;
          }
          
          .price-change {
            font-size: 0.9rem;
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: light) {
          .gold-price-tracker {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            color: #2d3748;
          }
          
          .last-updated {
            color: #718096;
          }
          
          .price-display {
            background: rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(0, 0, 0, 0.05);
          }
          
          .error-state {
            background: rgba(220, 53, 69, 0.05);
            border: 1px solid rgba(220, 53, 69, 0.1);
          }
          
          .history-bar {
            background: rgba(0, 0, 0, 0.03);
          }
          
          .control-select {
            background: rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(0, 0, 0, 0.1);
            color: #2d3748;
          }
          
          .price-history h3 {
            color: #718096;
          }
          
          .bar-time {
            color: #718096;
          }
        }
      `}</style>
    </div>
  );
};

export default RealtimeGoldPrice;