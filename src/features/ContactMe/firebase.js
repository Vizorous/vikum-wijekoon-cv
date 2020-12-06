import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYhBhfufx3_UzGbjh6CnLIFsJff9r-g1k",
  authDomain: "vikum-wijekoon-cv.firebaseapp.com",
  projectId: "vikum-wijekoon-cv",
  storageBucket: "vikum-wijekoon-cv.appspot.com",
  messagingSenderId: "818372641676",
  appId: "1:818372641676:web:e91313618ac6fc69268ca9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
