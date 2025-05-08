import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { StudentProvider } from './contexts/StudentContext';
import { Toaster } from 'react-hot-toast';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <StudentProvider>
        <App />
        <Toaster position="top-right" />
      </StudentProvider>
    </AuthProvider>
  </StrictMode>
);