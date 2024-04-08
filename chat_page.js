// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDynBYKgQWemyD4nHeS5rDz1y6CzVp9Ddo",
    authDomain: "chat-app-54e2a.firebaseapp.com",
    databaseURL: "https://chat-app-54e2a-default-rtdb.firebaseio.com",
    projectId: "chat-app-54e2a",
    storageBucket: "chat-app-54e2a.appspot.com",
    messagingSenderId: "632199671524",
    appId: "1:632199671524:web:326593e4a2bcbedae8c6f1"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);




user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send()
{
 msg = document.getElementById("msg").value;

 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0,
 });
}

function logout()
{
 localStorage.removeItem("room_name");
 localStorage.removeItem("user_name");

 window.location = "index.html";
}