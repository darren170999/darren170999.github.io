import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
