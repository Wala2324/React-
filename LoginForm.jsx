import React from 'react'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios  from 'axios'
import { useAuth } from '../Context/authcontext'


const LoginForm = () => {

    const {login} = useAuth()
   
 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  

    const [form, setForm] = useState({
        email: '',
        password: ''
        
      })
      const [formErrors, setFormErrors] = useState({})


      const [errMsg, setErrMsg] = useState('');
      const [successMsg, setSuccessMsg] = useState(false);
      const [isSubmitting, setIsSubmitting] = useState(false);

      const [error, setError] = useState('')
      const [success, setSuccess] = useState('')


      const handleChange = (e) => {
        const{name, value} = e.target
 
       setForm(data => ({
 
         ...data,
 
         [name]: value,
 
       }));
              
     };
     
 
        const handleSubmit = async (e) => {
        e.preventDefault()

        const {error, success} = await login(form)

    
        const isValid = validate()
            
         if(isValid){
           setSuccessMsg ('Login successful.')
           setErrMsg('')
    
         }
        else{
            setErrMsg('Fields can not be empty')
            setSuccessMsg('')
            return;
        
         }
        
        setIsSubmitting(true);
        try {

            const response = await axios.post('https://js2-ecommerce-api.vercel.app/api/auth/login', form);
                
                  
              console.log(response.data)
              if( response.status === 200) {
    
            
              setSuccessMsg('You are logged in successfully!');
              setErrMsg('');
              setForm({
                email: '',
                password: '',
               });
              }
    
        } catch (err){
          console.log(err)
          setSuccessMsg('');
    
        }finally {
          setIsSubmitting(false);
      }
    }
    
     // Validate

      const validate = () => {

        const errors = {};

        if (form.email.trim() === ''){
            errors.email= 'You need to enter your email';
           }

       else if (!emailRegex.test(form.email.trim())){
            errors.email= 'Invalid email format';
           }
      

       if (form.password.trim() === ''){
             errors.password= 'You need to enter password';
            }
     
       else if (!passwordRegex.test(form.password.trim())){
             errors.password = 'Password must be 8-24 characters, must have one Upercase, one lower case.';
            }

            setFormErrors(errors);

            return Object.keys(errors).length === 0;
        
     };

  return (
   
    <div className='login-container'>

        <form className='login-form space y-1'  onSubmit={handleSubmit} >
          <p className='form-header login-header'>Please Login to Your Account</p>

          
          <div className="email-pass">
           <div className="email-part">
              {errMsg && <p className="err">{errMsg}</p>}
              {successMsg && <p className="success-message">{successMsg}</p>}
              <label className='login-form-label' htmlFor="email">Email:</label>
              <input className='login-input'
              type="email" 
              id='email'
              name ='email'
              value={form.email}
              onChange={handleChange}
              /> 
              {formErrors.email && <p className='reg-err'>{formErrors.email} </p>}
            </div>


            <div className="password-part">
              <label className='login-form-label' htmlFor="password">Password:</label>
              <input className='login-input'
              type="password" 
              id='password'
              name ='password'
              value={form.password}
              onChange={handleChange}
              /> 
              {formErrors.password && <p className='reg-err'>{formErrors.password} </p>}
            </div>
           </div>
            <div className='check-box'>
                  <input  type="checkbox" id='checkBox'/>
                  <label className='checkbox-label' htmlFor="check-box">Please keep me logged in.</label> 
            </div>

            <button className='login-btn submit-btn' >Log in</button>
         
      </form>


    </div>
  )
}

export default LoginForm