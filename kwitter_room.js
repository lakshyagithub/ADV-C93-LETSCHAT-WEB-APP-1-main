
document.getElementById("usernameok").innerHTML="welcome, "+localStorage.getItem("user_name");

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      window.location="index.html"
}
function addroom() {
      document.getElementById("output_for_SMS").innerHTML=document.getElementById("room_name").value;
      
}