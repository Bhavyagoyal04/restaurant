import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RestaurantProvider } from './context/RestaurantContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import RestaurantDetail from './components/RestaurantDetail';
import Header from './components/Header';

function App() {
  return (
    <AuthProvider>
      <RestaurantProvider>
        <div className="app-container">
          <Header />
          <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant/:id" element={<RestaurantDetail />} />
              </Route>
              
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </main>
        </div>
      </RestaurantProvider>
    </AuthProvider>
  );
}

export default App;