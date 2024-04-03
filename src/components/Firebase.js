/* eslint-disable no-unused-vars */

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCzp7y9XDoBnCglx_22ZKngjV8sNsOVZxc",
  authDomain: "medifyai.firebaseapp.com",
  projectId: "medifyai",
  storageBucket: "medifyai.appspot.com",
  messagingSenderId: "171953232052",
  appId: "1:171953232052:web:6db60ce68a52d980255fe1"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;