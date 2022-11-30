



const firebaseConfig = {
  apiKey: "AIzaSyBuAuTniWycmJ9zc9Xol8mJGbU6S92iDow",
  authDomain: "kwitter-94f72.firebaseapp.com",
  databaseURL: "https://kwitter-94f72-default-rtdb.firebaseio.com",
  projectId: "kwitter-94f72",
  storageBucket: "kwitter-94f72.appspot.com",
  messagingSenderId: "70455444736",
  appId: "1:70455444736:web:fbd0a426b1afd373e31fe5"
};

firebase.initializeApp(firebaseConfig);



username = localStorage.getItem("username")
document.getElementById("username").innerHTML = "Welcome " +username + "!";

function addRoom(){
  room_name = document.getElementById("roomName").value;

  firebase.database().ref('/').child(room_name).update({
    purpose:"addinguser"
  })
localStorage.setItem("room_name", room_name)
window.location = "kwitter_page.html"
  
}








function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;




       Room_names = childKey;

      //Start code
      console.log("Room_names", Room_names)
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function logOut(){
  
  localStorage.removeItem("username")
  
  localStorage.removeItem("roomname")
  window.location = "index.html";
}
function redirectToRoomName(name){
localStorage.setItem("room_name",name)
window.location = "Kwitter_page.html"
}