import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"


var firebaseConfig = {
  apiKey: "AIzaSyAOgEj7W1XKbNECi9burjxg8FBVl2Hp5Sg",
  authDomain: "awesome-todo-73590.firebaseapp.com",
  databaseURL: "https://awesome-todo-73590-default-rtdb.firebaseio.com",
  projectId: "awesome-todo-73590",
  storageBucket: "awesome-todo-73590.appspot.com",
  messagingSenderId: "324611174325",
  appId: "1:324611174325:web:7c9911b36107e9a59133fc",
  measurementId: "G-N0VKZ1ZLWN"
}
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }