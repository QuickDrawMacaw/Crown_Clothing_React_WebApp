import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { 
    auth,
    createUserDocumentFromAuth, 
    signInWithGooglePopup,
    signInWithGoogleRedirect
 } from '../../../utils/firebase/firebase.utils';

import SignUpForm from '../../sign-up-form/sign-up-form.component';

const SignIn = () => {


    /*Note:
    Warning: useEffect must not return anything besides a function, which is used for clean-up. It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately
    */
    useEffect(() => {
        (async () => {
            const response = await getRedirectResult(auth);
            if(response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        })();
    }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser} >
                Sign In With Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect} >
                Sign In With Google Redirect
            </button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;