import React, { useState } from 'react';
import { useStudents } from '../contexts/StudentContext';
import { ALL_COURSES } from '../types';
import { CheckCircle, X } from 'lucide-react';

interface AddStudentFormProps {
  onCancel: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  course?: string;
  enrollDate?: string;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onCancel }) => {
  const { addNewStudent, loading } = useStudents();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [enrollDate, setEnrollDate] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!course) {
      newErrors.course = 'Course is required';
    }
    
    if (!enrollDate) {
      newErrors.enrollDate = 'Enrollment date is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      setIsSubmitting(true);
      await addNewStudent({
        name,
        email,
        course,
        enrollDate,
      });
      
      setName('');
      setEmail('');
      setCourse('');
      setEnrollDate('');
      
      onCancel();
    } catch (error) {
      console.error('Failed to add student:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Add New Student</h2>
        <button onClick={onCancel} className="text-gray-400 hover:text-gray-600">
          <X className="h-5 w-5" />
        </button>
      </div>
  
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`block w-full px-3 py-2 text-sm rounded-md bg-white border ${
                errors.name
                  ? 'border-red-400 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
  
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`block w-full px-3 py-2 text-sm rounded-md bg-white border ${
                errors.email
                  ? 'border-red-400 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
  
          {/* Course */}
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
              Course *
            </label>
            <select
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className={`block w-full px-3 py-2 text-sm rounded-md bg-white border ${
                errors.course
                  ? 'border-red-400 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
              }`}
            >
              <option value="">Select a course</option>
              {ALL_COURSES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.course && <p className="mt-1 text-sm text-red-600">{errors.course}</p>}
          </div>
  
          {/* Enroll Date */}
          <div>
            <label htmlFor="enrollDate" className="block text-sm font-medium text-gray-700 mb-1">
              Enrollment Date *
            </label>
            <input
              type="date"
              id="enrollDate"
              value={enrollDate}
              onChange={(e) => setEnrollDate(e.target.value)}
              className={`block w-full px-3 py-2 text-sm rounded-md bg-white border ${
                errors.enrollDate
                  ? 'border-red-400 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
              }`}
            />
            {errors.enrollDate && <p className="mt-1 text-sm text-red-600">{errors.enrollDate}</p>}
          </div>
        </div>
  
        {/* Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary"
            disabled={isSubmitting || loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary flex items-center"
            disabled={isSubmitting || loading}
          >
            {isSubmitting || loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <CheckCircle className="h-4 w-4 mr-1" />
                Add Student
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};  

export default AddStudentForm;