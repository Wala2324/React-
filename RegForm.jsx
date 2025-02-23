import React from 'react'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios  from 'axios'
import { useAuth } from '../Context/authcontext'

const RegForm = () => {


  const {register} = useAuth()


  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    
    const [form, setForm] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
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


      const {error, success} = await register(form)

      if (error){
        setError(error)
      }
      if(successMsg){
        setSuccess(success)
      }

      const isValid = validate()
       
      if(isValid){
        setSuccessMsg ('Your registration is successful.')
        setErrMsg('')

      }
      else{
        setErrMsg('Fields can not be empty')
        setSuccessMsg('')
        return;
      
      }
    
    setIsSubmitting(true);
    try {

        const response = await axios.post('https://js2-ecommerce-api.vercel.app/api/auth/register', form);
            
              
        
          console.log(response.data)
          console.log(response.accesstoken)
          if( response.status === 201) {

        
          setSuccessMsg('Your registrstion is successful!');
          setErrMsg('');
          setForm({

            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
           });
          }

    } catch (err){
      console.error(err)
      setSuccessMsg('');

    }finally {
      setIsSubmitting(false);
  }
}
       
    // Validate

    const validate = () => {

      const errors = {};

        if (form.firstName.trim() === ''){
              errors.firstName= 'You need to enter your name';
            }
        
        else if (form.firstName.trim().length < 2 ){
              errors.firstName = 'Your name must be atleast 2 characters long';
            }

        if (form.lastName.trim() === ''){
             errors.lastName = 'You need to enter your last name';
            }
        
        else if (form.lastName.trim().length < 2 ){
              errors.lastName = 'Your last name must be atleast 2 characters long';
            }

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

        if (form.confirmPassword.trim() === "") {
              errors.confirmPassword = "You need to confirm your password.";
        }
        else if (form.password !== form.confirmPassword){
          errors.confirmPassword = 'The passwords do not much!'
        }

        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    
 } ;

  return (
    <div className='reg-container'>

      <form className='reg-form space y-1'  onSubmit={handleSubmit} >
        {errMsg && <p className="err">{error}</p>}
        {successMsg && <p className="success-message">{success}</p>}

      
      
            <p className='login-header'>Please Register Your new Account</p>
            
          <div className="reg-flex flex-contact">
           <div className="name">
            <label className='reg-form-label' htmlFor="firstName">First Name:</label>
            <input className='login-input'
            type="text" 
            id='firstName'
            name='firstName'
            value={form.firstName}
            onChange={handleChange}
            
            />
            {formErrors.firstName && <p className='reg-err'>{formErrors.firstName} </p>}
          </div>

            <div className="last-name">
             <label className='reg-form-label' htmlFor="lastName">Last Name:</label>
              <input className='login-input'
              type="text" 
              id='lastName'
              name='lastName'
              value={form.lastName}
              onChange={handleChange}
              />
              {formErrors.lastName && <p className='reg-err'>{formErrors.lastName} </p>}
            </div>
              
        </div>



       <label className='reg-form-label' htmlFor="email">Email</label>
        <input className='login-input'
         type="email" 
         id='email'
         name ='email'
         value={form.email}
         onChange={handleChange}
         
        /> 
         {formErrors.email && <p className='reg-err'>{formErrors.email} </p>}
         

        <label className='reg-form-label' htmlFor="password">Password</label>
        <input className='login-input'
         type="password" 
         id='password'
         name ='password'
         value={form.password}
         onChange={handleChange}
 
        /> 
        {formErrors.password && <p className='reg-err'>{formErrors.password} </p>}

        <label className='reg-form-label' htmlFor="confirmPassword">Confirm Password</label>
        <input className='login-input'
         type="password" 
         id='confirmPassword'
         name='confirmPassword'
         value={form.confirmPassword}
         onChange={handleChange}
        /> 
        {formErrors.confirmPassword && <p className='reg-err'>{formErrors.confirmPassword} </p>}

        
         <button className=' reg-btn submit-btn'>Register</button>
         
      </form>
    </div>
  )
  }

export default RegForm