
import { initializeApp } from 'firebase/app'

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyAjm_i9nlfAuQpHcuEjFEOxpo6YdtQMJdU",
  
    authDomain: "crwn-clothing-db-e0dc5.firebaseapp.com",
  
    projectId: "crwn-clothing-db-e0dc5",
  
    storageBucket: "crwn-clothing-db-e0dc5.appspot.com",
  
    messagingSenderId: "608686098326",
  
    appId: "1:608686098326:web:fdc8fa9c32e760413f3fb7"
  
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
    
    return userDocRef;
  }