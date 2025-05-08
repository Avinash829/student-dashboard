
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBM4wdQv9SO0IuA5rbi6yOxbu7uomzKJ8k",
  authDomain: "codeinterviewpro-c728f.firebaseapp.com",
  projectId: "YOUR_PROJECT_IDcodeinterviewpro-c728f",
  storageBucket: "codeinterviewpro-c728f.appspot.com",
  messagingSenderId: "1072491245530",
  appId: "1:1072491245530:web:32de26c29b10e4d11c1ae3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  googleProvider,
  signInWithPopup
};