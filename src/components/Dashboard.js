// src/components/Dashboard.js

import React from 'react';
import './Dashboard.css';

const dashboardItems = [
  { name: 'Renewals', icon: '↻' },
  { name: 'My Business', icon: '💰' },
  { name: 'Claims', icon: '📋' },
  { name: 'Proposal', icon: '📑' },
  { name: 'Pending Renewals', icon: '↻' },
  { name: 'My Day', icon: '📅' },
  { name: 'Earnings', icon: '💵' },
  { name: 'Locate', icon: '📍' },
  { name: 'Leads', icon: '🧑‍🤝‍🧑' },
  { name: 'Acknowledgement', icon: '✅' },
  { name: 'Service Request', icon: '❓' },
  { name: 'Payment Link', icon: '🔗' },
  { name: 'Reports', icon: '📑' },
  { name: 'Product 360', icon: '❤️' },
  { name: 'My Customers', icon: '👥' }
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      {dashboardItems.map((item, index) => (
        <div key={index} className="dashboard-item">
          <div className="icon">{item.icon}</div>
          <div className="label">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
