import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "equaled-37f8a.firebaseapp.com",
    databaseURL: "https://equaled-37f8a-default-rtdb.firebaseio.com",
    projectId: "equaled-37f8a",
    storageBucket: "equaled-37f8a.appspot.com",
    messagingSenderId: "289685085851",
    appId: "1:289685085851:web:4bbecac832cad805e0303e",
    measurementId: "G-VTV7YYSPWV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };
