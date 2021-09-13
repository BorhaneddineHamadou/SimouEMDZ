import { getAuth, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA72K81BV71TPBMmCeb5x-T-cSqaKukO3E",
    authDomain: "simou-auth.firebaseapp.com",
    projectId: "simou-auth",
    storageBucket: "simou-auth.appspot.com",
    messagingSenderId: "321139610289",
    appId: "1:321139610289:web:1a9dd1a1bdde136d134890"
};

initializeApp(firebaseConfig);
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

onAuthStateChanged(auth, user => {
    if(user){
        localStorage.setItem('user', JSON.stringify(true));
        localStorage.setItem('userName', JSON.stringify(user.displayName));
        localStorage.setItem('userEmail', JSON.stringify(user.email));
        console.log('Hello Here');
    } else {
        console.log('Hello Here');
        localStorage.clear();
    }
})

export {auth, googleAuthProvider, facebookAuthProvider};