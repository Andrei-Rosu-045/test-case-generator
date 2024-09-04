import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

interface LoginPageProps {
  onLogin: (username: string, userDomain: string) => void; // Callback for login
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [userDomain, setUserDomain] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && userDomain && password) {
      setError(null); // Clear any previous error
      onLogin(username, userDomain); // Call the onLogin prop
      navigate('/main'); // Redirect to main page after successful login
    } else {
      setError('Please fill in all fields.'); // Set error message if fields are missing
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">Login</div>
      <div className="login-form">
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="User Domain"
          value={userDomain}
          onChange={(e) => setUserDomain(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
