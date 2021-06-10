/* The core Firebase JS SDK is always required and must be listed first */
src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"

/* TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries */
src="https://www.gstatic.com/firebasejs/8.6.5/firebase-analytics.js"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAjHPG86SO5MWEp12kvK9dYoulS3c6gDN8",
    authDomain: "assign-realestate-web-labscale.firebaseapp.com",
    databaseURL: "https://assign-realestate-web-labscale-default-rtdb.firebaseio.com",
    projectId: "assign-realestate-web-labscale",
    storageBucket: "assign-realestate-web-labscale.appspot.com",
    messagingSenderId: "65448495831",
    appId: "1:65448495831:web:74a3917173e26a1e26fe92",
    measurementId: "G-LLW3T0XT9H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();