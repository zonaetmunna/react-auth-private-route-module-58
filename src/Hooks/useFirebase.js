import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
     // state
     const [user, setUser] = useState({})
     const [error, setError] = useState('')
     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     const signusingGoogle = () => {
          console.log('clicked')
          signInWithPopup(auth, googleProvider)
               .then(result => {
                    setUser(result.user)
                    console.log(result.user)

               })
               .catch(error => {
                    setError(error.message)
               })
     }

     const logOut = () => {
          signOut(auth)
               .then(() => {
                    setUser('')
               })

     }

     useEffect(() => {
          onAuthStateChanged(auth, user => {
               if (user) {
                    setUser(user)
                    console.log('insiede state chage', user)
               }


          })
     }, [])

     return {
          user,
          error,
          signusingGoogle,
          logOut
     }

}

export default useFirebase;