import { getActiveElement } from '@testing-library/user-event/dist/utils';
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'


const firebaseConfig = {

    apiKey: "AIzaSyAjm_i9nlfAuQpHcuEjFEOxpo6YdtQMJdU",
  
    authDomain: "crwn-clothing-db-e0dc5.firebaseapp.com",
  
    projectId: "crwn-clothing-db-e0dc5",
  
    storageBucket: "crwn-clothing-db-e0dc5.appspot.com",
  
    messagingSenderId: "608686098326",
  
    appId: "1:608686098326:web:fdc8fa9c32e760413f3fb7"
  
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);