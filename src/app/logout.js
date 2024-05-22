import { signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { auth } from "./firebase.js";



const logoutBtn = document.querySelector('#logout-btn');
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  signOut(auth).then(() => {
    // Sign-out successful.

    console.log('User signed out!');
    window.location.href = '../index.html';


  }).catch((error) => {
    // An error happened.
    console.log(error.code);
  });
  
})