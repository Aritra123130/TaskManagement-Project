import {createContext,useState,useEffect} from 'react'

import { login,register } from './services/auth.api';

export const AuthContext  = createContext();

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [loading, setloading] = useState(false);

    function loginUser(email,password){
        setloading(true);
        try{
            const response  = login(email,password);
            setUser(response.user);
        }catch(err){
            console.log(err);
            throw err;
        }finally{
            setloading(false);
        }
    }

    function registerUser(username,email,password){
        setloading(true);
        try{
            const response  = register(username,email,password);
            setUser(response.user); 
        }catch(err){
            console.log(err);
            throw err;
        }finally{

            setloading(false);
        }
    }
    return(
        <AuthContext.Provider value={{user,loading,loginUser,registerUser}}>
            {children}
        </AuthContext.Provider>
    );

}