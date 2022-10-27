import React,{createContext, useContext, useEffect, useState} from 'react'
import { auth } from "../firebase"
const AuthContext = createContext()
export function useAuth(){
    return useContext(AuthContext)
}
export  function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState() 
    
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
                setCurrentUser(user)
            })
        return unsubscribe
    },[])
   
    const value = {
        currentUser
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
