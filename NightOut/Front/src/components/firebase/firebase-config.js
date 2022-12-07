import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJInYEoQQ99BVvmOnijPKCT73-CN5TA_o",
  authDomain: "night-out-33a94.firebaseapp.com",
  projectId: "night-out-33a94",
  storageBucket: "night-out-33a94.appspot.com",
  messagingSenderId: "240650295159",
  appId: "1:240650295159:web:ea631762fe5e5241d87372"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);