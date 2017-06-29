// Initialize Firebase
var config = {
  apiKey: "AIzaSyBzd4OumpRc-nszYxblZVnCt93anc4M3JI",
  authDomain: "swup-4ffb2.firebaseapp.com",
  databaseURL: "https://swup-4ffb2.firebaseio.com",
  projectId: "swup-4ffb2",
  storageBucket: "swup-4ffb2.appspot.com",
  messagingSenderId: "442781535897"
};


$('#logout').on('click', function(){
  firebase.auth().signOut().then(function()
   {
   console.log("Logged out!")
},
function(error)
{
   console.log(error.code);
   console.log(error.message);
});
});
