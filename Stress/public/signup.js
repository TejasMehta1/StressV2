(function() {


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBhCjq7fj6bYhwV1qDCc77E2InbDSH6x8k",
    authDomain: "uplift-stress.firebaseapp.com",
    databaseURL: "https://uplift-stress.firebaseio.com",
    projectId: "uplift-stress",
    storageBucket: "uplift-stress.appspot.com",
    messagingSenderId: "439826261811"
  };
  firebase.initializeApp(config);

  const preObject = document.getElementById('object');

  const dbRefObject = firebase.database().ref().child('object');

  dbRefObject.on('value', snap => console.log(snap.val()));
}());
