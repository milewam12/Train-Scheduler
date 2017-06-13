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
console.log(database, "test");

var minsAway = 0;

$("#addTrain").on("click", function (event) {
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

    database.ref().push(newTrain);

    console.log(newTrain.tName, "ok");

    // Alert
    alert("Train successfully added");

 // Clears all of the text-boxes
    $("#name-input").val("")
    $("#destination").val("")
    $("#first-train").val("")
    $("#frequency-input").val("")

});
// 3. Create Firebase event for adding new train schedule to the database and a row in the html when a user adds an entry

database.ref().on("child_added", function (childSnapshot, prevChildKey) {
     console.log(childSnapshot.val());

     var trainName = childSnapshot.val().tName;
     var destination = childSnapshot.val().tDestination;
     var firstTrain = childSnapshot.val().tFirstTimeTrain;
     var frequency = childSnapshot.val().tFrequency;

     $("#newtrain-data").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + firstTrain + "</td><td>" + frequency + "</td><td>" + minsAway + "</td></tr>")


})




