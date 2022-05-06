

import { toast } from "react-toastify";
import firebase from "../../firebase"


export let createUser = (email, password) => {
  
    return async dispatch => {
        let userData = await firebase.auth().createUserWithEmailAndPassword(email,password);
        userData.user.sendEmailVerification();
        dispatch({
            type: "CREATE_USER",
            payload:userData
        })
   }
}

export let logIn = (email, password) => {
     
    return async dispatch => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(userData => {
                if (userData.user.emailVerified === true) {
                    if (userData) {
                        dispatch({
                            type: "LOGIN_USER",
                            payload: userData,
                        });
                        toast.success(`sucessfully ${email} has been logged in`);
                        window.location.assign("/Restaurant");
                    }
                }
            })
            .catch(err => {
                toast.error(err.message)
            })
    };
    
       
            
}           
        
        

export let PhoneNumber = (phone) => {
    return async dispatch => {
        let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
          "recaptcha-container"
        );
        let PhoneAuth = await firebase.auth().signInWithPhoneNumber(phone, recaptchaContainer);
         let code = window.prompt("enter otp");
        PhoneAuth.confirm(code);
        if (code.user.reauthenticateWithPhoneNumber) {
            dispatch({
                type: "Phone_Auth",
                payload: PhoneAuth,
            });
            
        }
    }
}

export let GoogleProvider = new firebase.auth.GoogleAuthProvider();
export let GoogleAuth = (provider) => {
    return async dispatch => {
           let DATA = await firebase.auth().signInWithPopup(provider);
        return DATA.user;
        if (DATA.user.emailVerified === true) {
            dispatch({
                type: "Google_Auth",
                payload: DATA,
            });
        }    }
}

export let ResetPassword = (email) =>{
    return async dispatch => {
        let resetData = await firebase.auth().sendPasswordResetEmail(email);
        dispatch({
            type: "PASSWORD",
            payload: resetData,
        })
    }
}