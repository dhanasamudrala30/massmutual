// src/components/Header.js

import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/do6twjc6g/image/upload/v1728312853/Mm_logo_i4qyjc.jpg" 
          alt="MassMutual Logo"
        />
      </div>
      <div className="nav">
        <a href="#">Guidelines</a>
        <a href="#">FAQs</a>
        <a href="#">ContactUs</a>
        <a href="#">MyStats</a>
      </div>
      <div className="profile">
        <img
          src="https://res.cloudinary.com/do6twjc6g/image/upload/v1728321591/person_j0p0y1.jpg" 
          alt="Profile"
          className="profilePic"
          onClick={toggleDropdown} 
        />
        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Log Out</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
