/* firebase */
  console.log("hello");
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
  console.log(database , "test");

$("#addTrain").on("click", function(event) {
   event.preventDefault();

    var trainName = $("#name-input").val().trim();
     console.log(trainName);
    var destination = $("#destination").val().trim();
    var firstTrain = moment($("#first-train").val().trim(), "DD/MM/YY").format("X");
    var frequency = $("#frequency-input").val().trim();


    var newTrain = {
        tName: trainName,
        tDestination: destination,
        tFirstTimeTrain: firstTrain,
        tFrequency: frequency,
    };


    database.ref().push(newTrain)
   
   console.log(newTrain.name);

    
});



