import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "my-public-api-key",
    authDomain: "my-auth-domain",
    projectId: "my-project-id",
    storageBucket: "my-storage-bucket",
    messagingSenderId: "my-sender-id",
    appId: "my-app-id",
};

export const app = initializeApp(firebaseConfig);