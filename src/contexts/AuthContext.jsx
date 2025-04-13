import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for user in localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const signup = async (email, password, name) => {
    try {
      // Mock signup - store user in localStorage
      const user = { email, name };
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      return { success: true };
    } catch (error) {
      setError('Signup failed');
      return { success: false, error: 'Signup failed' };
    }
  };

  const signin = async (email, password) => {
    try {
      // Mock signin - store user in localStorage
      const user = { email };
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      return { success: true };
    } catch (error) {
      setError('Signin failed');
      return { success: false, error: 'Signin failed' };
    }
  };

  const signout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loading,
    error,
    signup,
    signin,
    signout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 