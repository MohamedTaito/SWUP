// Initialize Firebase
var config = {
  apiKey: "AIzaSyBzd4OumpRc-nszYxblZVnCt93anc4M3JI",
  authDomain: "swup-4ffb2.firebaseapp.com",
  databaseURL: "https://swup-4ffb2.firebaseio.com",
  projectId: "swup-4ffb2",
  storageBucket: "swup-4ffb2.appspot.com",
  messagingSenderId: "442781535897"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(user => {
  if(!user) {
      window.location = 'login.html';
  }
});


  $('#submit').on('click', function(){
  var name = document.getElementById('name');
  var note = name.value;
  var tell= document.getElementById('tel');
  var nop = tell.value;
  var college = document.getElementById('college_name');
  var coll = college.value;
  var fees = document.getElementById('fee');
  var f = fee.value;
  firebase.database().ref('university/').child(note).child("tel").set(nop);
  firebase.database().ref('university/').child(note).child("college").child(coll).child("fee").set(f);
});
$('#reset').on('click', function(){
  location.reload()
});
