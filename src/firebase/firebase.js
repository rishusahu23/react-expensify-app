import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey:process.env.FIREBASE_API_KEY,/* "AIzaSyCjBgaXFt-X8BUYuwVq9hhYgLDm169RoDs",//*/
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:"https://expensify-15714.firebaseio.com",//process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
    appId: process.env.FIREBASE_API_ID
  };

firebase.initializeApp(firebaseConfig);

const database=firebase.database()
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export {firebase,googleAuthProvider,database as default}

