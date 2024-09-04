import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  username?: string;
  userDomain?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedOption, setSelectedOption, username, userDomain }) => {
  return (
    <div className="sidebar">
      {/* Display user information at the top */}
      <div className="user-info">
        {username && userDomain && (
          <>
            <div className='username'>User: {username}</div>
            <div className='user-domain'>User Domain: {userDomain}</div>
          </>
        )}
      </div>

      {/* Sidebar content */}
      <div className="sidebar-menu">
        <ul>
          <div className='upload-option'>
          <li
            className={`sidebar-item ${selectedOption === 'uploadFile' ? 'active' : ''}`}
            onClick={() => setSelectedOption('uploadFile')}
          >
            Upload File
          </li>
          </div>
          <div className='generate-option'>
          <li
            className={`sidebar-item ${selectedOption === 'generateTestCases' ? 'active' : ''}`}
            onClick={() => setSelectedOption('generateTestCases')}
          >
            Generate Test Cases
          </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
