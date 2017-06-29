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
// Contact Form Scripts
            // get values from FORM
            $('#submit').on('click', function(){
              var name = document.getElementById('name');
              var firstName = name.value;
              var email = document.getElementById('email');
              var Email = email.value;
              var phone = document.getElementById('phone');
              var Mob = phone.value;
              var message = document.getElementById('message');
              var Mes = message.value;
              firebase.database().ref('contact/').child(firstName).child(Email).child(Mob).child("message").set(Mes);
              alert("message sent successfuly Please reload the page to continue");
            });
