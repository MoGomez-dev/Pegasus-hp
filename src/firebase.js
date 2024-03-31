import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7la5KL9nytOJUt678Rk-SDKyd5ZjnPmY",
  authDomain: "pegasus-hp.firebaseapp.com",
  projectId: "pegasus-hp",
  storageBucket: "pegasus-hp.appspot.com",
  messagingSenderId: "177954013004",
  appId: "1:177954013004:web:333e614b8c6826d82819e9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};