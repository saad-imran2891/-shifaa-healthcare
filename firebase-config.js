import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWnb5WA8GHS3Ez_nEpVKbGJox6dGEdYOg",
  authDomain: "shifaa-2fb18.firebaseapp.com",
  projectId: "shifaa-2fb18",
  storageBucket: "shifaa-2fb18.firebasestorage.app",
  messagingSenderId: "535826100759",
  appId: "1:535826100759:web:d31fa59255923dc6636252"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);