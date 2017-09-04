import Rebase from 're-base'
import firebase from 'firebase'

// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
// }

const config = {
    apiKey: "AIzaSyAh_1_g6xYRY5w_JuoMqcknzThfNbbJzQo",
    authDomain: "learning-30dd8.firebaseapp.com",
    databaseURL: "https://learning-30dd8.firebaseio.com",
    projectId: "learning-30dd8",
    storageBucket: "learning-30dd8.appspot.com",
    messagingSenderId: "721600927292"
  };

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()


export { app, base, facebookProvider }