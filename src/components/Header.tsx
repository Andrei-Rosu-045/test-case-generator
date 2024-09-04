// src/components/Header.tsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';
import './Header.css';
import logo from './logo.png';

const Header: React.FC = () => {
  return (
    <header className="header py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left side: Logo */}
        <div className="header-logo">
          <img src={logo} alt="HCL Tech Logo" className="logo" />
        </div>

        {/* Center: Title */}
        <h1 className="header-title">Test Case Generator</h1>

        {/* Right side: Buttons */}
        <div className="header-buttons d-flex align-items-center ml-auto">
          <Button
            variant="primary"
            className="mr-2 deploy-button"
            style={{ backgroundColor: 'transparent', borderColor: 'transparent', color: 'white' }}
          >
            Deploy
          </Button>
          <Button variant="outline-secondary">
            <BsThreeDots size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
