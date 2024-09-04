// src/components/Sidebar.tsx
import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Menu</h3>
      <ul className="sidebar-list">
        <li
          className={`sidebar-item ${selectedOption === 'uploadFile' ? 'active' : ''}`}
          onClick={() => setSelectedOption('uploadFile')}
        >
          Upload File
        </li>
        <li
          className={`sidebar-item ${selectedOption === 'generateTestCases' ? 'active' : ''}`}
          onClick={() => setSelectedOption('generateTestCases')}
        >
          Generate Test Cases
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
