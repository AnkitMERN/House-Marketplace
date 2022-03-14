// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAS0EJ5uuwvKo3T5pHmNYji5PkMe1pD7iQ',
  authDomain: 'house-markertplace-app.firebaseapp.com',
  projectId: 'house-markertplace-app',
  storageBucket: 'house-markertplace-app.appspot.com',
  messagingSenderId: '399278253357',
  appId: '1:399278253357:web:a239c857781637d5b31fa4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()

export default app
