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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



