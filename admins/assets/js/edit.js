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

$("#choose_cat").change(function(){
  if (this.value=='University'){
    $('#choose_ch').prop('disabled', false);
  }
  else
  {
    $('#choose_ch').prop('disabled', true);
  }
  firebase.database().ref("/university").once("value",function(snapshot){
    var data = snapshot.val();
    for (var university in data) {
      $('#choose_ch').append($('<option>', {
        value: university,
        text : university
      }));
    }
  });
});

$("#choose_cat").change(function(){
  if (this.value=='University'){
    $('#college').prop('disabled', false);
  }
  else
  {
    $('#college').prop('disabled', true);
  }
});

$("#college").change(function(){
  if (this.value=='college'){
    $('#dis').prop('disabled', false);
  }
  else
  {
    $('#dis').prop('disabled', true);
  }
  var uni = document.getElementById('choose_ch');
  var un=uni.value;
  firebase.database().ref("/university" + "/" + un + "/" + "college").once("value",function(snapshot){
    var data = snapshot.val();
    for (var college in data) {
      $('#dis').append($('<option>', {
        value: college,
        text : college
      }));
    }
  });
});

$("#college").change(function(){
  if (this.value=='tel'){
    $('#new').prop('disabled', false);
  }
  else
  {
    $('#new').prop('disabled', true);
  }
});



$("#college").change(function(){
  if (this.value=='college'){
    $('#fee').prop('disabled', false);
  }
  else
  {
    $('#fee').prop('disabled', true);
  }
});

$('#submit').on('click', function(){
  var uni = document.getElementById('choose_ch');
  var un=uni.value;
  var choose = document.getElementById('college');
  var col = choose.value;
  var tell = document.getElementById('new');
  var tels = tell.value;
  var fee = document.getElementById('fee');
  var fees = fee.value;
  var dis = document.getElementById('dis');
  var di = dis.value;
  if (col=="tel")
  {
  firebase.database().ref('university/').child(un).child("tel").set(tels);
  }
  else
  {
    firebase.database().ref('university/').child(un).child("college").child(di).child("fee").set(fees);
  }
  location.reload();
});
$('#reset').on('click', function(){
  location.reload()
});
