import initFirebase from "../pages/user and auth/firebase auth/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const auth = getAuth();

    // email-pass register
    const register = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // successfully Signed in 
                const user = result.user;

            })
            .catch((error) => {
                // if any error come
                const errorMessage = error.message;
                setError(errorMessage)

            })
            .finally(() => setLoading(false));
    }

    // email-pass login
    const login = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setLoading(false));
    }

    // observe user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unSubscribe;
    }, [])

    // email-pass log out
    const logout = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
            .finally(() => setLoading(false));
    }

    return {
        user,
        error,
        register,
        login,
        logout,
        loading

    }


}

export default useFirebase;