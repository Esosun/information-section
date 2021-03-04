// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAJqqvZ8A3OdWN_c2qZ8d6eFP3k3r_CJz8",
    authDomain: "light-s-project.firebaseapp.com",
    databaseURL: "https://light-s-project-default-rtdb.firebaseio.com/",
    projectId: "light-s-project",
    storageBucket: "light-s-project.appspot.com",
    messagingSenderId: "1070130977027",
    appId: "1:1070130977027:web:7c0bc4577c5e87d4c13136"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Ceapcom');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var gender = getInputVal('gender');
  var year = getInputVal('year');

  // Save message
  saveMessage(name, company, email, phone, message, gender, year);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message, gender, year){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    state:company,
    email:email,
    phone:phone,
    matric:message,
    gender:gender,
    year:year
  });
}






