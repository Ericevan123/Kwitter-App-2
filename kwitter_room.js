var firebaseConfig = {
    apiKey: "AIzaSyCAjdkSW51RTKyl1N9ZaO7rox7GVmq0I28",
    authDomain: "kwitter-web-app-e784b.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-e784b-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-e784b",
    storageBucket: "kwitter-web-app-e784b.appspot.com",
    messagingSenderId: "206300767344",
    appId: "1:206300767344:web:1bbc42c8988ab59af980b5",
    measurementId: "G-90QSH6ZG7G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();