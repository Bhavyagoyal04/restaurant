import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';
import { RestaurantProvider } from './context/RestaurantContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RestaurantProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RestaurantProvider>
  </React.StrictMode>
);