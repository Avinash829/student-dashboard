import React, { useState } from 'react';
import { GraduationCap, LogIn, User, Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

const Navbar: React.FC = () => {
  const { currentUser, logOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="!bg-white border-b border-blue-200 sticky top-0 z-10 shadow-sm">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="src/babycodelogo.png" alt="" />
            <span className="ml-2 text-xl font-semibold text-gray-900">BabyCode</span>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center">
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-700" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {currentUser.displayName || currentUser.email}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary btn-sm flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary flex items-center"
              >
                <LogIn className="h-4 w-4 mr-1" />
                Login / Sign Up
              </button>
            )}
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg animate-fade-in">
          <div className="px-4 pt-4 pb-4 space-y-3">
            {currentUser ? (
              <>
                <div className="flex items-center py-2">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary-700" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {currentUser.displayName || currentUser.email}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full btn btn-secondary flex items-center justify-center"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full btn btn-primary flex items-center justify-center"
              >
                <LogIn className="h-4 w-4 mr-1" />
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      )}
      
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;