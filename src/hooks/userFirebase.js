import initFirebase from "../pages/user and auth/firebase auth/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initFirebase();
const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()


    // email-pass register
    const register = (email, password, name, profileUrl, location, navigate) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // successfully Signed in 
                // const user = result.user;
                const direction = location?.state?.from || '/home'
                navigate(direction)
                setError('')

                const newUser = { email, displayName: 'name' }
                setUser(newUser)

                // send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    // if any error come
                    const errorMessage = error.message;
                    setError(errorMessage)
                });

                // send user to saveUseToDatabase function it in below
                saveUserToDatabase(email, name, 'POST')


            })
            .catch((error) => {
                // if any error come
                const errorMessage = error.message;
                setError(errorMessage)

            })
            .finally(() => setLoading(false));
    }

    // email-pass login
    const login = (email, password, location, navigate) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                // const user = result.user;
                const direction = location?.state?.from || '/home'
                navigate(direction)
                setError('')

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setLoading(false));
    }


    // google sign in
    const signInWithGoogle = (location, navigate) => {

        setLoading(true)

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                const destination = location?.state?.from || '/home'
                navigate(destination)
                setError('')
                // saveUser(user.email, user.name, 'PUT')

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setLoading(false))

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
            setError('')
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
            .finally(() => setLoading(false));
    }

    const saveUserToDatabase = (email, name, method) => {
        const user = { email, name };

        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return {
        user,
        error,
        register,
        login,
        logout,
        signInWithGoogle,
        loading

    }


}

export default useFirebase;