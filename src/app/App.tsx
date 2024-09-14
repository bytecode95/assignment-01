import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthContext';
import AuthPage from '../views/auth/AuthPage';
import HomePage from '../views/home/Home';

const App: React.FC = () => {
  useLayoutEffect(() => {
    const originalBackground = document.body.style.background;
    document.body.style.background = 'linear-gradient(92.77deg, #7a7975 14.91%, #d0cfcb 53.37%)';
    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <AuthPage />;
  }
  return children;
};

export default App;
