import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_PUBLIC_API_KEY,
    authDomain: "ai-generator-d0a97.firebaseapp.com",
    projectId: "ai-generator-d0a97",
    storageBucket: "ai-generator-d0a97.appspot.com",
    messagingSenderId: "3385630918",
    appId: "1:3385630918:web:e7c1536206a79d35c177c7",
    measurementId: "G-P0EGDCLDCD"
};

export const app = initializeApp(firebaseConfig);