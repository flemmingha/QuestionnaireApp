// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration (use the one from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyD9mBazcCCPKmKS8Q0rrn1b_EW0dVHYV4w",
  authDomain: "questionnaireappfrejashave.firebaseapp.com",
  projectId: "questionnaireappfrejashave",
  storageBucket: "questionnaireappfrejashave.appspot.com",
  messagingSenderId: "610913005773",
  appId: "1:610913005773:web:7817dadb0bb225e777b984",
  measurementId: "G-2ZQCNQ4PT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
