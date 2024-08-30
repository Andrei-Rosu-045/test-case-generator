import React, { useState } from 'react';
import Header from './components/Header';
import UploadFileCard from './components/UploadFileCard';
import ProjectNameCard from './components/ProjectNameCard';
import GenerateTestCasesCard from './components/GenerateTestCasesCard';
import './App.css';

const App: React.FC = () => {
  const [projectName, setProjectName] = useState<string>('');

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <ProjectNameCard className="card-two mt-3" projectName={projectName} setProjectName={setProjectName} />
            <UploadFileCard className="card-one" />
          </div>
          <div className="col-md-8">
            <GenerateTestCasesCard className="card-three" projectName={projectName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
