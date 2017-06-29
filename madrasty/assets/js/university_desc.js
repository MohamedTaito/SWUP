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

// get params in url

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var university = getUrlParameter('university');

// get data from firebase
firebase.database().ref("university").child(university).once("value",function(snapshot){
  var tel = "";
  var colleges = "";
  var fees = "";
  // loop on contents of university
  for (var value in snapshot.val()) {
    if (snapshot.val().hasOwnProperty(value)) {
      // Check if it's college data or telephone data
        if (value == "college"){
          {
            // loop on colleges object
            for (var college in snapshot.val()[value]) {
              if (snapshot.val()[value].hasOwnProperty(college)) {
                // get college name
                colleges += college + "<br>";
                // get college fees
                fees += snapshot.val()[value][college]["fee"] + "<br>";
              }
            }
          }
        }
        else if(value == "tel"){
          // get university telephone fees
          tel = snapshot.val()[value];
        }
    }
  }
  // generate new row in table
  $('#uni_info tr:last').after("\
    <tr>\
      <td>" + university + "</td>\
      <td>" + tel + "</td>\
      <td>" + colleges + "</td>\
      <td>" + fees + "</td>\
    </tr>\
  ");
});
