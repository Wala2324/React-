import React from 'react'
import RegForm from '../../Components/RegForm'
import axios from 'axios'
import { Link } from 'react-router'
import LoginForm from '../../Components/LoginForm'


const LoginPage = () => {
  return (
    <div className='login'>
      <div className="login-content">
        <LoginForm/>

         <p className='reg-link'>Need an Account?
          <Link to='/register' >Create an account here</Link>
         </p>
      </div>
      
      
    </div>
  )
}

export default LoginPage