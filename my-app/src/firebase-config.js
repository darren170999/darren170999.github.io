import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "X",
    authDomain: "X",
    projectId: "X",
    storageBucket: "X",
    messagingSenderId: "X",
    appId: "X",
    measurementId: "X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
