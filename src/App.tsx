// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UploadFileCard from './components/UploadFileCard';
import ProjectNameCard from './components/ProjectNameCard';
import GenerateTestCasesCard from './components/GenerateTestCasesCard';
import './App.css';

const App: React.FC = () => {
  const [projectName, setProjectName] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('uploadFile'); // Default to 'uploadFile'

  const renderMainContent = () => {
    if (selectedOption === 'uploadFile') {
      return (
        <div className="upload-section">
          <ProjectNameCard projectName={projectName} setProjectName={setProjectName} />
          <UploadFileCard />
        </div>
      );
    } else if (selectedOption === 'generateTestCases') {
      return <GenerateTestCasesCard projectName={projectName} />;
    }
    return null;
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Sidebar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        <main className="main-content">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
