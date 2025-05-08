import { Student } from '../types';


const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    email: 'aaravsharma@gmail.com',
    course: 'Database Management System',
    enrollDate: '2025-04-22'
  },
  {
    id: '2',
    name: 'Vihaan Mehta',
    email: 'vihaanmehta@gmail.com',
    course: 'Cloud Computing',
    enrollDate: '2025-03-31'
  },
  {
    id: '3',
    name: 'Aditya Nair',
    email: 'adityanair@gmail.com',
    course: 'Database Management System',
    enrollDate: '2025-04-15'
  },
  {
    id: '4',
    name: 'Rohan Kapoor',
    email: 'rohankapoor@gmail.com',
    course: 'Database Management System',
    enrollDate: '2025-03-25'
  },
  {
    id: '5',
    name: 'Arjun Patel',
    email: 'arjunpatel@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-05-03'
  },
  {
    id: '6',
    name: 'Siddharth Rao',
    email: 'siddharthrao@gmail.com',
    course: 'AI & ML',
    enrollDate: '2025-04-18'
  },
  {
    id: '7',
    name: 'Kunal Deshmukh',
    email: 'kunaldeshmukh@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-03-21'
  },
  {
    id: '8',
    name: 'Aniket Verma',
    email: 'aniketverma@gmail.com',
    course: 'Database Management System',
    enrollDate: '2025-04-08'
  },
  {
    id: '9',
    name: 'Yash Agarwal',
    email: 'yashagarwal@gmail.com',
    course: 'Data Analysis',
    enrollDate: '2025-03-30'
  },
  {
    id: '10',
    name: 'Manav Bhattacharya',
    email: 'manavbhattacharya@gmail.com',
    course: 'Data Analysis',
    enrollDate: '2025-04-16'
  },
  {
    id: '11',
    name: 'Ishaan Reddy',
    email: 'ishaanreddy@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-03-03'
  },
  {
    id: '12',
    name: 'Rajat Malhotra',
    email: 'rajatmalhotra@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-04-15'
  },
  {
    id: '13',
    name: 'Nikhil Joshi',
    email: 'nikhiljoshi@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-04-12'
  },
  {
    id: '14',
    name: 'Pranav Iyer',
    email: 'pranaviyer@gmail.com',
    course: 'Data Analysis',
    enrollDate: '2025-03-30'
  },
  {
    id: '15',
    name: 'Harshit Jain',
    email: 'harshitjain@gmail.com',
    course: 'Data Analysis',
    enrollDate: '2025-05-03'
  },
  {
    id: '16',
    name: 'Devansh Bansal',
    email: 'devanshbansal@gmail.com',
    course: 'Data Analysis',
    enrollDate: '2025-03-13'
  },
  {
    id: '17',
    name: 'Tarun Menon',
    email: 'tarunmenon@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-03-31'
  },
  {
    id: '18',
    name: 'Aryan Thakur',
    email: 'aryanthakur@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-03-25'
  },
  {
    id: '19',
    name: 'Rahul Chauhan',
    email: 'rahulchauhan@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-04-22'
  },
  {
    id: '20',
    name: 'Tejas Kulkarni',
    email: 'tejaskulkarni@gmail.com',
    course: 'Java',
    enrollDate: '2025-03-22'
  },
  {
    id: '21',
    name: 'Saurav Mishra',
    email: 'sauravmishra@gmail.com',
    course: 'Cloud Computing',
    enrollDate: '2025-03-12'
  },
  {
    id: '22',
    name: 'Arnav Dutta',
    email: 'arnavdutta@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-04-14'
  },
  {
    id: '23',
    name: 'Krish Chatterjee',
    email: 'krishchatterjee@gmail.com',
    course: 'Data Analysis',
    enrollDate: '2025-04-19'
  },
  {
    id: '24',
    name: 'Dhruv Sinha',
    email: 'dhruvsinha@gmail.com',
    course: 'Cloud Computing',
    enrollDate: '2025-03-14'
  },
  {
    id: '25',
    name: 'Vivek Tripathi',
    email: 'vivektripathi@gmail.com',
    course: 'Cloud Computing',
    enrollDate: '2025-03-19'
  },
  {
    id: '26',
    name: 'Ananya Sharma',
    email: 'ananyasharma@gmail.com',
    course: 'Python',
    enrollDate: '2025-04-14'
  },
  {
    id: '27',
    name: 'Ishita Patel',
    email: 'ishitapatel@gmail.com',
    course: 'AI & ML',
    enrollDate: '2025-03-06'
  },
  {
    id: '28',
    name: 'Riya Nair',
    email: 'riyanair@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-05-05'
  },
  {
    id: '29',
    name: 'Aanya Gupta',
    email: 'aanyagupta@gmail.com',
    course: 'Data Analysis',
    enrollDate: '2025-04-25'
  },
  {
    id: '30',
    name: 'Meera Kapoor',
    email: 'meerakapoor@gmail.com',
    course: 'Cloud Computing',
    enrollDate: '2025-03-16'
  },
  {
    id: '31',
    name: 'Sanya Iyer',
    email: 'sanyaiyer@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-03-24'
  },
  {
    id: '32',
    name: 'Diya Joshi',
    email: 'diyajoshi@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-03-01'
  },
  {
    id: '33',
    name: 'Kavya Menon',
    email: 'kavyamenon@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-04-28'
  },
  {
    id: '34',
    name: 'Niharika Reddy',
    email: 'niharikareddy@gmail.com',
    course: 'Cloud Computing',
    enrollDate: '2025-03-12'
  },
  {
    id: '35',
    name: 'Sneha Verma',
    email: 'snehaverma@gmail.com',
    course: 'AI & ML',
    enrollDate: '2025-05-04'
  },
  {
    id: '36',
    name: 'Tanya Rao',
    email: 'tanyarao@gmail.com',
    course: 'Fullstack Development',
    enrollDate: '2025-03-08'
  },
  {
    id: '37',
    name: 'Priya Malhotra',
    email: 'priyamalhotra@gmail.com',
    course: 'Cloud Computing',
    enrollDate: '2025-03-21'
  },
  {
    id: '38',
    name: 'Simran Arora',
    email: 'simranarora@gmail.com',
    course: 'AI & ML',
    enrollDate: '2025-03-11'
  },
  {
    id: '39',
    name: 'Shreya Bansal',
    email: 'shreyabansal@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-05-01'
  },
  {
    id: '40',
    name: 'Pooja Thakur',
    email: 'poojathakur@gmail.com',
    course: 'Data Analysis',
    enrollDate: '2025-04-03'
  },
  {
    id: '41',
    name: 'Avni Mishra',
    email: 'avnimishra@gmail.com',
    course: 'Fullstack Development',
    enrollDate: '2025-05-01'
  },
  {
    id: '42',
    name: 'Aishwarya Tripathi',
    email: 'aishwaryatripathi@gmail.com',
    course: 'Java',
    enrollDate: '2025-03-17'
  },
  {
    id: '43',
    name: 'Kritika Dutta',
    email: 'kritikadutta@gmail.com',
    course: 'Full Stack Development',
    enrollDate: '2025-03-12'
  },
  {
    id: '44',
    name: 'Bhavya Sinha',
    email: 'bhavyasinha@gmail.com',
    course: 'Python',
    enrollDate: '2025-03-23'
  },
  {
    id: '45',
    name: 'Neha Deshmukh',
    email: 'nehadeshmukh@gmail.com',
    course: 'Data Analysis',
    enrollDate: '2025-04-07'
  },
  {
    id: '46',
    name: 'Trisha Bhattacharya',
    email: 'trishabhattacharya@gmail.com',
    course: 'Data Analysis',
    enrollDate: '2025-03-09'
  },
  {
    id: '47',
    name: 'Sakshi Chauhan',
    email: 'sakshichauhan@gmail.com',
    course: 'Cloud Computing',
    enrollDate: '2025-03-14'
  },
  {
    id: '48',
    name: 'Radhika Agarwal',
    email: 'radhikaagarwal@gmail.com',
    course: 'Cloud Computing',
    enrollDate: '2025-05-04'
  },
  {
    id: '49',
    name: 'Isha Kulkarni',
    email: 'ishakulkarni@gmail.com',
    course: 'AI & ML',
    enrollDate: '2025-03-26'
  },
  {
    id: '50',
    name: 'Charvi Chatterjee',
    email: 'charvichatterjee@gmail.com',
    course: 'Data Analysis',
    enrollDate: '2025-03-18'
  }
];

let additionalStudents: Student[] = [];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchStudents = async (): Promise<Student[]> => {
  await delay(800); 
  return [...mockStudents, ...additionalStudents];
};

export const addStudent = async (student: Omit<Student, 'id'>): Promise<Student> => {
  await delay(800); 
  
  const newStudent: Student = {
    ...student,
    id: String(Date.now()), 
  };
  

  additionalStudents.push(newStudent);
  
  return newStudent;
};

export const filterStudentsByCourse = async (course: string): Promise<Student[]> => {
  await delay(400); 


  const allStudents = [...mockStudents, ...additionalStudents];
  
  if (course === 'All Courses') {
    return allStudents;
  }
  
  return allStudents.filter(student => student.course === course);
};