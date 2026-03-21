import React from 'react';
import './MarqueeBar.css';

export const MarqueeBar = () => {
  const items = [
    "CRM", "ERP", "Ticketing / Support", "Email / Spreadsheets", 
    "E-commerce", "Accounting", "QuickBooks", "Shopify", 
    "Excel/CSVs", "Salesforce/CRM"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <div className="marquee-content">
          {items.map((item, idx) => (
            <span key={`first-${idx}`} className="marquee-item">{item}</span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`second-${idx}`} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
