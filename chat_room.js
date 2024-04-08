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

function addRoom() 
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding new room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - ", room_name);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+"</div><hr>";
      document.getElementById(output).innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "chat_page.html"
}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");

      window.location = "index.html";
}