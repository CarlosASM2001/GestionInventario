import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { auth } from "./firebase.js";

const signinForm = document.querySelector('#login');

signinForm.addEventListener('submit', async (e) =>{

    e.preventDefault(); //no reinicia la pagina
    const email = signinForm['signin-email'].value;
    const password = signinForm['signin-password'].value;


    console.log(email);
    console.log(password);

    try {
        const credentials = await signInWithEmailAndPassword(auth,email,password);

        console.log(credentials);

        
        window.location.href = './app/home.html';


    } catch (error) {
        console.log(error);


        if(error.code === 'auth/invalid-credential'){
            alert('User or password are wrong')
        }

    }

    
})