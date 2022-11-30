function addUser(){
var username = document.getElementById("username1").value; 
    localStorage.setItem("username", username)
    window.location = "kwitter_room.html"
    
}