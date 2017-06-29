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


firebase.database().ref("/university").once("value",function(snapshot){
  var university_name;
  var tel;
  var colleges;
  var fees;
  var deletes;
  // loop on universities
  for (var university in snapshot.val()) {
    if (snapshot.val().hasOwnProperty(university)) {
      university_name = university;
      // loop on contents of each university
      for (var value in snapshot.val()[university]) {
        if (snapshot.val()[university].hasOwnProperty(value)) {
          // Check if it's college data or telephone data
            if (value == "college"){
              {
                colleges = "";
                fees = "";
                deletes = "";
                // loop on colleges object
                for (var college in snapshot.val()[university][value]) {
                  if (snapshot.val()[university][value].hasOwnProperty(college)) {
                    // get college name
                    colleges += college + "<br>";
                    // get college fees
                    fees += snapshot.val()[university][value][college]["fee"] + "<br>";
                    // generate delete span with input containing college name
                    deletes += "<span class='delete'><input type='text' value= '" + college + "'class='hidden'/> Delete </span><br>";
                  }
                }
              }
            }
            else if(value == "tel"){
              tel = snapshot.val()[university][value];
            }
        }
      }
      // generate new row in table
      $('#uni_info tr:last').after("\
        <tr>\
          <td>" + university_name + "</td>\
          <td>" + tel + "</td>\
          <td>" + colleges + "</td>\
          <td>" + fees + "</td>\
          <td class='text-center'>" + deletes + "</td>\
          <td class='text-center'> <a href='edit.html'>Edit</a></td>\
        </tr>\
      ");
    }
  }
});
$('#uni_info').on('click', '.delete', function(){
  var university = $(this).parents('td').parents('tr').children('td:first').text();
  var college = $(this).children('input').val();
  firebase.database().ref('university/').child(university).child("college").child(college).remove();
  location.reload();
});
