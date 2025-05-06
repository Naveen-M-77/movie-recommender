// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDNX58LLcEImjwnBXcVIpH6SOZYb2bTMU",
  authDomain: "movie-recommender-d02f0.firebaseapp.com",
  projectId: "movie-recommender-d02f0",
  storageBucket: "movie-recommender-d02f0.firebasestorage.app",
  messagingSenderId: "910900059073",
  appId: "1:910900059073:web:b7cd29c7e1ead68a766d40",
  measurementId: "G-1EYQPDSNSJ"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };