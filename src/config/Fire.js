import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBmw2UjUihFwcH3XvsAeMbGfC0qsojOANU",
    authDomain: "crop-scouting-notes-58e22.firebaseapp.com",
    databaseURL: "https://crop-scouting-notes-58e22.firebaseio.com",
    projectId: "crop-scouting-notes-58e22",
    storageBucket: "crop-scouting-notes-58e22.appspot.com",
    messagingSenderId: "79332385982",
    appId: "1:79332385982:web:2a472b426f963579032aef",
    measurementId: "G-D6DCYXD0GX"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;