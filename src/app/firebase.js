import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDF3MEe0klllp2Lp2ULJ7EfK53fXY86kIE",
    authDomain: "gestioninventario-cecf3.firebaseapp.com",
    databaseURL: "https://gestioninventario-cecf3-default-rtdb.firebaseio.com",
    projectId: "gestioninventario-cecf3",
    storageBucket: "gestioninventario-cecf3.appspot.com",
    messagingSenderId: "3228390341",
    appId: "1:3228390341:web:be10c8a18a2af9a59cb1ac",
    measurementId: "G-ZZ9875W505"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  //const analytics = getAnalytics(app);