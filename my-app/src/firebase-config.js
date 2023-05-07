import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9orrGLzA4ZaM8wyFBGjVM6Q2CpW7twzM",
    authDomain: "dsohjh.firebaseapp.com",
    projectId: "dsohjh",
    storageBucket: "dsohjh.appspot.com",
    messagingSenderId: "99879521514",
    appId: "1:99879521514:web:c1b0b19e3814dc404edb93",
    measurementId: "G-EK780WV0S6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);