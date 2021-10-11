import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseInitializer from '../Firebase/firebase.init'

firebaseInitializer()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
            })
            .catch(error => setError(error.message))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(err => setError(err.message))
    };

    return { user, error, signInUsingGoogle, logOut }
};

export default useFirebase;