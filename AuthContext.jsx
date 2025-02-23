import React from 'react'
import{useEffect, useState,useContext, createContext } from 'react'
import axios from 'axios'



export const AuthContext = createContext() 

    const AuthContextProvider = ({children}) => {

    const [token, setToken] = useState(null)

    useEffect(() => {
        if(token) return

        const localToken = localStorage.getItem('accesstoken')
        
        if(localToken !==(null)) {
            setToken(localToken)
        }

    }, [])

    useEffect(() => {
       if (token) localStorage.setItem('accesstoken', token)

    },[token])


    const register = async(form) => {

        try{
            const res = await axios.post('https://js2-ecommerce-api.vercel.app/api/auth/register', form);
            console.log(res)
            console.log(data)

            if(res.status !== 201){
                throw new Error(data)
            }

            setToken(data.token)
            return{success: data.message}

        }catch(error){
            return   { error: error.message }

        }
    }

   const login = async(form) => {

        try{
            const res = await axios.post('https://js2-ecommerce-api.vercel.app/api/auth/login', form);
            console.log(res)
            console.log(data)

            if(res.status !== 200){
                throw new Error(data)
            }

            setToken(data.token)
            return{success: data.message}

        }catch(error){
            return   { error: error.message }

        }
    }
    const logout = () => {
        localStorage.removeItem('accesstoken')
        setToken(null)
     }


    const value = {
      token,
      register,
      login,
      logout
    }
  return (
    <AuthContext.Provider value={value}>
        ({ children})
    </AuthContext.Provider>
    
  )
}

export default AuthContextProvider

  export const  useAuth = () => {
     
    const context = useContext(AuthContext)
     
    if(!context)

        throw new Error ('useAuth must be in inside AuthContextProvider')
        return  context

     

    }
  