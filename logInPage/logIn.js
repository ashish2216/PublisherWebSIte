$(document).ready(function(){

    $("#signIn").click(function(){
        $(".user").removeClass("right-panel-active");
    });
    $("#signUp").click(function(){
        $(".user").addClass("right-panel-active");
    });
    
});

    //Firebase Database 

  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3oe8-IWNLTfZxCm87wQajODBMYMgS4NQ",
    authDomain: "sidhaarth-photography.firebaseapp.com",
    databaseURL: "https://sidhaarth-photography.firebaseio.com",
    projectId: "sidhaarth-photography",
    storageBucket: "sidhaarth-photography.appspot.com",
    messagingSenderId: "287365431753",
    appId: "1:287365431753:web:49f4af2c755b9164072818"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();

function signUp(){
    var email=document.getElementById("signup_email");
    var password=document.getElementById("signup_password");
    // var mobile=document.getElementById("signup_mobile_no.");

    const promise= auth.createUserWithEmailAndPassword(email.value, password.value);

    promise.catch((e)=> alert(e.message));

    alert("Signed up");
}

function signIn(){
    var email=document.getElementById("signin_email");
    var password=document.getElementById("signin_password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value)
                            .then(()=> { location.assign("shop.html"); } );
    
    promise.catch((e)=>alert(e.message));
}

function signOut(){
    auth.signOut();
    alert("Sign Out sucessful");

    location.assign("login.html");
}
