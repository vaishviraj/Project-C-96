var firebaseConfig = {
      apiKey: "AIzaSyCKbuFPyVRDzvOQlc7yni81w8-dWGVhFBI",
      authDomain: "let-s-chat-app-project.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-project-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-project",
      storageBucket: "let-s-chat-app-project.appspot.com",
      messagingSenderId: "519706036797",
      appId: "1:519706036797:web:312d44c1d20097821e7854"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             Like:0
          });
          document.getElementById("msg").value=" ";
        
    }

 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="let_s_chat.html";
}