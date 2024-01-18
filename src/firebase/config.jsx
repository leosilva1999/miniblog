// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCweNy-KXecXr2aTIBac4zolpMkQyfWQ3c",
  authDomain: "miniblog-2b6d7.firebaseapp.com",
  projectId: "miniblog-2b6d7",
  storageBucket: "miniblog-2b6d7.appspot.com",
  messagingSenderId: "1009967781442",
  appId: "1:1009967781442:web:09e573f6fe602e56f07fdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };