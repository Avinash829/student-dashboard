import React, { createContext, useContext, useState, useEffect } from 'react';
import { Student } from '../types';
import { fetchStudents, addStudent, filterStudentsByCourse } from '../services/mockApi';
import toast from 'react-hot-toast';

interface StudentContextType {
  students: Student[];
  filteredStudents: Student[];
  loading: boolean;
  error: string | null;
  selectedCourse: string;
  addNewStudent: (student: Omit<Student, 'id'>) => Promise<void>;
  filterByCourse: (course: string) => Promise<void>;
  refreshStudents: () => Promise<void>;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export function useStudents() {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error('useStudents must be used within a StudentProvider');
  }
  return context;
}

export function StudentProvider({ children }: { children: React.ReactNode }) {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState('All Courses');

  // Load students on mount
  useEffect(() => {
    refreshStudents();
  }, []);

  const refreshStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchStudents();
      setStudents(data);
      setFilteredStudents(data);
    } catch (err) {
      console.error('Error fetching students:', err);
      setError('Failed to fetch students. Please try again later.');
      toast.error('Failed to load students');
    } finally {
      setLoading(false);
    }
  };

  const addNewStudent = async (student: Omit<Student, 'id'>) => {
    try {
      setLoading(true);
      const newStudent = await addStudent(student);
      
      // Update both arrays with the new student
      setStudents(prev => [...prev, newStudent]);
      
      // Only update filtered students if the new student matches the current filter
      if (selectedCourse === 'All Courses' || student.course === selectedCourse) {
        setFilteredStudents(prev => [...prev, newStudent]);
      }
      
      toast.success('New student added successfully!');
    } catch (err) {
      console.error('Error adding student:', err);
      toast.error('Failed to add student');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const filterByCourse = async (course: string) => {
    try {
      setLoading(true);
      setSelectedCourse(course);
      
      if (course === 'All Courses') {
        setFilteredStudents(students);
      } else {
        const filtered = await filterStudentsByCourse(course);
        setFilteredStudents(filtered);
      }
    } catch (err) {
      console.error('Error filtering students:', err);
      toast.error('Failed to filter students');
    } finally {
      setLoading(false);
    }
  };

  const value = {
    students,
    filteredStudents,
    loading,
    error,
    selectedCourse,
    addNewStudent,
    filterByCourse,
    refreshStudents,
  };

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
}