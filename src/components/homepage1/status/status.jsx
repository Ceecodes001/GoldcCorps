import React, { useEffect } from 'react';
import { FaUsers, FaGlobeAmericas, FaChartLine, FaBuilding } from 'react-icons/fa';
 
const stats = [
  { 
    icon: <FaUsers />, 
    label: "Trusted Users", 
    value: 3000, 
    sub: "Investors Worldwide", 
    desc: "Thousands of satisfied clients entrust us with their gold, copper, and diversified investments every day." 
  },
  { 
    icon: <FaBuilding />, 
    label: "Employees", 
    value: 5000, 
    sub: "Global Workforce", 
    desc: "Our dedicated professionals operate at the highest standards, driving innovation and performance." 
  },
  { 
    icon: <FaGlobeAmericas />, 
    label: "Countries", 
    value: 6, 
    sub: "Active Markets", 
    desc: "A truly global footprint, giving investors exposure to the world’s most lucrative mining and trading hubs." 
  },
  { 
    icon: <FaChartLine />, 
    label: "Growth", 
    value: 80, 
    sub: "Annual Increase (%)", 
    desc: "Sustained double-digit growth powered by strategic expansion and long-term asset value creation." 
  }
];

function StatsSection() {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-value");
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const updateCount = () => {
        const increment = target / 60;
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count) + (counter.dataset.percent ? "%" : "+");
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + (counter.dataset.percent ? "%" : "+");
        }
      };
      updateCount();
    });
  }, []);

  return (
    <section className="stats-section" id='services'>
      <div className="stats-header">
        <h1 className="stats-title">A Legacy of Trust. A Future of Growth.</h1>
        <p className="stats-intro">
          At <span className="gold-text">Gold Corps</span>, we don’t just invest — we shape industries. 
          From precious metals and global commodities to cutting-edge crypto and sustainable agriculture, 
          we are redefining wealth creation on a global scale.  
          Our unmatched portfolio and elite team ensure exceptional returns for investors while building 
          lasting value for communities worldwide.
        </p>
      </div>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <h2 
              className="stat-value shimmer" 
              data-target={stat.value} 
              data-percent={stat.label === "Growth" ? "true" : ""}
            >
              0
            </h2>
            <p className="stat-label">{stat.label}</p>
            <span className="stat-sub">{stat.sub}</span>
            <p className="stat-desc">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
