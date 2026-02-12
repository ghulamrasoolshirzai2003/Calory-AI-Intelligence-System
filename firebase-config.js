/*import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIh_-6eHpoiAi1GxOpKBMCsfRgw3xGpqg",
  
  // 🔴 CHANGE THIS LINE TO MATCH YOUR BROWSER URL:
  authDomain: "calories-ai-cbacd.web.app", 
  
  databaseURL: "https://calories-ai-cbacd-default-rtdb.firebaseio.com",
  projectId: "calories-ai-cbacd",
  storageBucket: "calories-ai-cbacd.firebasestorage.app",
  messagingSenderId: "452409725162",
  appId: "1:452409725162:web:06188aa0233ee0da3b4793",
  measurementId: "G-V9V380SY69"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app, "calory-ai"); */




// firebase-config.js

// 1. Import the specific functions from the CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js"; // <--- Vital for DB

// 2. Your Web App's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIh_-6eHpoiAi1GxOpKBMCsfRgw3xGpqg",
    authDomain: "calories-ai-cbacd.web.app", 
    projectId: "calories-ai-cbacd",
    storageBucket: "calories-ai-cbacd.firebasestorage.app",
    messagingSenderId: "452409725162",
    appId: "1:452409725162:web:06188aa0233ee0da3b4793"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);

// 4. Initialize Services
const auth = getAuth(app);
const db = getFirestore(app, "calory-ai"); // <--- This creates the 'db' object correctly

// 5. Export them so other files can use them
export { auth, db, app };