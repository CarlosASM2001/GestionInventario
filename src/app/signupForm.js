import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { auth } from "./firebase.js";

const signupForm = document.querySelector('#register');

signupForm.addEventListener('submit', async (e) =>{
    e.preventDefault(); //no reinicia la pagina

    const userFirstName= signupForm['firstName'].value;
    const userLastName= signupForm['lastName'].value;
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;


    console.log(userFirstName);
    console.log(userLastName);
    console.log(email);
    console.log(password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password);  ///funciona como una promesa
        //console.log(userCredentials);


        alert("Usuario Registrado");

        document.getElementById("register").reset();

        
    } catch (error) {
        console.log(error);

        if(error.code === 'auth/invalid-email'){
            alert("Invalid Email");
        }else if(error.code === 'auth/weak-password'){
            alert("Weak Password");
        }else if(error.code === 'auth/email-already-in-use'){
            alert("Email Already in use");
        }else if(error.code){
            alert('Something went wrong');
        }

        document.getElementById("register").reset();

    }
    


})