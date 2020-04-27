import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAGNaNHBI__Gzt9SL5bzVO6OkMBVHRx6Oo",
  authDomain: "essaysearch-7adb1.firebaseapp.com",
  databaseURL: "https://essaysearch-7adb1.firebaseio.com",
  storageBucket: "essaysearch-7adb1.appspot.com",

  messagingSenderId: "98000172859",
  appId: "1:98000172859:web:05045cb859f3897b49e91e",
  measurementId: "G-FPKQGP21HF",
  projectId: "essaysearch-7adb1",
};
firebase.initializeApp(config);

export default firebase;