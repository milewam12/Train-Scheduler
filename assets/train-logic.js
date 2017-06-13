/* firebase */

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApEV4StR971zJTCqHCvM4CWy62w-n2LwU",
    authDomain: "train-scheduler-a8ba8.firebaseapp.com",
    databaseURL: "https://train-scheduler-a8ba8.firebaseio.com",
    projectId: "train-scheduler-a8ba8",
    storageBucket: "train-scheduler-a8ba8.appspot.com",
    messagingSenderId: "283387414256"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

