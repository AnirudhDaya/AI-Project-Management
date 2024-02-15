// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi8NVXgkFfeB-0_LrQHQ_gvgSs4pmNoZ8",
  authDomain: "ai-project-management-tool-24.firebaseapp.com",
  projectId: "ai-project-management-tool-24",
  storageBucket: "ai-project-management-tool-24.appspot.com",
  messagingSenderId: "324292816246",
  appId: "1:324292816246:web:c5765dc429949815de9e57",
  measurementId: "G-KH7VSZ0782"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);