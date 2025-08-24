import React from 'react';
 import { Link } from 'react-router-dom';
import { GiGoldBar, GiWorld, GiDiamondHard } from 'react-icons/gi';
import { FaLeaf, FaBitcoin, FaUsers, FaChartLine } from 'react-icons/fa';
import { MdSecurity, MdOutlineEnergySavingsLeaf } from 'react-icons/md';

function AboutGoldvest() {
  return (
    <section id='about' className="about-section">
      <div className="about-container">

        {/* Our Business */}
        <div className="about-block" >
          <GiGoldBar className="about-icon" />
          <h2>Our Business</h2>
          <p>
           Gold Corps stands at the pinnacle of global investment, bridging <strong>gold, copper, agriculture, and cryptocurrency</strong> into one unmatched portfolio. 
            We operate in the world’s most lucrative and resource-rich regions, strategically positioned for <strong>maximum profitability and sustainable impact</strong>.
            Our assets are not just high-margin — they are <strong>legacy-grade</strong>, designed to deliver value for decades.
          </p>
        </div>

        {/* Our Strategy */}
        <div className="about-block">
          <FaChartLine className="about-icon" />
          <h2>Our Strategy</h2>
          <p>
            We think beyond quarters — <strong>we think in generations</strong>. Every move is backed by deep market intelligence, 
            cutting-edge technology, and a relentless pursuit of excellence. From <strong>exploring new mining frontiers</strong> 
            to <strong>pioneering next-generation crypto opportunities</strong>, Goldvest invests where innovation meets stability. 
            We build wealth that lasts, while ensuring our growth model is <strong>ethical, sustainable, and future-proof</strong>.
          </p>
        </div>

        {/* Our Purpose */}
        <div className="about-block">
          <FaUsers className="about-icon" />
          <h2>Our Purpose</h2>
          <p>
        Gold Corps is on a mission to become <strong>the world’s most respected investment powerhouse</strong> — measured not just by profits, 
            but by the trust and prosperity we bring to our stakeholders. We are led by visionaries, powered by innovators, 
            and grounded in principles that protect both people and the planet.
          </p>
          <blockquote>
            Own the finest assets. Employ the brightest minds. Deliver unmatched returns. Leave a legacy worth its weight in gold.
          </blockquote>
        </div>

      </div>
    </section>
  );
}

export default AboutGoldvest;
