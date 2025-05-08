import React, { useState } from 'react';
import { useStudents } from '../contexts/StudentContext';
import { useAuth } from '../contexts/AuthContext';
import { ALL_COURSES } from '../types';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';
import { PlusCircle, RefreshCw, Filter } from 'lucide-react';
import AuthModal from './AuthModal';

const StudentDashboard: React.FC = () => {
  const { filteredStudents, loading, error, selectedCourse, filterByCourse, refreshStudents } = useStudents();
  const { currentUser } = useAuth();
  const [showAddForm, setShowAddForm] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const handleAddStudent = () => {
    if (currentUser) {
      setShowAddForm(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
        
        <div className="flex items-center space-x-2 self-end sm:self-auto">
          <button
            onClick={() => refreshStudents()}
            className="btn btn-secondary flex items-center"
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 mr-1 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          
          <button
            onClick={handleAddStudent}
            className="btn btn-primary flex items-center"
          >
            <PlusCircle className="h-4 w-4 mr-1" />
            Add Student
          </button>
        </div>
      </div>
      
      {showAddForm && currentUser && (
        <div className="card p-4 md:p-6 animate-fade-in">
          <AddStudentForm onCancel={() => setShowAddForm(false)} />
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            className="btn btn-secondary flex items-center"
          >
            <Filter className="h-4 w-4 mr-1" />
            {selectedCourse}
          </button>
          
          {isFilterMenuOpen && (
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 animate-fade-in">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <button
                  onClick={() => {
                    filterByCourse('All Courses');
                    setIsFilterMenuOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm w-full text-left ${
                    selectedCourse === 'All Courses' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  All Courses
                </button>
                
                {ALL_COURSES.map((course) => (
                  <button
                    key={course}
                    onClick={() => {
                      filterByCourse(course);
                      setIsFilterMenuOpen(false);
                    }}
                    className={`block px-4 py-2 text-sm w-full text-left ${
                      selectedCourse === course 
                        ? 'bg-primary-50 text-primary-700' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {course}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <p className="text-sm text-gray-500">
          Showing {filteredStudents.length} {filteredStudents.length === 1 ? 'student' : 'students'}
        </p>
      </div>
      
      {error && (
        <div className="bg-error-50 border border-error-200 text-error-600 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      <StudentList students={filteredStudents} loading={loading} />
      
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default StudentDashboard;