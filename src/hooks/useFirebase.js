import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault()
        console.log(email, password)
        if(password.length < 6){
            setError('Password must be 6 character long')
            return;
          }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            return user;
        })
        .catch(error => {
            setError(error.message)
        })
        
    }

    useEffect(()=>{
        const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
            else {
                setUser({})
            } 
          });
          return () => unsubscribed
    },[])
    return {
        user,
        error,
        logOut,
        signInUsingGoogle,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration
    }
}

export default useFirebase;