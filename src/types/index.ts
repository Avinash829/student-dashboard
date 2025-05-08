export interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  enrollDate: string;
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export type Course = 
  | "Database Management System" 
  | "Cloud Computing" 
  | "Fullstack Development" 
  | "AI & ML" 
  | "Data Analysis"
  | "Java"
  | "Python";

export const ALL_COURSES: Course[] = [
  "Database Management System",
  "Cloud Computing",
  "Fullstack Development",
  "AI & ML",
  "Data Analysis",
  "Java",
  "Python"
];