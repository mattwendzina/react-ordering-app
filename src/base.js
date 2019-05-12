import Rebase from "re-base";
import firebase from "firebase";
console.log("Env", process.env.REACT_APP_FIREBASE_DOMAIN);
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBa0BhwYbsDT5ZzcjoEAsb11cGJYO7urbU",
  authDomain: "react-ordering-app-1ad5c.firebaseapp.com",
  databaseURL: "https://react-ordering-app-1ad5c.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
