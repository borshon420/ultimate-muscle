import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(email, password);
    if (password.length < 6) {
      setError("Password must be 6 character long");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((result) => {
        const user = result.user;
        updateName(name);
        return user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const updateName = (name) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const processLogin = () => {
    console.log(email);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(email);
        const user = result.user;

        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
    // .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      // setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
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
    processLogin,
    email,
    password,
    isLoading,
  };
};

export default useFirebase;
