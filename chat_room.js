var firebaseConfig = {
    apiKey: "AIzaSyBmhrlX6W1cH8jFkEwx8IxyqKSFPGB9LuE",
    authDomain: "lets-chat-f0699.firebaseapp.com",
    databaseURL: "https://lets-chat-f0699-default-rtdb.firebaseio.com",
    projectId: "lets-chat-f0699",
    storageBucket: "lets-chat-f0699.appspot.com",
    messagingSenderId: "110087400479",
    appId: "1:110087400479:web:16a21ad927872b6d42f92a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
}