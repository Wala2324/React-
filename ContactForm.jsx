import React from 'react'
import { NavLink } from 'react-router'
import {useState} from 'react'
import axios from 'axios'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [formErrors, setFormErrors] = useState({})
    const [successMessage, setSuccessMessage] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [isSubmittng, setIsSubmitting] = useState(false);
    

    const isValidEmail = (email) =>{

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegex.test(email);
    }
    

    const handleChange = (e) => {
        setFormData(data => {
            return{
                ...data,
                [e.target.id]: e.target.value
            }
            
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
         
        if(!validate()){

            setErrMsg('All fields have to be filled before it is sent.');
            setSuccessMessage('')


            return
        }
        
       setIsSubmitting(true);
        try{
            const response =  await axios.post('https://js2-ecommerce-api.vercel.app/api/messages',{

                name: formData.name,
                email: formData.email,
                message: formData.message 
        
            });
            console.log(response.data)

            if( response.status === 200) {

              setSuccessMessage('Your message has been sent successfully!')
              setFormErrors({}); 
              setErrMsg('')
              setFormData({
                 name:'',
                 email: '',
                 message: ''
              });
            }
            
                
           } catch(error){
              
                console.error(error)
                setSuccessMessage('');
   
            }finally {
                setIsSubmitting(false);
            }
          
    }


    const validate = () => {

      const errors = {}

        if (formData.name.trim() === ''){
              errors.name = 'You need to enter your name';
            }
        
        else if (formData.name.trim().length < 2 ){
              errors.name = 'Your name must be atleast 2 characters long';
            }
        if (formData.email.trim() === ''){
             errors.email= 'You need to enter your email';
            }

       else if (!isValidEmail(formData.email.trim())){
             errors.email= 'Invalid email format';
            }
       
        if (formData.message.trim() === ''){
             errors.message= 'Please enter your comment';
           }


          setFormErrors(errors)

          return Object.keys(errors).length <= 0

 }

      
  return (

        <div className='contact-container'>
            <header className='product-detail-header'>
              <div className="shop-home">
                    <h1 className='shop'> CONTACT</h1>
                    <p className='home'>HOME. CONTACT </p>
               </div>
            </header>
            
            <div className='form-container'>
                <form  onSubmit={handleSubmit} className="contact-form">
                    <p className='form-header'>Write something</p>

                      <div  className='flex-contact'>
                        <div className='first-label'>
                            <div className='form-group'>
                                <label className='form-label' htmlFor="firstName">Your Name * </label>
                                <input className='form-input' value={formData.name} onChange={handleChange}type="text" id='name' />
                                {formErrors.name && <p className='error'>{formErrors.name}</p>}
                            </div>
                            <div className='form-group'>
                                <label className='form-label' htmlFor="email">Your Email *</label>
                                <input className='form-input'value={formData.email} onChange={handleChange} type="email" id='email' />
                                {formErrors.email && <p className='error'>{formErrors.email}</p>}
                            </div>
                        </div>
                        <div className="second-label">
                            <div className='form-group'>
                                <label className='form-label' htmlFor="phoneNumber">Phone Number</label>
                                <input className='form-input'value={formData.phoneNumber} onChange={handleChange} type="number" id='phoneNumber'/>
                                {formErrors.phoneNumber && <p className='error'>{formErrors.phoneNumber}</p>}
                            </div>
                            <div className='form-group'>
                                <label className='form-label' htmlFor="company">Company (optional)</label>
                                <input className='form-input'value={formData.company} onChange={handleChange} type="text" id='company'/>
                                {formErrors.company && <p className='error'>{formErrors.company}</p>}
                            </div>
                        </div>
                      </div>
                    <div className='form-group'>
                        <label className='message' htmlFor="message">Something write *</label>
                        <textarea className='form-input message-input'value={formData.message} onChange={handleChange} type="text" id='message' ></textarea>
                        {formErrors.message && <p className='error'>{formErrors.message}</p>}
                    </div>
                    <div className='check-box'>
                        <input  type="checkbox" id='checkBox'/>
                        <label className='checkbox-label' htmlFor="check-box">Save my name, email, and website in this browser for the next time I comment.</label> 
                    </div>
                    {successMessage && <p className='success-message'>{successMessage}</p>}
                    {errMsg && <p className='err'>{errMsg}</p>}

                    <button className='submit-btn'>Submit</button>
                </form>
            </div>
            <div className='contact-image-container'>
                <img className='gps-image'src="./public/assets/preview.jpg" alt="" />
            </div>
        </div>
  )
}

export default ContactForm