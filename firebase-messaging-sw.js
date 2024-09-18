importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
 apiKey: "AIzaSyCSAOSxgoch5jRhnzYhq7uBRfdhYFA4b9I",
   authDomain: "notificationbiller5.firebaseapp.com",
   projectId: "notificationbiller5",
   storageBucket: "notificationbiller5.appspot.com",
   messagingSenderId: "602423709993",
   appId: "1:602423709993:web:391f4b41d599eeef19a738",
   measurementId: "G-B6E2LY4XC8"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});