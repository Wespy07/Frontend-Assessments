import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "alteroffice-e793b.firebaseapp.com",
  projectId: "alteroffice-e793b",
  storageBucket: "alteroffice-e793b.firebasestorage.app",
  messagingSenderId: "216291344394",
  appId: "1:216291344394:web:1fb8bebfcf517306e9dff3",
  databaseURl: 'https://alteroffice-e793b-default-rtdb.firebaseio.com' 
};

export const app = initializeApp(firebaseConfig);