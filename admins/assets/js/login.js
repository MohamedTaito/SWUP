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

  // initialize login form animations
  var animating = false,
      submitPhase1 = 1100,
      submitPhase2 = 400,
      $login = $(".login");

  function ripple(elem, e) {
    $(".ripple").remove();
    var elTop = elem.offset().top,
        elLeft = elem.offset().left,
        x = e.pageX - elLeft,
        y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({top: y, left: x});
    elem.append($ripple);
  };




          // Sign in existing user
$('#go').on('click', function(){
var auth = firebase.auth();
var email = document.getElementById('email');
var Email=email.value;
var password = document.getElementById('password');
var pass=password.value;
firebase.auth().signInWithEmailAndPassword(Email, pass).catch(function(error) {
  var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode != auth/pass){
   alert('Get the email or password right');
 } else {
   alert(errorMessage);
 }
})
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'dashboard.html';
  }
});
});
