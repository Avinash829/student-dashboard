import React from 'react';
import Navbar from './components/Navbar';
import StudentDashboard from './components/StudentDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6 md:px-6 md:py-8">
        <StudentDashboard />
      </main>
    </div>
  );
}

export default App;