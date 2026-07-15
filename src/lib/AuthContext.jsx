import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [appPublicSettings, setAppPublicSettings] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('zawya-user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      } catch (e) {
        localStorage.removeItem('zawya-user');
      }
    }
    setAuthChecked(true);
    setIsLoadingAuth(false);
    setIsLoadingPublicSettings(false);
  }, []);

  const login = async (email, password) => {
    setIsLoadingAuth(true);
    setAuthError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const mockUser = {
        id: 'user-123',
        email: email,
        name: email.split('@')[0] || 'User',
        createdAt: new Date().toISOString()
      };
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('zawya-user', JSON.stringify(mockUser));
      setIsLoadingAuth(false);
      return { success: true, user: mockUser };
    } catch (error) {
      setIsLoadingAuth(false);
      setAuthError({ type: 'login_failed', message: 'Login failed' });
      return { success: false, error: error.message };
    }
  };

  const register = async (email, password, name) => {
    setIsLoadingAuth(true);
    setAuthError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const mockUser = {
        id: 'user-' + Date.now(),
        email: email,
        name: name || email.split('@')[0],
        createdAt: new Date().toISOString()
      };
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('zawya-user', JSON.stringify(mockUser));
      setIsLoadingAuth(false);
      return { success: true, user: mockUser };
    } catch (error) {
      setIsLoadingAuth(false);
      setAuthError({ type: 'register_failed', message: 'Registration failed' });
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('zawya-user');
    window.location.href = '/';
  };

  const navigateToLogin = () => {
    window.location.href = '/login';
  };

  const checkUserAuth = async () => {
    return { success: true };
  };

  const checkAppState = async () => {
    setAppPublicSettings({ id: 'zawya-app', public_settings: {} });
    setIsLoadingPublicSettings(false);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      authChecked,
      logout,
      navigateToLogin,
      checkUserAuth,
      checkAppState,
      login,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};