// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl2jhF_Q-2HA_ZAVTQQjGwZZKQ_nqNaIc",
  authDomain: "mundo-invertido-eb75d.firebaseapp.com",
  projectId: "mundo-invertido-eb75d",
  storageBucket: "mundo-invertido-eb75d.appspot.com",
  messagingSenderId: "910421677029",
  appId: "1:910421677029:web:70d719f0d6d95a0166950c"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app