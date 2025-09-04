import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="logo">
          <Link to="/">Restaurant Finder</Link>
        </h1>
        
        {currentUser && (
          <div className="user-controls">
            <span className="welcome-text">Welcome, {currentUser.name}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;