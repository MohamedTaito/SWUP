$(document).ready(function() {
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

  // on login submit
  $(document).on("click", ".login__submit", function(e) {

    // do some animations
   /*if (animating) return;
    animating = true;
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");*/


    // get input values
    var email = $('input[name="email"]').val();
    var password = $('input[name="password"]').val();

    // check if credentials are right
    firebase.database().ref().child("admins").once('value', function(snapshot) {
      var admins = snapshot.val();
      for (var i = 0; i < admins.length; i++) {
          if( email == admins[i].email){
            if( password == admins[i].password){
              // login
              window.location.href = "http://www.google.com/";
              return;
            }
          /*  else{
              console.log("wrong password");
           $(that).removeClass("processing");
              return;
              animating = false;
            }*/
          }
      }
      // Wrong Credentials
      console.log("wrong email or password");
      //$(that).removeClass("processing");
      //animating = false;
    });


  });
});
