import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyAWcRRc8Xop1YvFGBh5PTCQNP7iukeLmJk",
    authDomain: "fridjchecker.firebaseapp.com",
    databaseURL: "https://fridjchecker.firebaseio.com",
    storageBucket: "fridjchecker.appspot.com",
    messagingSenderId: "267963553785"
  };
  firebase.initializeApp(config);
  
firebase.database().ref().set({
    appName: 'FridjChecker',
    running: true
});
