import * as firebase from 'firebase';

//api key is used to access firebase, storageBucket is for storing files, authdomain hosts all of our authenticated users.
const config = {
    apiKey: "AIzaSyDrg5H7ZEMpM-F8ay-3L0mTKFaMS5djNR8",
    authDomain: "goalcoach-83b48.firebaseapp.com",
    databaseURL: "https://goalcoach-83b48.firebaseio.com",
    storageBucket: "goalcoach-83b48.appspot.com",
    messagingSenderId: "382183001758"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoal');
