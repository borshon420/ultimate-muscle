import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [password, setPassword] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handleRegistration = e => {
        e.preventDefault()
        setIsLoading(true)
        console.log(email, password)
        if(password.length < 6){
            setError('Password must be 6 character long')
            return;
          }
        createUserWithEmailAndPassword(auth, email, password, name)
        .then(result => {
            const user = result.user
            console.log(user)
            updateName(name)
            return user;
        })
        .catch(error => {
            setError(error.message)
        })
        
    }

    const updateName = (name) => {
        setIsLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            setError(error.message)
          })
          .finally(()=>{setIsLoading(false)})
    }
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        .catch(error => {
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(()=> setIsLoading(false))
    }

    const handleNameChange = e => {
        setName(e.target.value)
      }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    
    

    

    
    

    useEffect(()=>{
        const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
            else {
                setUser({})
            } 
            setIsLoading(false)
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
        handleRegistration,
        name,
        handleNameChange,
        isLoading
       
    }
}

export default useFirebase;